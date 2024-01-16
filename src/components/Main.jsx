import React from "react";
import { View } from "react-native";
import { Routes, Route } from "react-router-native";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import AppBar from "./AppBar";

function Main() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </View>
  );
}

export default Main;
