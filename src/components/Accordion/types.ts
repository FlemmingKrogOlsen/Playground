import React from 'react';

type Item = {
  id: number;
  title: string;
  content: React.FC;
  show: boolean;
};

export interface IProps {
  data: Array<Item>;
  id: string;
}
