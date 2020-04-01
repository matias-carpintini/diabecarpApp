import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <RectButton
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
      style={{
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        width: 60,
        borderRadius: 40,
        backgroundColor: "#FFF",
        marginRight: 5
      }}
    >
      <Image
        source={require("./../../../../../assets/images/play.png")}
        style={{ width: 9, height: 9 }}
      />
    </RectButton>

    // <RectButton rippleColor={'pink'} onPress={() => { navigation.navigate('Perfil') }} style={{ alignSelf: 'center', alignContent: 'center', justifyContent: 'center', alignItems: 'center', height: 60, width: 60, borderRadius: 40, backgroundColor: '#FFF', marginRight: 5 }}>
    //     <Image source={require('./../../../../assets/images/play.png')} style={{ width: 9, height: 9 }} />
    // </RectButton>
  );
}

export default GoToButton;
