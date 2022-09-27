import './App.css';
import CardFront from './components/cardFront/CardFront';
import CardBack from './components/cardBack/CardBack';
import Form from './components/form/Form';
import { useState } from 'react';

export default function App() {

  const [formValues, setFormValues] = useState({
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    codigo: '',
  })

  return (
    <div className="App">
      
      <section className='cards'>
      <CardFront formValues={formValues}/>
      <CardBack formValues={formValues.codigo}/>
      </section>
      
      <section>
      <Form /> 
      </section>
    </div>
  );
}

