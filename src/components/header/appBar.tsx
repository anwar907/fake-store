import { StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";

type SectionProps = PropsWithChildren<{
    title: string;
}>;


const Stack = createNativeStackNavigator();


export function CustomAppBar({ title }: SectionProps): React.JSX.Element {
    return (
        <View>
            <Stack.Navigator screenOptions={{ header: props => <CustomAppBar {...props} /> }}></Stack.Navigator>
        </View>
        // <CustomAppBar title={title} children={children}>

        // </CustomAppBar>
    );
}