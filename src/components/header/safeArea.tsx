import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function SafeArea(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const safePadding = '5%';
    return (
        <SafeAreaView
            style={{
                backgroundColor: isDarkMode ? 'black' : 'white',
                paddingHorizontal: safePadding,
                paddingBottom: safePadding,
            }} />
    )
}