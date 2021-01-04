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

export default React.forwardRef(function LiquorSection({sectionTitle, sectionSizeString, items}, ref){
  let lowercasesection = sectionTitle.toLowerCase();
  return (
    <section ref={ref} className={`liquor-section ${lowercasesection}-section`}>
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
});

