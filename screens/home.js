import React from 'react'
import { View, Text, Touchableopacity, Stylesheet, Image } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import axios from 'axios'

export default class Home extends React.Component{
    constructor(){
        super()
        this.state={
            artdetail : {}
        }
    }

    getart = () => {
        const url  = "http://127.0.0.1:5000/getarticle"
        axios.get(url).then(response=>{
            let detail = response.data.data
            this.state({
                artdetail : detail
            })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    likeart = () => {
        const url = "http://127.0.0.1:5000/likearticle"
        axios.post(url).then(response=>{
            this.getart
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    dislikeart = () => {
        const url = "http://127.0.0.1:5000/dislikearticle"
        axios.post(url).then(response=>{
            this.getart
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    notread = () => {
        const url = "http://127.0.0.1:5000/notread"
        axios.post(url).then(response=>{
            this.getart
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    componentDidMount(){
        this.getart()
    }

    render(){
        const {artdetail} = this.state
        if (artdetail.lang){
            const {title,text,lang} = artdetail
        }
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Header centerComponent={{text:"article recomended",style:styles.headerTitle}}
                            rightComponent={{icon:"search",color:"blue"}} 
                            backgroundColor="red" 
                            containerStyle={{flex:1}}/>
                </View>
                <View style={styles.subContainer}>
                    <View style={styles.subContainer}>
                        <Image style={styles.posterImage} source={{uri:lang}}/>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: { flex: 1 },
    headerContainer: { 
        flex: 0.1
    },
    headerTitle: { 
         color: "#fff",
          fontWeight: "bold",
           fontSize: RFValue(18) 
    },
    subContainer: { 
         flex: 0.9
    }, 
    subTopContainer: { 
        flex: 0.4,
        justifyContent: "center",
         alignItems: "center" 
    },
    posterImage: { 
        width: "60%", 
        height: "90%", 
        resizeMode: "stretch", 
        borderRadius: RFValue(30), 
        marginHorizontal: RFValue(10) 
    }, 
    subBottomContainer: { 
        flex: 0.6
    },
    upperBottomContainer: { 
        flex: 0.2,
        alignItems: "center" 
    }, 
    title: { 
        fontSize: RFValue(20), 
        fontWeight: "bold", 
        textAlign: "center" 
    }, 
    subtitle: { 
        fontSize: RFValue(14), 
        fontWeight: "300" 
    }, 
    middleBottomContainer: { 
        flex: 0.35
    }, 
    overview: { 
        fontSize: RFValue(13), 
        textAlign: "center", 
        fontWeight: "300", 
        color: "gray" 
    }, 
    lowerBottomContainer: { 
        flex: 0.45
    }, 
    iconButtonContainer: { 
        flexDirection: "row", 
        justifyContent: "space-evenly", 
        alignItems: "center" 
    }, buttonCotainer: { 
        justifyContent: "center", 
        alignItems: "center"
    }, button: { 
        width: RFValue(160), 
        height: RFValue(50), 
        borderRadius: RFValue(20), 
        justifyContent: "center", 
        alignItems: "center", 
        borderWidth: 1, 
        marginTop: RFValue(15) 
    }, 
    buttonText: { 
        fontSize: RFValue(15), 
        fontWeight: "bold" 
    } 
});