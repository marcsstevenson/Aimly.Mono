import React from 'react';
import loading from '../assets/loading.svg';

const Loading = () => (
  <div className="x-screen absolute top-0 bottom-0 right-0 left-0 z-50 flex h-screen justify-center">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
