import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,Dimensions
  //   ActivityIndicator,
  } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


  import styled from 'styled-components'
  
export const Screen = styled(View)`
flex: 1;
padding-top:40px;
backgroundColor: #F5F5F5;
`
export const BorderScreen= styled(ScrollView)`
flex: 1;
backgroundColor: #F5F5F5;
border-width: 5px;
border-color: #008B8B;
`
// align-items: center;
// justify-content: center;
export const ScreenModal = styled(View)`
background: #FFF;
margin-horizontal: 10px;
border-radius: 20px;
border-width: 5px;
border-color: #d3e2e6;
height: 70%;
`
export const ImgItem = styled(Image)`
border-width: 5px;
height: 100px;
width: 100px;
resizeMode: cover;
`

export const LoginBox = styled(View)`
flex: 1;
padding: 20px;
padding-bottom: 20%;
justify-content: flex-end;
`
export const SearchBox = styled(View)`
padding-horizontal: 10px;
padding-top: 10%;
flex-direction: row;
backgroundColor: #008B8B;
`

export const ProfileBox = styled(View)`
padding-vertical: 10%;
padding-right: 10px;
flex-direction: row;
justifyContent: space-between;
backgroundColor: #008B8B;
`
export const IconsProfile = styled(View)`
justifyContent: space-between;
`

export const ImageBox = styled(View)`
border-width:2px;
borderColor: #999;
border-radius:8px ;
margin:10px;
`
export const MineBox = styled(View)`
border-width:2px;
borderColor: #999;
border-radius:8px ;
margin:10px;
flex-direction: row;
align-items: center;
`

export const MineImage = styled(View)`
border-width:2px;
borderColor: #999;
border-radius:8px ;
margin:3px;
`
export const ImageView = styled(View)`
height: 200px;
`

export const DescriptionView = styled(View)`
background:#FFF;
padding-horizontal: 20px;
padding-vertical: 5px;
`

export const ScrollItemBox = styled(ScrollView)`
background: #FFF;
`

export const Input = styled(TextInput)`
background: #FFF;
color: #000;
border-radius: 20px;
border-width: 1.4px;
border-color: #d3e2e6;
padding-vertical: 10px;
padding-horizontal: 24px;
margin-bottom: 8px;
height: 56px;
font-weight: bold;
font-size:18px;
`
export const InputLong = styled(TextInput)`
background: #FFF;
color: #000;
border-radius: 20px;
border-width: 1.4px;
border-color: #d3e2e6;
padding: 40px;
font-weight: bold;
font-size:18px;
`
export const InputSearch = styled(TextInput)`
margin-bottom:15px;
padding-left:10px;
width: 70%;
height:90%;
backgroundColor: #FFF;
borderWidth: 3px;
borderColor: #CCC;
border-radius: 10px;
`
export const ButtonSend = styled(TouchableOpacity)`
background: #008B8B;
padding: 12px;
border-radius: 8px;
align-items: center;
margin:10px;
`
export const ButtonBack = styled(TouchableOpacity)`
background: #ffc700;
padding: 12px;
border-radius: 8px;
align-items: center;
margin:10px;
`

export const OpacityButton = styled(TouchableOpacity)`
flex:1;
`

export const ButtonText = styled(Text)`
color: #fff;
font-weight: bold;
font-size:20px;
`
export const InfoTextWhite = styled(Text)`
border-color: #ddd;
padding-horizontal:20px;
font-size: 20px;
color: #FFF;
fontWeight: bold; 
`

export const InfoTextBlack = styled(Text)`
font-size: 18px;
color: #000;
fontWeight: bold; 
`
export const InfoTextGrey = styled(Text)`
font-size: 14px;
color: #999;
fontWeight: bold; 
`
// ----------------------------------------------------------------------
// DETAIS ITEM
// ======================================================================

export const TitleItem = styled(Text)`
color: #4D6F80;
fontSize: 30px;
fontWeight: bold;
align-self: center; 
`

export const ImagesContainer = styled(View)`
height: 250px;
`

export const ImageContainer = styled(Image)`
height: 250px;
width: ${Dimensions.get('window').width};
resizeMode: cover;
`


export const ViewDetail = styled(View)`
 padding: 20px;
`
//------------------------------------------
//    TENDERS
//--------------------------------------------
export const TendersBox = styled(View)`
border-width:2px;
borderColor: #999;
border-radius:8px ;
margin:10px;
flex-direction: row;
background-color: #FFF;
justifyContent: center;
align-items: center; 
`
export const TendersImage = styled(View)`
justifyContent: center;
align-items: center; 
align-self: center; 
left:25%;

`
export const TendersImage2 = styled(View)`
background: #ffc700;
`
export const TendersPicture = styled(Image)`
margin:10px;
height: 150px;
width: 150px;
resizeMode: cover;
border-width:2px;
borderColor: #999;
`