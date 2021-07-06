export interface TPath {
  path: string;
}

export interface TPostLink extends TPath {
  title: string;
}

export interface TTagLink extends TPath {
  name: string;
}
