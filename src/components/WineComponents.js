import React from "react";
export const Wine = ({ itemName = "unnamed", notes="", sizes, varietal, style}) => {
// console.log(style);
  return(
    <li className={`wine-item ${style}-wine-item menu-item`}>
      <div className="wine-item-name item-name">
        {itemName}
      </div>
      <div className="wine-item-varietal">
        {varietal}{` (${notes})`}
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
    <section className={`wine-section ${lowercasesection}-wine-section`}>
      <div className={`wine-section-title ${lowercasesection}-section-title section-title`}>
        {sectionTitle}
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

