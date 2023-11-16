import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { Decoration } from "../../../assets/svg/Decoration";
import { CircleIcon } from "../../../assets/svg/CircleIcon";
import { Add } from "../../../assets/svg/Add";
import { PiggyBank } from "../../../assets/svg/PiggyBank";
import { PiggyBank2 } from "../../../assets/svg/PiggyBank2";

interface PiggyBank {
  current: number;
  goal: number;
}

const PiggyBankCard: React.FC<PiggyBank> = ({ current, goal }) => {
  const progress = current / goal;
  let color = "#6200ee";

  if (progress < 0.3) {
    color = "#ff0000"; // vermelho para menos de 30%
  } else if (progress < 0.6) {
    color = "#ffaa00"; // laranja para menos de 60%
  } else if (progress < 1) {
    color = "#ffff00"; // amarelo para menos de 100%
  } else {
    color = "#00ff00"; // verde para 100% ou mais
  }

  const piggyBankPosition = (progress * 93).toString() + "%";

  return (
    <View style={styles.card}>
      <View style={styles.title}>
        <Text>Valor Atual: R${current}</Text>
        <Text>Objetivo: R${goal}</Text>
      </View>
      <ProgressBar
        progress={progress}
        color={color}
        style={{ marginBottom: 5 }}
      />
      <PiggyBank2 color={color} style={{ left: piggyBankPosition }} />
    </View>
  );
};

const PiggyBankScreen: React.FC = ({ navigation }: any) => {
  const piggyBanks: PiggyBank[] = [
    { current: 0, goal: 100 },
    { current: 10, goal: 100 },
    { current: 40, goal: 100 },
    { current: 60, goal: 100 },
    { current: 80, goal: 100 },
    { current: 100, goal: 100 },
  ];

  return (
    <FlatList
      data={piggyBanks}
      keyExtractor={(item) => String(item.current)}
      ListHeaderComponent={() => (
        <View>
          <View style={styles.container}>
            <Text style={styles.text}>Porquinho</Text>
            <PiggyBank />
            <View style={{ position: "absolute", top: 0, right: 0 }}>
              <Decoration />
            </View>
            <View style={{ position: "absolute", bottom: 0, left: 0 }}>
              <CircleIcon />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("AdicionarCarteira")}
            style={{ display: "flex", alignItems: "center", margin: 12 }}
          >
            <View style={styles.buttonAdd}>
              <Add />
            </View>
          </TouchableOpacity>
        </View>
      )}
      renderItem={({ item, index }) => (
        <View style={styles.containerContent}>
          <PiggyBankCard key={index} current={item.current} goal={item.goal} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    borderRadius: 24,
    lineHeight: 1.25,
    padding: 24,
    margin: 12,
    height: 150,
    backgroundColor: "#5577A5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  containerContent: {
    backgroundColor: "#5577A5",
    margin: 12,
    borderRadius: 10,
  },
  card: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
  },
  buttonAdd: {
    borderRadius: 100,
    margin: 12,
    height: 50,
    width: "100%",
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#fff",
    borderTopColor: "white",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 30,
  },
});

export default PiggyBankScreen;