import * as React from "react";
import {RootStateOrAny, useSelector} from "react-redux";

import Image from "../Image";

import { LoaderProps } from "./interface";
import "./loader.scss";

const Loader = (props: LoaderProps) => {
  const isLoading = useSelector(({ loader: { isLoading } }: RootStateOrAny) => isLoading);
  return (
    <React.Fragment>
      {
        isLoading && (
          <div className="loader">
            <Image src="loader.gif" alt="loader" />
          </div>
        )
      }
    </React.Fragment>
  );
}

export default Loader;