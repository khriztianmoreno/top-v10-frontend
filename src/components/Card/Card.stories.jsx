/* eslint-disable */
import Card from './index';

export default {
  title: 'Componets/Card',
  component: Card,
  argTypes: {
    date: { control: 'date' },
    likeCount: { control: 'range' },
  },
};

const Template = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Creando un storybook',
  author: 'Cristian Moreno',
};

export const Full = Template.bind({});
Full.args = {
  title: 'Tacos arabes',
  author: 'khriztianmoreno',
  description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero exercitationem odio, doloremque soluta enim, corporis labore quidem officia eius quisquam iusto eligendi natus molestiae culpa ab possimus cum, quia eum.`,
  date: new Date().toDateString(),
  liked: true,
  likeCount: 10,
};
