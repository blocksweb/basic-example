import { IBlockswebComponent } from "@blocksweb/core/editor";
import Debug from "./settings/components/debug";
import MainNav from "./settings/components/main-nav";
import HeroSection from "./settings/components/homepage/hero";
import Featured from "./settings/components/homepage/featured";
export const editorComponents = [Debug, MainNav, HeroSection, Featured];

export const settings = {
  editorComponents: editorComponents as IBlockswebComponent[],
  scripts: [],
  styles: [`/_next/static/css/app/[[...slug]]/layout.css`, 
  // to keep  the editor in sync with the actual website styling  
    '/_next/static/css/59c8d54fe4c6372c.css'
  ],
};
