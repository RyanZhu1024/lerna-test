import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StatefullReactButton from '../StatefullReactButton';

storiesOf('Stateful Button', module).add('stateful react Button', () => (
  <StatefullReactButton handleOnclick={action('clicked')} />
));
