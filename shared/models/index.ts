export interface IBudget {
  id: number;
  text: string;
  upper: number;
  lower: number;
  created_at: string;
}

// export interface IChat {
//   id: number;
//   name: string;
//   created_at: string;
//   avatar?: string;
//   message: string
// }

export interface Message {
  id: number;
  receiverId: number | string;
  message: string;
  file: Record<string, any>
}