import { getWorkspace } from "./actions";
import PageClient from "./page.client";

export default async function Cms(context: {
  searchParams: Promise<{ token?: string }>;
}) {
  const workspace = await getWorkspace();
  const searchParams = await context.searchParams;
  const session = searchParams.token ?? "";

  if (!workspace) {
    return <div>Oh no! this is not your ws</div>;
  }

  return <PageClient workspace={workspace} session={session} />;
}
