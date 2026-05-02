import { getCollection } from "astro:content";

export async function getBlogPosts() {
  const all = (await getCollection("blog")).sort((a, b) =>
    b.filePath!.localeCompare(a.filePath!),
  );
  return all;
}
