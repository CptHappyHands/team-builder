// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Team from './components/Team';
import Form from './components/Form';


const initialFormValues = {
  memberName: '',
  email: '',
  role: '',
}

const dummyTeam = [
  { memberName: 'Andrew', email: 'helloworld@gmail.com', role: 'Student' },
  { memberName: 'Amalee', email: 'goodbyeworld@gmail.com', role: 'Middle Management' },
  { memberName: 'Midnight', email: 'burnthotdog666@gmail.com', role: 'Professional Poker Player' },
]

export default function App() {
const [teams, setTeams] = useState(dummyTeam)

const [formValues, setFormValues] = useState(initialFormValues)

const updateForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue})
}

const submitForm = () => {
  const newTeamMember = {
    memberName: formValues.memberName,
    email: formValues.email,
    role: formValues.role,
  }
  setTeams([...teams, newTeamMember])
}



//   if (!newTeamMember.memberName || !newTeamMember.email || !newTeamMember.role) return

//   axios.post('fakeapi.com', newTeamMember)
//   .then(res => {
//     const memberFromElsewhere = res.data
//     setTeams([memberFromElsewhere, ...teams])
//     setFormValues(initialFormValues)
//   })
// }

// useEffect(() => {
//   axios.get('fakeapi.com').then(res => setTeams(res.data))
// }, [])

return (
  <div className="App">
      <div className="container">
      {
      teams.map(team => {
        return (
          
          <Team key={team.id} details={team} />
          
        )
      })
    }
    <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
    
    </div>
  </div>
)

}

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

  
