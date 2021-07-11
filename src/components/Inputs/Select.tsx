import React, { useState, useRef } from "react";
import styled from "styled-components";

import { IStyledProps } from "~ts/typings";
import {
  selectBackgroundColor,
  selectTextColor,
  selectedBackgroundColor,
  selectHoverBackgroundColor,
} from "~ts/themes";
import { EZIndex } from "~ts/enums";

export type TOption = {
  value: string;
  name: string;
};

interface ISelectrProps extends IStyledProps {
  items: Array<TOption>;
  all?: boolean;
  selected?: TOption;
  onSelectAll?: () => void;
  onChange: (option: TOption) => void;
}

const SelectContainer = styled.div`
  padding: 4px;
  position: relative;
  background-color: ${selectBackgroundColor};
  color: ${selectTextColor};
  cursor: pointer;
  border-radius: 4px;
`;

const SelectedOption = styled.div`
  padding: 2px;
  font-weight: bold;
  text-transform: capitalize;
`;

const SelectFilter = styled.input`
  color: ${selectTextColor};
  padding: 2px;
  width: 100%;
  margin-bottom: 10px;
`;

const SelectOption = styled(({ selected, children, ...props }) => (
  <div {...props}>{children}</div>
))`
  text-transform: capitalize;
  padding: 2px 0;
  background-color: ${(props) =>
    props.selected
      ? selectedBackgroundColor(props)
      : selectBackgroundColor(props)};
  font-style: ${(props) => (props.selected ? "italic" : "normal")};
  &:hover {
    background-color: ${selectHoverBackgroundColor};
  }
`;

const SelectOptions = styled(({ active, children, ...props }) => (
  <div {...props}>{children}</div>
))`
  padding: 4px;
  position: absolute;
  left: 0;
  right: 0;
  background-color: ${selectBackgroundColor};
  color: ${selectTextColor};
  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
  border-radius: 0 0 4px 4px;
  transition: opacity 0.2s ease;
  z-index: ${EZIndex.SELECT_LIST};
`;

export const Select = ({
  className,
  items,
  selected,
  all,
  onChange,
}: ISelectrProps) => {
  const refFilter = useRef({} as any);
  const [filter, setFilter] = useState("");
  const [active, setActive] = useState(false);

  const isAll = all && !selected;

  const itemsWithAll = all
    ? [
        {
          value: "all",
          name: "All",
        },
        ...items,
      ]
    : items;

  const filteredItems = itemsWithAll.filter((item) =>
    item.name.includes(filter)
  );

  return (
    <SelectContainer
      className={className}
      onClick={() => {
        setActive(!active);
        refFilter.current.focus();
      }}
    >
      {selected ? (
        <SelectedOption>{selected.name}</SelectedOption>
      ) : (
        <SelectedOption>{"All"}</SelectedOption>
      )}
      <SelectOptions active={active}>
        <SelectFilter
          ref={refFilter}
          value={filter}
          onChange={(event: any) => setFilter(event.target.value)}
          onClick={(event) => {
            event.stopPropagation();
          }}
        />
        {filteredItems.map((item) => (
          <SelectOption
            onClick={() => {
              onChange(item);
              setActive(false);
            }}
            selected={
              selected?.value === item.value || (isAll && item.value === "all")
            }
          >
            {item.name}
          </SelectOption>
        ))}
      </SelectOptions>
    </SelectContainer>
  );
};
