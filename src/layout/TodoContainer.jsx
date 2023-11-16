import { useState } from 'react';
import Clock from './Clock';
import Today from './Today';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoContainer() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: '해야할 일',
      checked: true,
    },
    {
      id: 2,
      text: '해야할 일2',
      checked: false,
    },
    {
      id: 3,
      text: '해야할 일3',
      checked: true,
    },
  ]);

  return (
    <div className="flex flex-col items-center gap-[72px]">
      <div className="flex items-center gap-11">
        <div>
          <Today />
          <Clock />
        </div>
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
      <TodoInput todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default TodoContainer;
