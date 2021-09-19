import React, { useEffect, useState } from "react";

function Text() {
  const [textShown, setTextShown] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTextShown(!textShown);
    }, 10000);
  }, [textShown]);
  return (
    <>
      {textShown && (
        <div className='text'>
          <h2>Tell Kanye anything you want to say..</h2>
        </div>
      )}
      {!textShown && (
        <div className='text'>
          <h2>Ask for wisdom..</h2>
        </div>
      )}
    </>
  );
}

export default Text;
