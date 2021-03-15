const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD': {
            return { ...state, user: action.payload.user };
        }
        default:
            return state;
    }
};

export default userReducer;