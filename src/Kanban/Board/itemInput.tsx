import React, { useState } from "react";

export const ItemInput: React.FC = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    group: "",
  });

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      title: e.target.value,
    });
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      description: e.target.value,
    });
  };

  const handleChangeState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      group: e.target.value,
    });
  };

  return (
    <form action="">
      <div>
        <label>title</label>
        <input
          type="text"
          onChange={handleChangeTitle}
          aria-label="title-input"
        />
      </div>
      <div>
        <label>description</label>
        <input
          type="text"
          onChange={handleChangeDescription}
          aria-label="description-input"
        />
      </div>
      <div>
        <label>state</label>
        <select
          value={state.group}
          onChange={handleChangeState}
          aria-label="state-input"
        >
          <option value="todo">todo</option>
          <option value="progress">progress</option>
          <option value="done">done</option>
        </select>
      </div>
      <div>
        <button type="button" onClick={() => console.log(state)}>
          submit
        </button>
      </div>
      <span role={"cell"}>{state.title}</span>
    </form>
  );
};
