export type TPost = {
  frontmatter: {
    title: string;
    tags: string[];
    thumbnail: {
      publicURL: string;
    };
  };
  fields: {
    path: string;
    readingTime: {
      text: string;
    };
  };
};

export interface IPostsPageQuery {
  data: {
    posts: TPost[];
  };
}
export interface IPostPageQuery {
  post: {
    fields: {
      readingTime: {
        text: string;
      };
      path: string;
    };
    frontmatter: {
      date: string;
      title: string;
      excerpt: string;
    };
    html: string;
  };
}
