// 'use client';

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>About Us</h1>
      <p>Welcome to the About Page of our Next.js Application!</p>
      <p>Hereou can learn more about what we do.</p>
          <Image src="/deep_peace_logo.png" width="500" height="500" alt="Deep Peace ripple logo" />
          </div>
            );
};

export default About;
