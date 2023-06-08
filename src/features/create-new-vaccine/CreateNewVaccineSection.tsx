import { useEffect, useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import { MainScreenContent } from "../../components/MainScreenContent";
import { View } from "react-native";
import { CreateNewVaccineButtons } from "./CreateNewVaccineButtons";
import { Doses } from "../../enums/Doses";
import { CustomRadioGroup } from "../../components/CustomRadioGroup";
import { dosesValues } from "../../data/dosesValues";
import { CustomDatePicker } from "../../components/CustomDatePicker";
import { useCreateVaccine } from "../../hooks/useCreateVaccine";
import { useUpdateVaccine } from "../../hooks/useUpdateVaccine";
import { CustomImagePicker } from "../../components/CustomImagePicker";
import { useSelector } from "react-redux";
import { useSaveImage } from "../../hooks/useSaveImage";
import { useRemoveImage } from "../../hooks/useRemoveImage";

export function CreateNewVaccineSection(props: any) {
  const createVaccine = useCreateVaccine();
  const updateVaccine = useUpdateVaccine();
  const saveImage = useSaveImage();
  const removeImage = useRemoveImage();

  const userId = useSelector((state: any) => state.auth.id);

  const [date, setDate] = useState(undefined);
  const [title, setTitle] = useState("");
  const [doses, setDoses] = useState(Doses.SINGLE_DOSE);
  const [nextDose, setNextDose] = useState(undefined);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (props.route.params) {
      const { title, date, doses, nextDose, imageUrl } = props.route.params;

      setDate(date ? date : undefined);
      setTitle(title ? title : "");
      setDoses(doses ? doses : Doses.SINGLE_DOSE);
      setNextDose(nextDose ? nextDose : undefined);
      setImageUrl(imageUrl ? imageUrl : undefined);
    }
  }, []);

  const handleCreateUpdateVaccine = async (isEditMode: boolean) => {
    if (title === "") return alert("Preencha o campo de vacina");

    const oldImage = props.route.params?.imageUrl;
    const newImage = imageUrl;

    const formData = {
      title,
      date,
      doses,
      nextDose,
      imageUrl,
    };

    try {
      if (newImage && oldImage !== newImage) {
        const imageIsChanged = oldImage && newImage;

        if (imageIsChanged) removeImage(oldImage);

        const url = await saveImage(imageUrl);

        formData.imageUrl = url;
      }

      if (isEditMode) {
        updateVaccine(userId, props.route.params.id, formData, () =>
          props.navigation.pop()
        );
      } else {
        createVaccine(userId, formData, () => props.navigation.pop());
      }
    } catch (error) {
      alert("Erro ao criar/editar vacina");

      console.log("Erro ao criar/editar vacina: ", error);
    }
  };

  return (
    <MainScreenContent
      drawerProps={{ ...props, goBackButton: true, title: "Minhas vacinas" }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          paddingHorizontal: 20,
          height: 400,
        }}
      >
        <CustomDatePicker
          label="Data de vacinação"
          value={date}
          onChange={setDate as any}
        />
        <CustomInput label="Vacina" value={title} onChangeText={setTitle} />
        <CustomRadioGroup
          value={doses}
          setValue={setDoses}
          options={dosesValues}
        />

        <CustomImagePicker
          label="Comprovante"
          value={imageUrl}
          setValue={setImageUrl}
        />
        <CustomDatePicker
          label="Próxima vacinação"
          value={nextDose}
          onChange={setNextDose as any}
        />
      </View>

      <CreateNewVaccineButtons
        stackProps={props}
        handleCreateUpdateVaccine={handleCreateUpdateVaccine}
      />
    </MainScreenContent>
  );
}
