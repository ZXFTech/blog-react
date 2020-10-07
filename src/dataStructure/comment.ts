export interface IComment {
  id: string;
  name: string;
  date: string;
  content: string;
  reply?: IComment[];
}

export const testComments: IComment[] = [
  {
    id: "1",
    name: "feline",
    date: "2020-10-10 20:20:20",
    content: "第一条评论测试",
    reply: [
      {
        id: "2",
        name: "feline2",
        date: "2020-10-10 20:20:20",
        content: "第一条回复测试",
      },
      {
        id: "3",
        name: "feline3",
        date: "2020-10-10 20:20:20",
        content: "第二条回复测试",
      },
      {
        id: "4",
        name: "feline4",
        date: "2020-10-10 20:20:20",
        content: "第三条回复测试",
      },
    ],
  },
];
