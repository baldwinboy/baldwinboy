import * as React from 'react';
import Carousel from 'nuka-carousel';
import Frame from '@components/frame';
import discoElysium from './disco-elysium.png';

const MediaArticle = ({ item, index }) => {
  return (
    <article
      key={`media${index}`}
      className="relative max-w-[70vw]"
      aria-describedby={`mediaDesc${index}`}
    >
      <h3 className="text-2xl mb-4">{item.title}</h3>
      {item.srcType == 'image' && (
        <img
          src={item.src}
          className="w-full"
          width="560"
          height="315"
          alt=""
        />
      )}
      {item.srcType == 'youtube' && (
        <iframe
          className="w-full"
          width="560"
          height="315"
          src={item.src}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      )}
      {item.srcType == 'spotify' && (
        <iframe
          className="w-full"
          style={{ borderRadius: 12 }}
          src={item.src}
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}
      <p
        id={`mediaDesc${index}`}
        className="relative mt-4 p-8 bg-plum text-blush"
      >
        {item.desc}
      </p>
    </article>
  );
};
const FavouriteMedia = () => {
  const items = [
    {
      title: 'Disco Elysium',
      desc: `Arguably the best game I've played, Disco Elysium captures a lonely soul a lonely town with as much hope as it has hopelessness.
      A timeless reflection of being any time of employee in a late capitalist landscape.`,
      src: discoElysium,
      srcType: 'image',
    },
    {
      title: 'I May Destroy You',
      desc: `I already had a soft spot for Michaela Coel after watching her in Chewing Gum.
       But this? This is a masterpiece where black people are finally allowed the depth, space, and
       creativity to artfully explore heavy topics you usually won't see outside of all-white Academy-nominated films.`,
      src: 'https://www.youtube-nocookie.com/embed/qznkRYA_y5M',
      srcType: 'youtube',
    },
    {
      title: 'Interview With The Vampire (2022)',
      desc: `It's hard to find modern shows with a focus on queer couples that give them both depth and dignity.
      It's even harder to find such a show that dares to tackle the nuances of abusive relationships.
      Interview with the Vampire (2022) does it all and having watched it coming out of an abusive relationship of my own,
      I was both sick to my stomach and amazed at the devastatingly accurate portrayal.`,
      src: 'https://www.youtube-nocookie.com/embed/BecdVouR7mY',
      srcType: 'youtube',
    },
    {
      title: 'Mr. Robot Seasons 1-2',
      desc: `What do you get if you modernise Fight Club? A tragic tale about isolation, addiction, and once again, the loneliness of late capitalism.
      When Mr. Robot is not enticing audiences with hacking scenes much more exciting than reality,
      it takes an unflinching look at social anxiety and trauma that will break your heart.`,
      src: 'https://www.youtube-nocookie.com/embed/UYfh9YhUVdE',
      srcType: 'youtube',
    },
    {
      title: 'Decision to Leave',
      desc: `I did not know what to expect going into this film and was pleasantly surprised coming out of it. Decision to Leave makes the very art of cinema its playground with lingering shots and composition that tells the slow, deliberate story of two people who feel entitled to justice and take things a little too far.`,
      src: 'https://www.youtube-nocookie.com/embed/d9BR3Z_-Hh8',
      srcType: 'youtube',
    },
    {
      title: 'Galileo Galilei',
      desc: `I listen to virtually every single genre and go through artists like socks. However, only one band has consistently sounded like the best music ever made since I was 12 and that is the work of Galileo Galilei (the Japanese indie band).`,
      src: 'https://open.spotify.com/embed/track/2dpnP9RhU39850juGhxc48?utm_source=generator',
      srcType: 'spotify',
    },
  ];
  return (
    <Frame>
      <h2
        className="mb-4 -ml-4 font-subheading text-4xl uppercase"
        aria-label="Favourite media"
      >
        Favourite media
      </h2>
      <p className="mb-16 break-normal w-full">
        You won't usually see a web developer's favourite media on their
        personal site. However, I was raised by the internet and if you know
        anything about the internet, you know that you can tell a lot about a
        digital native based on what they consume.
        <b>
          Much of the media below is not for the faint of heart. Discretion is
          advised.
        </b>
      </p>
      <Carousel className="max-w-90">
        {items.map((item, index) => (
          <MediaArticle item={item} index={index} />
        ))}
      </Carousel>
    </Frame>
  );
};

export default FavouriteMedia;

export const Head = () => <title>Favourite media - WDGA</title>;
