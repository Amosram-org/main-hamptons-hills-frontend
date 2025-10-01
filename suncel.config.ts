import { defineConfig } from "@suncel/nextjs";
import { ProductsCollection } from "@/suncel/collections/products";

export default defineConfig({
  collections: [ProductsCollection],
});
