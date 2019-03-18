// Agregar tarea
let TodoId = 0;

export const addTodo = (title, description) => {
    return {
        type: 'ADD_ITEM',
        id: TodoId++,
        title,
        description,
    }
}

//Borrar tarea
export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id
    }
}

//Alternar tarea
export const toggleItem = (id) => {
    return {
        type: 'TOGGLE_ITEM',
        id
    }
}

//Editar tarea
export const editItemSave = (id, title, description) => {
    return {
        type: 'EDIT_ITEM_SAVE',
        id,
        title,
        description
    }
}

//Filtrar
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
}

//Tiempo
export const playTimer = () => {
  return {
    type: 'TIMER_PLAY',
  }
}