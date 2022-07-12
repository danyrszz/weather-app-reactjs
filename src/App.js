import './App.css';
import TodayWeather from './components/app/TodayWeather';
import WeatherDetails from './components/app/WeatherDetails';

export default function App() {
  
  return (
    <div className="App">
      <TodayWeather/>
      <WeatherDetails />
    </div>
  );
}
