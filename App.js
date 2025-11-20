import { StatusBar } from 'expo-status-bar';
import {
    StatusBar as ReactStatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    SectionList,
    Button
} from 'react-native';
import {FontAwesome6, Ionicons, MaterialIcons} from "@expo/vector-icons";

const datasource = [
    {
        title: 'ELECTRIC',
        data: [
            { name: "Pikachu", img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25.png' },
            { name: "Voltorb", img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_100.png' },
        ]
    },
    {
        title: 'WATER',
        data: [
            {name: 'Squirtle', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7.png'},
            {name: 'Wartortle', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_8.png'}
        ]
    },
    {
        title: 'FIRE',
        data: [
            { name: "Charmander", img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4.png' },
            { name: "Growlithe", img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_58.png' },
        ]
    },
    {
        title: 'EARTH',
        data: [
            {name: "Bulbasaur", img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_1.png'},
            {name: "Caterpie", img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_10.png'}
        ]
    }

]


const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Image source={{uri: item.img}} style={styles.img} />
        </TouchableOpacity>
    )
}

const customHeaderStyle = (title) => {
    if(title === 'ELECTRIC'){
        return {backgroundColor: '#ffff00'};
    }
    else if(title === 'FIRE'){
        return {backgroundColor: '#ffa07a'};
    }
    else if(title === 'WATER'){
        return {backgroundColor: '#87ceeb'};
    }
    else {
        return {backgroundColor: '#964b00'};
    }
}

function customIconHeader(title) {
    if(title === 'ELECTRIC'){
        return <FontAwesome6 name={"bolt-lightning"} size={20}/>
    }
    else if(title === 'FIRE'){
        return <FontAwesome6 name={"fire"} size={20}/>
    }
    else if(title === "WATER"){
        return <Ionicons name={"water"} size={20}/>
    }
    else {
        return <MaterialIcons name={"grass"} size={20}/>
    }
}

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
          <View style={{flex: 1, marginBottom: 20}}>
              <Button title={"ADD POKEMON"}/>
          </View>
        <SectionList sections={datasource} renderItem={renderItem}  renderSectionHeader={({section: {title} }) => (
            <View style={[styles.headerStyle, customHeaderStyle(title) ]}>
                {customIconHeader(title)}
                <Text style={styles.headerText}>{title}</Text>
            </View>
        )}  />
      </View>
  );
}

const statusBarHeight = () => {
    return ReactStatusBar.currentHeight;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: statusBarHeight(),
        padding: 10
    },
    opacityStyle: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        paddingRight: 10,
        padding: 20,
        backgroundColor: '#e6e6fa',
    },
    textStyle: {
        flex: 1,
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        gap: 5,
    },
    headerText: {
        fontSize: 20,

    },
    img: {
        resizeMode: 'fill',
        height: 300,
        flex: 1
    }
});
