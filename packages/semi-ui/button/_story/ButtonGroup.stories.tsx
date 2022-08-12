import { JSX } from 'solid-js/jsx-runtime';
import Button from '../Button';
import ButtonGroup, { ButtonGroupProps } from '../buttonGroup';

export default {
  title: 'ButtonGroup',
  argTypes: {
    content: { control: 'text', value: 'hello' },
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      options: ['default', 'small', 'large'],
    },
  },
};
export const ButtonGroupDemo = (props: JSX.IntrinsicAttributes & ButtonGroupProps) => (
  <ButtonGroup aria-label="ButtonGroup demo" disabled={true} size="large" {...props}>
    <Button>复制</Button>
    <Button type="primary">查找</Button>
    <Button type="danger">粘贴</Button>
  </ButtonGroup>
);
