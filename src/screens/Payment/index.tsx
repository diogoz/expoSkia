import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

import { CreditCard } from "../../components/CreditCard";

export const Payment = () => {
  return (
    <View style={styles.container}>
      <CreditCard />
    </View>
  );
};
