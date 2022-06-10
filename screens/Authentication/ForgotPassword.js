import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AuthLayout from "./AuthLayout";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { FormInp, TextButtonSignScreen } from "../../components";
import { utils } from "../../utils";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function isEnableSendEmail() {
    return email != "" && emailError == "";
  }

  return (
    <AuthLayout
      title="Password Recovery"
      subtitle="Please enter your email addres to recover your password"
      titleContainerStyle={{
        margintop: SIZES.padding * 2,
      }}
    >
      <FormInp
        label="Email"
        keyboardType="email-address"
        autoCompleteType="email"
        onChange={(value) => {
          utils.validateEmail(value, setEmailError);
          setEmail(value);
        }}
        errorMsg={emailError}
        appendComponent={
          <View style={{ justifyContent: "center" }}>
            <Image
              source={
                email == "" || (email != "" && emailError == "")
                  ? icons.correct
                  : icons.cancel
              }
              style={{
                height: 20,
                width: 20,
                tintColor: (
                  email == "" ? COLORS.gray : email != "" && emailError == ""
                )
                  ? COLORS.green
                  : COLORS.red,
              }}
            />
          </View>
        }
      />

      {/* Button */}
      <View style={{ flex: 1 }}>
        <TextButtonSignScreen
          label="Send Email"
          disabled={isEnableSendEmail() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSendEmail()
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
