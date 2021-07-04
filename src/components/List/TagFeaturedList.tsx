import React from "react";
import styled from "styled-components";

import { FeaturedTagButton } from "~ts/components/Buttons";
import { removeListkStyles } from "~ts/styles";
import {
  ITagButtonsListProps,
  ITagLinkListProps,
  ITagListProps
} from "~ts/typings";

import { FeaturedTagLink } from "../Links";
import { ListTitle } from "./ListTitle";

const TagButtonsFeaturedListStyled = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TagListStyled = styled.ul`
  ${removeListkStyles}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItemStyled = styled.li`
  margin: 0;
`;

export const TagFeaturedList = ({
  className,
  title,
  children
}: ITagListProps) => (
  <TagButtonsFeaturedListStyled className={className}>
    <ListTitle title={title} />
    <TagListStyled>{children}</TagListStyled>
  </TagButtonsFeaturedListStyled>
);

export const TagLinkFeaturedList = ({
  className,
  tags,
  title,
  selected
}: ITagLinkListProps) => (
  <TagFeaturedList className={className} title={title}>
    {tags.map((tag, index) => (
      <ListItemStyled key={`tag--${tag.name}-${index}`}>
        <FeaturedTagLink
          text={tag.name}
          active={selected === tag.name}
          to={tag.path}
        />
      </ListItemStyled>
    ))}
  </TagFeaturedList>
);

export const TagButtonsFeaturedList = ({
  className,
  tags,
  title,
  selected,
  onTagSelect,
  onClearTagsSelect
}: ITagButtonsListProps) => (
  <TagFeaturedList className={className} title={title}>
    {tags.map((tag, index) => (
      <ListItemStyled key={`tag--${tag}-${index}`}>
        <FeaturedTagButton
          text={tag}
          active={selected === tag}
          onClick={() =>
            selected === tag ? onClearTagsSelect() : onTagSelect(tag)
          }
        />
      </ListItemStyled>
    ))}
  </TagFeaturedList>
);
