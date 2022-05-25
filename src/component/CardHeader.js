import { View, Text } from "react-native"
const CardHeader = ({price}) => {
    return(
        <View style={{borderBottomColor:'#13a8c2',borderBottomWidth:2}}>
            <Text style={{textAlign:'right',fontSize:30}}>{price} €</Text>
        </View>
    )
}

export default CardHeader