
import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Route } from 'react-router';
import { Routes } from 'react-router';

import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm.jsx';
import MailboxList from './components/MailboxList/MailboxList.jsx';
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx';
import LetterForm from './components/LetterForm/LetterForm.jsx';


import './App.css'



const App = () => {

  const initialState = [
  { _id: 1, boxSize: 'Small', boxOwner: 'Alex' },
  { _id: 2, boxSize: 'Large', boxOwner: 'Jordan' },
];

const [mailboxes, setMailboxes] = useState(initialState);
  const addBox = (formData) => {
    const newMailbox = {
    _id: mailboxes.length +1, 
    ...formData,
  }
  setMailboxes([...mailboxes, newMailbox]);
  };

 const [letters, setLetters] = useState([]);

const addLetter = (formData) => {
  setLetters([...letters, formData]);
};



  return (
    <>
      <NavBar />
      <h1>Reactville Post Office</h1>
      <Routes>
        <Route path="/" element={<main><h2>Post Office</h2></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}/>
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
      </Routes>
    </>
    )
};

export default App
