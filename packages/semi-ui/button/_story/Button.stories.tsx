import { JSX } from 'solid-js/jsx-runtime';
import Button, { ButtonProps } from '../Button';
import { cssClasses, strings } from '@douyinfe/semi-foundation/button/constants';

const { htmlTypes, btnTypes, sizes, themes } = strings;
export default {
  title: 'Button',
  argTypes: {
    content: { control: 'text', value: 'hello world' },
    size: {
      control: { type: 'select' },
      options: sizes,
    },
    type: {
      control: { type: 'select' },
      options: btnTypes,
    },
    theme: {
      control: { type: 'select' },
      options: themes,
    },
    onClick: { action: 'onClick' },
    block: { control: 'boolean', value: false },
    loading: { control: 'boolean', value: false },
    disabled: { control: 'boolean', value: false },
    htmlTypes: { control: { type: 'select' }, options: htmlTypes },
  },
};
const Demo = (props: JSX.IntrinsicAttributes & ButtonProps & { content: string }) => (
  <Button {...props}>{props.content ?? 'hello'}</Button>
);
export { Demo };
