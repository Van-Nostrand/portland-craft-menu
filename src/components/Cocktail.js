import React from "react";

export const Cocktail = ({ itemName = "unnamed", price = "23", notes=""}) => {

  let notesElement;
  if(Array.isArray(notes)){
    
    let parsedNote = notes[0].split(".").map((item, i) => <div key={`splitstring${i}`}>{item}<br /></div>);
    notesElement = (
      <div className="cocktail-choices">
        {parsedNote}
        {notes[1].map((choice, i) => {

          return(
            <span key={`c${i}`}>
                {`${i === notes[1].length -1 ? ", or " : i > 0 ? ", " : ""}`}
                {choice}
            </span>
          )
        }
        )}
      </div>
    )
  }
  else {
    notesElement = notes.split(".").map((item, i) => <p key={`splitstring${i}`}>{item}</p>);
    
    
  }

  return(
    <li className="cocktail">

      <div className="cocktail-name item-name">

        {itemName}
    
      </div>

      <div className="cocktail-price item-price">
        <span>{price}</span>
      </div>

      <div className="cocktail-notes item-notes">
        {notesElement}
      </div>

    </li>
  )
}

