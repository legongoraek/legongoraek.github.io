(function () {
  'use strict';

  // Servicio compartido: github.com/legongoraek/portfolio-assistant.
  // Actualiza esta URL si el proyecto se despliega con otro dominio en Vercel.
  var CHAT_API_URL = 'https://portfolio-assistant.vercel.app/api/chat';

  var texts = {
    es: {
      openLabel: 'Abrir chat',
      title: 'Pregúntame sobre mi trabajo',
      subtitle: 'Respuestas generadas con IA sobre mi experiencia y proyectos',
      placeholder: 'Ej: ¿Qué experiencia tiene con Django?',
      greeting:
        'Hola 👋 Soy el asistente de este portafolio. Pregúntame sobre la experiencia, proyectos o stack técnico de Luis Enrique.',
      genericError: 'Ocurrió un error, intenta de nuevo.',
      connectionError: 'No se pudo conectar con el chat. Intenta de nuevo.',
    },
    en: {
      openLabel: 'Open chat',
      title: 'Ask me about my work',
      subtitle: 'AI-generated answers about my experience and projects',
      placeholder: 'E.g: What experience do you have with Django?',
      greeting:
        "Hi 👋 I'm this portfolio's assistant. Ask me about Luis Enrique's experience, projects or tech stack.",
      genericError: 'Something went wrong, please try again.',
      connectionError: 'Could not connect to the chat. Please try again.',
    },
  };

  var lang = document.documentElement.lang === 'en' ? 'en' : 'es';
  var t = texts[lang];

  var root = document.createElement('div');
  root.id = 'chatbot-root';
  root.innerHTML =
    '<button id="chatbot-toggle" type="button" aria-expanded="false" aria-controls="chatbot-panel" aria-label="' +
    t.openLabel +
    '">' +
    '<svg id="chatbot-icon-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>' +
    '<svg id="chatbot-icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><path d="M18 6 6 18M6 6l12 12"></path></svg>' +
    '</button>' +
    '<section id="chatbot-panel" role="dialog" aria-modal="false" aria-label="' +
    t.title +
    '" hidden>' +
    '<header id="chatbot-header"><div><strong>' +
    t.title +
    '</strong><span>' +
    t.subtitle +
    '</span></div></header>' +
    '<div id="chatbot-messages" aria-live="polite"></div>' +
    '<form id="chatbot-form" autocomplete="off">' +
    '<input id="chatbot-input" type="text" name="message" maxlength="500" placeholder="' +
    t.placeholder +
    '" aria-label="' +
    t.placeholder +
    '">' +
    '<button type="submit" aria-label="Send"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg></button>' +
    '</form>' +
    '</section>';

  document.body.appendChild(root);

  var toggle = document.getElementById('chatbot-toggle');
  var panel = document.getElementById('chatbot-panel');
  var iconOpen = document.getElementById('chatbot-icon-open');
  var iconClose = document.getElementById('chatbot-icon-close');
  var messagesEl = document.getElementById('chatbot-messages');
  var form = document.getElementById('chatbot-form');
  var input = document.getElementById('chatbot-input');

  var history = [];
  var isOpen = false;
  var isSending = false;

  function setOpen(next) {
    isOpen = next;
    panel.hidden = !isOpen;
    toggle.setAttribute('aria-expanded', String(isOpen));
    iconOpen.style.display = isOpen ? 'none' : '';
    iconClose.style.display = isOpen ? '' : 'none';
    if (isOpen) {
      input.focus();
      if (history.length === 0) {
        appendMessage('assistant', t.greeting);
      }
    }
  }

  function appendMessage(role, content) {
    var bubble = document.createElement('div');
    bubble.className = 'chatbot-msg ' + role;
    bubble.textContent = content;
    messagesEl.appendChild(bubble);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen);
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var text = input.value.trim();
    if (!text || isSending) return;

    appendMessage('user', text);
    history.push({ role: 'user', content: text });
    input.value = '';
    isSending = true;
    var submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    fetch(CHAT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history }),
    })
      .then(function (res) {
        return res.json().then(function (data) {
          return { ok: res.ok, data: data };
        });
      })
      .then(function (result) {
        if (!result.ok) {
          appendMessage('error', (result.data && result.data.error) || t.genericError);
          history.pop();
          return;
        }
        var reply = (result.data && result.data.reply) || '...';
        appendMessage('assistant', reply);
        history.push({ role: 'assistant', content: reply });
      })
      .catch(function () {
        appendMessage('error', t.connectionError);
        history.pop();
      })
      .finally(function () {
        isSending = false;
        if (submitBtn) submitBtn.disabled = false;
      });
  });
})();
