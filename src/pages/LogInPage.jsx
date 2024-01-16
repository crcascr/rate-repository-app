import React from "react";
import { Formik } from "formik";
import { View, StyleSheet, Button } from "react-native";
import StyledTextInput from "../components/StyledTextInput";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  submitButton: {
    borderRadius: 10,
  },
});

function LogInPage() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <StyledTextInput
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange("email")}
            />
            <StyledTextInput
              placeholder="Password"
              value={values.password}
              onChange={handleChange("password")}
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
}

export default LogInPage;
