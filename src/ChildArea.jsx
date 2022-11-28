// レンダリング最適化（memo）：propsが更新されない限り、子要素であっても再レンダリングさせない（不要な再レンダリングを防ぐ）
import { memo } from "react";

const style = {
  display: "block",
  margin: "10px auto 0",
  width: "300px",
  padding: "10px",
  backgroundColor: "#f7f7f7",
  color: "#222",
};

// コンポーネントはmemoで囲ってあげるようにする
export const ChildArea = memo((props) => {
  const { text, open, onClickClose } = props;
  console.log("ChildAreaのレンダリング");
  return (
    <div style={style}>
      {open ? <p>{text}</p> : null}
      <button type="button" onClick={onClickClose}>
        閉じる
      </button>
    </div>
  );
});
