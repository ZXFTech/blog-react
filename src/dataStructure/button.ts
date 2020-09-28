export default interface ButtonItem {
  name: string;
  className: string;
  text: string;
  size: string;
  theme: string;
  onClick?: any;
}

const buttonStyle = {
  Neumorphism: "neumorphism-button",
};

export const ButtonList: Array<ButtonItem> = [
  {
    name: "default",
    className: "button",
    text: "默认",
    size: "md",
    theme: "neu",
  },
  {
    name: "disable",
    className: "button",
    text: "禁用",
    size: "sm",
    theme: "neu",
  },
  {
    name: "link",
    className: "button",
    text: "链接",
    size: "lg",
    theme: "neu",
  },
  {
    name: "text",
    className: "button",
    text: "文本",
    size: "md",
    theme: "neu",
  },
  {
    name: "warn",
    className: "button",
    text: "警告",
    size: "md",
    theme: "neu",
  },
];
