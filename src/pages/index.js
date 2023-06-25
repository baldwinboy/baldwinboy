import * as React from 'react';
import Frame from '@components/frame';
import Seo from '@components/seo';

const IndexPage = () => {
  return (
    <Frame>
      <p>
        I'm a professionally experienced and skilled developer, designer, and
        artist, amongst many other things. Navigate through this site to learn
        more about my work and me.
      </p>
    </Frame>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <Seo />
    <html lang="en" />
  </>
)