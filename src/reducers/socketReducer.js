const socketReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE': {
            return { ...state, socket: action.payload.socket };
        }
        default:
            return state;
    }
};

export default socketReducer;