export const todoReducer = (iniState=[],action) =>{

   switch (action.type) {
    case '[TODO] Agregar Todo':
        return[ ...iniState, action.payload ]

    case '[TODO] Eliminar Todo':
        return iniState.filter(todo => todo.id !==action.payload);
    
    case '[TODO] Marcar Todo':
        return iniState.map(todo => {
            if (todo.id === action.payload) {
                return{
                    ...todo,
                    done:!todo.done
                }
            }
            return todo;
        })
    default:
        return iniState
} 
}

