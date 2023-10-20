import React from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const params = window.location.search.substring(1).split('&');

const api = () => {
  return fetch(`http://62.84.120.235:3001/users/${params}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTAyZTkxNGVlN2VkZWFhNTZjZTAxOWQiLCJpYXQiOjE2OTY2MDExMTZ9.FLTASSzUuXgx1-B9D5H28jvspNsvlAkWY_gWdjjQ7BI'
    },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  // return fetch(`http://localhost:3001/users/${params}`, {
  //   method: 'GET',
  //   credentials: 'include',
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8',
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTAxYmIyYTRhNzlhMGMxNWM2MmI2YTMiLCJpYXQiOjE2OTY1MDMzMjh9.swce9LrKgu9A42SvwGo-trjquoARVmx73_HIxN2YBQE'
  //   },
  // })
  //   .then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     return Promise.reject(`Ошибка: ${res.status}`);
  //   });

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
      .then((user) => {
        setOne(user.graphStatus.dayOne);
        setTwo(user.graphStatus.dayTwo);
        setThree(user.graphStatus.dayThree);
        setFour(user.graphStatus.dayFour);
        setFive(user.graphStatus.dayFive);
        setSix(user.graphStatus.daySix);
        setSeven(user.graphStatus.daySeven);
      })
      .catch((err) => console.log(err))
  },[])

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
          width={500}
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
