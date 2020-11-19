import * as React from "react";
import classNames from "classnames";

import { WidgetProps } from "./interface";
import "./widget.scss";

const Widget = ({ type, title, Component, footer }: WidgetProps) => {
  const widgetClasses = classNames("widget", type);

  return (
    <div className={widgetClasses}>
      <div className="widget-title">
        <span>{title}</span>
      </div>
      <div className="widget-body">
        <Component/>
      </div>
      {
        (footer && type === "small") && <div className="widget-footer">{footer}</div>
      }
    </div>
  );
};

export default Widget;