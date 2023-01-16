import { RouterProvider } from 'react-router-dom';
import './App.css';
import { primaryRoute } from './routes/primaryRoute';
import Footer from './components/sections/Footer';

function App () {
  return (
    <RouterProvider router={primaryRoute} />

  );
}



export default App;