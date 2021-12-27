import Button from "components/Button/";
import ButtonLink from "components/Button/btnLink";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import {
  Editor,
  EditorItem,
  EditorItemDivider,
  PageBanner,
  SpaceEvenly,
} from "layout/nested.pages";

const copyToClipboardText = "Hello World";

const btnText = `<Button
  title="Button Title"
  icon={<Icon />}
  onClick={() => alert("Clicked Botton")}
/>
`;

const linkBtnText = `<ButtonLink
  title="Button Title"
  icon={<Icon />}
  url="YOUR_URL_HERE"
/>`;

const copyBtnText = `<ButtonCopyClipboard text="${copyToClipboardText}" />`;

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      fill="#dedede"
      stroke="#123456"
      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
    />
  </svg>
);

const ButtonsPage = () => (
  <>
    <SpaceEvenly>
      <Button
        title="Button"
        icon={<Icon />}
        onClick={() => alert("Clicked Botton")}
      />
    </SpaceEvenly>
    <br />
    <PageBanner>Anchor Tag Button</PageBanner>
    <SpaceEvenly>
      <ButtonLink
        title="Link as Button"
        icon={<Icon />}
        url="https://startpage.krogolsen.dk/"
      />
    </SpaceEvenly>
    <br />
    <PageBanner>Special Buttons</PageBanner>
    <SpaceEvenly>
      <ButtonCopyClipboard text={copyToClipboardText} />
    </SpaceEvenly>

    <Editor>
      <h3>Button</h3>
      <EditorItem>
        <pre>{btnText}</pre>
      </EditorItem>
      <ButtonCopyClipboard text={btnText} />

      <EditorItemDivider />

      <h3>Anchor Tag Button</h3>
      <EditorItem>
        <pre>{linkBtnText}</pre>
      </EditorItem>
      <ButtonCopyClipboard text={linkBtnText} />

      <EditorItemDivider />

      <h3>Copy 2 Clipboard Button</h3>
      <EditorItem>
        <pre>{copyBtnText}</pre>
      </EditorItem>
      <ButtonCopyClipboard text={copyBtnText} />
    </Editor>
  </>
);

export default ButtonsPage;
