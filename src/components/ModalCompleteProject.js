import React from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { colors, fonts } from "../helpers/theme";
export default function ModalCompleteProject({
  modalComplete,
  closeModalComplete,
  handleCompleteProject,
}) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalComplete}
        onRequestClose={() => {
          closeModalComplete();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to complete this project?
            </Text>
            <Text style={styles.modalText}>
              The money will be transferred to your project workers!
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "70%",
                justifyContent: "space-evenly",
              }}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => closeModalComplete()}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonSubmit]}
                onPress={() => handleCompleteProject()}>
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
    backgroundColor: colors.white,
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
    backgroundColor: colors.green,
  },
  buttonCancel: {
    backgroundColor: colors.red,
  },
  textStyle: {
    color: "white",
    fontFamily: fonts.bold,
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 14,
    fontFamily: fonts.semiBold,
  },
});
