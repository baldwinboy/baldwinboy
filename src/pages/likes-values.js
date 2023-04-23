import * as React from 'react';
import Frame from '@components/frame';

const LikesValues = () => {
  return (
    <Frame>
      <h2
        className="mb-4 -ml-4 font-subheading text-4xl uppercase"
        aria-label="Likes and values"
      >
        Likes and values
      </h2>
      <p></p>
    </Frame>
  );
};

export default LikesValues;

export const Head = () => <title>Likes and values - WDGA</title>;
