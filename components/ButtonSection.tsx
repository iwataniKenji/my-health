import { TouchableOpacity, StyleSheet, Alert, Text, View } from "react-native";

export function ButtonSection() {
  const handleLogin = () => {
    Alert.alert("Login", "Login realizado com sucesso!");
  };

  const handleCreateAccount = () => {
    Alert.alert("Criar conta", "Conta criada com sucesso!");
  };

  const handleForgotPassword = () => {
    Alert.alert("Esqueci minha senha", "Senha recuperada com sucesso!");
  };

  return (
    <View style={styles.buttonDiv}>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.createButton}
        onPress={handleCreateAccount}
      >
        <Text style={styles.buttonText}>Criar minha conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgetButton}
        onPress={handleForgotPassword}
      >
        <Text style={styles.buttonText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 40,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontFamily: "averiaLibre-regular",
  },

  loginButton: {
    backgroundColor: "rgba(55, 189, 109, 1)",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 2,
  },

  createButton: {
    backgroundColor: "rgba(65, 158, 215, 1)",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 2,
  },

  forgetButton: {
    backgroundColor: "rgba(181, 199, 209, 1)",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 2,
  },
});
