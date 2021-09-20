import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import sendIcon from "../images/Send.svg";
import axios from "axios";

function Input() {
  const ctx = useContext(Context);
  const [inputMessage, setInputMessage] = useState("");
  const [I, setI] = useState(0);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const date = new Date();
  const time =
    date.getMinutes() < 10
      ? `${date.getHours()}:0${date.getMinutes()}`
      : `${date.getHours()}:${date.getMinutes()}`;

  const httpResponse = () => {
    axios
      .get("https://api.kanye.rest/")
      .then((res) => {
        const data = {
          time: time,
          text: res.data.quote,
          id: I + 1,
          isUserInput: false,
        };
        ctx.setContentDataHttp(data);
        setButtonIsDisabled(true);
      })
      .catch((err) => {
        console.log(err);
        const data = {
          time: time,
          text: "no comment check your internet ",
          id: I + 1,
          isUserInput: false,
        };
        ctx.setContentDataHttp(data);
        setButtonIsDisabled(true);
      });
  };

  const sendMessage = (event) => {
    event.preventDefault();
    setButtonIsDisabled(false);

    setInputMessage("");
    setI(I + 2);

    const data = {
      time: time,
      text: inputMessage,
      isUserInput: true,
      id: I,
    };
    httpResponse();
    ctx.setContentDataHandler(data);
  };
  const inputHandler = (event) => {
    setInputMessage(event.target.value);
  };
  return (
    <form onSubmit={sendMessage} className='input'>
      <input
        className='input-text'
        type='text'
        placeholder='Aa'
        onChange={inputHandler}
        value={inputMessage}
      />
      <button className='sendButton' disabled={!buttonIsDisabled}>
        <img src={sendIcon} alt='send' className='sendImage' />
      </button>
    </form>
  );
}

export default Input;
