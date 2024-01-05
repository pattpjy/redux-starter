import store from './store';
import { addTask, removeTask } from './action';

store.subscribe(() => {
  console.log('Update', store.getState());
});

store.dispatch(addTask('Task 1'));
console.log(store.getState());
store.dispatch(removeTask(1));
console.log(store.getState());
