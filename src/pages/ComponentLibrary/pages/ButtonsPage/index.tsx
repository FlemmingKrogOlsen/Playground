import Button from "components/Button/";
import ButtonLink from "components/Button/btnLink";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import { PageBanner, SpaceEvenly } from "layout/nested.pages";

const text = "Hello World";

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
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
      <ButtonLink
        title="ButtonLink"
        icon={<Icon />}
        url="https://startpage.krogolsen.dk/"
      />
    </SpaceEvenly>
    <br />
    <br />
    <PageBanner>Special Buttons</PageBanner>
    <SpaceEvenly>
      <ButtonCopyClipboard text={text} />
    </SpaceEvenly>
  </>
);

export default ButtonsPage;
