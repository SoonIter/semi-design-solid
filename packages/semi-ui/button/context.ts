import { Size, Theme, Type } from './Button';

export const ButtonGroupContext = createContext<
{ size?: Size; disabled?: boolean; type?: Type; theme?: Theme }
>({});
