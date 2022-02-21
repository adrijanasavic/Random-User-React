import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {


  const feachData = () => {
    return axios.get('https://randomuser.me/api/?results=21')
      .then((res) => {
        const { results } = res.data
        console.log(results);
        return results
      })
      .catch((err) => {
        console.log(err);
      }, [])
  }

  const [people, setPeople] = useState([])

  useEffect(() => {
    feachData().then(apiPeople => {
      setPeople(apiPeople)
    })
  })
  return (
    <section className="neon bd-container">
      <div className="neon__container">
        {people.map((person, index) =>
          <div className="neon__card" key={index}>
            <img className='img' src={person.picture.large}></img>
            <h1 className="neon__title">Name: {person.name.first} </h1>
            <div className="neon__description">
              <div>Email: {person.email}</div>
              <div>Gender: {person.gender.toUpperCase()}</div>
              <div>Username: {person.login.username}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
