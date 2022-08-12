import { cssClasses, strings } from '@douyinfe/semi-foundation/layout/constants';
import getDataAttr from '@douyinfe/semi-foundation/utils/getDataAttr';
import { JSX } from 'solid-js';
// import LayoutContext, { ContextType } from './layout-context';
import { registerMediaQuery } from '../_utils';

const responsiveMap: ResponsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
};

export interface ResponsiveMap {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const generateId = ((): (() => string) => {
  let i = 0;
  return (): string => {
    i += 1;
    return `${cssClasses.PREFIX}-sider-${i}`;
  };
})();

const bpt = strings.BREAKPOINT;

export interface SiderProps {
  'prefixCls'?: string;
  'style'?: JSX.HTMLAttributes<'aside'>['style'];
  'class'?: string;
  'children'?: JSX.Element;
  'breakpoint'?: Array<keyof ResponsiveMap>;
  'onBreakpoint'?: (screen: keyof ResponsiveMap, match: boolean) => void;
  'aria-label'?: JSX.HTMLAttributes<'aside'>['aria-label'];
  'role'?: JSX.HTMLAttributes<'aside'>['role'];
}

const useMount = (onBreakpoint: SiderProps['onBreakpoint']) => {
  const responsiveHandler = (screen: keyof ResponsiveMap, matches: boolean) => {
    if (onBreakpoint) {
      onBreakpoint(screen, matches);
    }
  };
};
const Sider: Component<SiderProps> = ({
  prefixCls = cssClasses.PREFIX,
  class: className,
  children,
  style,
  ['aria-label']: ariaLabel,
  ...others
}) => {
  const classList = {
    [`${className}`]: !!className,
    [`${prefixCls}-sider`]: true,
  };
  return (
    <aside classList={classList} aria-label={ariaLabel} style={style} {...getDataAttr(others)}>
      <div class={`${prefixCls}-sider-children`}>{children} </div>
    </aside>
  );
};

export default Sider;
