# Sample TODO App
A simple TODO App built using Next.js

## How to build
This app using npx command, please install it.

First, Setup Github Apps for Auth
1. Go to Developer Settings on GitHub.
2. Click on "New GitHub App"
3. Name your GitHub App. In my example, "sample todo app (local"
4. Add your homepage URL
5. For the "Callback URL" field, put http://localhost:3000
6. If the "Active" field under "Webhook" is checked, uncheck it. Now, click on "Create Github App"
7. Once your app is created, you should see the following screen. Click on "Generate a new client secret"
8. Copy the client secret you generated and paste it under the GITHUB_SECRET value in your .env file
9. Copy the Client ID and paste it under the GITHUB_ID value in your .env file

Second, install other library
```bash
npm install
```

in local using SQLite, run the migrate command
```bash
npx prisma migrate dev
```

run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel
in preparation
