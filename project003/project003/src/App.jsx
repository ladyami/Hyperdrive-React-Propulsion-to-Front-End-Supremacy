import Concept from './Concept';
import reactImg from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function App() {
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescription [genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Concept 
            title="Component" 
            description="The core ui building block"
            image={componentImg}
            />
            <Concept/>
            <Concept/>
            <Concept/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
