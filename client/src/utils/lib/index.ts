interface SwitchCaseCases {
  [key: string]: any
}

export const switchcase = (cases: SwitchCaseCases) => (defaultCase: any) => (key: string) =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase;