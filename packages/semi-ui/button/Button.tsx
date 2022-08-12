import { cssClasses } from '@douyinfe/semi-foundation/button/constants';
import { noop } from '@douyinfe/semi-foundation/utils/function';
import '@douyinfe/semi-foundation/button/button.scss';
import { JSX } from 'solid-js';
import { ButtonGroupContext } from './context';
import { useContext } from 'solid-js';

export type HtmlType = 'button' | 'reset' | 'submit';
export type Size = 'default' | 'small' | 'large';
export type Theme = 'solid' | 'borderless' | 'light';
export type Type = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  'id'?: string;
  'block'?: boolean;
  'circle'?: boolean;
  'children'?: JSX.Element;
  'disabled'?: boolean;
  'className'?: string;
  'icon'?: JSX.Element;
  'iconPosition'?: 'left' | 'right';
  'loading'?: boolean;
  'htmlType'?: HtmlType;
  'size'?: Size;
  'theme'?: Theme;
  'type'?: Type;
  'prefixCls'?: string;
  'onClick'?: JSX.HTMLAttributes<HTMLButtonElement>['onClick'];
  'onMouseDown'?: JSX.HTMLAttributes<HTMLButtonElement>['onMouseDown'];
  'onMouseEnter'?: JSX.HTMLAttributes<HTMLButtonElement>['onMouseEnter'];
  'onMouseLeave'?: JSX.HTMLAttributes<HTMLButtonElement>['onMouseLeave'];
  'aria-label'?: JSX.HTMLAttributes<HTMLButtonElement>['aria-label'];
}

const Button: Component<ButtonProps> = (props) => {
  const ButtonGroupProps = useContext(ButtonGroupContext);
  const allProps = mergeProps(
    {
      children: [],
      circle: false,
      disabled: false,
      size: 'default',
      type: 'primary' as Type,
      theme: 'light' as Theme,
      block: false,
      htmlType: 'button' as HtmlType,
      onMouseDown: noop,
      onClick: noop,
      onMouseEnter: noop,
      onMouseLeave: noop,
      prefixCls: cssClasses.PREFIX,
    },
    ButtonGroupProps,
    props,
  );
  const buttonElementProps = createMemo(() => {
    const { prefixCls, type, size, theme, block, circle, htmlType, disabled, ...attr } = allProps;
    return {
      disabled,
      ...attr,
      'classList': {
        [prefixCls]: !!prefixCls,
        [`${prefixCls}-${type}`]: !disabled && !!type,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-size-large`]: size === 'large',
        [`${prefixCls}-size-small`]: size === 'small',
        [`${prefixCls}-light`]: theme === 'light',
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-circle`]: circle,
        [`${prefixCls}-borderless`]: theme === 'borderless',
      },
      'aria-disabled': disabled,
      'type': htmlType,
    };
  });

  return (
    <button
      {...buttonElementProps()}
      onClick={allProps.onClick}
      onMouseDown={allProps.onMouseDown}
      onMouseLeave={allProps.onMouseLeave}
    >
      <span class={`${allProps.prefixCls}-content`} onClick={(e) => allProps.disabled && e.stopPropagation()}>
        {props.children}
      </span>
    </button>
  );
};

export default Button;
