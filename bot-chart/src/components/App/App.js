import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const params = window.location.search.substring(1).split('&');
const week = params[1];

const api = () => {
  return fetch(`http://92.63.107.183/charts/${params[0]}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQzNTFlMTBkZTFjYjFjNjBkNmE2NmYiLCJpYXQiOjE2OTg5MTI3MTB9.JXXhnHbWvfWX6I9eCkh-x4s_6kTevAGxvXON0aDx6HQ'
    },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};

function App() {
  const [one, setOne] = React.useState(0);
  const [two, setTwo] = React.useState(0);
  const [three, setThree] = React.useState(0);
  const [four, setFour] = React.useState(0);
  const [five, setFive] = React.useState(0);
  const [six, setSix] = React.useState(0);
  const [sevene, setSeven] = React.useState(0);

  React.useEffect(() => {
    api()
      .then((data) => {
        if (week === '14') {
          setOne(data.day8);
          setTwo(data.day9);
          setThree(data.day10);
          setFour(data.day11);
          setFive(data.day12);
          setSix(data.day13);
          setSeven(data.day14);
          return;
        }
        if (week === '21') {
          setOne(data.day15);
          setTwo(data.day16);
          setThree(data.day17);
          setFour(data.day18);
          setFive(data.day19);
          setSix(data.day20);
          setSeven(data.day21);
          return;
        }
        if (week === '28') {
          setOne(data.day22);
          setTwo(data.day23);
          setThree(data.day24);
          setFour(data.day25);
          setFive(data.day26);
          setSix(data.day27);
          setSeven(data.day28);
          return;
        }
        setOne(data.day1);
        setTwo(data.day2);
        setThree(data.day3);
        setFour(data.day4);
        setFive(data.day5);
        setSix(data.day6);
        setSeven(data.day7);
      })
      .catch((err) => console.log(err))
  }, [])

  const data = [
    {
      name: 'день 1',
      'оценка за день': one,
      amt: 5,
    },
    {
      name: 'день 2',
      'оценка за день': two,
      amt: 5,
    },
    {
      name: 'день 3',
      'оценка за день': three,
      amt: 5,
    },
    {
      name: 'день 4',
      'оценка за день': four,
      amt: 5,
    },
    {
      name: 'день 5',
      'оценка за день': five,
      amt: 5,
    },
    {
      name: 'день 6',
      'оценка за день': six,
      amt: 5,
    },
    {
      name: 'день 7',
      'оценка за день': sevene,
      amt: 5,
    },
  ];

  return (
    <section className='page'>
      <h1 className='title'>График самочувствия за 7 дней</h1>
      <div className='conteiner'>
        <LineChart
          width={week === '30' ? 1000 : 500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="оценка за день" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </section>
  );
}

export default App;
