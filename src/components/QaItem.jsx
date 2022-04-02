import React, { useState } from 'react';


const QaItem = ({qa,onToggle}) => {
    const [showAnswer, setShowAnswer] = useState(false)
    
  return (
    <div>
<div className="qa-card">
                <h5>{qa.qn} <i className={`fa-solid fa-circle-${showAnswer?"minus":"plus"}`} onClick={()=>setShowAnswer(!showAnswer)}></i></h5>
                {showAnswer&&<p>{qa.ans}</p>
    }
            </div>
    </div>
  )
}

export default QaItem