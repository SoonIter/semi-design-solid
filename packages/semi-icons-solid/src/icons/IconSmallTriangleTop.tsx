import { convertIcon } from '../components/Icon';
  const SvgComponent = (props = {}) => <svg width='1em' height='1em
focusable={false}
aria-hidden={true}' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0839 16.3212H6.9524C6.55305 16.3212 6.31486 15.8761 6.53638 15.5438L11.6021 7.94521C11.8 7.64834 12.2363 7.64834 12.4342 7.94521L17.4999 15.5438C17.7214 15.8761 17.4832 16.3212 17.0839 16.3212Z" fill="currentColor"/></svg>;
  const IconComponent = convertIcon(SvgComponent, 'activity');
  export default IconComponent;