import React from "react";

export default function PinInput({ onChangePin }) {
  const pinInput = {
    input1: React.useRef(),
    input2: React.useRef(),
    input3: React.useRef(),
    input4: React.useRef(),
    input5: React.useRef(),
    input6: React.useRef(),
  };

  const changeValue = (e) => {
    if (e.target.value.length > 0) {
      e.target.value = e.target.value.slice(e.target.value.length - 1);
      if (parseInt(e.target.name) < 6) {
        pinInput[`input${parseInt(e.target.name) + 1}`].current.focus();
      }
    } else {
      if (parseInt(e.target.name) > 1) {
        pinInput[`input${parseInt(e.target.name) - 1}`].current.focus();
      }
    }

    const pin = [];
    for (const key in pinInput) {
      pin.push(pinInput[key].current.value);
    }
    onChangePin(pin.join(""));
  };

  return (
    <div className="flex justify-center gap-5 pb-4">
      <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
        <input
          onChange={changeValue}
          name="1"
          ref={pinInput.input1}
          className="w-8 h-14 border-b border-gray-300 text-center text-3xl pt-2 bg-transparent outline-none [appearance:textfield]"
          type="number"
        />
      </div>
      <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
        <input
          onChange={changeValue}
          name="2"
          ref={pinInput.input2}
          className="w-8 h-14 border-b border-gray-300 text-center text-3xl pt-2 bg-transparent outline-none [appearance:textfield]"
          type="number"
        />
      </div>
      <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
        <input
          onChange={changeValue}
          name="3"
          ref={pinInput.input3}
          className="w-8 h-14 border-b border-gray-300 text-center text-3xl pt-2 bg-transparent outline-none [appearance:textfield]"
          type="number"
        />
      </div>
      <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
        <input
          onChange={changeValue}
          name="4"
          ref={pinInput.input4}
          className="w-8 h-14 border-b border-gray-300 text-center text-3xl pt-2 bg-transparent outline-none [appearance:textfield]"
          type="number"
        />
      </div>
      <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
        <input
          onChange={changeValue}
          name="5"
          ref={pinInput.input5}
          className="w-8 h-14 border-b border-gray-300 text-center text-3xl pt-2 bg-transparent outline-none [appearance:textfield]"
          type="number"
        />
      </div>
      <div className="flex justify-center w-[53px] h-16 border border-gray-400 rounded-xl bg-white">
        <input
          onChange={changeValue}
          name="6"
          ref={pinInput.input6}
          className="w-8 h-14 border-b border-gray-300 text-center text-3xl pt-2 bg-transparent outline-none [appearance:textfield]"
          type="number"
        />
      </div>
    </div>
  );
}
