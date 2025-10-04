This is just a fun project I was trying to calculate KRA taxes using their updated prices

---

```markdown
# 🚀 Next.js + TypeScript Project

A modern web application built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/), following best practices for performance, scalability, and maintainability.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📖 Overview

This project leverages the **Next.js App Router** and **TypeScript** to deliver a performant, SEO-friendly, and developer-efficient frontend.  
It uses **Tailwind CSS** for styling, **ESLint** and **Prettier** for code consistency, and supports modern workflows like API routes, dynamic imports, and static generation.

---

## 🧩 Features

- ⚡️ **Next.js 15+ App Router**
- 🔒 **Type-safe development** with TypeScript  
- 🎨 **Tailwind CSS** for rapid styling  
- 🌐 **API routes** for backend functionality  
- 📦 **Reusable UI components**  
- 🔍 **SEO-ready** with metadata and OpenGraph  
- 🧱 **Environment variables** via `.env`  
- 🧪 **Testing setup** *(optional)*  
- 🧰 **ESLint + Prettier** configured  

---

## 📁 Project Structure

```

src/
├── app/                # App router pages and layouts
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and API clients
├── styles/             # Global and component-level styles
├── types/              # TypeScript type definitions
└── config/             # Config files (env, constants, etc.)

````

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
````

### 2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Run the development server

```bash
pnpm dev
# or
npm run dev
```

Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXTAUTH_SECRET=your_secret_key
```

---

## 🏗️ Build and Deploy

### Build for production

```bash
pnpm build
# or
npm run build
```

### Start production server

```bash
pnpm start
# or
npm run start
```

### Deploy to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/).
Push your code to GitHub — Vercel will detect and deploy automatically.

---

## 🧹 Code Quality

```bash
# Lint code
pnpm lint

# Format code
pnpm format
```

---

## 🧠 Tech Stack

* **Framework:** [Next.js](https://nextjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Package Manager:** pnpm / npm / yarn
* **Deployment:** [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)

---

## 💡 Available Scripts

| Command  | Description                      |
| -------- | -------------------------------- |
| `dev`    | Start development server         |
| `build`  | Build production-ready app       |
| `start`  | Start production server          |
| `lint`   | Run ESLint                       |
| `format` | Run Prettier                     |
| `test`   | Run unit tests *(if configured)* |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a pull request or issue.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

---

## 🌟 Acknowledgements

* [Next.js Documentation](https://nextjs.org/docs)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/)
* [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

> Crafted with ❤️ using Next.js and TypeScript.

```
