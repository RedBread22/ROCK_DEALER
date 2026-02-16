"use client";

import React from 'react';

export const VideoSection = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
};
