import { useState } from 'react'
import './App.css'
import CreateMessage from './components/CreateMessage.jsx'
import MessageList from './components/MessageList.jsx'

function App() {
  const [textInput, setTextInput] = useState('');
  const [message, setMessage] = useState([]);

  let name = "Sulaiman";

  return (
    <>
      <h1>Opdracht 7 - Twitter</h1>
      <CreateMessage
        textInput={textInput}
        setTextInput={setTextInput}
        message={message}
        setMessage={setMessage}
      />
      <MessageList name={name} message={message} />
    </>
  )
}

export default App;
