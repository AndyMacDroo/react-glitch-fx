import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class GlitchFx extends React.Component {

    renderWithGhostChild(toRender) {
        return (<div>
            <div className="glitch" style={{ position: 'relative', marginTop: '-7px' }}>{toRender}</div>
            <div className="minor-glitch" style={{ position: 'absolute', top: 0, opacity: 0.5 }}>{toRender}</div>
        </div>)
    }
    render() {

        return (
            <div>
                {this.renderWithGhostChild(this.props.children)}
            </div>
        )
    }
}

export default GlitchFx;

GlitchFx.propTypes = {
    children: PropTypes.node.isRequired,
};
