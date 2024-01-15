import React from "react";
import { View, Text } from "react-native";

function RepositoryItem(props) {
  return (
    <View
      key={props.id}
      style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}
    >
      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
        ID: {props.id}
      </Text>
      <Text>Full name: {props.fullName}</Text>
      <Text>Description: {props.description}</Text>
      <Text>Language: {props.language}</Text>
      <Text>Stargazers count: {props.stargazersCount}</Text>
      <Text>Forks count: {props.forksCount}</Text>
      <Text>Review count: {props.reviewCount}</Text>
      <Text>Rating average: {props.ratingAverage}</Text>
    </View>
  );
}

export default RepositoryItem;
