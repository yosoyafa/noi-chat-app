export const createSocket = socket => {
    return {
        type: 'CREATE',
        payload: { socket }
    }
};

export const addUser = user => {
    return {
        type: 'ADD',
        payload: { user }
    }
};
