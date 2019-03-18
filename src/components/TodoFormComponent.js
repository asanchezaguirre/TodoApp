import React from 'react';
import PropTypes from 'prop-types';

import TodoTitleComponent from './TodoTitleComponent';
import TodoDescriptionComponent from './TodoDescriptionComponent';

import Button from '@material-ui/core/Button';


class TodoFormComponent extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.onAddClick}>
                    <div>
                        <TodoTitleComponent getTitleField={this.props.getTitleByRef} />
                    </div>

                    <div>
                        <TodoDescriptionComponent getDescriptionField={this.props.getDescriptionByRef} />
                    </div>

                    <div>
                         <Button type='submit' variant="outlined" size="medium" color="primary">+ Agregar</Button>
                    </div>
                </form>
                
            </div>
        );
    }
}

TodoFormComponent.propTypes = {
    onAddClick: PropTypes.func.isRequired,
    getTitleByRef: PropTypes.func.isRequired,
    getDescriptionByRef: PropTypes.func.isRequired
}

export default TodoFormComponent;
