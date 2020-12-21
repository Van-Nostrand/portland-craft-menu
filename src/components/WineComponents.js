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

export default React.forwardRef(function WineSection(props, ref){
  return(
    <section className={`wine-section ${props.sectionTitle.toLowerCase()}-wine-section`} ref={ref}>
      <div className={`wine-section-title ${props.sectionTitle.toLowerCase()}-section-title section-title`}>
        {props.sectionTitle}
      </div>
      <div className={`wine-sizes ${props.sectionTitle.toLowerCase()}-wine-sizes`}>
        {props.sectionSizeString}
      </div>
      <ul className={`wine-list ${props.sectionTitle.toLowerCase()}-wine-list section-list`}>
        {props.wines}
      </ul>
    </section>
  );
});