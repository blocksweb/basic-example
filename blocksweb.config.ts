import { IBlockswebComponent } from "@blocksweb/core/editor";
import HeroSection from "./settings/components/homepage/hero";
import Featured from "./settings/components/homepage/featured";
export const editorComponents = [HeroSection, Featured];

export const settings = {
  editorComponents: editorComponents as IBlockswebComponent[],
  scripts: [],
  styles: [
    `/_next/static/css/app/[[...slug]]/layout.css`,
    "_next/static/css/app/[[...slug]]/layout.css",
  ],
};
