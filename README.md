# English Aprendo

Aplicación web progresiva (PWA) para aprender inglés mediante spelling, pronunciación, vocabulario y práctica guiada.

## Primera versión
- Interfaz adaptable a computadora y teléfono.
- Navegación por módulos.
- Manifiesto PWA e iconos.
- Service worker con caché inicial para recursos estáticos.
- Contador de interacciones local en el navegador.

## Publicación en GitHub Pages
1. Abre **Settings** del repositorio.
2. Entra en **Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda y espera a que GitHub publique el sitio.

## Importante
Esta es una maqueta funcional de interfaz. El botón de cuenta es demostrativo: todavía no hay autenticación real, base de datos, pagos ni evaluación de pronunciación. No introducir contraseñas ni información sensible en esta versión.

El modo sin conexión almacena los archivos principales de la interfaz. Las funciones que dependan de servicios externos necesitarán internet.

## Próximas etapas
1. Revisar diseño y navegación.
2. Adaptar el banco de palabras del proyecto Spelling Bee original.
3. Integrar autenticación y base de datos con políticas de acceso seguras.
4. Añadir evaluación de pronunciación y tutor IA mediante un backend.
5. Automatizar los paquetes Android y Windows.
