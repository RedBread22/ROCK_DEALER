"use client";

import React from 'react';

export const VideoSection = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-black">
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40"
        aria-hidden="true"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Foreground Video Layer */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};
