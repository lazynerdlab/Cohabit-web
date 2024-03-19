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
  sender?: {
    image: string | undefined;
    name: string;
    // Other sender properties...
  };
 
  id: number;
  receiver_id?: number | string;
  message: string;
  messageType: string;
  file?: Record<string, any>;
  
}
