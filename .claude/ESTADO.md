# Estado del proyecto - legongoraek.github.io
_Ultima actualizacion: 2026-09-14 00:00_

## Hecho
- Sincronizado el contenido de las tarjetas "Renta Lo Que Quieras" y "Portfolio Assistant" con la info real mostrada en https://portafolio-astro-smoky.vercel.app/ (screenshots del usuario), en ES y EN.
  - [index.html:481-519](index.html:481) - tarjeta "Renta Lo Que Quieras": descripcion de marketplace P2P + stack (Next.js, TypeScript, Django, Django REST Framework, PostgreSQL, Supabase) + bullets de impacto (catalogo con busqueda/filtros, autenticacion y rutas privadas, flujo de reservas y panel de gestion).
  - [index.html:501-520](index.html:501) - tarjeta "Portfolio Assistant": descripcion de asistente conversacional serverless + stack (TypeScript, Vercel Functions, Anthropic Claude, OpenAI, Gemini) + bullets (backend TS/Vercel Functions, API reutilizable, seleccion de proveedor LLM por config, rate limiting y CORS).
  - Mismos cambios espejo en [en.html:482-521](en.html:482) (version en ingles).
- Se mantuvo la estructura de tarjeta existente del sitio (h3 + p + ul + project-links) porque este sitio (vanilla HTML/CSS) no tiene componente de badges de tecnologia como el que se ve en las screenshots del sitio Astro; se opto por incorporar el stack tecnico como bullets adicionales en la lista en vez de agregar un componente visual nuevo.
- No se modificaron los enlaces de las tarjetas (siguen apuntando a https://renta-lo-que-quieras.vercel.app/ y https://portafolio-astro-smoky.vercel.app/ respectivamente) porque no fue senalado como parte del error.

## En curso
- Nada a medias. El cambio de contenido quedo aplicado en ambos archivos (index.html y en.html) en el mismo turno.

## Pendiente
- Verificar visualmente en navegador (abrir index.html y en.html) que las tarjetas rendericen bien con las listas mas largas (5 bullets en Renta Lo Que Quieras, 4 en Portfolio Assistant) y que no rompan el layout en mobile.
- Confirmar con el usuario si el link de la tarjeta "Portfolio Assistant" deberia apuntar al repo/deploy propio del asistente (https://portfolio-assistant-six.vercel.app, ver [js/chatbot.js:6](js/chatbot.js:6)) en vez de al sitio Astro, o si el comportamiento actual (enlazar al sitio donde se prueba) es intencional.
- No se ha hecho commit de estos cambios (git status limpio al inicio de la sesion, cambios actuales sin commitear). Preguntar al usuario si quiere que se commitee.

## Decisiones y contexto
- El usuario aporto dos screenshots de portafolio-astro-smoky.vercel.app (version Astro del portafolio) mostrando tarjetas de proyecto con badges de categoria (Full Stack / AI-Backend), stack tecnico y checklist de "Impacto". Ese contenido no coincidia con lo que mostraba este repo (legongoraek.github.io, sitio HTML plano), que tenia descripciones genericas y desactualizadas para esos dos proyectos.
- Se decidio traducir el CONTENIDO (texto) al formato de tarjeta que ya usa este sitio, no clonar el componente visual de badges/checklist del sitio Astro, porque el pedido explicito fue "usar esta misma informacion" y "sincronizar" datos, no rediseñar el UI de las tarjetas. Si el usuario pide tambien igualar el diseno visual, se necesitaria un paso de diseno (frontend-design) aparte.

## Siguiente paso concreto
- Preguntar al usuario si quiere: (a) verificacion visual en navegador de los cambios, (b) ajustar el link de Portfolio Assistant, y/o (c) hacer commit de los cambios en index.html y en.html.
