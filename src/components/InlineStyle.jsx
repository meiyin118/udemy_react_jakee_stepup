export const InlineStyle = () => {
  // CSSを当てる方法1：オブジェクトでinlineスタイルを定義する方法
  // JSのオブジェクト形式で書く
  const containerStyle = {
    border: "solid 2px blue",
    borderRadius: "10px", // キャメルケースで書く
    padding: "8px",
  };
  const titleStyle = {
    fontSize: "20px",
    color: "skyBlue",
  };
  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    appearance: "none",
    border: "none",
    padding: "8px",
    borderRadius: "4px",
    letterSpacing: "0.1em",
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>InlineStyle</p>
      <button type="button" style={buttonStyle}>
        Fight!!!!
      </button>
    </div>
  );
};
