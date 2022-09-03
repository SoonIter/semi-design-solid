import { convertIcon } from '../components/Icon';
  const SvgComponent = (props = {}) => <svg width='1em' height='1em
focusable={false}
aria-hidden={true}' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8787 3.5C11.8787 2.67157 12.5502 2 13.3787 2H19.8787C21.2594 2 22.3787 3.11929 22.3787 4.5V11C22.3787 11.8284 21.7071 12.5 20.8787 12.5C20.0502 12.5 19.3787 11.8284 19.3787 11V7.12136L15.4425 11.1579C16.1141 12.2816 16.5 13.5957 16.5 15C16.5 19.1421 13.1421 22.5 9 22.5C4.85786 22.5 1.5 19.1421 1.5 15C1.5 10.8579 4.85786 7.5 9 7.5C10.6514 7.5 12.1782 8.03374 13.4172 8.93812L17.2574 5L13.3787 5C12.5502 5 11.8787 4.32843 11.8787 3.5ZM4.5 15C4.5 12.5147 6.51472 10.5 9 10.5C11.4853 10.5 13.5 12.5147 13.5 15C13.5 17.4853 11.4853 19.5 9 19.5C6.51472 19.5 4.5 17.4853 4.5 15Z" fill="currentColor"/></svg>;
  const IconComponent = convertIcon(SvgComponent, 'activity');
  export default IconComponent;