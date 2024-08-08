import { isStr } from "../../../../utils/checkers";

export const styleHandler = (elementProps, element) => {
  let elemStyle = element.style,
    elemePropStyle = elementProps.style;

  if (isStr(elemePropStyle)) elemStyle.cssText = elemePropStyle;
  else Object.assign(elemStyle, elemePropStyle);
  console.log(elemStyle, elemePropStyle);
};
