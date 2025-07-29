"use client";
import { settings } from "@/blocksweb.config";
import PageWrapper from "@/components/page-wrapper";
import { ContentPanel, IWorkspace } from "@blocksweb/core/editor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type PageClientProps = {
  workspace: IWorkspace;
  session: string;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const PageClient = (props: PageClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <PageWrapper>
        <ContentPanel
          type={"editor"}
          workspace={props.workspace}
          session={props.session}
          settings={settings}
        />
      </PageWrapper>
    </QueryClientProvider>
  );
};

export default PageClient;
