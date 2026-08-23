import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile.jpeg';
import dayjs from 'dayjs';
import './ChatMessage.css';

export type ChatMessageType = {
  id: string;
  message: string;
  sender: string;
  time: number;
};

type ChatMessageProps = Omit<ChatMessageType, 'id'>;

function ChatMessage({ message, sender, time }: ChatMessageProps) {
  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img
          src={RobotProfileImage}
          alt="robot"
          className="chat-message-profile"
        />
      )}
      <div className="chat-message-text">
        {message}
        <div className="message-time">
          {dayjs(time).format('h:mm A')}
        </div>
      </div>
      {sender === 'user' && (
        <img
          src={UserProfileImage}
          alt="user"
          className="chat-message-profile"
        />
      )}
    </div>
  );
}

export default ChatMessage;