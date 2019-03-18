import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';

class TodoTitleComponent extends React.Component {

    render() {
        return (
            <input
                type="text"
                placeholder="Tarea"
                ref={this.props.getTitleField}
            />
        );
    }
}

TodoTitleComponent.propTypes = {
    getTitleField: PropTypes.func.isRequired
}

export default TodoTitleComponent;