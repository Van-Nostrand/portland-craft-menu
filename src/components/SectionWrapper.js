import * as React from 'react';


export default function SectionWrapper(props) {
  /**
   * IF no children are passed then props.children will be undefined.
   * if only one child is passed then props.children will NOT be undefined, but props.children.length will be undefined
   * if two or more children are passed, then props.children will have a length property
   */

  let sectionClass = props.sectionClassName || 'testclass';

  // if children exist
  if (props.children !== undefined){
    // if only one child, treat as an object
    if (props.children.length === undefined) {
      sectionClass = `${sectionClass} ${props.children.props.className}`;
      console.log(sectionClass);
    }
    // else, must have multiple children so treat as an array
    else {
      console.log(props.children.map(child => child.props.className));
    }
  }
 
  return(
    <section className={sectionClass}>
      <div className='section__title'>
        {props.title || ''}
      </div>
      {props.children}
    </section>
  )
}