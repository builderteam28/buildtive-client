import { useState } from "react";
import { FlatList, View } from "react-native";
import ProjectWorkerCard from "./ProjectWorkerCard";

export default function ProjectWorkers() {
  const [projectWorkers] = useState([
    {
      id: 1,
      status: "Accepted",
      worker: { name: "Ujang", address: "Tulungagung" },
    },
    {
      id: 2,
      status: "Applying",
      worker: {
        name: "Didi",
        address: "Semarang",
      },
    },
    {
      id: 3,
      status: "Applying",
      worker: {
        name: "Kundang",
        address: "Medan",
      },
    },
  ]);
  const renderItem = ({ item }) => <ProjectWorkerCard detail={item} />;
  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          data={projectWorkers}
          renderItem={renderItem}
          keyExtractor={(detail) => detail.id}
        />
      </View>
    </>
  );
}
