import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider, useModal } from './shared/common/modal/Modal';
import HomePage from './pages/home/home';


function App() {
  return (
    <ModalProvider>
      <Router basename="/sdg-test-adaptive">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  </ModalProvider>
  );
}

export default App;