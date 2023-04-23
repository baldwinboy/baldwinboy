import * as React from 'react';
import Frame from '@components/frame';

const Contact = () => {
  return (
    <Frame>
      <h2
        className="mb-4 -ml-4 font-subheading text-4xl uppercase"
        aria-label="Contact"
      >
        Contact
      </h2>
      <p></p>
    </Frame>
  );
};

export default Contact;

export const Head = () => <title>Contact - WDGA</title>;
