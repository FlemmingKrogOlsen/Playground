import React from 'react';

type Data = {
  id: string;
  name: string;
  content: React.FC;
  selected?: boolean;
};

export interface IProps {
  data: Array<Data>;
  name: string;
}
