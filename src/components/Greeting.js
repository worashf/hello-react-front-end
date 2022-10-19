import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingThunk } from '../redux/greetings/greetings';

const Greeting = () => {
  const greetings = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetingThunk());
  }, []);
  const refresh = () => {
    dispatch(getGreetingThunk());
  };

  return (
    <>
      <h1 style={{ color: 'red', textAlign: 'center' }}>
        greeting form Rails Api!
      </h1>
      <p style={{ color: 'blue', fontSize: '1.2rem' }}>
        {' '}
        {greetings}
      </p>
      <button type="button" onClick={refresh}>
        Refresh
      </button>
    </>
  );
};

export default Greeting;
