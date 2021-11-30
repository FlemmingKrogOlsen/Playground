type Common = {
  title: string
  icon: React.ReactElement
}

export interface IButton extends Common {
  onClick: () => void
}

export interface IButtonLink extends Common {
  url: string
}