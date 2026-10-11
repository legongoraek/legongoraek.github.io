# Estado del proyecto - legongoraek.github.io
_Ultima actualizacion: 2026-10-11 09:30_

## Hecho
- Todo commiteado y pusheado a origin/main (ultimo commit `1848504`; `git status -sb` sin diferencias con origin).
- Commit `2c3dcf9` (proyectos y timeline sincronizados con el CV):
  - Proyecto "RIS PACS AI" (https://medular-ai.vercel.app/): la tarjeta ES ya venia del remoto, del commit `7ce1017` del usuario ([index.html:241](index.html:241)). Se agrego la tarjeta EN con el mismo nombre ([en.html:568](en.html:568)). Se descarto una tarjeta "Medular AI" duplicada.
  - Proyecto nuevo "Connect to Analytics" en ES/EN ([index.html:254](index.html:254), [en.html:589](en.html:589)). Viene del CV; tiene sitio (https://connect-to-analytics-site.vercel.app) y repo (https://github.com/legongoraek/connect-to-analytics). Son 18 tarjetas por idioma.
  - Timeline en ES/EN ([index.html:278](index.html:278), [en.html:614](en.html:614)): Camtom (Software Engineer, jul 2026 - actualidad, sin bloque de impacto), Fidelyt freelance, Erbessd y Web/Integraciones (ahora "2021 - Diciembre 2025", segun los dos CVs). Se conservan ActiveCampaign, GestorVet y EasyBroker.
  - en.html: se corrigio HTML roto (faltaba cerrar `.project-cards` y habia `h2` y `.experience-cards` duplicados en Experience).
  - llms.txt: se agregaron Renta Lo Que Quieras, ProBike, RIS PACS AI y Connect to Analytics, y se corrigio la descripcion de Portfolio Assistant.
  - El rebase sobre el remoto tuvo un conflicto en el timeline de index.html; se resolvio con la version nueva. El widget compartido del chat (commit `611afcf`) quedo intacto.
- Commit `1848504`: se agregaron al timeline Field Engineer (Corporativo Marcha, dic 2018 - ene 2022, [index.html:351](index.html:351), [en.html:687](en.html:687)), Ingeniero de Practicas (jun-dic 2018) e Ingeniero Clinico / Servicio social ISSSTE (ene-jul 2018). Ninguno lleva bloque de impacto.
- Verificacion:
  - Balance de div por seccion correcto en los dos archivos y sin marcadores de conflicto.
  - ES revisado en navegador local (`python -m http.server`), tambien a 375px de ancho: 7 tarjetas de experiencia y sin scroll horizontal.
  - EN validado solo parseando el DOM; no se reviso visualmente.

- Los cambios que necesita el asistente (`data/profile.json` del repo portfolio-assistant) quedaron anotados en `D:\Proyectos\portfolio-assistant\.claude\ESTADO.md`, no aqui.

## En curso
- Nada.

## Pendiente
- Confirmar si el link de la tarjeta "Portfolio Assistant" debe ir a https://portfolio-assistant-six.vercel.app en vez del sitio Astro. El widget compartido ya se carga desde ese dominio; ver la etiqueta script al final de index.html y en.html.
- Opcional: revisar visualmente en.html (desktop y mobile).

## Decisiones y contexto
- Fuente para puestos, fechas y responsabilidades: los CVs del usuario en `Downloads\CV`. Para el timeline se usa `Luis_Enrique_Gongora_CV_Full_Stack_Con_Foto.pdf` (este portafolio es de desarrollo) y, para la experiencia de ingenieria, el lenguaje neutro de `Luis_Enrique_Gongora_Ek_CV.pdf` v2026.09.29.2.
- Sin enfasis biomedico (decision del usuario del 2026-09-29): se escribe "110 equipos criticos", "proyectos de campo" y "equipo especializado".
- No se inventan bloques de "Impacto" sin una fuente que los respalde.
- No se trae nada del repo D:\Proyectos\portfolio (sitio Astro) ni se anotan aqui sus pendientes (indicacion del usuario, 2026-10-11).
- Se respeta el formato de tarjeta existente (h3 + p + ul + project-links).
- El mensaje del commit `2c3dcf9` dice "Medular AI", pero el contenido usa "RIS PACS AI". No se reescribio porque ya estaba publicado.

## Siguiente paso concreto
- Preguntar al usuario por el link de la tarjeta Portfolio Assistant; si no hay nada mas, el proyecto queda al dia.
