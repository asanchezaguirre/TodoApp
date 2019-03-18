import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class TodoItemComponent extends React.Component {

    render() {

        //Declarando variables
        let id = this.props.item.id;
        let title = this.props.item.title;
        let message = this.props.item.message;
        let date = this.props.item.date;
        let isTriggeredEdit = this.props.item.isTriggeredEdit;

        //La condición sólo se lleva a cabo si presionas el botón editar
        if (this.props.item.isTriggeredEdit) {
            return (
                <div className='container__tile'>

                    <input
                        classNme='style_input'
                        type="text"
                        defaultValue={this.props.item.title}
                        ref={this.props.getTitleFieldByRef}
                    />
                    <br/>
                    <textarea
                        type="text"
                        defaultValue={this.props.item.description}
                        ref={this.props.getDescriptionFieldByRef}
                    />
                    <br/>
                    <Button  variant="outlined" size="medium" color="primary" onClick={this.props.onSaveClick}>Guardar</Button>
                    <Button  variant="outlined" size="medium" color="primary" onClick={this.props.onCancelClick}>Cancelar</Button>
                </div>
            );
        }
        else {
            return (
                <div className='container__tile'>
                    <div>
                        <p>Tarea:</p>
                        <p>{this.props.item.title}</p>
                        <p>Descripción:</p>
                        <p>{this.props.item.description}</p>
                    </div>
                    
                    <Button  variant="outlined" size="medium" color="primary" onClick={this.props.onRemoveClick}>Eliminar</Button>
                    <Button variant="outlined" size="medium" color="primary" onClick={this.props.onEditClick}>Editar</Button>
                    
                </div>
            );
        }
    }
}

TodoItemComponent.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        isTriggeredEdit: PropTypes.bool
    }),
    getTitleFieldByRef: PropTypes.func.isRequired,
    getDescriptionFieldByRef: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
}

export default TodoItemComponent;
