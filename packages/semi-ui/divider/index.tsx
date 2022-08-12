import { cssClasses } from '@douyinfe/semi-foundation/divider/constants';
import '@douyinfe/semi-foundation/divider/divider.scss';
import { JSX } from 'solid-js';

const prefixCls = cssClasses.PREFIX;

export interface DividerProps {
  /** The position of title inside divider */
  align?: 'left' | 'right' | 'center';
  /** space between divider and surroundings **/
  margin?: number | string;
  /** The wrapped title */
  children?: JSX.Element | string;
  /** Style class name */
  className?: string;
  /** Whether line is dashed  */
  dashed?: boolean;
  /** The direction type of divider */
  layout?: 'horizontal' | 'vertical';
  /** Divider inline style */
  style?: JSX.ElementAttributesProperty;
}

const Divider: Component<DividerProps> = ({
  layout = 'horizontal',
  dashed,
  align = 'center',
  className,
  margin,
  style,
  children,
  ...rest
}) => {
  const dividerClassNames = {
    classList: {
      [`${className}`]: className !== undefined,
      [`${prefixCls}-divider`]: true,
      [`${prefixCls}-divider-horizontal`]: layout === 'horizontal',
      [`${prefixCls}-divider-vertical`]: layout === 'vertical',
      [`${prefixCls}-divider-dashed`]: !!dashed,
      [`${prefixCls}-divider-with-text`]: children && layout === 'horizontal',
      [`${prefixCls}-divider-with-text-${align}`]: children && layout === 'horizontal',
    } as Record<string, boolean>,
  };

  let overrideDefaultStyle = {};
  if (margin !== undefined) {
    if (layout === 'vertical') {
      overrideDefaultStyle = {
        marginLeft: margin,
        marginRight: margin,
      };
    } else if (layout === 'horizontal') {
      overrideDefaultStyle = {
        marginTop: margin,
        marginBottom: margin,
      };
    }
  }

  return (
    <div {...rest} classList={dividerClassNames.classList} style={{ ...overrideDefaultStyle, ...style }}>
      {children && layout === 'horizontal' ? (
        typeof children === 'string' ? (
          <span class={`${prefixCls}-divider_inner-text`} x-semi-prop="children">
            {children}
          </span>
        ) : (
          children
        )
      ) : null}
    </div>
  );
};

export default Divider;
