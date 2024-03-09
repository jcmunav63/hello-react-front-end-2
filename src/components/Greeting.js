import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default Greeting;
