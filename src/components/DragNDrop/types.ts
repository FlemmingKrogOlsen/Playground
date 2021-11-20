import React, { FC, Dispatch, SetStateAction, ReactNode } from "react";

type Item = {
  itemId: number;
  itemContent: string;
};

type ItemData = {
  id: number;
  title: string;
  items: Item[];
};

type Drag = React.DragEvent<HTMLDivElement>;

type Params = { grpI: number; itemI: number };

interface IProps {
  list: ItemData[];
  onListChange: Dispatch<SetStateAction<ItemData[]>>;
  groupWidth: number;
}

export type { IProps, Drag, Params, ItemData };
