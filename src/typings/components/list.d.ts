import React from "react";

import { TTagLink } from "../pages";
import { IStyledProps } from "../styled";

interface IListProps extends IStyledProps {
  title: string;
  selected?: string;
}

interface ITagListProps extends IListProps {
  children: React.ReactNode;
}

interface ITagLinkListProps extends IListProps {
  tags: TTagLink[];
}

interface ITagButtonsListProps extends IListProps {
  tags: string[];
  onTagSelect: (tag: string) => void;
  onClearTagsSelect: () => void;
}
