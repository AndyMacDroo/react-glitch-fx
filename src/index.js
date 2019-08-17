import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class GlitchFx extends React.Component {

    renderWithGlitch(toRender) {
        return (<div>
            <div className="glitch" style={{ position: 'relative' }}>{toRender}</div>
        </div>)
    }
    render() {

        return (
            <div>
                {this.renderWithGlitch(this.props.children)}
            </div>
        )
    }
}

export default GlitchFx;

GlitchFx.propTypes = {
    children: PropTypes.node.isRequired,
};
