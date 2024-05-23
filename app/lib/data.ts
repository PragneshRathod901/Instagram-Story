import { UserData } from "./placeholder-data";
import { User } from "./definitions";

export async function fetchUsers() {
  return UserData;
}
export async function fetchStories(id: string) {
  for (let i = 0; i < UserData.length; i++) {
    if (UserData[i].id === id) {
      return <User>UserData[i];
    }
  }
  return null;
}
