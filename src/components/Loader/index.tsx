import Lottie from "lottie-react";
import LoaderAnim from "../../assets/lottie/loader.json";

import { ReactElement, ReactNode, useEffect, useState } from "react";

const delay = 1500; //1s
let setTimeoutInstance: any;

interface Props {
  loading: boolean;
  children: ReactNode | ReactElement | JSX.Element;
}

export const Loader = ({ loading, children }: Props) => {
  const [isExpired, setIsExpired] = useState(true);

  useEffect(() => {
    if (loading) {
      setIsExpired(false);

      if (setTimeoutInstance) {
        clearTimeout(setTimeoutInstance);
      }
      setTimeoutInstance = setTimeout(() => {
        setIsExpired(true);
      }, delay);
    }
  }, [loading]);

  if (!isExpired) {
    return (
      <div className="loader">
        <Lottie
          style={{ width: "50%", margin:'auto'}}
          animationData={LoaderAnim}
          loop={true}
          autoPlay={true}
        />
      </div>
    );
  }

  return <>{children}</>;
};
