import { PincodeInterface } from "@/interfaces/pincode";


export enum ActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
}

export type SelectedItem = PincodeInterface;

export type Action =
  | { type: ActionTypes.ADD_ITEM; payload: SelectedItem }
  | { type: ActionTypes.REMOVE_ITEM; payload: string };

export function selectedItemsReducer(
  state: SelectedItem[],
  action: Action
): SelectedItem[] {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ActionTypes.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}