import { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        setIsLoading(false)
      }, (error) => {
        alert(error);
      })
    }
    else {
      alert('Selaimesi ei tue paikannusta!')
    }
  }, [])
  if (isLoading) {
    return <p>Ladataan...</p>
  } else {
    return (
      <div className="content">
        <h3>Sinun sijaintisi on</h3>
        <p>Sijaintisi:&nbsp;
           {lat.toFixed(3)}, 
           {lng.toFixed(3)}</p>
        <Weather lat={lat} lng={lng} />
      </div>
    );
  }
}
export default App;
