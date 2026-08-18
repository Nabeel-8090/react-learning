import { useEffect, useState } from 'react'
import { Chatbot } from 'supersimpledev';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Chatbot.addResponses(
      {
        'hello': 'Hello! How can I help you?',
        'how are you': 'I am doing great!',
        'what is your name': 'I am your chatbot.'
      }
    );
  }, []);

  return (
    <div className="app-container">
      {chatMessages.length === 0 ?
        <p
          className="welcome-message"
        >
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
        : <ChatMessages
          chatMessages={chatMessages}
          isLoading={isLoading}
        />
      }
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
