import * as React from 'react';

import Frame from '@components/frame';

const ValueArticle = ({ item, index }) => {
  const [display, setDisplay] = React.useState(false);
  return (
    <article
      key={`value${index}`}
      className="flex flex-col xl:flex-row"
      aria-controls={`valueDesc${index}`}
      aria-describedby={`valueDesc${index}`}
      onFocus={() => setDisplay(true)}
      onBlur={() => setDisplay(false)}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <h3 id={`valueTitle${index}`} className="text-2xl" tabIndex={0}>
        {item.title}
      </h3>
      <p
        id={`valueDesc${index}`}
        className={
          display
            ? 'relative mt-6 ml-8 mb-4 xl:ml-16 p-8 bg-plum text-blush before:absolute before:-top-4 before:-left-8 before:w-4 before:h-4 before:bg-plum'
            : 'hidden'
        }
      >
        {item.desc}
      </p>
    </article>
  );
};
const Values = () => {
  const items = [
    {
      title: 'Passion',
      desc: `To me, anything done with passion is worth a million times that which done without.
      Every 3-year-old's abstract stick person is that much better than some AI-generated copy with no soul.
      Maybe in some years, once robots become recognised as people, I'll regret writing this.
      For now though, I firmly believe passion is a core part of humanity and having the freedom to explore
      it is a privilege afforded to an increasingly limited few.`,
    },
    {
      title: 'Art',
      desc: `Art is the communication of passion. Seeing as passion is a core part of humanity, art is
      by proxy a celebration of humanity. Of course, there are many pieces of art that aren't great, some I truly hate.
      But whenever a person makes art, it is an affirmation about the best or worst of our world. I'm happy that I can experience so much art.`,
    },
    {
      title: 'Knowledge',
      desc: `I'm convinced that all of evolution is about knowledge. The senses we've developed over the past millenia are intended to collect
      knowledge around us. That plus the buzz of curiosity fulfilled is why I love knowledge. I love learning more about things.
      Just discovering something I didn't know before and maintaining that discovery is fun in itself. I'm a certified nerd.`,
    },
    {
      title: 'Friends',
      desc: `I love my friends! I love having a select number of people that I can tell anything!
      I love our exchanges and banter! I especially love making new friends!`,
    },
    {
      title: 'Community',
      desc: `To me, community is a kind of friendship with people you don't know. To have community means having people you can laugh with,
      hang out with, support, and be supported by without having to specifically close with individuals in the community.
      Individuals make communities, but communities enhances individuals. I think people often see communities as an exclusive club, but personally, I think
      communities should strive to be open clubs that are as fun to insiders as they are welcoming to outsiders.`,
    },
    {
      title: 'Empathy',
      desc: `Empathy is so important to me for a number of reasons. Often, we as people are limited in knowledge by our physiology or circumstances.
      However, empathy allows us to step outside ourselves and learn even more than we otherwise could. Being able to see things from another perspective, to feel something unfamiliar,
      to understand others with just a glance or an embrace—gosh, empathy elevates life to an unparalleled experience. It's not just necessary for relationships, but necessary for the development of society. I believe that, especially because I enjoy
      making things, you need to have empathy in order to make the best version of whatever you're making.`,
    },
    {
      title: 'Justice',
      desc: `Just as community supports individuals and empathy enhances understanding, justice is what allows us to achieve true equality.
      Justice means changing thing to be fair to everyone, not just the majority. Justice preserves the dignity of those most likely to have it stolen.
      If art is an celebration of humanity, then justice is the protection of it.`,
    },
  ];
  return (
    <Frame>
      <h2
        className="mb-4 -ml-4 font-subheading text-4xl uppercase"
        aria-label="Values"
      >
        Values
      </h2>
      <section className="h-100">
        {items.map((item, index) => (
          <ValueArticle item={item} index={index} />
        ))}
      </section>
    </Frame>
  );
};

export default Values;

export const Head = () => <title>Values - WDGA</title>;
