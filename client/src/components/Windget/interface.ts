export interface WidgetProps {
  type: string,
  title: string,
  Component: React.FunctionComponent,
  footer?: string,
}