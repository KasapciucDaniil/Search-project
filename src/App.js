import React, { useState } from 'react'
import JSONDATA from './MOCK_DATA.json'
import avatar from './avatar.png'
import './App.css';

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <form className="col-lg-4 d-flex mt-5">
            <input 
               className="form-control me-2" 
               type="text" 
               placeholder="Search..." 
               onChange={event => {setSearch(event.target.value)}}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <div className="container">
            <div className="row">
              {
                JSONDATA.filter((val) => {
                  if (search === "") {
                    return val
                  } else if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
                    return val
                  }
                }).map((val, key) => {
                  return (
                      <div className="card col-md-3 mt-3 mb-3 me-2" key={key}>
                        <img src={avatar} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{val.first_name}</h5>
                          <p className="card-text">{val.last_name}</p>
                        </div>
                        <div className="card-body">
                        </div>
                      </div> 
                   )
                })  
              }
            </div>
          </div>

        </div>
      </div> 
    </div>
  );
}

export default App;
