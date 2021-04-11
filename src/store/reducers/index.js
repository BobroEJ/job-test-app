function reducer(state, action) {
    switch (action.type) {
        case 'DATA_LOADED': return {
            data: action.data,
            loading: false
        };
        default: return state;
    }
}

export default reducer;