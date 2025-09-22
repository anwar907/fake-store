import React, { PropsWithChildren } from "react";
import { Text, useColorScheme, View } from "react-native";
import { styles } from "./style";

type SectionProps = PropsWithChildren<{
    title: string;
}>;


export function CustomAppBar({ children, title }: SectionProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View>
            <Text style={[
                styles.sectionTitle,
                {
                    color: isDarkMode ? "white" : "black"

                },
            ]}>
                {title}
            </Text>
        </View>
    );
}