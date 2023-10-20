import Clock from './Clock';
import Title from './Title';
import Today from './Today';
import Todo from './Todo';

function RootLayout() {
  return (
    <>
      <Title />
      <div>
        <Today />
        <Clock />
      </div>
      <Todo />
    </>
  );
}

export default RootLayout;
