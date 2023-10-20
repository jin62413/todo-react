import { useEffect, useState } from 'react';

function Clock() {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');

  useEffect(() => {
    const clock = setInterval(() => {
      let time = new Date();
      setHours(time.getHours());
      setMinutes(time.getMinutes());
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div>
      <p>{hours}</p>
      <p>{minutes}</p>
    </div>
  );
}

export default Clock;
