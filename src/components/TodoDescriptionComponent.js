import React from 'react';
import PropTypes from 'prop-types';

class TodoDescriptionComponent extends React.Component {

    render() {
        return (
            <textarea
                type="text"
                placeholder="Descripción"
                ref={this.props.getDescriptionField}
            />
        );
    }
}

TodoDescriptionComponent.propTypes = {
    getDescriptionField: PropTypes.func.isRequired
}

export default TodoDescriptionComponent;