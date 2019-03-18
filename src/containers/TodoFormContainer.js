import React from 'react';
//Conectar con el estado, sólo para React
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import TodoFormComponent from '../components/TodoFormComponent';

//Cambiar el estado
const mapDispatchToProps = dispatch => {
    let boundTitle;
    let boundDescription;

    return {
        getTitleByRef: node => { boundTitle = node; },
        getDescriptionByRef: node => { boundDescription = node; },

        //Form
        onAddClick: e => {
            e.preventDefault();

            //Si los dos inputs están vacíos
            if (!boundTitle.value.trim() || !boundDescription.value.trim()) {
                return;
            }

            //Cambia el estado con dispatch y la accion
            dispatch(addTodo(boundTitle.value, boundDescription.value));

            //Dejar los inputs en blanco
            boundTitle.value = '';
            boundDescription.value = '';
        }
    }
}

const TodoForm = connect(null, mapDispatchToProps)(TodoFormComponent);

export default TodoForm;