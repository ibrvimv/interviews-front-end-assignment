'use client';

import React from 'react';
import { useEffect } from 'react';
import Lenis from 'lenis';

const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e: any) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default LenisScroll;
