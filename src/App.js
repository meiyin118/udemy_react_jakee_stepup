import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };

  /**
  アロー関数をそのまま渡すと、propとしては毎回違う関数と判断されるので、memoを使っても再レンダリングされてしまう。
  処理が変わらない場合は、同じものを使いたい（と認識される必要がある）のでuseCallbackを使う
  */
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  // const onClickClose = () => setOpen(false);

  /**
   * 変数自体のメモ化（useMemo）
   * 最初に読み込まれた時に計算され(1+3)、以降は計算結果(4)の値を使い回す
   *
   */
  const temp = useMemo(() => 1 + 3, []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button type="button" onClick={onClickOpen}>
        表示
      </button>
      <br />

      <ChildArea text={text} open={open} onClickClose={onClickClose} />
    </div>
  );
}
