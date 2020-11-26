/*
The build puts all the files in one directory
so when lazy loading, I need to scan the build directory for file names and figure out what's what.
files follow a [hash][name].[ext] pattern, I can figure that out
*/

import React, {useState, useEffect, useRef} from "react";
import clsx from "clsx";


function LazyImage({ className, src, alt, lqip, aspectRatio = 2/3 }) {

  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className={clsx("wrapper", className)}>
      <div style={{ paddingBottom: `${100 / aspectRatio}%` }} />
      <img src={lqip} aria-hidden="true" />
      <img
        loading="lazy"
        src={src}
        alt={alt}
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={clsx("source", loaded && "loaded")}
      />
    </div>
  );
}
export default LazyImage;