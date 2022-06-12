import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  FormInput,
  Header,
  IconButton,
  TextButton,
  FormInputCheck,
  RadioButton,
} from "../../components";
import { FONTS, SIZES, icons, images, COLORS } from "../../constants";
import { utils } from "../../utils";

const AddCard = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNameError, setCardNameError] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvError, setCvvError] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  useEffect(() => {
    let { selectedCard } = route.params;
    setSelectedCard(selectedCard);
  }, []);

  isEnableAddCard = () => {
    return (
      cardNumber != "" &&
      cardName != "" &&
      expiryDate != "" &&
      cvv != "" &&
      cardNumberError == "" &&
      cardNameError == "" &&
      expiryDateError == "" &&
      cvvError == ""
    );
  };

  renderHeader = () => {
    return (
      <Header
        title="ADD NEW CARD"
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
  };

  renderCard = () => {
    return (
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: "100%",
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
      >
        {/* Logo */}
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            height: 40,
            width: 80,
          }}
        />
        {/* Details */}
        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{cardName}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 1, color: COLORS.white }}>{cardNumber}</Text>
            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
              {expiryDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  };

  renderForm = () => {
    return (
      <View style={{ marginTop: SIZES.padding * 2 }}>
        {/* Card Number */}
        <FormInput
          label="Card Number"
          keyboardType="number-pad"
          maxLength={19}
          value={cardNumber}
          onChange={(value) => {
            setCardNumber(
              value
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()
            );
            utils.validateInput(value, 19, setCardNumberError);
          }}
          errorMsg={cardNumberError}
          appendComponent={
            <FormInputCheck value={cardNumber} error={cardNumberError} />
          }
        />
        {/* Cardholder name */}
        <FormInput
          label="Cardholder Name"
          containerStyle={{ marginTop: SIZES.radius }}
          value={cardName}
          onChange={(value) => {
            utils.validateInput(value, 1, setCardNameError);
            setCardName(value);
          }}
          errorMsg={cardNameError}
          appendComponent={
            <FormInputCheck value={cardName} error={cardNameError} />
          }
        />
        {/* Expire Date / CVV */}
        <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
          <FormInput
            label="Expiry Date"
            value={expiryDate}
            placeholder="MM/YY"
            maxLength={5}
            containerStyle={{ flex: 1 }}
            onChange={(value) => {
              utils.validateInput(value, 5, setExpiryDateError);
              setExpiryDate(value);
            }}
            appendComponent={
              <FormInputCheck value={expiryDate} error={expiryDateError} />
            }
          />
          <FormInput
            label="CVV"
            value={cvv}
            maxLength={3}
            containerStyle={{ flex: 1, marginLeft: SIZES.radius }}
            onChange={(value) => {
              utils.validateInput(value, 3, setCvvError);
              setCvv(value);
            }}
            appendComponent={<FormInputCheck value={cvv} error={cvvError} />}
          />
        </View>
        {/* Remember */}
        <View style={{ alignItems: "flex-start", marginTop: SIZES.padding }}>
          <RadioButton
            label="Remember this card details"
            isSelected={isRemember}
            onPress={() => setIsRemember(!isRemember)}
          />
        </View>
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
          label="Add Card"
          disabled={!isEnableAddCard()}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableAddCard()
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Body */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Card */}
        {renderCard()}
        {/* Forms */}
        {renderForm()}
      </KeyboardAwareScrollView>
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default AddCard;
