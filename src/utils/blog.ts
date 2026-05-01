import { getCollection } from "astro:content";

export async function getBlogPosts(opts: { includeDrafts: boolean }) {
  const all = (await getCollection("blog")).sort((a, b) =>
    b.filePath!.localeCompare(a.filePath!),
  );
  if (!opts.includeDrafts) {
    return all.filter((p) => !!p.data.pubDate);
  }
  return all;
}
