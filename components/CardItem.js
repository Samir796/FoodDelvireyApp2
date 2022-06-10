import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FONTS, SIZES, COLORS, icons } from "../constants";

const CardItem = ({ keyValue, item, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      key={keyValue}
      style={{
        flexDirection: "row",
        height: 100,
        alignItems: "center",
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        borderWidth: 0.7,
        borderRadius: SIZES.radius,
        borderColor: isSelected ? COLORS.primary : COLORS.lightGray2,
      }}
      onPress={onPress}
    >
      {/* Card Image */}
      <View
        style={{
          width: 60,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 0.8,
          borderRadius: SIZES.radius,
          borderColor: COLORS.lightGray2,
        }}
      >
        <Image
          source={item.icon}
          resizeMode="center"
          style={{ width: 35, height: 35 }}
        />
      </View>
      {/* Name */}
      <Text style={{ flex: 1, ...FONTS.h3, marginLeft: SIZES.radius }}>
        {item.name}
      </Text>
      {/* Radio Button */}
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={{ width: 25, height: 25 }}
      />
    </TouchableOpacity>
  );
};

export default CardItem;
