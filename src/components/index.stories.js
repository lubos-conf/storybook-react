import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import AwesommeText from './awesomeText';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('AwesommeText', module)
    .add('default', () => (
      <AwesommeText/>
    ))
    .add('with text', () => (
      <AwesommeText text="Lubos Vanicek" />
    ));;