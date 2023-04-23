import * as React from 'react';
import Frame from '@components/frame';

const PersonalProjects = () => {
  return (
    <Frame>
      <h2
        className="mb-4 -ml-4 font-subheading text-4xl uppercase"
        aria-label="Personal projects"
      >
        Personal projects
      </h2>
      <p></p>
    </Frame>
  );
};

export default PersonalProjects;

export const Head = () => <title>Personal projects - WDGA</title>;
