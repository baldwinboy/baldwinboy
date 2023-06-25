import * as React from 'react';
import Frame from '@components/frame';
import Seo from '@components/seo';

const IndexPage = () => {
  return (
    <Frame>
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