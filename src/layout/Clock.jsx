import { useEffect, useState } from 'react';

function Clock() {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');

  useEffect(() => {
    const clock = setInterval(() => {
      let time = new Date();
      setHours(time.getHours());
      if (time.getHours() == 0) {
        setHours('00');
      }

      setMinutes(time.getMinutes());
      if (time.getMinutes() < 10) {
        setMinutes('0' + time.getMinutes());
      }
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div className="text-white text-[300px] font-extrabold leading-[80%]">
      <p className="mb-11">{hours}</p>
      <p>{minutes}</p>
    </div>
  );
}

export default Clock;
