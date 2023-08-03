import { ref, computed, watch, onMounted, onUpdated } from 'vue';

interface ListProps {
  id: number;
  value: string;
  isDone: boolean;
}

export default function (max: number) {
  const todoList = ref<ListProps[]>([]);
  const todoText = ref<string>('');

  function addTodoItem() {
    if (max === todoList.value.length + 1) {
      alert(`The max is: ${max}`);
      return;
    }

    todoList.value.push({
      id: Math.random() * 1000,
      value: todoText.value,
      isDone: false,
    });

    todoText.value = '';
  }

  function toogleIsDone(id: number) {
    const matchId = todoList.value.filter((todo) => todo.id === id);

    if (matchId.length === 0) return;
    const todoItem = matchId[0];

    todoItem.isDone = !todoItem.isDone;
  }

  const computedTodos = computed(
    () =>
      todoList.value.filter((item) => {
        return item.isDone;
      }).length
  );

  watch(computedTodos, () => {
    alert('Good Job');
  });

  onMounted(() => {
    console.log('mounted');
  });

  onUpdated(() => {
    console.log('updated');
  });

  return {
    // data
    todoList,
    todoText,

    // Methods
    addTodoItem,
    toogleIsDone,

    // Computed
    computedTodos,
  };
}
