import { convertIcon } from '../components/Icon';
  const SvgComponent = (props = {}) => <svg width='1em' height='1em
focusable={false}
aria-hidden={true}' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.5C5 11.6716 5.67157 11 6.5 11H17.5C18.3284 11 19 11.6716 19 12.5C19 13.3284 18.3284 14 17.5 14H6.5C5.67157 14 5 13.3284 5 12.5Z" fill="currentColor"/></svg>;
  const IconComponent = convertIcon(SvgComponent, 'activity');
  export default IconComponent;