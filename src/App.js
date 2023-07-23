
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FetchImageApi from './FetchImageApi/fetchImageApi';
import ImageModal from './ImageModal/ImageModal';
import Header  from './Header/Header.jsx';
function App() {
  return (
    <div className="App">
      <Header/>
      <FetchImageApi />
      
      <Routes>
        <Route exact path="/home" element={<FetchImageApi />}/>
        <Route exact path="/image/:id" component={ImageModal} />
      </Routes>
    </div>
  );
}

export default App;
