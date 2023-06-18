import {
  View,
  Text,
  TextInputProps,
  TouchableOpacity,
  Image,
} from "react-native";
import { colors } from "../data/theme";
import { useState } from "react";
import { reducerSetFormIsLoading } from "../redux/formIsLoadingSlice";
import { useDispatch } from 'react-redux';
import * as ImagePicker from "expo-image-picker";

type Props = TextInputProps & {
  label: string;
  value: string;
  setValue: (value: string) => void;
};

export function CustomImagePicker({ label, value, setValue }: Props) {
  const dispatch = useDispatch();
  
  const [photo, setPhoto] = useState<any>(null);

  const captureImage = async () => {
    dispatch(reducerSetFormIsLoading(true));

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (result.assets) {
      const selectedImage = result.assets[0];

      setPhoto(selectedImage as any);
      setValue(selectedImage.uri as string);
    }

    dispatch(reducerSetFormIsLoading(false));
  };

  return (
    <View>
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
      </View>
      {value ? (
        <Image
          source={{ uri: value }}
          style={{ width: 100, height: 100, marginLeft: 158, marginTop: 10 }}
        />
      ) : null}
    </View>
  );
}
