import { JSX } from 'solid-js/jsx-runtime';
import Button from '../Button';
import ButtonGroup, { ButtonGroupProps } from '../buttonGroup';
import { strings } from '@douyinfe/semi-foundation/button/constants';

const { htmlTypes, btnTypes, sizes, themes } = strings;
export default {
  title: 'ButtonGroup',
  argTypes: {
    content: { control: 'text', value: 'hello' },
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    loading: { control: 'boolean', value: false },
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
  },
};
export const ButtonGroupDemo = (props: JSX.IntrinsicAttributes & ButtonGroupProps) => (
  <ButtonGroup aria-label="ButtonGroup demo" {...props}>
    <Button>复制</Button>
    <Button type="primary">查找</Button>
    <Button type="danger">粘贴</Button>
  </ButtonGroup>
);
