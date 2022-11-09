import React from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
export default function ModalPayment({
  modalPayment,
  closeModalPayment,
  totalPayment,
  handlePay,
}) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalPayment}
        onRequestClose={() => {
          closeModalPayment();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to pay this project?
            </Text>
            <Text style={styles.modalText}>
              The total cost is Rp. {totalPayment},-
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "70%",
                justifyContent: "space-evenly",
              }}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => closeModalPayment()}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonSubmit]}
                onPress={() => handlePay()}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000060",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    elevation: 4,
    width: 70,
  },
  buttonSubmit: {
    backgroundColor: "#00c853",
  },
  buttonCancel: {
    backgroundColor: "#d50000",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
});
