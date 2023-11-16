import InputBtn from '../assets/input-btn.svg?react';

function TodoInput({ todo, setTodo }) {
  const onSubmit = (e) => {
    e.preventDefault();

    // 새로운 todo text 가져오기
    const formData = new FormData(e.currentTarget);
    const text = formData.get('todoText');
    // 기존 배열에 새로운 데이터 추가
    const newTodo = [
      ...todo,
      {
        id: new Date().getTime(),
        text,
        checked: false,
      },
    ];
    // 기존 배열을 새로운 배열로 설정
    setTodo(newTodo);
    // input 리셋
    e.currentTarget.reset();
  };

  // console.log(todo);

  return (
    <form onSubmit={onSubmit} className="relative h-[60px] mb-6">
      <input
        type="text"
        id="todoText"
        name="todoText"
        className="w-[918px] h-[60px] rounded-full"
        required
      />
      <button
        type="submit"
        className="absolute top-1/2 -translate-y-1/2 right-3"
      >
        <InputBtn />
      </button>
    </form>
  );
}

export default TodoInput;
