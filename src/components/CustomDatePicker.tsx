import { View, Text } from "react-native";
import { colors } from "../data/theme";
import RNDateTimePicker from "react-native-datepicker";

type Props = {
  label: string;
  value?: Date;
  onChange: (date: Date) => void;
};

export function CustomDatePicker({ label, value, onChange }: Props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 10,
        marginLeft: 10,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: colors.white,
          textAlign: "right",
          fontFamily: "averiaLibre-regular",
          width: "50%",
        }}
      >
        {label}
      </Text>

      <RNDateTimePicker
        style={{
          height: 40,
          marginVertical: 12,
          borderRadius: 2,
          width: "55%",
          backgroundColor: colors.white,
        }}
        date={value}
        mode="date"
        placeholder="Selecione a data"
        format="DD-MM-YYYY"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        customStyles={{
          dateIcon: {
            position: "absolute",
            right: 2,
            top: 3,
            marginRight: 0,
          },
          dateInput: {
            marginRight: 36,
          },
          // TODO -> remove this ios dark theme adaptation
          datePicker: {
            backgroundColor: "black",
          },
          datePickerCon: {
            backgroundColor: "black",
          },
          dateText: {
            color: colors.primaryMain,
            fontFamily: "averiaLibre-regular",
          },
        }}
        onDateChange={(_, date) => onChange(date)}
      />
    </View>
  );
}
