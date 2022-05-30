import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, Pressable } from 'react-native'
import { useEffect, useState } from 'react'

const LikeBtn = ({like_}) => {
    
    /* Checking if the like is undefined, if it is, it sets the like to 0. */
    const [like,setLike] = useState(typeof(like_) == "undefined" ? 0 : like_)
    const [favorite,setFavorite] = useState(false)

    /* Checking if the like is less than or equal to 0, if it is, it sets the like to the like. */
    useEffect(() => {

        if (like <= 0){
            setLike(like)
        } 

    },[])

    return(
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Pressable onPress={() => {

                /* Checking if the favorite is true, if it is, it will subtract 1 from the like, if it
                is not, it will add 1 to the like. */
                setLike(Number(like)+(favorite ? -1 : 1))
                setFavorite(!favorite)

            }}>
            <Icon name={favorite ? "heart" : "heart-o"} size={30} color="#13a8c2"/>
            </Pressable>
            <Text style={{color:'#13a8c2',marginLeft:10,textAlign:'center'}}>{like}</Text>
        </View>
    )
}

export default LikeBtn