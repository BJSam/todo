import { combineReducers } from 'redux';
import { getTodo, setTodo } from '../actions';
export interface todoObj {
    'date':number,
    'title':string,
    'content':string,
    'lv':'low'|'medium'|'heigh'
}
export interface stateInterface {
'todo':Array<todoObj>,
}
const initialState: stateInterface = {
   todo:[]
};
export const dataReducer = (state = initialState, action:any) => {
    switch (action.type) {
       case getTodo: return state;
       case setTodo: return {
           ...state,
           todo:[action.data,...state.todo]
       };
       default: return state
    }
};

export default combineReducers({
    data: dataReducer,
});
