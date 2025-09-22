import { TabState } from "@fluentui/react-native";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<TabState> = useSelector;