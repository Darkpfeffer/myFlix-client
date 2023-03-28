import { createRoot} from 'react-dom/client';

// Import bundle `./index.scss`
import './index.scss';

// Main component
const MyFlixApplication= () => {
  return (
    <div className="my-flix">
      <div>Good morning</div>
    </div>
  )
};

// Finds the root of your app
const container= document.querySelector("#root");
const root= createRoot(container);

// Tells React to render your app in the root DOM element
root.render(MyFlixApplication />);