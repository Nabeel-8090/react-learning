import { useEffect, useRef, type DependencyList } from 'react';
import ChatMessage, { type ChatMessageType } from './ChatMessage';
import RobotProfileImage from '../assets/robot.png';
import LoadingSpinner from '../assets/loading-spinner.gif';
import './ChatMessages.css';

type ChatMessagesProps = {
  chatMessages: ChatMessageType[];
  isLoading: boolean;
};

function useAutoScroll(dependencies: DependencyList) {
  const chatMessagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, dependencies);

  return chatMessagesRef;
}

function ChatMessages({ chatMessages, isLoading }: ChatMessagesProps) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id}
          />
        );
      })}
      {isLoading && (
        <div className="chat-message-robot">
          <img
            src={RobotProfileImage}
            className="chat-message-profile"
            alt="robot"
          />
          <img
            src={LoadingSpinner}
            alt="Loading"
            className="loading-gif"
          />
        </div>
      )}
    </div>
  );
}

export default ChatMessages;