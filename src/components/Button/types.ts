type Button = {
  title: string;
  icon?: React.ReactElement;
  type?: any;
};

export interface ButtonProps extends Button {
  onClick?: () => void;
}

export interface ButtonLinkProps extends Button {
  url: string;
}

export interface ClipboardButtonProps {
  text: string;
}