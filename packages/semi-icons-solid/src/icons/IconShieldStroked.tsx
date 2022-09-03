import { convertIcon } from '../components/Icon';
  const SvgComponent = (props = {}) => <svg width='1em' height='1em
focusable={false}
aria-hidden={true}' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4.12781L12.0013 2.5L21 4.12781V9.51683C21 15.1811 17.3751 20.2095 12.0013 22C6.62604 20.2095 3 15.18 3 9.51434V4.12781Z" stroke="black" stroke-width="2" stroke-linejoin="round"/><path d="M11.9749 7.47485V15.4749" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.97485 11.4749H15.9749" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>;
  const IconComponent = convertIcon(SvgComponent, 'activity');
  export default IconComponent;