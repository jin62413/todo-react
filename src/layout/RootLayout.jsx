import Clock from './Clock';
import Title from './Title';
import Today from './Today';
import Todo from './Todo';

function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center gap-[72px]">
      <Title />
      <div className="flex">
        <div>
          <Today />
          <Clock />
        </div>
        <Todo />
      </div>
    </div>
  );
}

export default RootLayout;
