import React, { useState, useRef } from "react";
import styled from "styled-components";

import { IStyledProps } from "~ts/typings";
import {
  selectBackgroundColor,
  selectTextColor,
  selectedBackgroundColor,
} from "~ts/themes";

export type TOption = {
  value: string;
  name: string;
};

interface ISelectrProps extends IStyledProps {
  items: Array<TOption>;
  selected?: TOption;
  onChange: (option: TOption) => void;
}

const SelectContainer = styled.div`
  padding: 4px 0;
  position: relative;
  background-color: ${selectBackgroundColor};
  color: ${selectTextColor};
`;

const SelectedOption = styled.div`
  padding: 4px 0;
`;

const SelectFilter = styled.input`
  color: ${selectTextColor};
  padding: 4px 0;
`;

const SelectOption = styled(({ selected, children, ...props }) => (
  <div {...props}>{children}</div>
))`
  padding: 4px 0;
  background-color: ${(props) =>
    props.selected
      ? selectedBackgroundColor(props)
      : selectBackgroundColor(props)};
`;

const SelectOptions = styled(({ active, children, ...props }) => (
  <div {...props}>{children}</div>
))`
  padding: 4px 0;
  position: absolute;
  background-color: ${selectBackgroundColor};
  color: ${selectTextColor};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.3 ease;
`;

export const Select = ({
  className,
  items,
  selected,
  onChange,
}: ISelectrProps) => {
  const refFilter = useRef({} as any);
  const [filter, setFilter] = useState("");
  const [active, setActive] = useState(false);

  const filteredItems = items.filter((item) => item.name.includes(filter));
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
            selected={selected?.value === item.value}
          >
            {item.name}
          </SelectOption>
        ))}
      </SelectOptions>
    </SelectContainer>
  );
};
