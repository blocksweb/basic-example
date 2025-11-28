/**
 * Server-compatible schema registry
 * This file contains only the schemas without the actual components
 * so they can be accessed during server-side rendering
 */

import { ComponentData } from "@blocksweb/core/editor";

// Export component schemas without importing the actual components
export const componentSchemas: ComponentData[] = [
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
        default:
          "The Future of Sustainable Fashion: How Technology is Revolutionizing the Industry",
      },
      {
        name: "subtitle",
        type: "text",
        label: "Article Subtitle",
        default:
          "Exploring innovative approaches to eco-friendly clothing production and consumption",
      },
      {
        name: "content",
        type: "richtext",
        label: "Article Content",
        default: `<p>The fashion industry is undergoing a remarkable transformation as sustainability becomes a central focus for brands and consumers alike.</p>`,
      },
      {
        name: "author",
        type: "text",
        label: "Author Name",
        default: "Dr. Sarah Chen",
      },
      {
        name: "publishDate",
        type: "text",
        label: "Publish Date",
        default: "March 15, 2024",
      },
      {
        name: "readTime",
        type: "text",
        label: "Read Time",
        default: "8 min read",
      },
      {
        name: "category",
        type: "text",
        label: "Category",
        default: "Sustainability",
      },
      {
        name: "featuredImage",
        type: "image",
        label: "Featured Image URL",
        default:
          "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074",
      },
      {
        name: "authorImage",
        type: "image",
        label: "Author Image URL",
        default:
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
    ],
  },
  {
    displayName: "Dynamic Navigation Simple",
    category: "Navigation",
    options: [
      {
        name: "logoImage",
        label: "Logo",
        type: "image",
      },
      {
        name: "navigationPages",
        label: "Navigation Pages",
        type: "page-multiple",
        default: [],
      },
      {
        name: "dropdownPages",
        label: "Dropdown Pages",
        type: "page-multiple",
        default: [],
      },
      {
        name: "ctaPage",
        label: "CTA Page",
        type: "page",
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
        type: "page-multiple",
        default: [],
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
