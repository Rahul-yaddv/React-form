import type { RootState } from '../Slice/Store';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';
import './userdata.css';

export default function UsersData() {
  const usersData = useSelector((state: RootState) => state.users.users);
  return (
    <>
      <div className='card-container'>
        {usersData.map(user => (
          <div key={user.key}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </>
  );
}
