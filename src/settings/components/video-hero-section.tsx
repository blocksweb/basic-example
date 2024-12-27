"use client";

import React from "react";
import { Play } from "lucide-react";
import { IBlockswebComponent } from "@blocksweb/core/dist/rsc/__types__";

type VideoHeroSectionProps = {
  videoSrc: string;
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
};

const VideoHeroSection: IBlockswebComponent = ({
  videoSrc,
  title,
  subtitle,
  ctaText,
  onCtaClick,
}: VideoHeroSectionProps) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-up">
          {subtitle}
        </p>
        <button
          onClick={onCtaClick}
          className="bg-white text-black py-3 px-8 rounded-full font-semibold text-lg flex items-center transition-transform hover:scale-105 animate-fade-in"
        >
          <Play className="mr-2" size={20} />
          {ctaText}
        </button>
      </div>
    </div>
  );
};

VideoHeroSection.schema = {
  displayName: "Video Hero Section",
  options: [
    {
      name: "videoSrc",
      type: "text",
      label: "Video Source URL",
      default:
        "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4",
    },
    {
      name: "title",
      type: "text",
      label: "Title",
      default: "Experience the Future",
    },
    {
      name: "subtitle",
      type: "text",
      label: "Subtitle",
      default: "Immerse yourself in cutting-edge technology and innovation",
    },
    {
      name: "ctaText",
      type: "text",
      label: "CTA Button Text",
      default: "Watch Demo",
    },
  ],
};

export default VideoHeroSection;
