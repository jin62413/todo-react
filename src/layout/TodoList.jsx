import TodoListItem from './TodoListItem';

function TodoList({ todo, setTodo }) {
  // const { id, text, checked } = todo;
  // console.log('todolist', todo);
  // const { id, text, checked } = todo;
  return (
    <ul className="w-[500px] h-[600px] p-7 rounded-[28px] bg-white bg-opacity-70 flex flex-col gap-3">
      {todo.map(({ id, text, checked }) => (
        <TodoListItem
          key={id}
          id={id}
          text={text}
          checked={checked}
          todo={todo}
          setTodo={setTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
