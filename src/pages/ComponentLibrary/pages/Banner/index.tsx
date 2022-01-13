import NewBanner from "components/Banner";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import { Editor, EditorItem } from "layout/nested.pages";
import styled from "styled-components";

const text = `<Banner
  image="https://source.unsplash.com/800x200"
  info="source.unsplash.com/800x200"
>
  Content goes here
</Banner>
`;

const Content = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  text-shadow: 0px 0px 2px black;
  color: white;
  padding: 5px 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BannerPage = () => (
  <>
    <NewBanner
      image="/Playground/images/2021-dodge-challenger.png"
      info="Dodge Challenger 2021"
    >
      <Content>
        Banner content goes here
        <br />
        Hover me !!
      </Content>
    </NewBanner>

    <Editor>
      <EditorItem>
        <pre>{text}</pre>
      </EditorItem>
      <ButtonCopyClipboard text={text} />
    </Editor>
  </>
);

export default BannerPage;
