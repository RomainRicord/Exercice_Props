import {View} from 'react-native'
import CardBody from './CardBody'
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"
import LikeBtn from "./LikeBtn"

const Card = ({kl,e}) => {

    return(
        <View style={{width:300,height:500,display:'flex',margin:40,borderColor:'#13a8c2',borderWidth:2}}>
            <CardHeader price={e.price}/>
            <CardBody title={e.title} description={e.desc} image={e.photo}/>
            <View style={{margin:20,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <CardFooter taille={e.size} />
                <LikeBtn like_={e.likes} />
            </View>
        </View>
    )
}

export default Card