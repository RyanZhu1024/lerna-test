import { configure } from '@storybook/react';
const req = require.context('../packages/', true, /stories\/.+.js$/);

const loadStories = () => {
  require('../src/stories');
  req.keys().forEach(module => req(module));
};

configure(loadStories, module);
