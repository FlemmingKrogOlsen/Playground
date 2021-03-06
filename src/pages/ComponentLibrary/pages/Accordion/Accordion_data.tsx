import { ReactElement } from "react";

const TestContent = () => <div>content</div>;

const TestScroll = () => (
  <div>
    {Array.from(
      { length: 20 },
      (_, index: number): ReactElement => (
        <div key={index}>Content</div>
      )
    )}
  </div>
);

export const Accordion_data = [
  {
    id: 1,
    title: "Title #1",
    body: TestScroll,
    show: true,
  },
  {
    id: 2,
    title: "Title #2",
    body: TestContent,
    show: false,
  },
  {
    id: 3,
    title: "Title #3",
    body: TestContent,
    show: false,
  },
];
