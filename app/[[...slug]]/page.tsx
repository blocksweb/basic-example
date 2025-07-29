import { getServerPage, BlocksWebPageServer } from "@blocksweb/core/server";

import { settings } from "@/blocksweb.config";
import { componentSchemas } from "@/settings/schema-registry";
// Import collections to register them on server-side
import "../../settings/collections";
import PageWrapper from "@/components/page-wrapper";

type HomeProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function Home({ params }: HomeProps) {
  let slug = (await params)?.slug?.join("/");

  if (!slug) {
    slug = "index";
  }

  try {
    const page = await getServerPage(slug);

    // Transform server page to BlockswebPage format
    const blockswebPage = {
      ...page,
      createdAt: page.created_at,
      updatedAt: page.updated_at,
      has_draft: page.has_draft ?? false,
      has_published: page.has_published ?? true,
      draft_version: page.draft_version
        ? {
            ...page.draft_version,
            id: String(page.draft_version.id),
          }
        : undefined,
      published_version: page.published_version
        ? {
            ...page.published_version,
            id: String(page.published_version.id),
          }
        : undefined,
    };

    console.log("🎨 [SERVER] Rendering with BlocksWebPageServer");

    // Use BlocksWebPageServer for full server-side rendering with resolved collection data
    return (
      <PageWrapper>
        <BlocksWebPageServer
          page={blockswebPage}
          settings={settings}
          schemaRegistry={componentSchemas}
          fallback={
            (
              <div className="p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-700">
                  Page Not Found
                </h2>
                <p className="text-gray-500 mt-2">
                  The page you&apos;re looking for doesn&apos;t exist or has no
                  content.
                </p>
              </div>
            ) as any
          }
        />
      </PageWrapper>
    );
  } catch (error) {
    const err = error as Error;

    // Return error page component
    return (
      <PageWrapper>
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h1>Server Error</h1>
          <p>Failed to load page: {slug}</p>
          <p>Error: {err.message}</p>
          <details>
            <summary>Debug Info</summary>
            <pre
              style={{
                background: "#f5f5f5",
                padding: "10px",
                fontSize: "12px",
              }}
            >
              {JSON.stringify(
                {
                  slug,
                  error: err.message,
                  timestamp: new Date().toISOString(),
                },
                null,
                2
              )}
            </pre>
          </details>
        </div>
      </PageWrapper>
    );
  }
}
