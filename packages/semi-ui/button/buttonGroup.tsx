import { BaseProps } from '../_base/baseComponent';
import { cssClasses, strings } from '@douyinfe/semi-foundation/button/constants';
import { Type, Size } from './Button';
import '@douyinfe/semi-foundation/button/button.scss';
import { JSX, JSXElement } from 'solid-js';
import { ButtonGroupContext } from './context';

export type Theme = 'solid' | 'borderless' | 'light';

export interface ButtonGroupProps extends BaseProps {
  'disabled'?: boolean;
  'type'?: Type;
  'size'?: Size;
  'theme'?: Theme;
  'class'?: string;
  'children'?: JSXElement;
  'aria-label'?: JSX.HTMLAttributes<HTMLButtonElement>['aria-label'];
}

const prefixCls = cssClasses.PREFIX;

const ButtonGroup: Component<ButtonGroupProps> = (props) => {
  const _props = mergeProps(
    {
      size: 'default',
      disabled: false,
    },
    props,
  );
  const classList = {
    [`${_props.className}`]: !!_props.className,
    [`${prefixCls}-group`]: !_props.disabled && !!_props.type,
  };
  const contextValue = createMemo(() => {
    const { disabled, type, theme, size } = _props;
    return {
      disabled,
      type,
      theme,
      size,
    } as const;
  });

  return (
    <div classList={classList} role="group" aria-label={props['aria-label']}>
      {/* @ts-ignore */}
      <ButtonGroupContext.Provider value={contextValue()} children={_props.children}></ButtonGroupContext.Provider>
    </div>
  );
};
export default ButtonGroup;
