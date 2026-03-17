/*import { ViroARScene, ViroARSceneNavigator } from "@viro-community/react-viro";
import * as Speech from "expo-speech";
import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { saveProgress } from "../api/apiService";
import ARLetterOverlay from "../components/ARLetterOverlay";
import { loadModel, predict } from "../model/modelLoader";

const OBJECT_MAP: Record<string, string> = {
  A: "Apple",
  B: "Ball",
  C: "Cat",
  D: "Dog",
  E: "Elephant",
  F: "Fish",
  G: "Grapes",
  H: "Hat",
  I: "Ice Cream",
  J: "Jar",
  K: "Kite",
  L: "Lion",
  M: "monkey",
  N: "Nest",
  O: "Orange",
  P: "Penguin",
  Q: "Queen",
  R: "Rabbit",
  S: "Sun",
  T: "Tree",
  U: "Umbrella",
  V: "Van",
  W: "Watermelon",
  X: "Xylophone",
  Y: "Yarn",
  Z: "Zebra",
};

function ARScene({ arSceneNavigator }: { arSceneNavigator: any }) {
  const { detectedLetter } = arSceneNavigator.viroAppProps;
  if (!detectedLetter) return null;
  return (
    <ViroARScene>
      <ARLetterOverlay
        letter={detectedLetter}
        word={OBJECT_MAP[detectedLetter] || detectedLetter}
      />
    </ViroARScene>
  );
}

export default function ARAlphabetScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [detectedLetter, setDetectedLetter] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number>(0);
  const [modelReady, setModelReady] = useState<boolean>(false);
  const [showCharacter, setShowCharacter] = useState<boolean>(false);
  const studentId = route.params?.studentId;

  useEffect(() => {
    loadModel().then(() => setModelReady(true));
  }, []);

  const onDetect = async (imageTensor: any) => {
    if (!modelReady) return;
    const { label, confidence } = await predict(imageTensor);
    if (confidence > 70) {
      setDetectedLetter(label);
      setConfidence(confidence);
      setShowCharacter(true);
      const word = OBJECT_MAP[label] || label;
      Speech.speak(`${label}! ${label} is for ${word}!`, {
        rate: 0.65,
        pitch: 1.4,
      });
      await saveProgress({
        studentId,
        type: "alphabet",
        letter: label,
        correct: true,
        score: confidence,
        stars: confidence > 90 ? 3 : 2,
      });
      setTimeout(() => setShowCharacter(false), 3000);
    }
  };

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{ scene: ARScene }}
        viroAppProps={{ detectedLetter }}
        style={styles.arView}
      />
      {showCharacter && (
        <LottieView
          source={require("../../assets/animations/character.json")}
          autoPlay
          loop={false}
          style={styles.character}
        />
      )}
      <View style={styles.hud}>
        <Text style={styles.hudText}>
          {modelReady ? "📷 Point at a letter!" : "⏳ Loading AI..."}
        </Text>
        {detectedLetter && (
          <Text style={styles.detected}>
            {detectedLetter} — {confidence}% sure!
          </Text>
        )}
      </View>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>⬅ Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  arView: { flex: 1 },
  hud: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    alignItems: "center",
  },
  hudText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 10,
  },
  detected: {
    fontSize: 28,
    color: "#FFD700",
    fontWeight: "bold",
    marginTop: 10,
  },
  character: {
    position: "absolute",
    bottom: 160,
    right: 20,
    width: 150,
    height: 150,
  },
  back: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 20,
  },
  backText: { color: "white", fontSize: 18 },
});
*/
