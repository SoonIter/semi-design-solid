import { cssClasses } from '@semi-design-solid/semi-foundation/typography/constants';
import { cls } from '@semi-design-solid/solid-classlist';
import { JSXElement } from 'solid-js';
import { BaseProps } from '../_base/baseComponent';

const prefixCls = cssClasses.PREFIX;

interface TypographyProps extends BaseProps {
  component?: JSXElement;
  children?: JSXElement;
}
const defaultProps = {
  component: 'article',
  style: {},
  class: '',
} as const;

// style classList class
export const useBaseProps = (_props: TypographyProps) => {
  const props = mergeProps(defaultProps, _props);
  const [inner, rest] = splitProps(props, ['component', 'children', 'class']);

  const classList = createMemo(() => {
    const { class: className } = inner;
    return cls(className, prefixCls);
  });

  const children = createMemo(() => props.children);

  const baseProps = mergeProps({ classList: classList() }, rest);

  return [baseProps, children] as [typeof baseProps, typeof children];
};

const Typography: Component<TypographyProps> = (_props) => {
  const [baseProps, children] = useBaseProps(_props);
  // solid can not replace the component type. Use the div to replace.
  return <article {...baseProps}>{children()}</article>;
};
export default Typography;
