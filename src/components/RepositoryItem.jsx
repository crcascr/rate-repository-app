import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

function RepositoryItem(props) {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText fontSize="subheading" fontWeight="bold">
        {props.fullName}
      </StyledText>
      <StyledText>{props.description}</StyledText>
      <StyledText>{props.language}</StyledText>
      <StyledText>Stars: {props.stargazersCount}</StyledText>
      <StyledText>Forks: {props.forksCount}</StyledText>
      <StyledText>Review: {props.reviewCount}</StyledText>
      <StyledText>Rating: {props.ratingAverage}</StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});

export default RepositoryItem;
