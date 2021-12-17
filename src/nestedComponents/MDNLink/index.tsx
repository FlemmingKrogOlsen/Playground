import { Url } from "layout/nested.pages";

const MDNLink = ({ title }: { title: string }) => (
  <Url href={`https://developer.mozilla.org/en-US/docs/Web/CSS/${title}`}>
    MDN Web
  </Url>
);

export default MDNLink;