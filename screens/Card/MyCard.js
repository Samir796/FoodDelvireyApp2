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

  renderAddNewCard = () => {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h3 }}>Add new card</Text>
        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              key={`NewCard-${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ==
                `NewCard-${item.id}`
              }
              onPress={() => setSelectedCard({ ...item, key: "NewCard" })}
            />
          );
        })}
      </View>
    );
  };

  renderFooter = () => {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          disabled={selectedCard == null}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCard == null ? COLORS.gray : COLORS.primary,
          }}
          label={selectedCard?.key == "NewCard" ? "Add" : "Place your Order"}
          onPress={() => {
            if (selectedCard?.key == "NewCard") {
              navigation.navigate("AddCard", {
                selectedCard: selectedCard,
              });
            } else {
              navigation.navigate("Checkout", { selectedCard: selectedCard });
            }
          }}
        />
      </View>
    );
  };

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
        overScrollMode={"never"}
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
        {renderAddNewCard()}
      </ScrollView>
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default MyCard;
