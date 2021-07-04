import { IPostsPageQuery } from "../queries";
import { TTagLink } from "./links";
import { IPostsPagination } from "./pagination";

export interface IPostsContext extends IPostsPagination {
  tag?: string;
  tags: TTagLink[];
}

export interface IPostsProps {
  data: IPostsPageQuery;
  pageContext: IPostsContext;
}
