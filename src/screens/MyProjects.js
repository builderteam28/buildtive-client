import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CardMyProjects from "../components/CardMyProjects";
import HeaderTab from "../components/HeaderTab";
import { colors, fonts } from "../helpers/theme";
import { getMyProjects } from "../store/actions/projectActions";
export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const { myProjects } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getMyProjects()).then((data) => {
        if (data) {
          setIsLoading(false);
        }
      });
    }, [])
  );
  const renderItem = ({ item }) => <CardMyProjects project={item} />;
  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  if (!isLoading) {
    return (
      <>
        <View style={{ flex: 1, marginBottom: "10%" }}>
          <HeaderTab />
          <View
            style={{
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text
              style={{
                fontSize: 24,
                marginBottom: 4,
                fontFamily: fonts.medium,
              }}>
              My Projects
            </Text>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 30 }}>
            <FlatList
              data={myProjects}
              renderItem={renderItem}
              keyExtractor={(project) => project.id}
              initialNumToRender={2}
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    alignSelf: "center",
    top: "46.5%",
  },
});
