import { create } from '@storybook/theming';
import theme from './_theme.scss';

export default create({
  ...theme,
  brandTitle: '普登尔',
  brandUrl: 'https://vuesion.herokuapp.com',
  brandImage: 'https://vuesion.herokuapp.com/logo.png',
});
