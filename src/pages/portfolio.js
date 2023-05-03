import * as React from 'react';
import Frame from '@components/frame';

const Portfolio = () => {
  return (
    <Frame>
      <h2
        className="mb-4 -ml-4 font-subheading text-4xl uppercase"
        aria-label="Portfolio"
      >
        Portfolio
      </h2>
      <p>
        Coming soon!{' '}
        <small>
          In the meantime, I think this site serves as an example of my skill...
        </small>
      </p>
    </Frame>
  );
};

export default Portfolio;

export const Head = () => <title>Portfolio - WDGA</title>;
