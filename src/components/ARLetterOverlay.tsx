/*import { ViroAnimations, ViroNode, ViroText } from "@viro-community/react-viro";
import React from "react";

ViroAnimations.registerAnimations({
  floatUp: {
    properties: { positionY: 0.3 },
    duration: 1000,
    easing: "EaseInEaseOut",
  },
  pulse: {
    properties: { scaleX: 1.2, scaleY: 1.2 },
    duration: 500,
    easing: "Bounce",
  },
});

export default function ARLetterOverlay({
  letter,
  word,
}: {
  letter: string;
  word: string;
}) {
  return (
    <ViroNode position={[0, 0, -1]}>
      <ViroText
        text={letter}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0.2, 0]}
        style={{
          fontFamily: "Arial",
          fontSize: 60,
          color: "#FFD700",
          fontWeight: "bold",
        }}
        animation={{ name: "floatUp", run: true, loop: true }}
      />
      <ViroText
        text={`${letter} is for ${word}!`}
        scale={[0.25, 0.25, 0.25]}
        position={[0, -0.1, 0]}
        style={{ fontFamily: "Arial", fontSize: 28, color: "#FFFFFF" }}
      />
    </ViroNode>
  );
}
*/
