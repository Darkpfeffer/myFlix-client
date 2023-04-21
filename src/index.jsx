import { createRoot} from 'react-dom/client';
import { MainView} from './components/main-view/main-view';
import Container from "react-bootstrap/Container";

// Import bundle `./index.scss`
import './index.scss';

// Main component
const MyFlixApplication= () => {
  return (
    <Container className='text-bg-dark mx-auto'>
      <MainView />
    </Container>
  )
};

// Finds the root of your app
const container= document.querySelector("#root");
const root= createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);