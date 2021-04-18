export interface User {
  name: string
  status: string
}

export interface Message {
  id: string
  text: string
  timestamp: number
  to: {
    id: string
  }
  from: {
    id: string
    name: string
  }
}

export enum SERVER_EVENTS {
  CONNECT_TO_SERVER = 'connect_to_server',
  SEND_MESSAGE = 'send_message',
  DISCONNECT = 'disconnect',
}

export enum CLIENT_EVENTS {
  USER_CONNECTED = 'user_connected',
  USER_DISCONNECTED = 'user_disconnected',
  MESSAGE_RECEIVED = 'message_received',
  GET_ONLINE_USERS = 'get_online_users',
}