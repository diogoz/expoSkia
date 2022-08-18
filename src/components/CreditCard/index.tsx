import { Dimensions } from "react-native";
import {
  Canvas,
  RoundedRect,
  LinearGradient,
  vec,
  Circle,
  Group,
  useFont,
  Text,
  TextPath,
  Skia,
  Blur,
} from "@shopify/react-native-skia";
import CairoFont from "../../assets/fonts/Cairo-Regular.ttf";
import { LoadIndicator } from "../LoadIndicator";

const width = Dimensions.get("window").width - 24;
const height = 200;

export const CreditCard = () => {
  const font = useFont(CairoFont, 16);
  if (font === null) {
    return <LoadIndicator />;
  }

  const circle = Skia.Path.Make();
  circle.addCircle(30, -10, 50);

  return (
    <Canvas style={{ height, width }}>
      <RoundedRect x={0} y={0} height={height} width={width} r={10}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(256, 256)}
          colors={["#5b9a93", "#2E6454", "#40534D", "#5B9A93"]}
        />
      </RoundedRect>

      <Group blendMode="overlay">
        <Circle cx={width - 60} cy={40} r={20} color="#D6A485" />
        <Circle cx={width - 40} cy={40} r={20} color="#98504B" />
      </Group>

      <Text x={20} y={50} font={font} color="#FFF" text="Operadora do cartão" />

      <Text
        x={20}
        y={height - 90}
        font={font}
        color="#FFF"
        text="5235 1414 5522 5401"
      />

      <Text x={20} y={height - 30} font={font} color="#FFF" text="12/2024" />

      <Text
        x={width - 60}
        y={height - 30}
        font={font}
        color="#FFF"
        text="000"
      />

      <TextPath
        text={"Cartão de credito Virtual"}
        font={font}
        path={circle}
        color="#000"
        opacity={0.3}
      >
        <Blur blur={1} />
      </TextPath>
    </Canvas>
  );
};
