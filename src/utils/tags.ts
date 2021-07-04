import { TTagLink } from "~ts/typings";

export const connectTagLinks = (allTags: TTagLink[]) => (
  tags: string[]
): TTagLink[] => allTags.filter(tag => tags.includes(tag.name));
