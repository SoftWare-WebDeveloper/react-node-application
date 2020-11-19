export interface BaseInput {
  name: string,
  defaultValue?: string,
  type?: string,
  className?: string,
  id?: string,
  for?: string,
  disabled?: boolean,
  placeholder?: string,

  getValue?: () => string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IconsInput extends BaseInput{
  prevIcon?: React.FunctionComponent,
  afterIcon?: React.FunctionComponent,
  wrapperClass?: string
}
