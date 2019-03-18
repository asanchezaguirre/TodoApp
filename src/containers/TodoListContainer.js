import React from 'react';
import { connect } from 'react-redux';
import TodoListComponent from '../components/TodoListComponent';
import { removeItem, toggleItem, editItemSave } from '../actions/index';

const mapStateToProps = state => {
    return {
        Items: state.items
    }
}

//Cambiar estado con dispatch
const mapDispatchToProps = dispatch => {
    let titleField;
    let descriptionField;
    return {
        getTitleFieldByRef: node => {
            titleField = node;
        },

        getDescriptionFieldByRef: node => {
            descriptionField = node;
        },

        onEditClick: id => {
            //Activa el modo de un elemento
            dispatch(toggleItem(id));
        },

        onRemoveClick: id => {
            //Activa dispatch para remover
            dispatch(removeItem(id));
        },

        onCancelClick: id => {
            dispatch(toggleItem(id));
        },

        onSaveClick: id => {
            // checa que los inputs no estén vacíos
            if (!titleField.value.trim() || !descriptionField.value.trim()) {
                //Si es así, no hará nada
                return;
            }
            //de lo contrario edita estado 
            dispatch(editItemSave(id, titleField.value, descriptionField.value));
        }
    }
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListComponent)

export default TodoList;