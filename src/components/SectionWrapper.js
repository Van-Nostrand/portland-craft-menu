import * as React from 'react';


export default function SectionWrapper(props) {
  /**
   * IF no children are passed then props.children will be undefined.
   * if only one child is passed then props.children will NOT be undefined, but props.children.length will be undefined
   * if two or more children are passed, then props.children will have a length property
   */

  let sectionClass = props.sectionClassName || 'testclass';
 
  return(
    <section className={sectionClass}>
      <div className='section__title'>
        {props.title || ''}
      </div>
      {props.children}
    </section>
  )
}