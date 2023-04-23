import * as React from 'react';
import Frame from '@components/frame';

const NotFoundPage = () => {
  return (
    <Frame>
      <p>Page not found.</p>
    </Frame>
  );
};

export default NotFoundPage;

export const Head = () => <title>Page not found - WDGA</title>;
