import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, images } from "../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* App Icon */}
        <View style={{ alignItems: "center" }}>
          <Image
            source={images.logo_02}
            resizeMode="contain"
            style={{ height: 100, width: 200 }}
          />
        </View>
        {/* Title & Subtitle */}
        <View style={{ marginTop: SIZES.padding, ...titleContainerStyle }}>
          <Text style={{ textAlign: "center", ...FONTS.h2 }}>{title}</Text>
          <Text
            style={{
              textAlign: "center",
              color: COLORS.darkGray,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}
          >
            {subtitle}
          </Text>
        </View>
        {/* Content / Children */}
        {children}
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default AuthLayout;
