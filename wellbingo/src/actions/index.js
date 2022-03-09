export const LIST_ADDED = 'LIST_EDITED'
export const Edit = (editText, index) => {
    return {
        type: 'LIST_EDITED',
        payload: {
            value: editText,
            index: index
        }
    }
}