// app/api/[...slug]/route.ts
import { NextResponse } from "next/server";

async function handler(
  req: Request,
  { params }: { params: { slug: string[] } }
) {
  const { slug } = params;
  console.log(
    "API Route - Method:",
    req.method,
    "Slug:",
    slug,
    "URL:",
    req.url
  );

  if (!slug || slug.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const uri = slug.join("/");
  const baseUrl =
    "https://blocksweb-dasboard-laravel-main-2a6rkv.laravel.cloud/api/";
  const url = new URL(`v1/${uri}`, baseUrl);

  console.log("Proxying to:", url.toString());

  const init: RequestInit = {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.BLOCKSWEB_API_KEY as string,
    },
  };

  console.log("Request headers:", init.headers);
  console.log(
    "API Key from env:",
    process.env.BLOCKSWEB_API_KEY ? "SET" : "NOT SET"
  );

  if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
    try {
      const body = await req.json();
      init.body = JSON.stringify(body);
      console.log("Request body:", body);
    } catch (error) {
      console.error("Error parsing request body:", error);
    }
  }

  try {
    const response = await fetch(url.toString(), init);
    console.log("Response status:", response.status, response.statusText);

    const text = await response.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Proxy request failed" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: Request,
  { params }: { params: { slug: string[] } }
) {
  return handler(req, { params });
}

export async function POST(
  req: Request,
  { params }: { params: { slug: string[] } }
) {
  return handler(req, { params });
}

export async function PUT(
  req: Request,
  { params }: { params: { slug: string[] } }
) {
  return handler(req, { params });
}

export async function PATCH(
  req: Request,
  { params }: { params: { slug: string[] } }
) {
  return handler(req, { params });
}

export async function DELETE(
  req: Request,
  { params }: { params: { slug: string[] } }
) {
  return handler(req, { params });
}
