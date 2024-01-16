import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    flexDirection: "row",
    borderRadius: 5,
  },
  text: {
    color: theme.appBar.primaryText,
    paddingHorizontal: 10,
  },
});

function AppBarTab({ active, children, to }) {
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={styles.text}>
        {children}
      </StyledText>
    </Link>
  );
}

function AppBar() {
  return (
    <View style={styles.container}>
      <AppBarTab active to="/">
        Repositories
      </AppBarTab>
      <AppBarTab active to={"/signin"}>
        SignIn
      </AppBarTab>
    </View>
  );
}

export default AppBar;
