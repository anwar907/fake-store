import { Theme } from "@react-navigation/native";
import React, { createContext, PropsWithChildren } from "react";
import { useColorScheme } from "react-native";

export const ThemeContext = createContext<Theme | null>(null);

expect const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
    const deviceColorScheme = useColorScheme() ?? "light";
    const themeSettings = useC
}