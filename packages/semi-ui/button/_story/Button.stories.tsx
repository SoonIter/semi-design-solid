import { JSX } from 'solid-js/jsx-runtime';
import SemiButton, { ButtonProps } from '../Button';
export default {
  title: 'Button',
  argTypes: {
    content: { control: 'text', value: 'helloll' },
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      options: ['default', 'small', 'large'],
    },
  },
};
const Button = (props: JSX.IntrinsicAttributes & ButtonProps & { content: string }) => (
  <SemiButton {...props}>{props.content ?? 'hello'}</SemiButton>
);
export { Button };
