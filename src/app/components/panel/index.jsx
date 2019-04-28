import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

const Panel = ({ content }) => (
    <div className="panel-wrapper">
        {content}
    </div>
)

Panel.propTypes = {
    content: PropTypes.node
}

export default Panel;