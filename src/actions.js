import * as actions from "./actionTypes.js";

export const bugAdded= description => ({
    type:actions.BUG_ADDED,
    payload: {
        description :description
    }
});

export const bugResolved= id => ({
    type: actions.BUG_REMOVED,
    payload:{
        id
    }

})