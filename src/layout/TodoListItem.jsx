import CheckedIcon from '../assets/checked.svg?react';
import FillCheckedIcon from '../assets/fill-checked.svg?react';
import EditIcon from '../assets/icon-edit.svg?react';
import DoneIcon from '../assets/icon-done.svg?react';
import DeleteIcon from '../assets/icon-delete.svg?react';
import CancleIcon from '../assets/icon-cancle.svg?react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function TodoListItem({ id, text, checked, todo, setTodo }) {
  const [isEdited, setEdited] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const editInputRef = useRef();
  // const { id, text, checked } = todo;
  // console.log('item: ', todo);
  // const todoList = Object.entries(todo).map(([key, value]) => ({
  //   key,
  //   value,
  // }));
  // console.log('newTodo', todoList);

  // edit모드일 때 input에 포커스
  useEffect(() => {
    if (isEdited) {
      editInputRef.current.focus();
    }
  }, [isEdited]);

  const onChecked = (id, checked) => {
    const newTodo = todo.map((item) => {
      // 리스트 중에서 클릭한 todo의 id와 일치하는 것을 찾아 checked상태 바꾸기
      if (item.id === id) {
        return {
          ...item,
          checked: !checked,
        };
      }

      return item;
    });

    setTodo(newTodo);
  };

  const onDelete = (id) => {
    const newTodo = todo.filter((item) => {
      return item.id !== id;
    });

    setTodo(newTodo);
  };

  // edit 모드로 바꾸기
  const onEditToggle = () => {
    setEdited(!isEdited);
  };

  // input 텍스트 변경
  const onEditInput = (e) => {
    setEditedText(e.target.value);
  };

  // 수정한 todo 저장
  const onEditSubmit = () => {
    const newTodo = todo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          text: editedText,
        };
      }

      return item;
    });

    setTodo(newTodo);
    setEdited(false);
  };

  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
          onChange={() => onChecked(id, checked)}
          id={id}
          type="checkbox"
          defaultChecked={checked}
          className="hidden"
        />
        <label htmlFor={id}>
          {checked && checked ? (
            <FillCheckedIcon className="w-7" />
          ) : (
            <CheckedIcon className="w-7" />
          )}
        </label>
        {isEdited ? (
          <input
            type="text"
            ref={editInputRef}
            value={editedText}
            onChange={onEditInput}
          />
        ) : (
          // <input type="text" value={text} />
          <span>{text}</span>
        )}
      </div>
      {isEdited ? (
        <div className="flex items-center gap-3">
          <DoneIcon onClick={() => onEditSubmit(id, text)} className="w-7" />
          <CancleIcon onClick={onEditToggle} className="w-7" />
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <EditIcon onClick={onEditToggle} className="w-7" />
          <DeleteIcon onClick={() => onDelete(id)} className="w-7" />
        </div>
      )}
    </li>
  );
}

export default TodoListItem;
