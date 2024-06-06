import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onDismiss: () => void;
}

const Alert = ({ children, onDismiss }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        onClick={onDismiss}
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
