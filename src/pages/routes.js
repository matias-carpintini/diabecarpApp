import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/home";
import sDetails from "./screens/home/coursesTab/details";
import Chat from "./stackNav/chat";
import Perfil from "./stackNav/perfil";
import SignUp from "./stackNav/signup";
import Welcome from "./stackNav/welcome/";

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode={false}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Details" component={sDetails} />
    </Stack.Navigator>
  );
}

// function Bottom({ navigation }) {
//   return (

//     <Tab.Navigator initialRouteName='Article' screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === 'Home') {
//           return (
//             <View style={{}}>
//               <SimpleLineIcon name='home' size={24} color='#000' />
//             </View>)
//         } else if (route.name === 'Reminders') {
//           return <EvilIcons name='search' size={34} color='#000' />
//         }
//         else if (route.name === 'Tasklist') {
//           return <Ionicons name='ios-add-circle' size={34} color='#000' />
//         }
//         else if (route.name === 'Map') {
//           return <Ionicons name='ios-notifications-outline' size={30} color='#000' />
//         }
//         else if (route.name === 'Perfil') {
//           return <MatIcon name='person-outline' size={30} color='#000' />

//         }

//       },
//     })}
//       tabBarOptions={{
//         showLabel: false,
//         style: {
//           elevation: 0,
//           height: 50,
//           borderRadius: 60,
//           backgroundColor: '#fff',
//         },
//       }}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Reminders" component={Reminders} />
//       <Tab.Screen name="Tasklist" component={Tasklist} />
//       <Tab.Screen name="Map" component={Map} />
//       <Stack.Screen name="Chat" component={Chat} />
//       <Tab.Screen name="Perfil" component={Perfil} />

//     </Tab.Navigator>

//   );
// }

// function CustomDrawerContent(props) {

//   return (
//     <DrawerContentScrollView {...props}>

//       <View style={{ margin: 16, height: '29%', width: '100%' }}>
//         <View style={{ height: 90, width: 90, backgroundColor: '#fff', borderRadius: 360, overflow: 'hidden' }} >
//           <Image source={require('../assets/images/claudio.jpg')} style={{ resizeMode: 'cover', width: undefined, height: undefined, flex: 1 }} />
//         </View>
//         <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', marginTop: 15 }}>Cláudio Farias</Text>
//         <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF' }}>@cfarias</Text>
//         <View style={{ width: '80%', marginTop: 20, height: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
//           <Text style={{ fontFamily: 'Poppins_regular', color: '#FFF' }}>123 Followers</Text>
//           <Text style={{ fontFamily: 'Poppins_regular', color: '#FFF' }}>345 Following</Text>

//         </View>
//       </View>
//       <DrawerItemList {...props} />

//     </DrawerContentScrollView>
//   );
// }

// export default function MyDrawer() {
//   return (

//     <Drawer.Navigator drawerStyle={{ width: '70%' }} drawerContent={props => CustomDrawerContent(props)}>
//       <Drawer.Screen name="Home" component={Bottom} options={{ drawerLabel: () => <Text style={{ fontFamily: 'Poppins_regular', color: '#FFF' }}>Home</Text>, drawerIcon: () => <Icon name="home" size={24} color="#FFF" /> }} />
//       <Drawer.Screen name="Articles" component={Articles} options={{ drawerLabel: () => <Text style={{ fontFamily: 'Poppins_regular', color: '#FFF' }}>Articles</Text>, drawerIcon: () => <Ionicons name="md-paper" size={24} color="#FFF" /> }} />
//       <Drawer.Screen name="Recipes" component={Recipes} options={{ drawerLabel: () => <Text style={{ fontFamily: 'Poppins_regular', color: '#FFF' }}>Recipes</Text>, drawerIcon: () => <Icon name="apple" size={28} color="#FFF" /> }} />
//       <Drawer.Screen name="Courses" component={Courses} options={{ drawerLabel: () => <Text style={{ fontFamily: 'Poppins_regular', color: '#FFF' }}>Courses</Text>, drawerIcon: () => <EntIcon name="video" size={24} color="#FFF" /> }} />
//       <Drawer.Screen name="BookMarks" component={BookMarks} options={{ drawerLabel: () => <Text style={{ fontFamily: 'Poppins_regular', color: '#FFF' }}>BookMarks</Text>, drawerIcon: () => <Icon name="bookmark" size={24} color="#FFF" /> }} />
//       <Drawer.Screen name="Reminders" component={Reminders} options={{ drawerLabel: () => <Text style={{ fontFamily: 'Poppins_regular', color: '#FFF' }}>Reminders</Text>, drawerIcon: () => <EntIcon name="clock" size={24} color="#FFF" /> }} />
//       <Drawer.Screen name="Tasklist" component={Tasklist} options={{ drawerLabel: () => <Text style={{ fontFamily: 'Poppins_regular', color: '#FFF' }}>Articles</Text>, drawerIcon: () => <EntIcon name="check" size={24} color="#FFF" /> }} />
//       <Drawer.Screen name="Map" component={Map} options={{ drawerLabel: () => <Text style={{ fontFamily: 'Poppins_regular', color: '#FFF' }}>Map</Text>, drawerIcon: () => <EntIcon name="globe" size={24} color="#FFF" /> }} />
//       <Drawer.Screen name="Support" component={Support} options={{ drawerLabel: () => <Text style={{ fontFamily: 'Poppins_regular', color: '#FFF' }}>Support</Text>, drawerIcon: () => <Icon name="phone" size={24} color="#FFF" /> }} />
//     </Drawer.Navigator>
//   );
// }
