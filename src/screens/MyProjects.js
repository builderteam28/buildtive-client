import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CardMyProjects from "../components/CardMyProjects";
import HeaderTab from "../components/HeaderTab";
import { getMyProjects } from "../store/actions/projectActions";
export default function Profile() {
  const { myProjects } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getMyProjects());
    }, [])
  );

  const renderItem = ({ item }) => <CardMyProjects project={item} />;

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
          <Text style={{ fontSize: 24, marginBottom: 10 }}>My Projects</Text>
        </View>
        <View style={{ flex: 1, padding: 30 }}>
          <FlatList
            data={myProjects}
            renderItem={renderItem}
            keyExtractor={(project) => project.id}
          />
        </View>
      </View>
    </>
  );
}
