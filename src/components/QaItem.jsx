import React, { useState } from 'react';


const QaItem = ({qa,handleShow}) => {
    const [showAnswer, setShowAnswer] = useState(false)
console.log(handleShow)
  return (
    <div>
<div key={qa.id} className="qa-card">
                <h5>{qa.qn} <i className={`fa-solid fa-circle-${showAnswer?"minus":"plus"}`} onClick={()=>handleShow(setShowAnswer,showAnswer,qa.id)}></i></h5>
                {showAnswer&&<p key={qa.id}>{qa.ans}</p>
    }
            </div>
    </div>
  )
}

export default QaItem