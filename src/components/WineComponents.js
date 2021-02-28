import React from "react";
export const Wine = ({ itemName = "unnamed", notes="", sizes, varietal, style}) => {
// console.log(style);
  return(
    <li className={`wine-item ${style}-wine-item menu-item`}>
      <div className="wine-item-name item-name">
        {itemName}
      </div>
      <div className="wine-item-varietal">
        {varietal}
      </div>
      <div className="wine-item-region">
        {` (${notes})`}
      </div>
      <div className="wine-item-price item-price">
        ${sizes.join(" / $")}
      </div>
    </li>
  )
}

export const WineSection = ({sectionTitle, sectionSizeString, wines}) => {
  let lowercasesection = sectionTitle.toLowerCase();
  return (
    <section className={`drink-section wine-section ${lowercasesection}-wine-section`}>
      <div className={`wine-section-title ${lowercasesection}-section-title section-title`}>
        {sectionTitle}{` ${(sectionTitle === "Red" || sectionTitle === "White" )? 'Wine' : ''}`}
      </div>
      <div className={`wine-sizes ${lowercasesection}-wine-sizes`}>
        {sectionSizeString}
      </div>
      <ul className={`wine-list ${lowercasesection}-wine-list section-list`}>
        {wines}
      </ul>
    </section>
  );
}

