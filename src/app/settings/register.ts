import TestComponent from "./components/TestComponent";
import ProductLister from "./components/ProductLister";
import LayoutComponent from "./components/LayoutComponent";
import { IBlockswebComponent } from "@blocksweb/core-local/src";
import InnerComponent from "./components/InnerComponent";
import Hero from "./components/hero/hero";
import Footer from "./components/Footer";
import Features from "./components/features/Features";
import HeaderComponent from "./components/HeaderComponent";
export const editorComponents: IBlockswebComponent[] = [
  TestComponent,
  ProductLister,
  LayoutComponent,
  InnerComponent,
  Hero,
  Features,
  Footer,
  HeaderComponent,
];

export const settings = {
  editorComponents: editorComponents,
  scripts: ["https://cdn.tailwindcss.com"],
};
