import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import NavMenu from './components/NavMenu'
import './App.css'

function App() {
  return (
    <div>
      <Container>
        <NavMenu />
      </Container>
    </div>
  );
}

export default App;
