import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import './defaultStorybook.css';

addDecorator(story => <div className='tealContentBox'><div className='middle'>{story()}</div></div>);

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);