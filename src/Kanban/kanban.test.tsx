import "@testing-library/jest-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useList } from "./Board/useList";
import { Board } from "./Board";
/*
カンバンアプリ
Todo, In Progress, Doneの3状態があり、それぞれの状態に変更ができる。
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
    text: "test",
    group: "progress",
  },
];
describe("カンバンアプリのテスト", () => {
  // test("Todo, In Progress, Doneの3状態に変更できる", () => {});
  test("タスクの配列は最後の要素の次に追加される", () => {
    const Root = render(<Board initialItemList={itemList} />);
    const GroupTodo = Root.getByTestId("group-todo");
    const Card = Root.getByTestId("card-1");
    dragAndDrop(Card, GroupTodo);
    Root.debug();
    // expect(result).toEqual();
  });

  // test("タスクを配列に追加できる", () => {
  //   const Root = render(<Board />);
  //   const TitleInput = Root.getByRole("textbox", { name: "title-input" });
  //   const DescriptionInput = Root.getByRole("textbox", {
  //     name: "description-input",
  //   });
  //   const StateInput = Root.getByRole("combobox", { name: "state-input" });
  //   const SubmitButton = Root.getByRole("button", { name: "submit" });

  //   fireEvent.change(TitleInput, { target: { value: "title" } });
  //   fireEvent.change(DescriptionInput, { target: { value: "description" } });
  //   fireEvent.change(StateInput, { target: { value: "todo" } });
  //   fireEvent.click(SubmitButton);

  //   const result = Root.getByRole("cell").textContent;
  //   expect(result).toBe("title");

  // expect(result).toEqual([
  //   {
  //     id: 1,
  //     text: "test",
  //     group: "progress",
  //   },
  //   {
  //     id: 2,
  //     text: "test",
  //     group: "todo",
  //   },
  // ]);
  // });

  test("タスクを配列から削除できる", () => {});

  test("タスクの内容を変更できる(Todo progress done)", () => {});
});

/*
カードはDraggableである
  ホバーでdndできる
    グループ内でdndできる
      グループ内の場合はソート
    グループ外へdndできる
      グループ外の場合は挿入
グループはDraggableでない

タイトルごとのオブジェクトを生成できる
dragIndexとhoverIndexとgroup名を引数にdndでソートができる
dragIndexとhoverIndexとgroup名を引数にdndでグループ変更ができる

Nグループある
*/

/*
ホバーしたら対象のデータを削除してグループに移す
*/
