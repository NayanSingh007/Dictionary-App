import './App.css';
import React, {useState, useEffect} from 'react';
import Loading from './loading';
import Output from './output';
import Form from './form';

function App() {

  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [data,setData] = useState([]);
  
  useEffect(() => {
    fetchWord('game');
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchWord(search);
  }

  const fetchWord = async (a) => {
    setLoading(true);
    try {
      const response = await fetch(url + a);
      const data = await response.json();
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);  
      console.log(error); 
    }
  }

  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Form handleSubmit={handleSubmit} setSearch={setSearch} search={search}/>
      {loading ? <Loading/> : <Output data={data}/>}
    </div>
  );
}

export default App;
