import React, { useState } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title,info}) => {


  const [showInfo,setShowInfo]=useState(false);

  return  <article className="question" > 

      <header>

        <h4>{title}</h4>
        {/* //con un click hacerle el opositor de show info al principio es falso para que no se vea */}
        <button className="btn" onClick={()=> setShowInfo(!showInfo) }>
         {/* //simblo al boton  */}
           {showInfo? <AiOutlineMinus/> : <AiOutlinePlus/> }
        
        </button>

      </header>

      {/* decimos si show info es true se vea */}
      {showInfo &&  <p>{info}</p> }

  </article>

};

export default Question;
