import Title from './Title';
import TodoContainer from './TodoContainer';

function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center gap-[72px]">
      <Title />
      <TodoContainer />
    </div>
  );
}

export default RootLayout;
