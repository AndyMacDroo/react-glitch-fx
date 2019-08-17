import React from 'react';

import { storiesOf } from '@storybook/react';
import GlitchFx from '../src';

storiesOf('GlitchFx', module).add('rendersWithChildImage', () =>
  <GlitchFx>
    <img src="./images/react.png" alt="test" />
  </GlitchFx>);

storiesOf('GlitchFx', module).add('rendersWithText', () =>
  <GlitchFx>
    {<div>"Hello"</div>}
  </GlitchFx>);


storiesOf('GlitchFx', module).add('rendersWithTextAndImageCombo', () =>
  <GlitchFx>
    <img src="./images/mickey.jpg" alt="test" />
    {<div>"Hello"</div>}
  </GlitchFx>);
