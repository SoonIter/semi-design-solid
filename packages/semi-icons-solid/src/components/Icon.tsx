import { BASE_CLASS_PREFIX } from "../env";
import { cls } from "@semi-design-solid/solid-classlist";
import "../styles/icons.scss";
import {
  Component,
  createMemo,
  JSXElement,
  mergeProps,
  Ref,
  splitProps,
} from "solid-js";

export type IconSize =
  | "inherit"
  | "extra-small"
  | "small"
  | "default"
  | "large"
  | "extra-large";

export interface IconProps extends HTMLSpanElement {
  ref?: Ref<HTMLSpanElement>;
  svg: JSXElement;
  size?: IconSize;
  spin?: boolean;
  rotate?: number;
  prefixCls?: string;
  type?: string;
}
const Icon: Component<IconProps> = (props) => {
  props = mergeProps(props, { prefixCls: BASE_CLASS_PREFIX });

  const classes = createMemo(() => {
    const { className, prefixCls, size, spin, type } = props;
    return cls(
      `${prefixCls}-icon`,
      {
        [`${prefixCls}-icon-extra-small`]: size === "extra-small", // 8x8
        [`${prefixCls}-icon-small`]: size === "small", // 12x12
        [`${prefixCls}-icon-default`]: size === "default", // 16x16
        [`${prefixCls}-icon-large`]: size === "large", // 20x20
        [`${prefixCls}-icon-extra-large`]: size === "extra-large", // 24x24
        [`${prefixCls}-icon-spinning`]: spin === true,
        [`${prefixCls}-icon-${type}`]: Boolean(type),
      },
      className
    );
  });

  const [inner, outer] = splitProps(props, [
    "ref",
    "type",
    "svg",
    "style",
    "spin",
    "className",
    "prefixCls",
    "rotate",
  ]);
  const outerStyle = createMemo(() => {
    const rotate = inner.rotate;
    return {
      ...inner.style,
      transform: `rotate(${rotate}deg)`,
    };
  });
  return (
    // @ts-ignore
    <span
      role="img"
      ref={inner.ref}
      aria-label={inner.type}
      // @ts-ignore
      classList={classes()}
      // @ts-ignore
      style={outerStyle()}
      {...outer}
    >
      {inner.svg}
    </span>
  );
};

const convertIcon = (Svg: Component<{}>, iconType: string) => {
  return (props: Partial<Omit<IconProps, "svg">>) => (
    // @ts-ignore
    <Icon
      type={iconType}
      {...props}
      ref={props?.ref}
      svg={<Svg {...props} />}
    />
  );
};

export { convertIcon };
export default Icon;
