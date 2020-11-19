interface Options {
  id: string,
  text?: string
}

export interface SwitcherProps {
  options: Array<Options>,
  customClass?: string,
  onToggle: () => void,
  defaultValue: string
}
