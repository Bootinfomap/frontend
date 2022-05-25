import { GestureResponderEvent } from "react-native";

export type LocationType = {
  latitude: number;
  longitude: number;
};

export type PostType = {
  latitude: number;
  like: number;
  longitude: number;
  dislike: number;
  id: string;
  category: string;
  title: string;
  userid: string;
};

export type ModalContentType = {
  index:number,
  text:string,
  pressFunc?:((event: GestureResponderEvent) => void) | undefined,
  iconName: string,
  iconColor: string,
};

export type SettingContentType= {
index:number,
iconName:string,
contentName:string,
contentFunc: () => void,
};

export type RootStackParamList = {
  Login: undefined,
  Main: undefined,
  Report: {title:string},
}

export type UserStackParamList = {
  Main:undefined,
  Account:undefined,
  Info:undefined,
  QnA:undefined,
}
