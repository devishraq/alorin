import { createElement } from "../dom";
import { insertRule } from "./insert-rule";
import { ranNum } from "../../utils/random";

export const createStyle = tag => styles => {
  const cN = `$__${tag}__${ranNum}`;
  insertRule(cN, styles.join(""));
  return props => createElement(tag, { ...props, class: cN });
};
