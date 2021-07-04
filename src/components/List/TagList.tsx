import React from "react";
import styled from "styled-components";

import { EBreakpoints } from "~ts/enums";
import { removeListkStyles } from "~ts/styles";
import {
  ITagButtonsListProps,
  ITagLinkListProps,
  ITagListProps
} from "~ts/typings";
import { media } from "~ts/utils";

import { TagButton } from "../Buttons";
import { TagLink } from "../Links";
import { ListTitle } from "./ListTitle";

const TagListStyled = styled.ul`
  ${removeListkStyles}

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItemStyled = styled.li`
  margin-bottom: 0;
  margin-right: 10px;

  ${media(EBreakpoints.LAPTOP)} {
    margin-right: 0;
  }
`;

export const TagList = ({ className, title, children }: ITagListProps) => (
  <div className={className}>
    <ListTitle title={title} />
    <TagListStyled>{children}</TagListStyled>
  </div>
);

export const TagLinkList = ({
  className,
  tags,
  title,
  selected
}: ITagLinkListProps) => (
  <TagList className={className} title={title}>
    {tags.map((tag, index) => (
      <ListItemStyled key={`tag--${tag.name}-${index}`}>
        <TagLink text={tag.name} active={selected === tag.name} to={tag.path} />
      </ListItemStyled>
    ))}
  </TagList>
);

export const TagButtonsList = ({
  className,
  tags,
  title,
  selected,
  onTagSelect,
  onClearTagsSelect
}: ITagButtonsListProps) => (
  <TagList className={className} title={title}>
    {tags.map((tag, index) => (
      <ListItemStyled key={`tag--${tag}-${index}`}>
        <TagButton
          text={tag}
          active={selected === tag}
          onClick={() =>
            selected === tag ? onClearTagsSelect() : onTagSelect(tag)
          }
        />
      </ListItemStyled>
    ))}
  </TagList>
);
