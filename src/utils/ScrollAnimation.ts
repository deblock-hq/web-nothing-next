import { useLottie, useLottieInteractivity } from "lottie-react";

interface AnimationProps {
  lottieFile: any;
  loop?: boolean;
  maxFrame: number;
  altText: string;
  className?: string;
}

export const ScrollAnimation = ({
  lottieFile,
  loop,
  maxFrame,
  altText,
  className,
}: AnimationProps) => {
  const lottieObj = useLottie({
    animationData: lottieFile,
    loop: loop || false,
    alt: altText,
    className: className,
  });
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.1],
        type: "seek",
        frames: [0],
      },
      {
        visibility: [0.1, 0.9],
        type: "play",
        frames: [0, maxFrame],
      },
      {
        visibility: [0.9, 1],
        type: "stop",
        frames: [0,maxFrame],
      },
    ],
  });
  return Animation;
};
