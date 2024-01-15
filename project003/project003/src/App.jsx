import { useState } from 'react';
import Concept from './Concept';
import reactImg from './assets/react-core-concepts.png'
//import componentImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import TabButton from './TabButton';
import {EXAMPLES} from './data.js';


const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function App() {

  
   const  [selectedTopic, setSelectedTopic] = useState();

  function onSelect(selectedButton) {
    setSelectedTopic(selectedButton);

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
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => onSelect('components')}>Component</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => onSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => onSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => onSelect('state')}>State</TabButton>
         </menu>
         {!selectedTopic ? <p>Please select a Topic.</p> : 
         (<div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code> {EXAMPLES[selectedTopic].code} </code>
          </pre>
         </div> )}
         
        </section>
      </main>
    </div>
  );
}

export default App;
