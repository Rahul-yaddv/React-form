import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { userType } from '../../commonTypes';
interface initialUsers {
  users: {
    userName: string;
    email: string;
    phoneNumber: number;
    password: string;
    key: string;
  }[];
  openModal: boolean;
}

const initialUsers: initialUsers = {
  users: [
    {
      userName: 'john',
      email: 'john24@gmail.com',
      phoneNumber: 8989898898,
      password: 'test222',
      key: self.crypto.randomUUID(),
    },
    {
      userName: 'deep',
      email: 'Deep21@gmail.com',
      phoneNumber: 8098282882,
      password: 'pas8s',
      key: self.crypto.randomUUID(),
    },
  ],
  openModal: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUsers,
  reducers: {
    AddUser: (state, action: PayloadAction<userType>) => {
      state.users.push(action.payload);
    },
    toggleModal: state => {
      state.openModal = !state.openModal;
    },
  },
});

export const { AddUser, toggleModal } = userSlice.actions;
export default userSlice.reducer;
