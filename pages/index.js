import Head from 'next/head'
import React from 'react';
import styles from '../styles/Home.module.scss';
import { motion } from 'framer-motion';

export default function Home() {
  const [captionDisplay, setCaptionDisplay] = React.useState(false);
  const variants = {
    open: { opacity: 1, y: 0, height: 'auto' },
    closed: { opacity: 0, y: '-100%', height: 0 },
  }  
  return (
    <div className={styles.container}>
      <Head>
        <title>One More Developer's Portfolio</title>
        <meta name="description" content="This developer's portfolio is unlike any other portfolio, combining not just projects in the field of technology, but also design, visual art, and writing." />
        <meta name="keywords" content="code, coding, programming, design, python, study, html, css, js, javascript, react, language, art, writing, literature, author" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico"/>
      </Head>

      <main>
        <h1 className={styles.title}>
          One More <a href="https://github.com/akpekig" target="_blank" rel="noreferrer nofollow">Developer's</a> Portfolio
        </h1>
        <h2>Currently working at <a href="https://www.dev.ngo/" target="_blank" rel="noreferrer nofollow">The Developer Society</a></h2>
        
        <p className={styles.description}>
          <u><a href="/cv.pdf" download target="_blank">Here's my outdated CV.</a></u>
          {' '}If you truly want to assess my skills, you're better off looking through this site.
        </p>
        
        <div className={styles.planet_image}>
            <figure>
                <button title="Learn more about Venus" onClick={() => setCaptionDisplay(!captionDisplay)}>
                    <img 
                        src="https://i.gifer.com/7Ht5.gif"
                        width="auto"
                        height="160"
                        alt="Venus, planet of love. Interact with this image to learn more."
                    />
                </button>
                <motion.div
                    animate={captionDisplay ? "open" : "closed"}
                    variants={variants}
                  >
                    <figcaption className={captionDisplay ? styles.planet_caption :styles.planet_caption_closed}>
                    Venus is a terrestrial planet, alongside Mercury, Mars, and Earth. Therefore, it has no rings.
                    {' '}Additionally, alongside Mercury, Venus has no moons. Venus is the second largest planet in the Solar System
                    {' '}and my ruling planet. This is potentially why love is the most intense emotion I can experience.
                    </figcaption> 
                </motion.div>
            </figure>
        </div>

        <div className={styles.grid}>
          <button href="/projects" className={styles.card} disabled>
            <h3>Programming projects</h3>
            <p>See what I've made with code</p>
          </button>

          <button href="/art" className={styles.card} disabled>
            <h3>Visual Art</h3>
            <p>See what I've made with drawing tools and software</p>
          </button>

          <button
            href="/writing"
            className={styles.card}
            disabled
          >
            <h3>Literature</h3>
            <p>See what I've written</p>
          </button>

          <a
            href="/favourites"
            className={styles.card}
          >
            <h3>Favourites</h3>
            <p>
              See what I enjoy
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}