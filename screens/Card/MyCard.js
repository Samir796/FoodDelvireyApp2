import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { COLORS, SIZES, FONTS, icons, dummyData } from "../../constants";
import { IconButton, TextButton, Header, CardItem } from "../../components";

const MyCard = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  function renderHeader() {
    return (
      <Header
        title="My Cards"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<View style={{ width: 40 }} />}
      />
    );
  }

  console.log("selectedCard>>>", selectedCard);

  function renderMyCards() {
    return (
      <View>
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              keyValue={`MyCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `MyCard-${item?.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
            />
          );
        })}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Cards */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* My Card */}
        {renderMyCards()}
        {/* Add my card */}
      </ScrollView>
      {/* Footer */}
    </View>
  );
};

export default MyCard;
