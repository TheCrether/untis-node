import { Response } from "../interfaces";

export interface RoomResponse extends Response {
  result: Room[];
}

export interface Room {
  id: number;
  name: string;
  longName: string;
  foreColor: string;
  backColor: string;
}

export function getRoomByID(rooms: RoomResponse, id: number): Room | undefined {
  for (const room of rooms.result) {
    if (room.id === id) {
      return room;
    }
  }
}
