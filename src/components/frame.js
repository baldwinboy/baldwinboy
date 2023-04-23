import * as React from 'react';
import Particles from 'react-tsparticles';
import resolveConfig from 'tailwindcss/resolveConfig';
import * as THREE from 'three';
import { loadFull } from 'tsparticles';

import tailwindConfig from '@root/tailwind.config.js';

import cv from './cv.pdf';
import venusTexture from './venus-texture.jpg';

const Navbar = () => {
  const links = [
    {
      text: 'CV',
      url: `${cv}`,
      filename: 'Gillian Akpeki',
    },
    {
      text: 'Portfolio',
      url: '/portfolio',
    },
    {
      text: 'Likes and values',
      url: '/likes-values',
    },
    {
      text: 'Favourite media',
      url: '/faves',
    },
    {
      text: 'Personal projects',
      url: '/projects',
    },
    {
      text: 'Contact',
      url: '/contact',
    },
  ];
  const currentPageClass = (page) => {
    return page === window.location.href
      ? 'text-gold'
      : 'hover:text-gold focus-visible:text-gold';
  };

  return (
    <nav
      className="col-span-full mt-12 sm:mt-0 sm:ml-3 sm:col-start-3 sm:col-end-4 text-plum text-xl text-right"
      aria-label="Primary"
    >
      <ul>
        {links.map((link, index) => (
          <li
            key={`link${index}`}
            className="mt-4 font-subheading uppercase duration-500"
          >
            {link.filename ? (
              <a
                href={link.url}
                className={currentPageClass(link.url)}
                aria-label={link.text}
                download={link.filename}
              >
                {link.text}
              </a>
            ) : (
              <a
                href={link.url}
                className={currentPageClass(link.url)}
                aria-label={link.text}
              >
                {link.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const PlanetFooter = () => {
  React.useEffect(() => {
    const planetEl = document.querySelector('#planet');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      20,
      planetEl.offsetWidth / planetEl.offsetHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      gammaInput: true,
      gammaOutput: true,
    });
    renderer.setSize(planetEl.offsetWidth, planetEl.offsetHeight);
    planetEl.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const texture = new THREE.TextureLoader().load(venusTexture);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: texture,
      shininess: 64,
    });
    const sphere = new THREE.Mesh(geometry, material);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);

    directionalLight.position.set(50, 50, 0);

    scene.add(ambientLight);
    scene.add(directionalLight);
    scene.add(sphere);

    camera.position.y = 0.75;
    camera.position.z = 2;

    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.0005;
      sphere.rotation.y += 0.0005;
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = planetEl.offsetWidth / planetEl.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(planetEl.offsetWidth, planetEl.offsetHeight);
    });
  }, []);

  return (
    <div className="fixed top-[66%] left-1/2 col-span-full w-screen h-96 mt-auto transform -translate-x-1/2 overflow-hidden z-0">
      <div
        id="planet"
        className="h-[32rem]"
        role="img"
        aria-label="The Planet Venus"
      ></div>
    </div>
  );
};

const Frame = (props) => {
  const tailwindStyles = resolveConfig(tailwindConfig);
  const particlesInit = React.useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = React.useCallback(async (container) => {
    await console.log(container);
  }, []);
  const particlesOpts = {
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
      },
    },
    particles: {
      color: { value: tailwindStyles.theme.colors.plum },
      links: {
        enable: false,
      },
      move: {
        attract: { enable: false },
        bounce: false,
        direction: 'top',
        enable: true,
        out_mode: 'out',
        random: false,
        speed: 1,
        straight: true,
      },
      number: { density: { enable: true, value_area: 800 }, value: 124 },
      opacity: {
        anim: { enable: false },
        random: true,
        value: 0.8,
      },
      shape: {
        type: 'edge',
      },
      size: {
        anim: { enable: false },
        random: true,
        value: 3,
      },
    },
    detectRetina: true,
  };
  return (
    <div className="relative w-screen h-screen bg-gradient-to-b from-blush to-blossom">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOpts}
      />
      <div className="relative grid sm:grid-cols-3 px-12 z-10">
        <header className="col-span-full -rotate-3 -skew-y-3 sm:scale-[2] my-32 mx-auto">
          <a href="/" className="font-bold select-none cursor-pointer">
            <h1 className="text-stroke-gold font-heading text-[2rem]/[0.675]">
              Web
              <br />
              Developer
            </h1>
            <h2 className="text-gold font-subheading text-4xl/[0.5] text-right">
              Gillian A
            </h2>
          </a>
        </header>
        <main className="col-span-full sm:col-start-1 sm:col-end-3 md:col-start-2 text-plum font-body text-xl">
          {props.children}
        </main>
        <Navbar />
      </div>
      <PlanetFooter />
    </div>
  );
};

export default Frame;
