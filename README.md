# react-glitch-fx #

[![npm version](http://img.shields.io/npm/v/react-glitch-fx.svg?style=flat)](https://www.npmjs.com/package/react-glitch-fx "View this project on npm")


Simply wrap your target element with `<GlitchFx />` to start using react-glitch-fx:

```javascript
import GlitchFx from 'react-glitch-fx/lib/GlitchFx';

class Component extends React.Component {

  render() {
    const { shouldShow, imageHeight, imageSrc } = this.props;
    return (<GlitchFx>
        <img src="./images/react.png" alt="test" />
    </GlitchFx>)

  }
}
```