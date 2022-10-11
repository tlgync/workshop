import "../App.css";
export const Button = (props) => {
  const { className, disable, style, onClick, title } = props;
  return (
    <button
      className={className}
      disabled={disable || false}
      style={style}
      onClick={onClick}
    >
      {title || ""}
    </button>
  );
};
