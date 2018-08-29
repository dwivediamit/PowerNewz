import React from "react";
import { Platform,AsyncStorage  } from "react-native";
import { Root, StyleProvider } from "native-base";
import { StackNavigator } from "react-navigation";
import getTheme from '../../native-base-theme/components';
import material from "../../native-base-theme/variables/material";
import platform from "../../native-base-theme/variables/platform";
import commonColor from '../../native-base-theme/variables/commonColor';
import DailyNews from "./DailyNews.js"
console.disableYellowBox = true;


const AppNavigator = StackNavigator(
    {
        DailyNews: { 
            screen: DailyNews 
        },  
    },
    {
        initialRouteName: "DailyNews",
        headerMode: "none",
    }
);

export default () =>

    <Root>
        <StyleProvider style={getTheme(commonColor)}>
            <AppNavigator />
        </StyleProvider>
    </Root>;
