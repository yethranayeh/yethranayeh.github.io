import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import clsx from "clsx";

import { transformCssValue } from "@/utils/transformCssValue";

type BoxStyleProps = {
  display?: CSSProperties["display"];
  flexDirection?: CSSProperties["flexDirection"];
  flexWrap?: CSSProperties["flexWrap"];
  flexGrow?: CSSProperties["flexGrow"];
  flexShrink?: CSSProperties["flexShrink"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  alignSelf?: CSSProperties["alignSelf"];
  gap?: number | string;
  p?: number | string;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  m?: number | string;
  mx?: number | string;
  my?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  width?: number | string;
  w?: number | string;
  height?: number | string;
  h?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  fontWeight?: CSSProperties["fontWeight"];
  fontSize?: number | string;
  textAlign?: CSSProperties["textAlign"];
  color?: CSSProperties["color"];
  bg?: CSSProperties["background"];
  position?: CSSProperties["position"];
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  zIndex?: CSSProperties["zIndex"];
  border?: CSSProperties["border"];
  borderRadius?: number | string;
};

type PolymorphicProps<TAs extends ElementType, Props = object> = Props & {
  as?: TAs;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<TAs>, keyof Props | "as" | "className" | "children">;

export type BoxProps<TAs extends ElementType = "div"> = PolymorphicProps<TAs, BoxStyleProps>;

type BoxComponent = <TAs extends ElementType = "div">(
  props: BoxProps<TAs> & { ref?: React.Ref<Element> },
) => ReactElement | null;

export const Box: BoxComponent = forwardRef(function Box(
  {
    as: Component = "div",
    className,
    display,
    flexDirection,
    flexWrap,
    flexGrow,
    flexShrink,
    justifyContent,
    alignItems,
    alignSelf,
    gap,
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    width,
    w,
    height,
    h,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    fontWeight,
    fontSize,
    textAlign,
    color,
    bg,
    position,
    top,
    right,
    bottom,
    left,
    zIndex,
    border,
    borderRadius,
    ...rest
  }: BoxProps,
  ref: React.ForwardedRef<Element>,
) {
  "use memo";

  const styles: CSSProperties = {};

  if (display !== undefined) styles.display = display;
  if (flexDirection !== undefined) styles.flexDirection = flexDirection;
  if (flexWrap !== undefined) styles.flexWrap = flexWrap;
  if (flexGrow !== undefined) styles.flexGrow = flexGrow;
  if (flexShrink !== undefined) styles.flexShrink = flexShrink;
  if (justifyContent !== undefined) styles.justifyContent = justifyContent;
  if (alignItems !== undefined) styles.alignItems = alignItems;
  if (alignSelf !== undefined) styles.alignSelf = alignSelf;
  if (gap !== undefined) styles.gap = transformCssValue(gap)!;

  if (p !== undefined) styles.padding = transformCssValue(p)!;
  if (px !== undefined) {
    styles.paddingLeft = transformCssValue(px)!;
    styles.paddingRight = transformCssValue(px)!;
  }
  if (py !== undefined) {
    styles.paddingTop = transformCssValue(py)!;
    styles.paddingBottom = transformCssValue(py)!;
  }
  if (pt !== undefined) styles.paddingTop = transformCssValue(pt)!;
  if (pr !== undefined) styles.paddingRight = transformCssValue(pr)!;
  if (pb !== undefined) styles.paddingBottom = transformCssValue(pb)!;
  if (pl !== undefined) styles.paddingLeft = transformCssValue(pl)!;

  if (m !== undefined) styles.margin = transformCssValue(m)!;
  if (mx !== undefined) {
    styles.marginLeft = transformCssValue(mx)!;
    styles.marginRight = transformCssValue(mx)!;
  }
  if (my !== undefined) {
    styles.marginTop = transformCssValue(my)!;
    styles.marginBottom = transformCssValue(my)!;
  }
  if (mt !== undefined) styles.marginTop = transformCssValue(mt)!;
  if (mr !== undefined) styles.marginRight = transformCssValue(mr)!;
  if (mb !== undefined) styles.marginBottom = transformCssValue(mb)!;
  if (ml !== undefined) styles.marginLeft = transformCssValue(ml)!;

  const resolvedWidth = w ?? width;
  const resolvedHeight = h ?? height;
  if (resolvedWidth !== undefined) styles.width = transformCssValue(resolvedWidth)!;
  if (resolvedHeight !== undefined) styles.height = transformCssValue(resolvedHeight)!;
  if (minWidth !== undefined) styles.minWidth = transformCssValue(minWidth)!;
  if (maxWidth !== undefined) styles.maxWidth = transformCssValue(maxWidth)!;
  if (minHeight !== undefined) styles.minHeight = transformCssValue(minHeight)!;
  if (maxHeight !== undefined) styles.maxHeight = transformCssValue(maxHeight)!;

  if (fontWeight !== undefined) styles.fontWeight = fontWeight;
  if (fontSize !== undefined) styles.fontSize = transformCssValue(fontSize)!;
  if (textAlign !== undefined) styles.textAlign = textAlign;
  if (color !== undefined) styles.color = color;
  if (bg !== undefined) styles.background = bg;

  if (position !== undefined) styles.position = position;
  if (top !== undefined) styles.top = transformCssValue(top)!;
  if (right !== undefined) styles.right = transformCssValue(right)!;
  if (bottom !== undefined) styles.bottom = transformCssValue(bottom)!;
  if (left !== undefined) styles.left = transformCssValue(left)!;
  if (zIndex !== undefined) styles.zIndex = zIndex;

  if (border !== undefined) styles.border = border;
  if (borderRadius !== undefined) styles.borderRadius = transformCssValue(borderRadius)!;

  const { style: userStyle, ...domProps } = rest as {
    style?: CSSProperties;
    [key: string]: unknown;
  };
  const mergedStyle: CSSProperties = userStyle != null ? { ...styles, ...userStyle } : styles;

  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement>}
      className={clsx(className)}
      style={mergedStyle}
      {...domProps}
    />
  );
}) as unknown as BoxComponent;
