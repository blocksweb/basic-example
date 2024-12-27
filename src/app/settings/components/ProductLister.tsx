import { IBlockswebComponent } from "@blocksweb/core/dist/rsc/__types__";

// Define the type for a single product, including an image URL
type Product = {
  id: number;
  created_at: string;
  updated_at: string;
  test: string;
};

export type ProductListerProps = {
  background: string;
  title: string;
  products: Product[];
  children?: React.ReactNode;
};
const Product = (props: { product: Product }) => {
  // write an example of a product component

  return (
    <div>
      <h1>{props.product.test}</h1>
      <img src="https://source.unsplash.com/random/200x200" />
    </div>
  );
};
// Define the ProductLister component with inline mocked products including real names and images
const ProductLister: IBlockswebComponent = (props: ProductListerProps) => {
  // Updated products array with real product names and image URLs from Unsplash

  return (
    <div>
      {props.products?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

ProductLister.schema = {
  displayName: "ProductLister",
  options: [
    {
      type: "library-single",
      label: "Products",
      name: "products",
      default: null,
    },
    {
      type: "text",
      label: "Title",
      name: "title",
      default: "Our Products",
    },
    {
      type: "color",
      label: "Background",
      name: "background",
      default: "#f5f5f5",
    },
  ],
};

export default ProductLister;
