// App.tsx
import React from 'react';
import Calendar from './Calendar';
import FavouriteBirthdays from './FavouriteBirthdays';

function App() {
  return (
    <div>
      <h1>Birthday Calendar</h1>
      <Calendar birthdays={birthdays} />
      <FavouriteBirthdays /> 
    </div>
  );
}

export default App;
