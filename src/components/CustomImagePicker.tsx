import {
  View,
  Text,
  TextInputProps,
  TouchableOpacity,
  Image,
} from "react-native";
import { colors } from "../data/theme";
import { useState } from "react";
import ImagePicker from "react-native-image-picker";

type Props = TextInputProps & {
  label: string;
  value: string;
  setValue: (value: string) => void;
};

// TODO -> integrar imagens
export function CustomImagePicker({ label, value, setValue }: Props) {
  const [photo, setPhoto] = useState<any>(null);

  const captureImage = async () => {
    try {
      const result = await ImagePicker.launchCamera({
        mediaType: "photo",
        cameraType: "back",
        quality: 1,
      });

      console.log("result: " + result);
    } catch (error) {
      console.log("log", error);
    }
  };

  return (
    <View
      style={{
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: colors.white,
          textAlign: "right",
          fontFamily: "averiaLibre-regular",
        }}
      >
        {label}
      </Text>
      <TouchableOpacity
        style={{
          height: 35,
          borderRadius: 2,
          paddingHorizontal: 10,
          backgroundColor: colors.primaryMain,
          display: "flex",
          justifyContent: "center",
        }}
        onPress={captureImage}
      >
        <Text
          style={{
            color: colors.white,
            fontSize: 14,
            fontFamily: "averiaLibre-regular",
          }}
        >
          Selecionar imagem
        </Text>
      </TouchableOpacity>
      {photo && (
        <Image source={{ uri: value }} style={{ width: 100, height: 100 }} />
      )}
    </View>
  );
}
