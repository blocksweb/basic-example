"use client";

import VideoHeroSection from "./components/video-hero-section";
import ImageLeftTextRightBlock from "./components/image-left-text-right";
import { IBlockswebComponent } from "@blocksweb/core/dist/rsc/__types__";
export const editorComponents: IBlockswebComponent[] = [
  VideoHeroSection,
  ImageLeftTextRightBlock,
];

export const settings = {
  editorComponents: editorComponents,
  scripts: ["https://cdn.tailwindcss.com"],
  styles: [],
};
