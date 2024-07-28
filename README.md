# Training App

<img alt="TypeScript" src="https://ziadoua.github.io/m3-Markdown-Badges/badges/TypeScript/typescript2.svg"/>  <img alt="Next.js" src="https://ziadoua.github.io/m3-Markdown-Badges/badges/NextJS/nextjs2.svg"/><img alt="Vercel" src="https://ziadoua.github.io/m3-Markdown-Badges/badges/Vercel/vercel2.svg"/><img alt="PostgresSql" src="https://ziadoua.github.io/m3-Markdown-Badges/badges/PostgreSQL/postgresql1.svg"/><img alt="Tailwind" src="https://ziadoua.github.io/m3-Markdown-Badges/badges/TailwindCSS/tailwindcss2.svg"/>

# Table of Contents
- [Description](#Description)
- [Deployments](#Deployments)
- [Features](#Features)
  - [Current Features](#Current-Features) 
  - [Coming Soon](#Coming-Soon) 
- [Necessary Subscriptions](#Necessary-Subscriptions)
- [Cloning](#Cloning)
- [Setup](#Setup)
- [Start Up](#Start-Up)
- [Usage](#Usage)

# Description
This is a full stack application utilizing Next.js, Typescript, Postgres and Vercel's sdk for Postgres. We will also incorporate Ui elements from Shadcn-Ui and utilize tailwind for css and well.Employees once approved in the admin battle will be allowed to complete four days of training and obtain a completion certificate. In the admin panel there will also be ui elements to help with the tracking of users completion throughout the course.

# Features
## Current Features
1. 

## Coming Soon
1. Ability to view and complete training material
2. Admin panel
3. Ability to track users completion status
4. Ability to add and change training material
5. Ability to add imagery to questions

# Necessary Subscriptions
1. Serverless PostgreSQL DB with Vercel. [https://vercel.com/](https://vercel.com/)
2. Work OS Account. [https://workos.com/](https://workos.com/)

# Cloning
1. Clone repository run this command: 
```bash
git clone https://github.com/k-patel1/trainingapp.git
```

# Setup
After cloning run: 
```Bash
cd trainingapp
```

Once you are inside of the project directory you will have to run a few commands from the root directory to set the project up.
The commands are:
1. Install dependencies:
```Bash
npm i
```

2. Set up .env.local with Vercel Postgres, Work OS and Geoapify info:
```env
# Created by Vercel CLI
NX_DAEMON=""
POSTGRES_DATABASE=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_URL_NO_SSL=""
POSTGRES_USER="default"
TURBO_REMOTE_ONLY=""
TURBO_RUN_SUMMARY=""
VERCEL=""

# Needed for authkit-nextjs library example, must defined in WorkOS dashboard to work.
WORKOS_REDIRECT_URI="http://localhost:3000/auth/callback"
# This will change when you have a domain name, remember to updated this address in your Work Os dashboard

# Needed for authkit-nextjs library example. Must be at least 32 characters long
WORKOS_COOKIE_PASSWORD=""

WORKOS_CLIENT_ID=""
WORKOS_API_KEY=""

```

It might be easiest to associate your fork with your Vercel Postgres database with your project and add these 5 variables to your Vercel projects .env and then use the Vercel Cli to pull the env, making hosting later much easier.

> **Note**
> This project was meant to be used with a Vercel Postgres database, Work os Auth Kit and I use the Vercel Sdk to communicate with the database.

3. If you want to run it in development run:
```Bash
npm run dev
```

Other words we have to build the project, which is easily done by running:
```Bash
npm run build
```

# Start up
Project can be easily started from the root by running:
```Bash
npm run start
```

# Usage
Then you can go to:
```Bash
http://localhost:3000
```



