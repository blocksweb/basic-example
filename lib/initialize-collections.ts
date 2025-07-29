/**
 * Initialize collections for BlocksWeb
 * This ensures collections are registered before the editor tries to use them
 */
import { QueryClient } from "@tanstack/react-query";
import { initializeCacheManager } from "@blocksweb/core/server";
// Import collections to register them
import "../settings/collections";

let isInitialized = false;

export function initializeCollections(queryClient: QueryClient) {
  if (isInitialized) {
    console.log("ℹ️ Collections already initialized");
    return;
  }

  console.log("🔄 Initializing BlocksWeb collections...");

  // Initialize cache manager
  initializeCacheManager(queryClient);

  // Import collections from registry to check what's available
  import("@blocksweb/core/server").then(({ collectionRegistry }) => {
    const availableCollections = collectionRegistry.getNames();
    console.log(
      "✅ Collections initialized. Available collections:",
      availableCollections
    );
  });

  isInitialized = true;
}
