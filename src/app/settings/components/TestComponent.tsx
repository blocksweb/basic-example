"use client";
import { IBlockswebComponent } from "@blocksweb/core/dist/rsc";
import Head from "next/head";
import { useEffect, useState } from "react";

const TestComponent: IBlockswebComponent = () => {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div data-gjs-highlightable="true">
      <Head>
        <title>This is dynamic</title>
      </Head>

      {counter}
    </div>
  );
};

TestComponent.schema = {
  displayName: "TestComponent",
  options: [],
};

export default TestComponent;
