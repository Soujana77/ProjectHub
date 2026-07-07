import "./button.css";

function Button({ children }) {
  return (
    <button
      style={{
        padding: "12px 24px",
        background: "blue",
        color: "white",
      }}
    >
      {children}
    </button>
  );
}

export default Button;