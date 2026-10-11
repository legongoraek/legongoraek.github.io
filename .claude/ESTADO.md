# Estado del proyecto - legongoraek.github.io
_Ultima actualizacion: 2026-10-11_

## Hecho
- Sesion anterior (commit `a86aba8`, pusheado): tarjetas "Renta Lo Que Quieras" y "Portfolio Assistant" sincronizadas con el sitio Astro (https://portafolio-astro-smoky.vercel.app/).
- 2026-10-11: sincronizacion de proyectos y timeline con el sitio Astro y con el CV final del usuario (`Downloads\CV\Luis_Enrique_Gongora_Ek_CV.pdf` v2026.09.29.2 y `Luis_Enrique_Gongora_CV_Full_Stack_Con_Foto.pdf`).
  - Proyecto "RIS PACS AI" (https://medular-ai.vercel.app/): la tarjeta ES ya venia del remoto (commit 7ce1017, del usuario); se agrego la tarjeta EN con ese mismo nombre. Se descarto una tarjeta "Medular AI" duplicada.
  - Proyecto nuevo "Connect to Analytics" en ES/EN (del CV; sitio https://connect-to-analytics-site.vercel.app y repo GitHub). Total 18 tarjetas por idioma.
  - Timeline reescrito en ES/EN (index.html:278, en.html:614): Camtom (Software Engineer, jul 2026 - actualidad, nuevo), Fidelyt freelance, Erbessd y Web/Integraciones. Responsabilidades tomadas del CV Full Stack; impacto tomado de Astro. Camtom va sin bloque de impacto porque ninguna fuente lo tiene.
  - Web/Integraciones cambio de "Ene 2022 - Actualidad" a "2021 - Diciembre 2025" (asi lo dicen los dos CVs).
  - Se conservan ActiveCampaign, GestorVet y EasyBroker (el CV Full Stack los mantiene).
  - en.html: se corrigio HTML roto (faltaba cerrar `.project-cards` y habia `<h2>Experience</h2>` + `.experience-cards` duplicados).
  - llms.txt: se agregaron Renta Lo Que Quieras, ProBike, RIS PACS AI y Connect to Analytics, y se corrigio la descripcion de Portfolio Assistant.
  - Verificado: balance de div por seccion (projects 37/37, experiencia 8/8 en ambos archivos), render en navegador local (python http.server) de las tarjetas nuevas y el timeline en ES; EN validado parseando el DOM (18 tarjetas, 4 puestos, un solo h2).

- 2026-10-11 (2o commit): timeline ampliado en ES/EN con Field Engineer (Corporativo Marcha, dic 2018 - ene 2022), Ingeniero de Practicas (jun-dic 2018) e Ingeniero Clinico / Servicio social ISSSTE (ene-jul 2018). Fuente: CV Full Stack + CV de ingenieria, con lenguaje neutro sin enfasis biomedico ("110 equipos criticos", "proyectos de campo", "equipo especializado"). Sin bloque de impacto (no hay fuente). Verificado en mobile 375px: 7 tarjetas de experiencia y sin scroll horizontal (scrollWidth 375).

## En curso
- Nada a medias. Commit y push hechos (rebase sobre origin/main, conflicto del timeline resuelto con la version nueva).

## Pendiente
- Link de la tarjeta "Portfolio Assistant": sigue apuntando al sitio Astro; confirmar si deberia ir a https://portfolio-assistant-six.vercel.app (el widget compartido ya se carga desde ese dominio, ver la etiqueta script de portfolio-assistant-six al final de index.html y en.html).

## Decisiones y contexto
- Fuente para puestos, fechas y responsabilidades: el CV del usuario. Lo que pertenezca al repo D:\Proyectos\portfolio (sitio Astro) no se anota ni se trae aqui (indicacion del usuario, 2026-10-11).
- Para el timeline se usa la variante Full Stack del CV, no la de ingenieria, porque este portafolio es de desarrollo.
- Se respeta el formato de tarjeta existente (h3 + p + ul + project-links); no se clonaron los badges de Astro.

## Siguiente paso concreto
- Nada obligatorio. Queda abierto solo el link de la tarjeta Portfolio Assistant.
