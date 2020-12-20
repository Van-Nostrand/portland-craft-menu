import React from "react";

export const LiquorItem = ({ name = "unnamed", style, single, double}) => {
  return(
    <li className={`liquor-item ${style}-item menu-item`}>
      <div className="liquor-name item-name">
        {name}
      </div>
      <span className="liquor-price">
        ${single}, ${double}
      </span>
    </li>
  )
}


export const LiquorSection = ({sectionTitle, sectionSizeString, items}) => {
  let lowercasesection = sectionTitle.toLowerCase();
  return (
    <section className={`liquor-section ${lowercasesection}-section`}>
      <div className={`liquor-section-title ${lowercasesection}-section-title section-title`}>
        {sectionTitle}
      </div>
      <div className={`liquor-pour-header`}>
        {sectionSizeString}
      </div>
      <ul className={`liquor-section-list ${lowercasesection}-list section-list`}>
        {items}
      </ul>
    </section>
  );
}

