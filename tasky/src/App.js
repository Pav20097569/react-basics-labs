import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description ="Empty the Dishwasher and Put the dishes away" />
      <Task title="Tidy" deadline="Today" description="Tide the House" />
      <Task title="Laundry" deadline="Tomorrow" description="Do the laundry"/>
        
    </div>
  );
}

export default App;