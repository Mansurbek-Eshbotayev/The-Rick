import "./assets/styles/index.css"
import { useEffect, useState } from "react"
import Card from "./components/Card/Card"

function App() {

  const [todos, setTodus] = useState([])
  const [Loading, setLoading] = useState(true)
  const [isError, setisError] = useState(false)
 
  useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/?page=1`)
  .then(response => response.json())
  .then(json => {
    setTodus(json.results)
    setLoading(false)
  })
  .catch((err)=>{
    setisError(true)
    setLoading(false)
  })
  },[])


  return (
    <div className="App">
      <div className="main">
        <header className="header">
          <h1 className="header__title">The Rick and Morty API</h1>
        </header>
        <section className="hero">
          <div className="container">
          {Loading && <h1>Loading..</h1>}
     {isError && <h1>error..</h1>}
     {todos.length !== 0 && (
      (todos.length && <ul className='card__list'>
      {
        todos.map(todo => (
          <div key={todo.id}>
            {
              <Card  img={todo.image} name={todo.name} status={todo.status} species={todo.species} location={todo.location.name} ganer={todo.gender}/>
            }
          </div>

        ))
      }
    </ul>)
     )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
