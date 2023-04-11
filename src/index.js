import store from "./store";
import * as actions from "./actionTypes.js";
import { bugAdded ,bugResolved} from "./actions";

const unsuscribe = store.suscribe(() => {
    console.log("store changes! ", store.getState());
})

store.dispatch(bugAdded("bug1"));
store.dispatch(bugResolved(1));
// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload: {
//         description: "bug1"
//     }
// });

unsuscribe();

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1
    }
});

console.log(store.getState());