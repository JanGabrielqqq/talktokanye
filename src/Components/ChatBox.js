import React from "react";
import Content from "./Content";
import Input from "./Input";
import "./index.scss";
import Text from "./Text";

function ChatBox() {
  return (
    <div className='container'>
      <div className='image'>
        <div className='kanye'></div>
      </div>
      <div className='chatbox'>
        <Content />
        <Input />
      </div>
      <Text />
    </div>
  );
}

export default ChatBox;
