import { convertIcon } from '../components/Icon';
  const SvgComponent = (props = {}) => <svg width='1em' height='1em
focusable={false}
aria-hidden={true}' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6201 17.5C6.06377 17.5 2.37012 13.8063 2.37012 9.25C2.37012 4.69365 6.06377 1 10.6201 1V17.5ZM13.3701 6.5C17.9265 6.5 21.6201 10.1936 21.6201 14.75C21.6201 19.3063 17.9265 23 13.3701 23V6.5Z" fill="#282C2F" /></svg>;
  const IconComponent = convertIcon(SvgComponent, 'activity');
  export default IconComponent;