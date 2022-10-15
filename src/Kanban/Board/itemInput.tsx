import React from "react";
import { Item } from "./constants";

type InputItem = Omit<Item, "id">;
type ItemInputProps = {
  formValue: InputItem;
  setFormValue: React.Dispatch<InputItem>;
  setItem: React.Dispatch<React.SetStateAction<Item[]>>;
  groupType: string[];
};

export const ItemInput: React.FC<ItemInputProps> = ({
  formValue,
  setFormValue,
  setItem,
  groupType,
}) => {
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      title: e.target.value,
    });
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      description: e.target.value,
    });
  };

  const handleChangeState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValue({
      ...formValue,
      group: e.target.value,
    });
  };

  const onClickSubmit = () => {
    setItem((prevItem: Item[]) => {
      prevItem.push({ id: Math.random(), ...formValue });
      return [...prevItem];
    });
    setFormValue({
      ...{
        title: "",
        description: "",
        group: "todo",
      },
    });
  };

  return (
    <form action="">
      <div>
        <label>title</label>
        <input
          type="text"
          value={formValue.title}
          onChange={handleChangeTitle}
          aria-label="title-input"
        />
      </div>
      <div>
        <label>description</label>
        <input
          type="text"
          value={formValue.description}
          onChange={handleChangeDescription}
          aria-label="description-input"
        />
      </div>
      <div>
        <label>state</label>
        <select
          value={formValue.group}
          onChange={handleChangeState}
          aria-label="state-input"
        >
          {groupType.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="button" onClick={onClickSubmit}>
          submit
        </button>
      </div>
    </form>
  );
};
