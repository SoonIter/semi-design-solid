import Divider from '..';
import Demo from './Demo';

const VerticalDivider = () => {
  return (
    <div>
      <span>Semi Design</span>
      <Divider layout="vertical" />
      <span>Semi Design</span>
      <Divider layout="vertical" />
      <span>Semi Design</span>
    </div>
  );
};
const Title = () => {
  return (
    <div>
      <p>Semi Design </p>
      <Divider>Title</Divider>
      <p>Semi Design </p>
      <Divider align="left">Title</Divider>
      <p>Semi Design </p>
      <Divider align="right">Title</Divider>
    </div>
  );
};
export { Demo, VerticalDivider, Title };

export default {
  title: 'Divider',
};
