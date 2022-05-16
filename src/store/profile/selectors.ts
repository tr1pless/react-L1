import { shallowEqual } from "react-redux";
import { StoreState } from "..";

export const selectVisible = (state: StoreState) => state.profile.visible;

export const selectName = (state: StoreState) => state.profile.name;
