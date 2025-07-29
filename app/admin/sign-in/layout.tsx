"use client";
import { settings } from "@/blocksweb.config";
import { BlockswebProvider } from "@blocksweb/core/editor";
import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  return (
    <BlockswebProvider settings={settings}>{props.children}</BlockswebProvider>
  );
};

export default Layout;
