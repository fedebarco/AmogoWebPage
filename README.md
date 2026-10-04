# Aflujo

## Inicio y rutas

El inicio (`/` y `/en`) muestra tres tarjetas: Taller de Alejo, Moldes y Software.
Los dos primeros enlaces llevan a sus subdominios. Software abre `/pdf` o
`/en/pdf`, donde se conserva la presentación anterior. Las rutas de privacidad
y subida de archivos mantienen sus direcciones.

## Requisitos y desarrollo

Astro 7.3.5 requiere **Node.js >=22.12.0** y **npm >=9.6.5**. Usar una versión
LTS de Node compatible también en el entorno de despliegue.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`package-lock.json` fija las dependencias transitivas compatibles. No se deben
actualizar las librerías internas de Astro mediante overrides independientes.

## Imágenes del inicio

El diseño actual utiliza `public/images/inicio-talleres.png`, el banner oscuro
proporcionado como referencia. Cada tarjeta muestra su panel mediante un
viewport SVG: en escritorio conserva la composición del banner y en móvil
los tres paneles se apilan como enlaces independientes.

Los recursos anteriores se conservan:

`public/images/taller-de-alejo.jpeg` conserva la referencia proporcionada.
`public/images/moldes.png` y `public/images/software.png` fueron creadas con
la herramienta integrada ImageGen. Los prompts se guardan en
`public/images/emblemas-prompts.md`.

---

# PDFtoText - Landing Page (documentación original)

This is the main landing page for PDFtoText, a macOS application designed to transform PDF files into editable text. The website showcases the application's features and provides essential information for users.

## 🚀 Features Highlighted

- Simple and fast PDF to text conversion
- Local processing (no data transmission)
- Privacy-focused design
- User-friendly interface

## 🛠️ Website Structure

The website includes:
- Main landing page with feature overview and demo video
- Privacy policy page explaining our no-data-collection approach
- Direct contact through email
- Links to source code and license information

## 💻 Tech Stack

This landing page is built with:
- [Astro](https://astro.build) - The web framework for content-driven websites
- Modern CSS with responsive design
- Optimized for performance and accessibility

## 🧞 Development Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 📝 Contact

For any inquiries about this landing page or the PDFtoText application, please contact:
- Email: fbarcoo@unal.edu.co

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
