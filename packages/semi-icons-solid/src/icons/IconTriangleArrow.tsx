import { convertIcon } from '../components/Icon';
  const SvgComponent = (props = {}) => <svg width='1em' height='1em
focusable={false}
aria-hidden={true}' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M24 9L24 10C20 10 18.5 11 16.5 13C14.5 15 14 16 12 16C10 16 9.5 15 7.5 13C5.5 11 4 10 -4.37115e-08 10L0 9L24 9Z" fill="currentColor"/></g><defs><clipPath id="clip0"><rect width="24" height="24" fill="white" transform="translate(24) rotate(90)"/></clipPath></defs></svg>;
  const IconComponent = convertIcon(SvgComponent, 'activity');
  export default IconComponent;