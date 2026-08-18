import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

function ChatInput({ chatMessages, setChatMessages, isLoading, setIsLoading }) {
    const [inputText, setInputText] = useState('');

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage(event) {
        if (event.type === 'click' || event.key === 'Enter') {
            if (isLoading || !inputText.trim()) {
                return;
            }
            setIsLoading(true);
            setInputText('');

            const newChatMessages = [
                ...chatMessages,
                {
                    message: inputText,
                    sender: 'user',
                    id: crypto.randomUUID()
                }
            ]
            setChatMessages(newChatMessages);

            const response = await Chatbot.getResponseAsync(inputText);
            setChatMessages([
                ...newChatMessages,
                {
                    message: response,
                    sender: 'robot',
                    id: crypto.randomUUID()
                }
            ]);
            setIsLoading(false);

        } else if (event.key === 'Escape') {
            setInputText('');
        }
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputText}
                value={inputText}
                onKeyDown={sendMessage}
                className="chat-input"
            />
            <button
                onClick={sendMessage}
                className="send-button"
            >Send</button>
        </div>
    );
}

export default ChatInput;
