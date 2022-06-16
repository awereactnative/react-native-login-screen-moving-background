import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

export default function App() {
  const video = React.useRef(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  React.useEffect(() => {
    if (video) {
      video.current.playAsync();
    }
  }, [video]);

  return (
    <>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://res.cloudinary.com/dh6l45sly/video/upload/v1655354939/awereactnative/react-native-background-video/dywts2_jqjvu2.mp4",
          }}
          isLooping
          resizeMode="cover"
        />
      </View>
      <View style={styles.containerSub}>
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    flexDirection: "column",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerSub: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    textAlign: 'center',
    color: 'yellow'
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
  },
});
