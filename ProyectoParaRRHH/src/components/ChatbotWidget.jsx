import React, { useState, useRef, useEffect } from 'react';

// ── Config Groq ───────────────────────────────────────────────────────────────
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL   = 'llama-3.3-70b-versatile';

if (!API_KEY) console.error('⚠️ Falta VITE_GROQ_API_KEY en .env');

const SYSTEM_INSTRUCTION = `Eres un experto legal especializado ÚNICAMENTE en el "Ambiente Laboral" según el Código de Trabajo de la República de Costa Rica (Ley N° 2 y sus reformas vigentes).

Tu único tema permitido es el Ambiente Laboral, que incluye estrictamente:
- Condiciones dignas, higiénicas y seguras del lugar de trabajo
- Seguridad y salud ocupacional
- Acoso laboral (moral, psicológico y hostigamiento)
- Hostigamiento sexual en el trabajo
- Discriminación y violencia en el ambiente laboral
- Obligaciones del patrono de garantizar un ambiente de trabajo adecuado y libre de riesgos

Reglas estrictas e inquebrantables:
1. Solo respondes preguntas relacionadas directamente con el Ambiente Laboral regulado en el Código de Trabajo de Costa Rica.
2. NUNCA inventes, supongas, generalices ni agregues información que no esté expresamente en el Código. Si el tema no está regulado de forma específica, debes responder: "Esta situación no se encuentra regulada de manera detallada en el Código de Trabajo de Costa Rica".
3. Siempre cita el artículo o artículos correspondientes cuando sea posible.
4. Si la pregunta NO está relacionada con el Ambiente Laboral según el Código de Trabajo, responde exactamente: "Solo puedo responder consultas relacionadas con el Ambiente Laboral de acuerdo al Código de Trabajo de Costa Rica. ¿Tienes alguna duda sobre este tema?"
5. Responde siempre en español, de forma profesional, clara, precisa y objetiva.
6. Recuerda que no proporcionas asesoría legal personalizada y que para casos concretos se debe consultar con un abogado o el Ministerio de Trabajo.`;

// ── Función que llama a Groq (OpenAI compatible) ──────────────────────────────
async function callGroq(history, userMessage) {
  // Convertir historial Gemini-style → formato OpenAI
  const messages = [
    { role: 'system', content: SYSTEM_INSTRUCTION },
    ...history.map((msg) => ({
      role: msg.role === 'model' ? 'assistant' : 'user',
      content: msg.parts?.[0]?.text || msg.text || '',
    })),
    { role: 'user', content: userMessage },
  ];

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      max_tokens: 700,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    const msg = err?.error?.message || `HTTP ${response.status}`;

    if (!API_KEY || response.status === 401) {
      throw new Error('API key de Groq inválida. Verifica tu .env');
    }
    if (msg.toLowerCase().includes('quota') || response.status === 429) {
      throw new Error('Se agotó la cuota de Groq. Verifica tu plan o usa otra API key.');
    }
    throw new Error(msg);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || 'Sin respuesta.';
}

// ── Componente Widget Flotante ────────────────────────────────────────────────
export default function ChatbotWidget() {
  const [open,      setOpen]      = useState(false);
  const [messages,  setMessages]  = useState([
    { role: 'bot', text: '¡Hola! Soy tu asistente especializado en el Ambiente Laboral según el Código de Trabajo de Costa Rica 👋\n¿En qué puedo ayudarte?' }
  ]);
  const [history,   setHistory]   = useState([]);
  const [input,     setInput]     = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unread,    setUnread]    = useState(1);

  const messagesEndRef = useRef(null);
  const inputRef       = useRef(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, open]);

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const botText = await callGroq(history, userText);

      setHistory(prev => [
        ...prev,
        { role: 'user',  parts: [{ text: userText }] },
        { role: 'model', parts: [{ text: botText   }] },
      ]);
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
      if (!open) setUnread(u => u + 1);
    } catch (err) {
      console.error('Groq widget error:', err);
      setMessages(prev => [...prev, {
        role: 'bot',
        text: `⚠️ ${err.message}`,
        isError: true,
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const formatText = (text) =>
    text.split('\n').map((line, i, arr) => (
      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
    ));

  return (
    <>
      {/* Panel flotante */}
      <div className={`cw-panel ${open ? 'cw-panel--open' : ''}`} role="dialog" aria-label="Chat de RRHH">

        {/* Header */}
        <div className="cw-header">
          <div className="cw-header-info">
            <div className="cw-avatar">🤖</div>
            <div>
              <p className="cw-title">Asistente RRHH</p>
              <p className="cw-subtitle"><span className="status-dot"></span> Llama 3.3 70B • Groq</p>
            </div>
          </div>
          <button className="cw-close-btn" onClick={() => setOpen(false)} aria-label="Cerrar chat">✕</button>
        </div>

        {/* Mensajes */}
        <div className="cw-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`cw-bubble ${msg.role === 'bot' ? 'cw-bubble--bot' : 'cw-bubble--user'} ${msg.isError ? 'bubble-error' : ''}`}>
              {formatText(msg.text)}
            </div>
          ))}
          {isLoading && (
            <div className="cw-bubble cw-bubble--bot typing-indicator">
              <span></span><span></span><span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="cw-input-bar">
          <input
            ref={inputRef}
            id="cw-input"
            type="text"
            className="cw-input"
            placeholder="Escribe tu pregunta..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            autoComplete="off"
          />
          <button
            className="btn-send"
            onClick={() => sendMessage()}
            disabled={isLoading || !input.trim()}
            aria-label="Enviar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Botón flotante FAB */}
      <button
        id="chatbot-fab"
        className={`cw-fab ${open ? 'cw-fab--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Abrir asistente de RRHH"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
        {!open && unread > 0 && (
          <span className="cw-badge">{unread}</span>
        )}
      </button>
    </>
  );
}
