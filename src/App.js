
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FetchImageApi from './fetchImageApi';
import ImageModal from './ImageModal';
function App() {
  return (
    <div className="App">
      <FetchImageApi />

      <Routes>
        <Route exact path="/home" component={FetchImageApi} />
        <Route exact path="/image/:id" component={ImageModal} />
      </Routes>
    </div>
  );
}

export default App;
