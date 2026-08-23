import { useState, type ChangeEvent, type Dispatch, type KeyboardEvent, type SetStateAction } from 'react';
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import './ChatInput.css';

type ChatMessage = {
    id: string;
    message: string;
    sender: string;
    time: number;
};

type ChatInputProps = {
    chatMessages: ChatMessage[];
    setChatMessages: Dispatch<SetStateAction<ChatMessage[]>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};

function ChatInput({ chatMessages, setChatMessages, isLoading, setIsLoading }: ChatInputProps) {
    const [inputText, setInputText] = useState('');

    function saveInputText(event: ChangeEvent<HTMLInputElement>) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        const trimmedText = inputText.trim();

        if (isLoading || !trimmedText) {
            return;
        }

        const userMessage = {
            id: crypto.randomUUID(),
            message: trimmedText,
            sender: 'user',
            time: dayjs().valueOf(),
        };

        const updatedChatMessages = [...chatMessages, userMessage];

        setIsLoading(true);
        setInputText('');
        setChatMessages(updatedChatMessages);

        try {
            const response = await Chatbot.getResponseAsync(trimmedText);
            setChatMessages([
                ...updatedChatMessages,
                {
                    id: crypto.randomUUID(),
                    message: response,
                    sender: 'robot',
                    time: dayjs().valueOf(),
                }
            ]);
        } finally {
            setIsLoading(false);
        }
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            event.preventDefault();
            void sendMessage();
        } else if (event.key === 'Escape') {
            setInputText('');
        }
    }

    function clearChat() {
        setChatMessages([]);
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a message to Chatbot"
                size={30}
                onChange={saveInputText}
                value={inputText}
                onKeyDown={handleKeyDown}
                className="chat-input"
            />
            <button
                onClick={() => void sendMessage()}
                className="send-button"
            >
                Send
            </button>
            <button
                onClick={clearChat}
                className="clear-chat-button"
            >
                Clear Chat
            </button>
        </div>
    );
}

export default ChatInput;
