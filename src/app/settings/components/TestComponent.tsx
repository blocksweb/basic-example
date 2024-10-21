"use client";
import { IBlockswebComponent, Text } from "@blocksweb/core-local/src";
import Head from "next/head";
import { useEffect, useState } from "react";

const TestComponent: IBlockswebComponent = (props: any) => {
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
      <Text
        style={{ color: "red", fontSize: "20px" }}
        defaultText={"Hello World"}
        propName={"thispropdoesnotexist"}
      />
      {counter}
    </div>
  );
};

TestComponent.schema = {
  displayName: "TestComponent",
  options: [],
};

export default TestComponent;
