/**
 * Example product collection for the customer app
 */

import {
  registerCollection,
  MemoryCollectionProvider,
  createSampleData,
  CollectionDefinition,
} from "@blocksweb/core/server";

// Define the product collection schema
const productCollection: CollectionDefinition = {
  name: "products",
  displayName: "Products",
  description: "E-commerce product catalog",
  category: "E-commerce",
  icon: "🛍️",
  fields: [
    {
      name: "name",
      type: "string",
      label: "Product Name",
      required: true,
      description: "The display name of the product",
    },
    {
      name: "description",
      type: "richtext",
      label: "Description",
      description: "Rich text description of the product",
    },
    {
      name: "price",
      type: "number",
      label: "Price",
      required: true,
      validation: {
        min: 0,
      },
    },
    {
      name: "category",
      type: "string",
      label: "Category",
      validation: {
        enum: ["Electronics", "Clothing", "Books", "Home", "Sports"],
      },
    },
    {
      name: "image",
      type: "image",
      label: "Product Image",
      description: "Main product image",
    },
    {
      name: "inStock",
      type: "boolean",
      label: "In Stock",
      description: "Whether the product is currently available",
    },
    {
      name: "tags",
      type: "string",
      label: "Tags",
      description: "Comma-separated tags for the product",
    },
  ],
  queryable: true,
  endpoints: {
    list: true,
    get: true,
    search: true,
  },
  defaultSort: {
    field: "name",
    direction: "asc",
  },
};

// Create a provider with sample data
const sampleData = createSampleData();
const productProvider = new MemoryCollectionProvider(sampleData);

// Add more sample products
productProvider.addRecords("products", [
  {
    id: "4",
    name: "iPad Air",
    price: 599,
    category: "Electronics",
    description: "Powerful tablet for work and play",
    inStock: true,
    tags: "tablet,apple,productivity",
    image: "https://example.com/ipad.jpg",
    createdAt: "2024-01-18T13:00:00Z",
  },
  {
    id: "5",
    name: "Running Shoes",
    price: 129,
    category: "Sports",
    description: "Comfortable running shoes for daily workouts",
    inStock: true,
    tags: "shoes,running,sports",
    image: "https://example.com/shoes.jpg",
    createdAt: "2024-01-19T14:00:00Z",
  },
  {
    id: "6",
    name: "Coffee Maker",
    price: 89,
    category: "Home",
    description: "Brew perfect coffee every morning",
    inStock: false,
    tags: "coffee,kitchen,appliance",
    image: "https://example.com/coffee-maker.jpg",
    createdAt: "2024-01-20T15:00:00Z",
  },
]);

// Register the collection
registerCollection(productCollection, productProvider);

export { productCollection, productProvider };
