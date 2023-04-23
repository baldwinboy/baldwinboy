import * as React from 'react';
import Frame from '@components/frame';

const FavouriteMedia = () => {
  return (
    <Frame>
      <h2
        className="mb-4 -ml-4 font-subheading text-4xl uppercase"
        aria-label="Favourite media"
      >
        Favourite media
      </h2>
      <p></p>
    </Frame>
  );
};

export default FavouriteMedia;

export const Head = () => <title>Favourite media - WDGA</title>;
