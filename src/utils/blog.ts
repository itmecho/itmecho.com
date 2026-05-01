import { getCollection } from "astro:content";
import { isBefore, isEqual } from "date-fns";

export async function getBlogPosts(opts: { includeDrafts: boolean }) {
  const all = await getCollection("blog");
  if (!opts.includeDrafts) {
    return all.filter((p) => !!p.data.pubDate);
  }
  return all.sort((a, b) => {
    const ad = a.data.pubDate ?? Infinity;
    const bd = b.data.pubDate ?? Infinity;
    if (isEqual(ad, bd)) {
      return 0;
    }
    return isBefore(ad, bd) ? 1 : -1;
  });
}
