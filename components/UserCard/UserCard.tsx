import './UserCard.css';
interface userProps {
  user: {
    userName: string;
    email: string;
    phoneNumber: number;
    password: string;
  };
}

export default function UserCard({ user }: userProps) {
  return (
    <div className='card'>
      <h3>{user.userName}</h3>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Password: {user.password}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
