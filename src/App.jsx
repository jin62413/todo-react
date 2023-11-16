import { useState } from 'react';
import Login from './layout/Login';
import RootLayout from './layout/RootLayout';

function App() {
  const [isLogin, setisLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center gap-[72px]">
      {isLogin ? <RootLayout /> : <Login />}
    </div>
  );
}

export default App;
