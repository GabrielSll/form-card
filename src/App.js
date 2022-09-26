import './App.css';
import CardFront from './components/cardFront/CardFront';
import CardBack from './components/cardBack/CardBack';
import Form from './components/form/Form';

export default function App() {
  return (
    <div className="App">
      <CardFront />
      <CardBack />
      <Form />
    </div>
  );
}

