import React from "react";
import { Formik, useField } from "formik";
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
});

function FormikInputValues({ name, ...props }) {
  const [field, meta, helpers] = useField(name);
  return (
    <StyledTextInput
      placeholder="E-mail"
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  );
}

function LogInPage() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValues name="email" placeholder="E-mail" />
            <FormikInputValues name="password" placeholder="Password" />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
}

export default LogInPage;
