import { useEffect, useState } from 'react';

function Today() {
  const [today, setToday] = useState('0000년 00월 00일 0요일');

  useEffect(() => {
    let time = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    setToday(
      time.getFullYear() +
        '년 ' +
        (time.getMonth() + 1) +
        '월 ' +
        time.getDate() +
        '일 ' +
        week[time.getDay()] +
        '요일'
    );
  }, []);

  return (
    <>
      <p className="text-[28px] text-white font-semibold mb-3">{today}</p>
    </>
  );
}

export default Today;
