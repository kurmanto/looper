import React from "react";
import { View, Text } from "react-native";

import NumberPlease from "react-native-number-please";

const NumberPicker = () => {
  const initialValues = [{ id: "tempo", value: 40 }];
  const [tempo, setTempo] = useState(initialValues);
  const tempoNumbers = [{ id: "tempo", label: "", min: 0, max: 160  }];

  return (
    <View>
      <Text>What tempo would you like?</Text>
      <NumberPlease
        digits={tempoNumbers}
        values={tempo}
        onChange={(values) => setTempo(values)}
      />
    </View>
  );
};

export { NumberPicker }; 
