import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../Context/Context";
import ChatContent from "./ChatContent";

function Content() {
  const ctx = useContext(Context);
  const ref = useRef(null);
  useEffect(() => {
    ref.current.scrollIntoView({ block: "end", behavior: "smooth" });
    console.log("view");
  }, [ctx.contentData]);

  return (
    <div className='content'>
      <div className='chat-container'>
        {ctx.contentData.map((data) => (
          <ChatContent
            isUserInput={data.isUserInput}
            text={data.text}
            key={data.id}
            time={data.time}
          />
        ))}
        <div ref={ref}></div>
      </div>
    </div>
  );
}

export default Content;
