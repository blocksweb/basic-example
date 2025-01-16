"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ImageRightTextLeftProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function ImageRightTextLeft({
  imageSrc = "/placeholder.svg?height=400&width=400",
  imageAlt = "Placeholder image",
  title = "Feature Title",
  description = "Description of the feature goes here. You can add more details about what this feature does and why it's beneficial.",
  ctaText,
  onCtaClick,
}: ImageRightTextLeftProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-gradient-to-bl from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden">
        <motion.div className="w-full md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover rounded-t-2xl md:rounded-r-2xl md:rounded-tl-none"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 p-8 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-zinc-800 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
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
        </motion.div>
      </div>
    </div>
  );
}
