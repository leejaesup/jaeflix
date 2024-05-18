import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Routes} from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from "./pages/Moives/MoviePage";
import MovieDetailPage from "./pages/MoiveDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="movies">
          <Route index element={<MoviePage/>}/>
          <Route path=":id" element={<MovieDetailPage/>}/>
        </Route>

        <Route path="*" elemnet={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
