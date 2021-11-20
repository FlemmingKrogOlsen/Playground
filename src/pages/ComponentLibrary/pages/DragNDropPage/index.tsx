import { useState } from "react";
import { DragNDrop } from "../../../../components";

const initial_state = [
  {
    id: 1,
    title: "Title Group #1",
    items: [
      {
        itemId: 1,
        itemContent: "<b>#1_1</b>",
      },
      {
        itemId: 2,
        itemContent: "<b>#1_2</b>",
      },
      {
        itemId: 3,
        itemContent: "<b>#1_3</b>",
      },
    ],
  },
  {
    id: 2,
    title: "Title Group #2",
    items: [
      {
        itemId: 4,
        itemContent: "<b>#2_1</b>",
      },
      {
        itemId: 5,
        itemContent: "<b>#2_2</b>",
      },
    ],
  },
  {
    id: 3,
    title: "Title Group #3",
    items: [],
  },
];

const DragNDropPage = () => {
  const [data, setData] = useState(initial_state);
  return (
    <>
      <DragNDrop list={data} onListChange={setData} groupWidth={200} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default DragNDropPage;
