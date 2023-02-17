# <a href="https://www.loom.com/share/b29a715be51a4d0f932a3f0c45f0f4be">Showcase</a>
# This is mainly about the products slider component,...
but there's also a heroBanner one above so it is not so lonely lol, Products slider is a component I developed because there are to my knowledge not really actually good looking products components for ecommerce, especially not with tailwind which to me seems like the right way to move forward in frontend. Few animations are coded with custom scss, but most of the UI is done with tailwind. I made it a slider only on lg: size which is 1024px, basically desktop one, on smaller size (phone and tablet) the products are stacked below each other, which from my opinion looks really good on the phone. Also sanity is used so products can be dynamically added.
<br/>
<br/>
If you wanna use the components go to product.tsx and heroBanner.tsx in components folder and product.ts and heroBanner.ts in sanity folder.
If u wanna do it without sanity that's simple, u just take the components only and change a bit of html under 1 minute, but if u wanna actually develop ecommerce store it would be wiser to use sanity or some different opensource way of developing admin bcuz u dont want to hardcode each product (imagine u have 1000 products uh)
<br/>
<br/>
# npms (and npxs)
npx create-next-app@latest
npm i sass
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install -g @sanity/client
npm install --save @sanity/image-url
npm install @stripe/stripe-js
npm install --save canvas-confetti
npm install --save next-sanity-image
npm install react-hot-toast
npm install react-icons --save
npm install -g @sanity/cli
npm create sanity@latest -- --coupon javascriptmastery2022
npm install --save-dev @babel/preset-react
npm i --save-dev @types/react-slick
npm install slick-carousel
<br/>
<br/>
# Tailwind classes extensions
extend: {
      height: {
        '112': '28rem',
        '192': '48rem',
        '144': '36rem',
      },
      fontSize: {
        '10xl': '10rem',
      }
    },
<br/>
<br/>
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
