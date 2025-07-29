import { cookies } from "next/headers";
import { getWorkspace } from "./actions";
import PageClient from "./page.client";

export default async function Cms() {
  const workspace = await getWorkspace();

  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  console.log({
    session: session?.value,
    workspace,
    workspaceId: workspace?.id,
  });

  if (!workspace) {
    return <div>Oh no! this is not your ws</div>;
  }

  if (!session || !session.value) {
    return <div>Oh no! you are not logged in</div>;
  }

  return <PageClient workspace={workspace} session={session.value} />;
}
