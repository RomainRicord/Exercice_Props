import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text } from 'react-native'

const LikeBtn = ({like}) => {
    return(
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Icon name="heart" size={30} color="#13a8c2"/>
            <Text style={{color:'#13a8c2',marginLeft:10,textAlign:'center'}}>{like}</Text>
        </View>
    )
}

export default LikeBtn