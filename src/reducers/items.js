const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    isTriggeredEdit: false,
                }
            ]

        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.id)

        case 'TOGGLE_ITEM':
            return state.map(item => {
                //Si se encuentra un elemento deseado
                //Cambia por isTriggeredEdit
                if (item.id === action.id) {
                    return {
                        ...item,
                        isTriggeredEdit: !item.isTriggeredEdit
                    };
                }
                return item;
            })
        
        case 'EDIT_ITEM_SAVE':
            return state.map(item => {
                //Si se encuentra un elemento deseado
                //Cambia por isTriggeredEdit
                if (item.id === action.id) {
                    return {
                        ...item,
                        title: action.title,
                        description: action.description,
                        isTriggeredEdit: !item.isTriggeredEdit
                    }
                }
                else {
                    return item;
                }
            })

        default:
            return state;
    }
}

export default items;