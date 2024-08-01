import { signalHandler } from "../../signal";
 import { processNestedChildren } from "./";
import { isArr, isFunc, isNode, isNUB, newTextNode, childAppender } from "../../../../utils";
import "../../../../utils/loopers.js";

export const processChildrens = (childrens, fragment) => {
  childrens.forEach(node => {
    let childToAppend = null;

    switch (true) {
      case isNUB(node):
        return;
      case isArr(node):
        processNestedChildren(node, fragment);
        break;
      case isNode(node):
        childToAppend = node;
        break;
      case isFunc(node):
        if (node.isSignal) childToAppend = signalHandler(node, fragment);
        else childToAppend = node();
        console.log("me");
        break;

      default:
        childToAppend = newTextNode(node);
        break;
    }

    if (childToAppend) childAppender(fragment, childToAppend);
  });
};
