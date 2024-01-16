import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

function RepositoryItem(props) {
  function RepositoryItemHeader({
    ownerAvatarUrl,
    fullName,
    description,
    language,
  }) {
    return (
      <View style={{ flexDirection: "row", paddingBottom: 2 }}>
        <View style={{ paddingRight: 10 }}>
          <Image style={styles.image} source={{ uri: ownerAvatarUrl }}></Image>
        </View>
        <View style={{ flex: 1 }}>
          <StyledText fontWeight="bold">
            {fullName}
          </StyledText>
          <StyledText color='secondary'>{description}</StyledText>
          <StyledText style={styles.language}>{language}</StyledText>
        </View>
      </View>
    );
  }

  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  language: {
    padding: 4,
    marginVertical:4,
    color: "#fefefe",
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 5,
    alignSelf: "center",
  },
});

export default RepositoryItem;
