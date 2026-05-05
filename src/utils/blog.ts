import { getCollection, type CollectionEntry } from "astro:content";
import { parse } from 'date-fns';

export async function getBlogPosts() {
  const all = (await getCollection("blog")).sort((a, b) =>
    b.filePath!.localeCompare(a.filePath!),
  );
  return all;
}

export function getPubDate(post: CollectionEntry<'blog'>): Date {
  const matches = /^(\d{4}-\d{2}-\d{2})-/.exec(post.id);
  if (!matches) {
    throw new Error(`Invalid post id: ${post.id}`);
  }
  return parse(matches[1], 'yyyy-MM-dd', new Date());
}
