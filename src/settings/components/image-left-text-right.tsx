"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { IBlockswebComponent } from "@blocksweb/core/dist/rsc/__types__";

type ImageLeftTextRightBlockProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaText: string;
  onCtaClick: () => void;
};

const ImageLeftTextRightBlock: IBlockswebComponent = ({
  imageSrc,
  imageAlt,
  title,
  ctaText,
  onCtaClick,
}: ImageLeftTextRightBlockProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 transform rotate-3 rounded-2xl"></div>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 leading-tight">
              {title}
            </h2>

            {ctaText && (
              <button
                onClick={onCtaClick}
                className="group inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                {ctaText}
                <ChevronRight
                  className="ml-2 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"
                  size={20}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

ImageLeftTextRightBlock.schema = {
  displayName: "Image Left Text Right Block",
  options: [
    {
      name: "imageSrc",
      type: "image",
      label: "Image",
      default:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "imageAlt",
      type: "text",
      label: "Image Alt Text",
      default: "Team collaboration",
    },
    {
      name: "title",
      type: "text",
      label: "Title",
      default: "Seamless Collaboration",
    },
    {
      name: "description",
      type: "text",
      label: "Description",
      default:
        "Our platform enables teams to work together effortlessly, breaking down silos and fostering innovation. Experience the power of true collaboration with our intuitive tools and features.",
    },
    {
      name: "ctaText",
      type: "text",
      label: "CTA Text",
      default: "Explore Features",
    },
  ],
};

export default ImageLeftTextRightBlock;
