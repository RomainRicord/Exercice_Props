import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, Pressable } from 'react-native'
import { useEffect, useState } from 'react'

const LikeBtn = ({like_}) => {
    
    const [like,setLike] = useState(typeof(like_) == "undefined" ? 0 : like_)

    useEffect(() => {

        if (like <= 0){
            setLike(like)
        } 

    },[])

    return(
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Pressable onPress={() => {
                
                setLike(Number(like)+1)

            }}>
            <Icon name="heart" size={30} color="#13a8c2"/>
            </Pressable>
            <Text style={{color:'#13a8c2',marginLeft:10,textAlign:'center'}}>{like}</Text>
        </View>
    )
}

export default LikeBtn