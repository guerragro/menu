import * as fromAction from './todo.action';
import { TODO_ACTION } from './todo.action';
import { ActionReducerMap } from '@ngrx/store';

export interface TodoState {
  task: string;
  id: number;
}

export const InitialTodoState: TodoState = {
  task: 'hello world',
  id: null
};

export function TodoReducer(state = InitialTodoState, action: fromAction.Action) {
  console.log('Редьюсер');
  switch (action.type) {
    case TODO_ACTION.ADD_TODO:
      return {
        ...state, task: action.payload, id: 1
      };
    case TODO_ACTION.DEL_TODO:
      return state;
    default:
      return state;
  }
}

// export const reducers: ActionReducerMap<TodoState, any> = {
//
// };

//   export const reducers: ActionReducerMap<State> = {
//   films: fromFilms.reducer
// };
