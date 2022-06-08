import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import favicon from "@variant/profile/lib/logo/favicon.png";

export default function Home() {
  const [{ x, y, scale }, setSettings] = useState(generate);

  useEffect(() => {
    setSettings(generate);
  }, []);

  useEffect(() => {
    const comment = document.createComment(
      `
Ah, yes. This is totally unnecessary to run inside a Next.js
application, even if it is staticly exported. Even worse, you know what?
This HTML comment is added through an useEffect as JSX doesn't support
HTML Comments. What a world we live in, ey? It was the quickest
way to just schaffold something and import standard favicon, so get off my
case ok?!

Anyways, they say you need to know the rules to break the rules.
If you too want too want to know the rules, check out https://www.variant.no/jobs
`
    );
    document.head.prepend(comment);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Variant Rocks!</title>
        <link rel="icon" href={favicon.src} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@variant_as" />
        <meta property="og:title" content="Variant Rocks!" key="og:title" />
        <meta
          property="og:description"
          content="See your unique Variant logo. Just like a NFT, only infinitely better for you and the environment. Only exists in the now so take it in."
          key="og:description"
        />
        <meta
          name="description"
          content="See your unique Variant logo. Just like a NFT, only infinitely better for you and the environment. Only exists in the now so take it in."
          key="description"
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className={styles.main}>
        <h1 style={{ "--x": `${x}%`, "--y": `${y}%`, "--scale": `${scale}%` }}>
          <span>variant</span>
        </h1>
      </main>
    </div>
  );
}

function generate() {
  return {
    x: random(0, 100),
    y: random(0, 100),
    scale: random(800, 1000),
  };
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
