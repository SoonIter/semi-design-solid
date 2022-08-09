import { cssClasses, strings } from '@douyinfe/semi-foundation/button/constants';
import { noop } from '@douyinfe/semi-foundation/utils/function';
import '@douyinfe/semi-foundation/button/button.scss';
import { ComponentProps, JSXElement } from 'solid-js';

const btnSizes = strings.sizes;
const { htmlTypes, btnTypes } = strings;

export type HtmlType = 'button' | 'reset' | 'submit';
export type Size = 'default' | 'small' | 'large';
export type Theme = 'solid' | 'borderless' | 'light';
export type Type = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'type'> {
  id?: string;
  block?: boolean;
  circle?: boolean;
  children?: JSXElement;
  disabled?: boolean;
  className?: string;
  //   'icon'?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  htmlType?: HtmlType;
  size?: Size;
  theme?: Theme;
  type?: Type;
  prefixCls?: string;
  onClick?: any;
  //   'onMouseDown'?: React.MouseEventHandler<HTMLButtonElement>;
  //   'onMouseEnter'?: React.MouseEventHandler<HTMLButtonElement>;
  //   'onMouseLeave'?: React.MouseEventHandler<HTMLButtonElement>;
  //   'aria-label'?: React.AriaAttributes['aria-label'];
}
const Button: Component<ButtonProps> = ({
  children = [],
  circle = false,
  disabled = false,
  size = 'default',
  type = 'primary',
  theme = 'light',
  block = false,
  htmlType = 'button',
  onMouseDown = noop,
  onClick = noop,
  onMouseEnter = noop,
  onMouseLeave = noop,
  prefixCls = cssClasses.PREFIX,
  iconPosition,
  ...attr
}) => {
  const baseProps = {
    disabled,
    ...attr,
    // ...omit(attr, ['x-semi-children-alias']),
    'classList': {
      [prefixCls]: prefixCls,
      [`${prefixCls}-${type}`]: !disabled && type,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-size-large`]: size === 'large',
      [`${prefixCls}-size-small`]: size === 'small',
      // [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-light`]: theme === 'light',
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-circle`]: circle,
      [`${prefixCls}-borderless`]: theme === 'borderless',
    },
    'aria-disabled': disabled,
    'type': htmlType,
  };
  return (
    // @ts-expect-error
    <button {...baseProps} onClick={onClick} onMouseDown={onMouseDown}>
      <span class={`${prefixCls}-content`} onClick={(e) => disabled && e.stopPropagation()}>
        {children}
      </span>
    </button>
  );
};

export default Button;
