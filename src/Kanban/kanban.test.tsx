import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { Board } from "./Board";
/*
カンバンアプリ
Todo, In Progress, Doneの3状態があり、それぞれの状態に変更ができる。
  N個の状態があり、それぞれの状態に変更ができる
それぞれの状態につきタスクリストをもつ。
タスクリストは下方向に積み重なっていくように追加される。
タスクにはタイトル、説明、タスクの状態の状態を持つ。// 型情報を見ればわかる
タスクに表示されるプルダウンによって
Todo、In Progress, Doneの状態を変更できる。
タスクを配列から削除できる
*/
const dragAndDrop = (Card: HTMLElement, Group: HTMLElement) => {
  fireEvent.dragStart(Card);
  fireEvent.dragEnter(Group);
  fireEvent.dragOver(Group);
  fireEvent.drop(Group);
};
const itemList = [
  {
    id: 1,
    title: "title",
    description: "test",
    group: "progress",
  },
];
describe("カンバンアプリのテスト", () => {
  describe("Create", () => {
    test("タスクを配列に追加できる", () => {
      const Root = render(<Board groupType={["todo", "progress"]} />);
      const TitleInput = Root.getByRole("textbox", { name: "title-input" });
      const DescriptionInput = Root.getByRole("textbox", {
        name: "description-input",
      });
      const StateInput = Root.getByRole("combobox", { name: "state-input" });
      const SubmitButton = Root.getByRole("button", { name: "submit" });

      fireEvent.change(TitleInput, { target: { value: "title" } });
      fireEvent.change(DescriptionInput, { target: { value: "description" } });
      fireEvent.change(StateInput, { target: { value: "todo" } });
      fireEvent.click(SubmitButton);

      // タスクが追加されると配列の最後に挿入される
      const result =
        Root.getAllByTestId("card-root")[
          Root.getAllByTestId("card-root").length - 1
        ];

      expect(result.firstChild?.textContent).toBe("title");
      expect(result.childNodes[1].textContent).toBe("description");
      expect(result.childNodes[2].textContent).toBe("todo");
    });
  });

  // Readは他のテスト過程で可能
  // describe("Read", () => {});

  describe("Update", () => {
    test("タスクの状態を変更できる(N個の状態)", () => {
      const itemList = [
        {
          id: 1,
          title: "title",
          description: "test",
          group: "todo",
        },
      ];
      const Root = render(
        <Board initialItemList={itemList} groupType={["todo", "test"]} />
      );
      const GroupTodo = Root.getByTestId("group-test");
      const Card = Root.getByTestId("card-root");
      dragAndDrop(Card, GroupTodo);

      const result = Root.getByTestId("card-root").childNodes[2].textContent;
      expect(result).toBe("test");
    });

    test("タスクの配列は最後の要素の次に追加される", () => {
      const Root = render(
        <Board initialItemList={itemList} groupType={["todo", "progress"]} />
      );
      const GroupTodo = Root.getByTestId("group-todo");
      const Card = Root.getByTestId("card-root");
      dragAndDrop(Card, GroupTodo);

      const result = Root.getByTestId("card-root").childNodes[2].textContent;
      expect(result).toBe("todo");
    });
  });

  describe("Delete", () => {
    test("タスクを配列から削除できる", () => {
      const Root = render(
        <Board initialItemList={itemList} groupType={["todo", "progress"]} />
      );
      const DeleteButton = Root.getByTestId("card-delete");

      fireEvent.click(DeleteButton);

      const Card = Root.queryByTestId("card-root");
      expect(Card).toBeFalsy();
    });
  });
});
