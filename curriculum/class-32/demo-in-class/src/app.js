import React { useState } from 'react';
import axios from 'axios';
import PersonRow from './components/PersonRow';
import AppHeader from './components/AppHeader';

const App = () => {

  // we initially set the list of people to an empty list/array
  const [people, setPeople] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  // used so it does not render before getting the response / used in the finally clause below
  const [loading, setLoading] = useState(false);

  const getPeople = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3001/people');
      setPeople(response.data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  const _handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post('http://localhost:3001/people',
      {name: event.target.name.value,
      birthdate: event.target.birthdate.value});

      if (response.status === 201){
        setPeople([...people, response.data])
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  // useEffect runs whatever function is given to it, and contains a list of triggers on which it should run
  // [] = on page load
  useEffect( () => { getPeople() }, []);

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  return(
    <>
      <AppHeader peopleNumber={people.length} />
      {/* <h1>People and Birthdays</h1> */}
      <div style={{color: 'red'}}>{errorMessage}</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (<PersonRow name={person.name} birthdate={person.birthdate} /> ))}
          {/* {people.map(person => (
            <tr>
              <td>
                {person.name}
              </td>
              <td>
                {person.birthdate}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  )
}
<div className='newPerson'>
  <h3>Add New Person</h3>
  <form onSubmit={_handleSubmit}>
    <input type='test' placeholder='Name (required)' name='name' />
    <input type='test' placeholder='Birthdate (optional' name='birthdate' />
    <input type='submit' value='Add Person' />
  </form>
</div>

export default App;

