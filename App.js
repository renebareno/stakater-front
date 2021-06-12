import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import './App.css';


function App() {
  const [appState, setAppState] = useState({
    greeting: null, exception: null,
  });

  useEffect(() => {
    let formatDateString = format(new Date(), 'dd/MM/yyyy kk:mm'); 
    const apiUrl = `http://stakater-backend:8080/greeting`;
    fetch(apiUrl)
      .then((res) => res.text())
      .then((repos) => {
        setAppState({ greeting: (formatDateString+ ' '+repos) });
      }, (error) => {
        if (error) {
          setAppState({ greeting: ':(  There is an error' })
        }
      } );
  }, [setAppState]);
  return (
    <div className="App">
      <header className="App-header">

        <p>
          {appState.greeting}
        </p>

        <p>
        {appState.exception}
      </p>

      </header>
    </div>
  );
}

export default App;
