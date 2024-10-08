import './App.css';
import TicketScreen from './components/TicketScreen';
import TicketDetailsScreen from './components/TicketDetailsScreen';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<TicketScreen />} />
        <Route path="/ticket-details" element={<TicketDetailsScreen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
