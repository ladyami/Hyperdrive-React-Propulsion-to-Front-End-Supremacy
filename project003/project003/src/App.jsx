import { useState } from 'react';
import Concept from './Concept';
import reactImg from './assets/react-core-concepts.png'
//import componentImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import TabButton from './TabButton';


const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function App() {

  
   const  [selectedTopic, setSelectedTopic] = useState();

  function onSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedTopic); // Log the selected button
  }


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
            <Concept {...CORE_CONCEPTS[0]}/>
            <Concept {...CORE_CONCEPTS[1]}/>
            <Concept {...CORE_CONCEPTS[2]}/>
            <Concept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
         <h2>Example</h2>
         <menu>
          <TabButton onSelect={() => onSelect('component')}>Component</TabButton>
          <TabButton onSelect={() => onSelect('JsX')}>JSX</TabButton>
          <TabButton onSelect={() => onSelect('Props')}>Props</TabButton>
          <TabButton onSelect={() => onSelect('state')}>State</TabButton>
         </menu>

         {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
