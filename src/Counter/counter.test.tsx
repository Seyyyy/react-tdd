import "@testing-library/jest-dom";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import React from "react";
import Counter from "./index";

describe("カウンターコンポーネントのテスト", () => {
  describe("初期状態チェック", () => {
    afterEach(() => {
      cleanup();
    });

    test("カウントの初期状態は0", () => {
      const Root = render(<Counter title="test" />);
      const Result = Root.getByTestId("counter-result");
      expect(Result.textContent).toBe("0");
    });
  });

  describe("ボタンを押下したら数字が1カウントされるように表示される", () => {
    afterEach(() => {
      cleanup();
    });

    test("カウントが1の状態でボタンを押下したら1カウントされて2を返す", () => {
      // 準備
      const Root = render(<Counter title="test" />);
      const Button = Root.getByRole("button", { name: "add count" });
      const Result = Root.getByTestId("counter-result");
      // 実行
      fireEvent.click(Button);
      expect(Result.textContent).toBe("1");
    });

    // 内容重複のため削除
    // test("1を渡すと、数字が1カウントされて2を返す", () => {
    //   expect(result).toBe(2);
    // });

    // 内容重複のため削除
    // test("画面に数字が表示される", () => {
    //   expect(result).toBe(2);
    // });

    // テスト用意性が低く、リターンも低いのでなし
    // test("ボタンを押下できる", () => {
    //   // 準備
    //   const Button = render(<Counter title="test" />).getByTestId(
    //     "counter-button"
    //   );
    //   // 実行
    //   const result = fireEvent.click(Button);
    //   // 検証
    //   expect(result).toBeTruthy();
    // });
  });
});
