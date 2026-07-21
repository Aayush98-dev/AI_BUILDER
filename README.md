# 🤖 AI-BUILDER - AI Based Website Generator

AI Builder is a Full stack Ai based website generator built using the PERN Stack(using Typescript). It allows users to login into our account and write the prompt in chatbox and AI API will generate the website while admins can access our projects and save it into our own desktop and it can also edit through our recommendations.

# 📌 Features
### 🧑‍💻 User Features

Create our project with just giving the command to the AI and AI will generate the webpage project.

View our Generated projects and save it and also preview in a new webpage.

All process will happen when u have credits to generate website only otherwise u will have to buy the credits 

User Authentication 

# 🏗️ Tech Stack
## Frontend (client/)

React.js (Vite)

Tailwind CSS 

## Backend (server/)

Typescript

Express.js

Neon Database

Prisma (For Authentication)

# 📁 Project Structure
```
AI_BUILDER/
│
├── client/                         # Frontend (Vite + TypeScript)
│   ├── public/                     # Static assets
│   │   └── favicon.svg
│   │
│   ├── src/                        # Main source code
│   │
│   ├── .env                        # Environment variables
│   ├── .gitignore
│   ├── components.json             # UI components configuration
│   ├── eslint.config.js            # ESLint configuration
│   ├── index.html                  # App entry HTML
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.app.json           # TypeScript (App)
│   ├── tsconfig.json
│   ├── tsconfig.node.json          # TypeScript (Node)
│   └── vite.config.ts              # Vite configuration
│
├── server/                         # Backend (Node.js + TypeScript)
│   ├── configs/                    # Configuration files
│   ├── controllers/                # Route controllers
│   ├── generated/                  # Auto-generated files
│   ├── lib/                        # Utility libraries
│   ├── middleware/                 # Express middleware
│   ├── prisma/                     # Prisma schema & migrations
│   ├── routes/                     # API route definitions
│   ├── types/                      # TypeScript type definitions
│   │
│   ├── .env                        # Server environment variables
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── prisma.config.ts            # Prisma configuration
│   └── server.ts                   # Application entry point
│
└── README.md
```
## ⚙️ Installation & Setup
### 1️⃣ Clone the repository
```
git clone <your-repo-link>
cd carLelo
```
### 2️⃣ Setup Frontend
```
cd client
npm install
npm run dev
```

### 3️⃣ Setup Backend
```
cd server
npm install
npm run start
```

## ScreenShots
### Front Page
![Front Page](client/src/screenshots/Screenshot%202026-02-26%20200602.png)
### Project Generation with AI
![Project Generation](client/src/screenshots/Screenshot%202026-02-26%20200940.png)
![Project](client/src/screenshots/Screenshot%202026-02-26%20200952.png)
![](client/src/screenshots/Screenshot%202026-02-26%20201830.png)
### Preview in a new Webpage
![](client/src/screenshots/Screenshot%202026-02-26%20201910.png)
![](client/src/screenshots/Screenshot%202026-02-26%20201933.png)
### My Project (where our project are saved)
![](client/src/screenshots/Screenshot%202026-02-26%20202016.png)
### Purchase Credits (where i can use Stripe Payment Gateway)
![](client/src/screenshots/Screenshot%202026-02-26%20202035.png)
![](client/src/screenshots/Screenshot%202026-02-26%20204740.png)

## Live Demo : https://ai-builder-steel.vercel.app/

## 🧾 License

This project is licensed under the MIT License.
