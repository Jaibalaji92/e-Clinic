export function reducer(state, action) {
    console.log('event dispatched state : ', state);
    console.log('event dispatched action : ', action);
    switch (action.type) {
        case 'SHOW_PRODUCT_CODE': return { ...state, showProd: action.payload};
        default: return state;
    }

}