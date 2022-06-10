import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { FONTS, SIZES, COLORS } from "../../constants";
import { TextButtonSignScreen } from "../../components";
import AuthLayout from "./AuthLayout";
import OTPinputView from "@twotalltotems/react-native-otp-input";

const Otp = ({ navigation }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been  sent to samirnahmetov@gmail.com"
    >
      {/* OTP inputs */}
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        <OTPinputView
          pinCount={4}
          style={{ width: "100%", height: 50 }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={() => console.log(code)}
        />
        {/* Countdown Timer */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Didn't receive code?
          </Text>
          <TextButtonSignScreen
            label={`Resende (${timer}s)`}
            disabled={timer == 0 ? false : true}
            buttonContainerStyle={{
              marginLegt: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>
      {/* Footer */}
      <View>
        <TextButtonSignScreen
          label="Continue"
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => console.log("Continue")}
        />
        <View style={{ marginTop: SIZES.padding, alignItems: "center" }}>
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            By signing up, you agree to our.
          </Text>
          <TextButtonSignScreen
            label="Terms and Conditions"
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.primary, ...FONTS.badoy3 }}
            onPress={() => console.log("TnC")}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
