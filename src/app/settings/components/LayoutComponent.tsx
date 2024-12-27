import { IBlockswebComponent } from "@blocksweb/core/dist/rsc/__types__";

type ProductListerProps = {
  children?: React.ReactNode;
  LeftComponent?: IBlockswebComponent;
  background: string;
};

// Define the ProductLister component with inline mocked products including real names and images
const LayoutComponent: IBlockswebComponent = ({
  LeftComponent,
  background,
}: ProductListerProps) => {
  // Updated products array with real product names and image URLs from Unsplash

  if (!LeftComponent)
    return (
      <div
        style={{
          background,
        }}
      >
        NO LEFT COMPONENT
      </div>
    );
  return (
    <div className="">
      <LeftComponent />
    </div>
  );
};

LayoutComponent.schema = {
  displayName: "LayoutComponent",

  options: [
    {
      type: "component",
      label: "Left Component",
      name: "LeftComponent",
    },
  ],
};

export default LayoutComponent;
