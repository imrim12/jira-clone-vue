import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.dark,
    // brandTitle: 'My custom storybook',
    // brandUrl: 'https://example.com',
    // brandImage: 'https://example.com/example.png',
  }
});
