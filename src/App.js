import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';



function App() {
  
  const [questions,setQuestions]=useState(data); 

  return <main>
    <div className="container">
      <h3> Preguntas y respuestas acerca del login </h3>
      <section className="info">
          {/* //traemos el questions o la data */}
          
          {
            questions.map((question)=>{
              return <SingleQuestion  key={question.id} {...question} />
            })
          }
      </section>
    </div>
  </main>
  

}

export default App;
