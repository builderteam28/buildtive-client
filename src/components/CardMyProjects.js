import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addPayment, updatePayment } from "../store/actions/projectActions";
import { useEffect, useState } from "react";
import ModalPayment from "./ModalPayment";
import ModalCompleteProject from "./ModalCompleteProject";

export default function CardMyProjects({ project }) {
  const [totalPayment, setTotalPayment] = useState("");
  const [modalPayment, setModalPayment] = useState(false);
  const [modalComplete, setModalComplete] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const closeModalPayment = () => {
    setModalPayment(!modalPayment);
  };

  const closeModalComplete = () => {
    setModalComplete(!modalComplete);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handlePay = () => {
    setModalPayment(!modalPayment);
    dispatch(addPayment({ cost: project.cost, ProjectId: project.id }))
      .then((data) => {
        if (data) {
          navigation.navigate("Payment", {
            transaction: data,
            cost: project.cost,
            ProjectId: project.id,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCompleteProject = () => {
    setModalPayment(!modalPayment);
    dispatch(updatePayment({ cost: project.cost, ProjectId: project.id }));
  };

  useEffect(() => {
    if (project) {
      const payment = project.totalWorker * project.cost;
      setTotalPayment(formatPrice(payment));
    }
  }, []);

  if (project) {
    return (
      <View style={styles.container}>
        <View style={styles.content1}>
          <Text style={{ width: 200, fontSize: 18, fontWeight: "500" }}>
            {project.name}
          </Text>
          {project.status === "Inactive" && (
            <View style={styles.inactive}>
              <Text style={styles.buttonText}>Inactive</Text>
            </View>
          )}
          {project.status === "Active" && project.Payment === null && (
            <View style={styles.wait}>
              <Text style={styles.buttonText}>Waiting Payment</Text>
            </View>
          )}
          {project.status === "Active" && project.Payment !== null && (
            <View style={styles.active}>
              <Text style={styles.buttonText}>Active</Text>
            </View>
          )}
          {project.status === "Completed" && (
            <View style={styles.completed}>
              <Text style={styles.buttonText}>Completed</Text>
            </View>
          )}
        </View>
        <View style={{ marginBottom: 10 }}>
          <View style={styles.description}>
            <MaterialCommunityIcons
              name="clock"
              size={24}
              color="black"
              style={{ marginRight: 20 }}
            />
            <Text style={{ fontSize: 18 }}>{project.tenor} day</Text>
          </View>
          <View style={styles.description}>
            <FontAwesome5
              name="money-bill"
              size={24}
              color="black"
              style={{ marginRight: 14 }}
            />
            <Text style={{ fontSize: 18 }}>
              Rp. {formatPrice(project.cost)},-
            </Text>
          </View>
          <View style={styles.description}>
            <FontAwesome
              name="group"
              size={24}
              color="black"
              style={{ marginRight: 18 }}
            />
            {project.status === "Completed" ? (
              <Text style={{ fontSize: 18 }}>
                {project.totalWorker}/{project.totalWorker} person
              </Text>
            ) : (
              <Text style={{ fontSize: 18 }}>
                {project.acceptedWorker}/{project.totalWorker} person
              </Text>
            )}
          </View>
        </View>
        <View style={styles.content2}>
          <Text style={{ fontSize: 18 }}>{project.Category.name}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailProject", { ProjectId: project.id })
            }
            style={styles.detailButton}>
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
        </View>
        {project.status === "Inactive" && (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.waitButton}>
              <Text style={styles.buttonText}>Waiting for workers</Text>
            </View>
          </View>
        )}
        {project.Payment === null && project.status === "Active" && (
          <View style={styles.content2}>
            <View style={styles.notPaid}>
              <Text style={styles.buttonText}>Not Yet Paid</Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalPayment(true)}
              style={styles.payButton}>
              <Text style={styles.buttonText}>Pay</Text>
            </TouchableOpacity>
          </View>
        )}
        {project.Payment !== null && project.status === "Active" && (
          <TouchableOpacity
            onPress={() => setModalComplete(true)}
            style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.completeButton}>
              <Text style={styles.buttonText}>Complete Project</Text>
            </View>
          </TouchableOpacity>
        )}
        {project.Payment !== null && project.Ratings.length === 0 && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Rating", {
                ProjectId: project.id,
                name: project.name,
              })
            }
            style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.paidButton}>
              <Text style={styles.buttonText}>Rate this Project</Text>
            </View>
          </TouchableOpacity>
        )}
        <ModalPayment
          modalPayment={modalPayment}
          closeModalPayment={closeModalPayment}
          totalPayment={totalPayment}
          handlePay={handlePay}
        />
        <ModalCompleteProject
          modalComplete={modalComplete}
          closeModalComplete={closeModalComplete}
          handleCompleteProject={handleCompleteProject}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFC536",
    borderRadius: 20,
    marginBottom: "10%",
  },
  content1: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  content2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  description: { flexDirection: "row", marginBottom: 10 },
  active: {
    width: 80,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#00c853",
    justifyContent: "center",
    alignItems: "center",
  },
  inactive: {
    width: 80,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#d50000",
    justifyContent: "center",
    alignItems: "center",
  },
  completed: {
    width: 100,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#102027",
    justifyContent: "center",
    alignItems: "center",
  },
  wait: {
    width: 80,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#d50000",
    justifyContent: "center",
    alignItems: "center",
  },
  waitButton: {
    width: 150,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#102027",
    justifyContent: "center",
    alignItems: "center",
  },
  detailButton: {
    width: 80,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#102027",
    justifyContent: "center",
    alignItems: "center",
  },
  completeButton: {
    width: 150,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#00c853",
    justifyContent: "center",
    alignItems: "center",
  },
  paidButton: {
    width: 120,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#00c853",
    justifyContent: "center",
    alignItems: "center",
  },
  notPaid: {
    width: 120,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#d50000",
    justifyContent: "center",
    alignItems: "center",
  },
  payButton: {
    width: 80,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#102027",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "500", textAlign: "center" },
});
