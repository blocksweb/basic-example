import { BlockOutlet, IBlockswebComponent } from "@blocksweb/core/editor";
import React from "react";

const Debug: IBlockswebComponent = (props) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        minWidth: "100px",
        minHeight: "100px",
      }}
    >
      <BlockOutlet component={props.leftComponent} propName="leftComponent" />
      <BlockOutlet component={props.rightComponent} propName="rightComponent" />
    </div>
  );
};

Debug.schema = {
  displayName: "Debug",
  options: [
    {
      name: "leftComponent",
      type: "component",
      label: "Component",
    },
    {
      name: "rightComponent",
      type: "component",
      label: "Component",
    },
  ]
};

export default Debug;
