import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { userType } from '../../commonTypes';
import './form.css';
import { AddUser } from '../Slice/userSlice';

export default function FormF() {
  const dispatch = useDispatch();
  const [formHeight, setFormHeight] = useState(0);

  const form = useForm<userType>();
  const { register, control, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  // const { name, ref, onChange, onBlur } = register('email');

  useEffect(() => {
    const formElement = document.getElementById('form-id');
    formElement && setFormHeight(formElement.scrollHeight);
  }, [setFormHeight, errors]);

  const submitHandler = (data: userType) => {
    data.key = crypto.randomUUID();
    dispatch(AddUser(data));
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        noValidate
        style={{ height: formHeight + 'px' }}
        id='form-id'
      >
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          {...register('userName', {
            required: {
              value: true,
              message: 'UserName is required',
            },
          })}
        />
        <span className='form-error'>{errors.userName?.message} </span>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}`~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'invalid email format',
            },
          })}
        />
        <p className='form-error'>{errors.email?.message} </p>
        <label htmlFor='phonenumber'>Phone Number</label>
        <input
          type='number'
          id='phonenumber'
          {...register('phoneNumber', {
            required: 'Phone Number is required',
          })}
        />
        <p className='form-error'>{errors.phoneNumber?.message} </p>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          {...register('password', {
            required: 'Password is required',
          })}
        />
        <p className='form-error'>{errors.password?.message} </p>
        <button className='button-submit'>Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
}
