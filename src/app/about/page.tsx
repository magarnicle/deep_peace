// 'use client';

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>What is Deep Peace?</h1>
      <p>Deep Peace is an attempt to create an oasis in the web. One good thing, three times a day.</p>
      <p>Stay for a moment, feel refreshed, then go out and live. Who knows? Maybe it will help you find deep peace.</p>
          <Image src="/deep_peace_logo.png" width="500" height="500" alt="Deep Peace ripple logo" />
          </div>
            );
};

export default About;
