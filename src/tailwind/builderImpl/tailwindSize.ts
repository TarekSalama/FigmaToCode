import { AltSceneNode } from "../../altNodes/altMixins";
import { pxToLayoutSize } from "../conversionTables";
import { nodeWidthHeight } from "../../common/nodeWidthHeight";

export const tailwindSize = (node: AltSceneNode): string => {
  return tailwindSizePartial(node).join("");
};

export const tailwindSizePartial = (node: AltSceneNode): [string, string] => {
  const sizeResult = nodeWidthHeight(node, true);

  let w = "";
  if (sizeResult.width) {
    if (typeof sizeResult.width === "number") {
      w += `w-${pxToLayoutSize(sizeResult.width)} `;
    } else {
      w += `w-${sizeResult.width} `;
    }
  }

  let h = "";
  if (sizeResult.height) {
    h = `h-${pxToLayoutSize(sizeResult.height)} `;
  }

  return [w, h];
};
