import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AuthLayout from "./AuthLayout";
import { COLORS, FONTS, SIZES, icons } from "../../constants";
import FormInp from "../../components/FormInp";
import { utils } from "../../utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const [showPass, setShowPass] = useState(false);
  return (
    <AuthLayout
      title="Let's Sign You In"
      subtitle="Welcome back, you've been missed"
    >
      <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
        {/* Form inputs */}
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
                  backgroundColor: "red",
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
        <FormInp
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{ margintop: SIZES.radius }}
          onChange={(value) => setPassword(value)}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{ height: 20, width: 20, tintColor: COLORS.gray }}
              />
            </TouchableOpacity>
          }
        />
        {/* Save me &Forgot Password */}
        {/* Sign In */}
        {/* Sign Up */}
      </View>
    </AuthLayout>
  );
};

export default SignIn;
