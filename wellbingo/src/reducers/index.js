export const listReducer = (state=[], action) => {
    switch (action.type) {
        case 'LIST_EDITED':
            const copiedState = [...state];
            copiedState[action.payload.index] = action.payload.value;
            return copiedState
    }
}