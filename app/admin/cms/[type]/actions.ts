import { IWorkspace } from "@blocksweb/core/editor";
import assert from "assert";

export const getWorkspace = async (): Promise<IWorkspace | undefined> => {
  assert(process.env.BLOCKSWEB_API_KEY, "BLOCKSWEB_API_KEY not set.");
  const apiKey = process.env.BLOCKSWEB_API_KEY;
  const baseUrl =
    "https://blocksweb-dasboard-laravel-main-2a6rkv.laravel.cloud/api/";

  try {
    const response = await fetch(`${baseUrl}v1/workspace`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch workspace: ${response.status} ${response.statusText}`
      );
      return undefined;
    }

    const data = await response.json();
    console.log("Workspace data:", data);

    // Handle both direct workspace object and wrapped response
    return data.data || data;
  } catch (e) {
    console.error("Error fetching workspace:", e);
    return undefined;
  }
};
