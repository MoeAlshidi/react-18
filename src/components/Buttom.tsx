import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: String;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <button type="button" onClick={onClick} className={"btn btn-" + color}>
        {children}
      </button>
    </>
  );
};

export default Button;
