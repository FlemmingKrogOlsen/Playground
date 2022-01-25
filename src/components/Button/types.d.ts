type Playground_Button_Common = {
  title: string;
  icon?: React.ReactElement;
  type?: any;
};

interface Playground_ButtonProps extends Playground_Button_Common {
  onClick?: () => void;
}

interface Playground_ButtonLinkProps extends Playground_Button_Common {
  url: string;
}

interface Playground_ClipboardButtonProps {
  text: string;
}