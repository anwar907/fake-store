import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";

type SectionProps = PropsWithChildren<{
    title: string;
}>;


const Stack = createNativeStackNavigator();


function AppBarHeader({ title }: SectionProps): React.JSX.Element {
    return (
        <View>
            {/* Render your custom header UI here */}
            {/* Example: */}
            <Text>{title}</Text>
        </View>
    );
}

export function CustomAppBar({ title }: SectionProps): React.JSX.Element {
    return (
        <View>
            <Stack.Navigator
                screenOptions={{
                    header: () => <AppBarHeader title={title} />
                }}
            />
        </View>
    );
}