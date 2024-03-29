import store from './store/configStore';
import { addTask, removeTask, completedTask, fetchTodo } from './store/tasks';

const unsubscribe = store.subscribe(() => {
  console.log('Updated', store.getState());
});

store.dispatch(addTask('Task 1'));
store.dispatch(addTask('Task 2'));
console.log(store.getState());

// unsubscribe();
store.dispatch(completedTask(2));
store.dispatch(removeTask(1));
store.dispatch(fetchTodo());
console.log(store.getState());
