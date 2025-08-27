import "./src/index.css";

import componentsImg from "./assets/components.png";
import {CORE_CONCEPTS} from "./data.js" ;
import {EXAMPLES} from "./data.js" ;
import Header from  "./components/Header.jsx"
import TabButtons from  "./components/TabButtons.jsx"
import CoreConcept from  "./components/CoreConcept.jsx"
import {useState} from 'react';

function App() {
    let tabContent = "Please select  a button" ;
    const [selecteTopic, setselecteTopic] = useState();
    function handleSelect(selectedButton){
         // selectedButton => 'components','jsx','props','state'

          setselecteTopic(selectedButton) ;
    };

    return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">

          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=><CoreConcept{...conceptItem}/>) }
          </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu>
              <TabButtons isSelected={selecteTopic==='components'} onSelect={() => handleSelect('components')}>Components </TabButtons>
              <TabButtons isSelected={selecteTopic==='jsx'} onSelect={() => handleSelect('jsx')}>JSX </TabButtons>
              <TabButtons isSelected={selecteTopic==='props'} onSelect={() => handleSelect('props')}>Props</TabButtons>
              <TabButtons isSelected={selecteTopic==='state'} onSelect={() => handleSelect('state')}>State </TabButtons>
          </menu>


            {!selecteTopic && <p> Please Select a Topic. </p> }

            {selecteTopic && (
                <div id="tab-content">
                  <h3>{EXAMPLES[selecteTopic].title}</h3>
                  <p>{EXAMPLES[selecteTopic].description}</p>
                  <pre>
                    <code>{EXAMPLES[selecteTopic].code} </code>
                  </pre>
                </div>
              )
            }

      </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
