import React, { useState } from "react";

function ChatContent(props) {
  const [timeShown, setTimeShown] = useState(false);

  const showTime = () => {
    setTimeShown(!timeShown);
  };

  return (
    <>
      {props.isUserInput && (
        <>
          <div className='userText' onClick={showTime}>
            <p>
              <span>{props.text}</span>
            </p>
            {timeShown && <p className='timeUser'>{props.time}</p>}
          </div>
        </>
      )}
      {!props.isUserInput && (
        <>
          <div className='botText' onClick={showTime}>
            <p>
              <span>{props.text}</span>
            </p>
            {timeShown && <p className='timeBot'>{props.time}</p>}
          </div>
        </>
      )}
    </>
  );
}

export default ChatContent;
