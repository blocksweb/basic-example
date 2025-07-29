/**
 * Example blog post collection for the customer app
 */

import {
  registerCollection,
  MemoryCollectionProvider,
  createSampleData,
  CollectionDefinition,
} from "@blocksweb/core/server";

// Define the blog post collection schema
const blogPostCollection: CollectionDefinition = {
  name: "blogPosts",
  displayName: "Blog Posts",
  description: "Blog articles and news content",
  category: "Content",
  icon: "📝",
  fields: [
    {
      name: "title",
      type: "string",
      label: "Post Title",
      required: true,
      description: "The headline of the blog post",
    },
    {
      name: "content",
      type: "richtext",
      label: "Content",
      required: true,
      description: "The main content of the blog post",
    },
    {
      name: "author",
      type: "string",
      label: "Author",
      required: true,
      description: "The author of the blog post",
    },
    {
      name: "publishedAt",
      type: "date",
      label: "Published Date",
      description: "When the post was published",
    },
    {
      name: "excerpt",
      type: "string",
      label: "Excerpt",
      description: "Short summary of the post",
      validation: {
        max: 200,
      },
    },
    {
      name: "featuredImage",
      type: "image",
      label: "Featured Image",
      description: "Main image for the blog post",
    },
    {
      name: "tags",
      type: "string",
      label: "Tags",
      description: "Comma-separated tags for categorization",
    },
    {
      name: "status",
      type: "string",
      label: "Status",
      validation: {
        enum: ["draft", "published", "archived"],
      },
    },
  ],
  queryable: true,
  endpoints: {
    list: true,
    get: true,
    search: true,
  },
  defaultSort: {
    field: "publishedAt",
    direction: "desc",
  },
};

// Create a provider with sample data
const sampleData = createSampleData();
const blogProvider = new MemoryCollectionProvider(sampleData);

// Add more sample blog posts
blogProvider.addRecords("blogPosts", [
  {
    id: "3",
    title: "Building Modern Web Applications",
    content:
      "Learn the latest techniques for building fast, responsive web applications with modern frameworks and tools.",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15T10:00:00Z",
    excerpt:
      "A comprehensive guide to modern web development practices and tools.",
    featuredImage: "https://example.com/web-dev.jpg",
    tags: "web-development,javascript,react",
    status: "published",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "4",
    title: "The Future of AI in Web Development",
    content:
      "Exploring how artificial intelligence is transforming the way we build and maintain websites.",
    author: "Mike Chen",
    publishedAt: "2024-01-18T09:00:00Z",
    excerpt: "Discover how AI tools are changing web development workflows.",
    featuredImage: "https://example.com/ai-web.jpg",
    tags: "ai,automation,future",
    status: "published",
    createdAt: "2024-01-18T09:00:00Z",
  },
  {
    id: "5",
    title: "Draft: Upcoming Features",
    content: "This is a draft post about upcoming features we are working on.",
    author: "Emily Davis",
    publishedAt: null,
    excerpt: "A sneak peek at what is coming next.",
    featuredImage: null,
    tags: "updates,features,draft",
    status: "draft",
    createdAt: "2024-01-20T16:00:00Z",
  },
]);

// Register the collection
registerCollection(blogPostCollection, blogProvider);

export { blogPostCollection, blogProvider };
