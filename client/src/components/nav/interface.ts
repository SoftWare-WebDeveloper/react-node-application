interface Option {
  id: string,
  value: string
}

export interface NavBarProps {
  options: Array<Option>,
  onSwitch?: (id: string) => void,
  customClass?: string
}
