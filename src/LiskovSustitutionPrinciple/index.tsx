import { FC } from "react";

type ButtonProps = {
  title: string;
  color: string;
  size: string;
};

export const Button: FC<ButtonProps> = ({ title, color, size }) => {
  return <button style={{ color, fontSize: size === "xl" ? "32px" : "16px" }}>
    {title}
  </button>
};

type RedButtonProps = {
  title: string;
  size: string;
};

export const RedButton: FC<RedButtonProps> = ({ title, size }) => <Button size={size} color="red" title={title}/>