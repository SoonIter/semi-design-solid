import { convertIcon } from '../components/Icon';
  const SvgComponent = (props = {}) => <svg width='1em' height='1em
focusable={false}
aria-hidden={true}' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 2C3.44772 2 3 2.44772 3 3V6C3 6.55228 3.44772 7 4 7C4.55228 7 5 6.55228 5 6V4H11V20H9C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22H15C15.5523 22 16 21.5523 16 21C16 20.4477 15.5523 20 15 20H13V4H19V6C19 6.55228 19.4477 7 20 7C20.5523 7 21 6.55228 21 6V3C21 2.44772 20.5523 2 20 2H4Z" fill="currentColor"/></svg>;
  const IconComponent = convertIcon(SvgComponent, 'activity');
  export default IconComponent;