import { IBlockswebComponent } from "@blocksweb/core/dist/rsc/__types__";

const InnerComponent: IBlockswebComponent = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "100px",
        height: "100px",
      }}
    >
      Muj kiekn werkt gewoon
    </div>
  );
};

InnerComponent.schema = {
  displayName: "InnerComponent",
  options: [
    // not implemented yet
    // {
    //   type: "asset",
    //   label: "Image",
    //   name: "image",
    //   default: {
    //     url: "https://source.unsplash.com/random/150x150",
    //     name: "Image 1",
    //     type: "image",
    //     mime_type: "image/png",
    //   } as IAsset,
    // },
  ],
};

export default InnerComponent;
