import { useState } from "react";
import { FlatList, View } from "react-native";
import ProjectWorkerCard from "./ProjectWorkerCard";

export default function ProjectWorkers({ workers }) {
  const renderItem = ({ item }) => <ProjectWorkerCard projectWorker={item} />;
  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          data={workers}
          renderItem={renderItem}
          keyExtractor={(worker) => worker.id}
        />
      </View>
    </>
  );
}
