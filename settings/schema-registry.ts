/**
 * Server-compatible schema registry
 * This file contains only the schemas without the actual components
 * so they can be accessed during server-side rendering
 */

import { ComponentData } from "@blocksweb/core/editor";

// Export component schemas without importing the actual components
export const componentSchemas: ComponentData[] = [
  {
    displayName: "Main Navigation",
    options: [
      {
        type: "text",
        name: "menuItem1",
        label: "Menu Item 1",
      },
    ],
  },
  {
    displayName: "Hero Section",
    options: [
      {
        name: "feature1",
        type: "component",
        label: "Feature 1",
      },
    ],
  },
  {
    displayName: "Featured",
    options: [
      {
        name: "feature1",
        type: "component",
        label: "Feature 1",
      },
    ],
  },
  {
    displayName: "Blog Post",
    options: [
      {
        name: "title",
        type: "text",
        label: "Article Title",
        defaultValue:
          "The Future of Sustainable Fashion: How Technology is Revolutionizing the Industry",
      },
      {
        name: "subtitle",
        type: "text",
        label: "Article Subtitle",
        defaultValue:
          "Exploring innovative approaches to eco-friendly clothing production and consumption",
      },
      {
        name: "content",
        type: "richtext",
        label: "Article Content",
        defaultValue: `<p>The fashion industry is undergoing a remarkable transformation as sustainability becomes a central focus for brands and consumers alike.</p>`,
      },
      {
        name: "author",
        type: "text",
        label: "Author Name",
        defaultValue: "Dr. Sarah Chen",
      },
      {
        name: "publishDate",
        type: "text",
        label: "Publish Date",
        defaultValue: "March 15, 2024",
      },
      {
        name: "readTime",
        type: "text",
        label: "Read Time",
        defaultValue: "8 min read",
      },
      {
        name: "category",
        type: "text",
        label: "Category",
        defaultValue: "Sustainability",
      },
      {
        name: "featuredImage",
        type: "text",
        label: "Featured Image URL",
        defaultValue:
          "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074",
      },
      {
        name: "authorImage",
        type: "text",
        label: "Author Image URL",
        defaultValue:
          "https://images.unsplash.com/photo-1494790108755-2616b72d2a9b?q=80&w=150",
      },
    ],
  },
  {
    displayName: "Product List",
    category: "E-commerce",
    options: [
      {
        name: "title",
        label: "Section Title",
        type: "text",
        default: "Featured Products",
      },
      {
        name: "selectedProducts",
        label: "Products to Display",
        type: "collection",
        collectionName: "products",
        multiple: true,
        default: [],
      },
      {
        name: "limit",
        label: "Maximum Products",
        type: "number",
        default: 6,
      },
      {
        name: "showPrice",
        label: "Show Prices",
        type: "boolean",
        default: true,
      },
    ],
  },
  {
    displayName: "Dynamic Navigation Simple",
    category: "Navigation",
    options: [
      {
        name: "logoAsset",
        label: "Logo",
        type: "asset",
        default: null,
      },
      {
        name: "navigationPages",
        label: "Navigation Pages",
        type: "collection",
        collectionName: "pages",
        multiple: true,
        default: [],
      },
      {
        name: "dropdownPages",
        label: "Dropdown Pages",
        type: "collection",
        collectionName: "pages",
        multiple: true,
        default: [],
      },
      {
        name: "ctaPage",
        label: "CTA Page",
        type: "collection",
        collectionName: "pages",
        multiple: false,
        default: null,
      },
    ],
  },
  {
    displayName: "Featured Content Showcase",
    category: "Content",
    options: [
      {
        name: "title",
        label: "Section Title",
        type: "text",
        default: "Featured Content",
      },
      {
        name: "subtitle",
        label: "Section Subtitle",
        type: "text",
        default: "Discover our latest guides and resources",
      },
      {
        name: "featuredPages",
        label: "Featured Pages",
        type: "collection",
        collectionName: "pages",
        multiple: true,
        default: ["1", "2", "3"],
      },
    ],
  },
  {
    displayName: "Blog Post Card",
    category: "Content",
    options: [
      {
        name: "selectedPost",
        label: "Blog Post",
        type: "collection",
        collectionName: "blogPosts",
        multiple: false,
        default: null,
      },
      {
        name: "showExcerpt",
        label: "Show Excerpt",
        type: "boolean",
        default: true,
      },
      {
        name: "showAuthor",
        label: "Show Author",
        type: "boolean",
        default: true,
      },
      {
        name: "showDate",
        label: "Show Date",
        type: "boolean",
        default: true,
      },
    ],
  },
];

export function getSchemaByDisplayName(
  displayName: string
): ComponentData | undefined {
  return componentSchemas.find(
    (schema) => schema.displayName?.toLowerCase() === displayName.toLowerCase()
  );
}
