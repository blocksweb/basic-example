import { cookies } from "next/headers";
import { getWorkspace } from "./actions";
import PageClient from "./page.client";

export default async function Cms(context: {
  searchParams: { token: string };
}) {
  const workspace = await getWorkspace();

  const cookieStore = await cookies();
  const session =
    cookieStore.get("session")?.value ?? context.searchParams.token;

  if (!workspace) {
    return <div>Oh no! this is not your ws</div>;
  }

  return <PageClient workspace={workspace} session={session} />;
}
