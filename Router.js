import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './src/pages/signup/SignUp';
import SignIn from './src/pages/signup/SignIn';
import ToDo from './src/pages/todo/ToDo';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
