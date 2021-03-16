import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,Dimensions
  //   ActivityIndicator,
  } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'


  import styled from 'styled-components'
  
export const Screen = styled(ScrollView)`
flex: 1;
padding-top:50px;
backgroundColor: #F5F5F5;
border-width:5px;
borderColor: #008b8b;
border-radius:8px ;
margin-vertical:30px;
`
export const ScreenLogin = styled(ScrollView)`
padding-top:50px;
flex: 1;
backgroundColor: #008b8b;
`
export const BorderScreen= styled(ScrollView)`
flex: 1;
backgroundColor: #F5F5F5;
border-width: 5px;
border-color: #008B8B;
`
export const PlusScreen= styled(ScrollView)`
flex: 1
padding:20px;
backgroundColor: #F5F5F5;
`
export const ScreenModal = styled(View)`
background: #FFF;
margin-horizontal: 10px;
border-radius: 20px;
border-width: 5px;
border-color: #d3e2e6;
height: 70%;
`
export const UploadedImagesContainer = styled(ScrollView)`
flexDirection: row;
`
export const HeaderCuston = styled(View)`

flexDirection: row;
justifyContent: flex-start;

`
export const UploadedImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 20px;
  margin-bottom: 30px;
  margin-right:5px;
`
export const ImagesInput = styled(TouchableOpacity)`
  backgroundColor: rgba(255, 255, 255, 0.5);
  border-style: dashed;
  border-color: #96D2F0;
  border-width: 1.4px;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`


export const ImgItem = styled(Image)`
border-width: 5px;
height: 100px;
width: 100px;
resizeMode: cover;
margin-bottom:50px;
margin-top:10px;
margin-left:10px;
`
export const ImgItem1 = styled(Image)`
border-width: 5px;
height: 200px;
width: 200px;
resizeMode: cover;
align-self: center;

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
// export const MineBox = styled(View)`
// border-width:2px;
// borderColor: #999;
// border-radius:8px ;
// margin:10px;
// flex-direction: row;
// align-items: center;
// `
export const MineBox = styled(View)`

border-width:2px;
borderColor: #999;
border-radius:8px ;
margin:10px;
`

export const MineImage = styled(View)`
height: 100px;
`
export const MineImage2 = styled(View)`
margin:10px;
`
export const ImageView = styled(View)`
height: 200px;
`

export const DescriptionView = styled(View)`
background:#FFF;
padding-horizontal: 20px;
padding-vertical: 5px;
`
export const ComponentFilter = styled(View)`
border-width:2px;
borderColor: #999;
border-radius:8px ;
margin-top:10px;
margin-horizontal: 30%;
flex-direction: row;
align-items: center;
justifyContent: space-between;
background:#FFF;
`
export const NameItemView = styled(View)`
align-items: flex-end;
`

export const ProfilePicture = styled(View)`
margin-left:10px;
align-self: center;
justifyContent: center;
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
font-size:18px;
`
export const InputLong = styled(TextInput)`
background: #FFF;
color: #000;
border-radius: 20px;
border-width: 1.4px;
border-color: #d3e2e6;
padding: 40px;

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
background: #3CDC8C;
padding: 12px;
border-radius: 8px;
align-items: center;
margin:10px;
`
export const ButtonBack = styled(TouchableOpacity)`
background: #D2691E;
padding: 12px;
border-radius: 8px;
align-items: center;
margin:10px;
`
export const ButtonGreen = styled(TouchableOpacity)`
backgroundColor: #3CDC8C;
borderRadius: 20px;
flexDirection: row;
justifyContent: center;
alignItems: center;
height: 56px;
marginTop: 40px;
`

export const TextButtonGreen =styled(Text)`
color: #FFF;
font-weight: bold;
fontSize: 16px;
marginLeft: 16px;
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
padding:10px;
font-size: 18px;
color: #000;
fontWeight: bold; 
`
export const InfoTextGrey = styled(Text)`
font-size: 14px;
color: #999;
fontWeight: bold; 
`
export const TextNaN = styled(Text)`
font-size: 20px;
color: #999;
fontWeight: bold;
align-self: center;
justifyContent: center;
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
export const Label = styled(Text)`
  color: #8fa7b3;
  marginBottom: 5px;
  fontWeight: bold;
  `

export const ImagesContainer = styled(View)`
height: 250px;
`

export const ImageContainer = styled(Image)`
height: 250px;
width: ${Dimensions.get('window').width};
resizeMode: cover;
`
export const ImageLogo = styled(Image)`
height: 200px;
width: ${Dimensions.get('window').width};
resizeMode: contain;
`

export const ViewDetail = styled(View)`
 padding: 20px;
`
//------------------------------------------
//    TENDERS
//--------------------------------------------
// export const TendersBox = styled(View)`
// border-width:2px;
// borderColor: #999;
// border-radius:8px ;
// margin:10px;
// flex-direction: row;
// background-color: #FFF;
// justifyContent: center;
// align-items: center; 
// `
// export const TendersImage = styled(View)`
// justifyContent: center;
// align-items: center; 
// align-self: center; 
// left:25%;
// `

export const TendersBox = styled(View)`
border-width:2px;
borderColor: #999;
border-radius:8px ;
margin:10px;
flex-direction: row;
background-color: #FFF;
justifyContent: center;
`
export const TendersImage = styled(View)`
margin:10px;
`

export const TendersImage2 = styled(View)`
background: #ffc700;
`

export const TendersPicture = styled(Image)`
 height: 100px;
 width: 100px;
 resizeMode: cover;
 border-width:2px;
 borderColor: #999;
 `
// export const TendersPicture = styled(Image)`
// margin:10px;
// height: 100px;
// width: 10px;
// resizeMode: cover;
// border-width:2px;
// borderColor: #999;
// `

export const RecomandationButton = styled(RectButton)`
padding:10px;
align-items: center; 
margin:10px;
background: #008b8b;
`

export const TextRecomandation = styled(Text)`
color: #FFF;
font-size: 16px;
fontWeight: bold;
bottom:35%;
`
export const Separator = styled(View)`
  align-self: center; 
  height: 0.8px;
  width: 80%;
  backgroundColor: #D3E2E6;
  marginVertical: 10px;
`
export const DescriptionText = styled(Text)` 
color: #5c8599;
font-size: 22px;
marginTop: 20px;
`
export const InputPicker = styled(View)`
background: #FFF;
color: #000;
border-radius: 20px;
border-width: 1.4px;
border-color: #d3e2e6;
padding-vertical: 2px;
padding-horizontal: 24px;
margin-bottom: 8px;
height: 56px;

`