import { IBlockswebComponent } from "@blocksweb/core-local/src";

type ProductListerProps = {
  children?: React.ReactNode;
  LeftComponent?: React.ReactElement;
  background: string;
};

// Define the ProductLister component with inline mocked products including real names and images
const LayoutComponent: IBlockswebComponent = ({
  children,
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
      {/* @ts-ignore */}
      <LeftComponent />
    </div>
  );
};

LayoutComponent.schema = {
  displayName: "LayoutComponent",
  droppable: true,
  editable: true,
  options: [
    {
      type: "component",
      label: "Left Component",
      name: "LeftComponent",
    },
  ],
};

export default LayoutComponent;
