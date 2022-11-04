import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Button, Text, TextInput } from 'react-native';

export const Register = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');

  const handleChangeView = (step, role = '') => {
    if (!role) setStep(1);
    setStep(step);
    setRole(role);
  };

  const renderForm = () => {
    return (
      <View style={{ marginHorizontal: 30, flex: 1 }}>
        <View style={{ flex: 1, marginTop: 80 }}>
          <View style={{ marginHorizontal: 20, marginBottom: 50 }}>
            <Text style={{ fontSize: 20 }}>Create User Account</Text>
          </View>
        </View>
      </View>
    );
  };

  if (step === 1) {
    return (
      <View style={{ marginHorizontal: 30, flex: 1 }}>
        <View style={{ flex: 1, marginTop: 80 }}>
          <View style={{ marginHorizontal: 20, marginBottom: 50 }}>
            <Text style={{ fontSize: 20 }}>Please choose what you want to be registered as</Text>
          </View>
          <Button style={{ marginBottom: 10 }} onPress={() => handleChangeView(2, 'CUSTOMER')}>
            <Text>Customer</Text>
          </Button>
          <Button style={{ marginBottom: 10 }} onPress={() => handleChangeView(2, 'WORKER')}>
            <Text>Builder/Worker</Text>
          </Button>
        </View>
      </View>
    );
  }

  if (step === 2 && role === 'WORKER') {
    return renderForm();
  }

  if (step === 2 && role === 'CUSTOMER') {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  textInput: { fontSize: 15, borderBottomWidth: 1, borderBottomColor: 'black' },
});
