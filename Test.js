import {useContext} from 'react'
import {Text} from 'react-native'

const Test = (props) => {

    const user = useContext(props.user)

    return(
        <Text>{user}</Text>
    )
}

export default Test