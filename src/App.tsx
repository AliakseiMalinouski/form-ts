import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';

export interface DataSubmit {
  email: string,
  password: string,
  remember: boolean
}

function App() {

  const onSubmitParent = (data: DataSubmit) => {
    console.log(data);
  }
  
  return (
    <div className="App">
      <Form onSubmitParent={onSubmitParent}/>
    </div>
  );
}

export default App;
