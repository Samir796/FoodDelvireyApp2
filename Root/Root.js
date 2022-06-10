import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "../navigation/CustomDrawer";

import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
  FoodDetail,
  Checkout,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
  Map,
} from "../screens";

const { Navigator, Screen } = createStackNavigator();

const Root = ({}) => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Screen name="OnBoarding" component={OnBoarding} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="Otp" component={Otp} />
        <Screen name="Home" component={CustomDrawer} />
        <Screen name="FoodDetail" component={FoodDetail} />
        <Screen name="MyCart" component={MyCart} />
        <Screen name="MyCard" component={MyCard} />
        {/* <Screen name="Checkout" component={Checkout} />
      
      <Screen name="Success" component={Success} />
      <Screen name="AddCard" component={AddCard} />
      <Screen name="MyCard" component={MyCard} />
      <Screen name="DeliveryStatus" component={DeliveryStatus} />
      <Screen name="Map" component={Map} /> */}
      </Navigator>
    </NavigationContainer>
  );
};

export default Root;
