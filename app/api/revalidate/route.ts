import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest) {
  return handleRevalidate(req);
}

export async function POST(req: NextRequest) {
  return handleRevalidate(req);
}

async function handleRevalidate(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  // Validate the secret token
  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    console.log("🔄 Revalidation triggered...");

    // Revalidate key pages that depend on Strapi content
    revalidatePath("/product-gallery");
    revalidatePath("/products");

    console.log("Revalidation complete.");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}






























// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(req: NextRequest) {
//   const secret = req.nextUrl.searchParams.get('secret')

//   if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
//     return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
//   }

//   try {
//     const body = await req.json()
//     console.log('Webhook received from Strapi:', body)

//     // Default pages to revalidate
//     const pathsToRevalidate = ['/products', '/product-gallery']

//     // If the webhook is for a product, revalidate its detail page
//     if (body?.model === 'product' && body?.entry?.id) {
//       const productPath = `/product/${body.entry.id}`
//       pathsToRevalidate.push(productPath)
//     }

//     // Call internal revalidate-path for each page
//     for (const path of pathsToRevalidate) {
//       await fetch(
//         `${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate-path?path=${path}&secret=${secret}`
//       )
//     }

//     return NextResponse.json({
//       revalidated: true,
//       paths: pathsToRevalidate,
//       timestamp: new Date().toISOString(),
//     })
//   } catch (error) {
//     console.error('Revalidation failed:', error)
//     return NextResponse.json({ revalidated: false, error }, { status: 500 })
//   }
// }
