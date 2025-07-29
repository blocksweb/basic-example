/**
 * Collection registry for the customer app
 * Import this file to register all collections
 */

// Import all collection definitions to register them
import './products';
import './blog-posts';

// Re-export collections for use in components
export { productCollection, productProvider } from './products';
export { blogPostCollection, blogProvider } from './blog-posts';