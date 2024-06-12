import styles from "./Button.module.css";

interface ButtonProp {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProp) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
