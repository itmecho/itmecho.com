import { getCollection } from "astro:content";

export async function getBlogPosts(opts: { includeDrafts: boolean }) {
  const all = await getCollection("blog");
  if (!opts.includeDrafts) {
    return all.filter((p) => !!p.data.pubDate);
  }
  return all;
}
