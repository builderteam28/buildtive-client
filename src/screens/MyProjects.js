import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { FontAwesome, SimpleLineIcons, FontAwesome5 } from "@expo/vector-icons";

export default function Profile() {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{ fontSize: 24, marginBottom: 16 }}>My Projects</Text>
        </View>
        <View style={{ flex: 1, padding: 30 }}>
          <View
            style={{
              padding: 20,
              backgroundColor: "#FFC536",
              borderRadius: 20,
            }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 10,
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Text style={{ width: 200, fontSize: 18, fontWeight: "500" }}>
                Nama Project ini adalah Sesuatu
              </Text>
              {/* <View
                style={{
                  width: 80,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: "#00c853",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Text style={{ color: "white", fontWeight: "500" }}>
                  Active
                </Text>
              </View> */}
              <View
                style={{
                  width: 80,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: "#d50000",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Text style={{ color: "white", fontWeight: "500" }}>
                  Inactive
                </Text>
              </View>
            </View>
            <View style={{ marginBottom: 10 }}>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <SimpleLineIcons
                  name="clock"
                  size={24}
                  color="black"
                  style={{ marginRight: 20 }}
                />
                <Text style={{ fontSize: 18 }}>Duration</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <FontAwesome5
                  name="money-bill"
                  size={24}
                  color="black"
                  style={{ marginRight: 14 }}
                />
                <Text style={{ fontSize: 18 }}>50.000.000</Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <FontAwesome
                  name="group"
                  size={24}
                  color="black"
                  style={{ marginRight: 18 }}
                />
                <Text style={{ fontSize: 18 }}> 6/6</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}>
              <Text style={{ fontSize: 18 }}>Category Name</Text>
              <View
                style={{
                  width: 80,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: "#102027",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Text style={{ color: "white", fontWeight: "500" }}>
                  Details
                </Text>
              </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {/* <View
                style={{
                  width: 120,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: "#00c853",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Text style={{ color: "white", fontWeight: "500" }}>
                  Already Paid
                </Text>
              </View> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}>
              <View
                style={{
                  width: 120,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: "#d50000",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Text style={{ color: "white", fontWeight: "500" }}>
                  Not Yet Paid
                </Text>
              </View>
              <View
                style={{
                  width: 80,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: "#102027",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Text style={{ color: "white", fontWeight: "500" }}>
                  Pay
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
