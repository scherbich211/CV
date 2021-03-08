// import React from 'react'
// import { Image, ScrollView, Text, View } from 'react-native'
// import style from './style/style'
// const App = () =>{
//   return (
//     <ScrollView style={style.listBack}>
//       <View style={style.photoContainer}>
//         <Image
//           style={style.photo}
//           source={{
//             uri:'https://sun9-28.userapi.com/impf/c857520/v857520356/9d241/Zz9Foz1RXaw.jpg?size=1440x2160&quality=96&sign=d0fddf80a72313ee6c9c222383a6d6e4&type=album'
//           }}
//         />
//         <Text>
//           blabla
//         </Text>
//       </View>
//     </ScrollView>
//   )
// }
// export default App

import React from 'react'
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native'
import style from './style/style'
const App =()=>{
  return(
    <ScrollView style={style.listBack}>
      <View style={style.photoContainer}>
        <ImageBackground
        style={style.photo}
        source={{
          uri:'https://sun9-28.userapi.com/impf/c857520/v857520356/9d241/Zz9Foz1RXaw.jpg?size=1440x2160&quality=96&sign=d0fddf80a72313ee6c9c222383a6d6e4&type=album'
        }}>
        <Text style={style.name}>Alexander Scherbakov</Text>
        <View style={style.opacity}></View>
        </ImageBackground>
        </View>
        <Text style={style.startCareer}>
          Start a career
        </Text>
        <View style={{borderWidth: 1,borderColor:'black',margin:10,}}></View>
        <Text style={style.education_skills_addition}>Education</Text>
        <Text style={style.main_text}>Belarusian State University of Informatics and Radioelectronics {"\n"}
          2019 — 2023 {"\n"}
          2rd year student of Faculty Computer-Aided Design </Text>
        <Text style={style.education_skills_addition}>Workmanship</Text>
        <Text style={style.main_text}>Printing house them. A.T.Nepogodina:{"\n"}
        -Assistant Chief Economist (2 month)</Text>
        <Text style={style.education_skills_addition}>SKILLS </Text>
        <Text style={style.main_text}>Basic knowledge of C++, AUTOCAD, {"\n"}
        Well know HTML/CSS</Text>
        <Text style={style.education_skills_addition}>ADDITIONAL INFO </Text>
        <Text style={style.main_text}>English level: Intermediate {"\n"}
          Excellent analytical, written and verbal communication skills {"\n"}
          Quick learner and hard-working individual </Text>
          <View style={{borderWidth: 1,borderColor:'blue',margin:30,}}></View>
        <Text style={style.aboutMe_contacts_hobby}>ABOUT ME </Text>
        <Text style={style.text_little}>I have good analytical abilities, constantly improve myself, attentive, responsible, sociable, purposeful, easily trained, stress-resistant.</Text>
        <Text style={style.aboutMe_contacts_hobby}>HOBBY </Text>
        <Text style={style.text_little}>Outdoor activity {"\n"}
        Judo </Text>
        <Text style={style.aboutMe_contacts_hobby}>CONTACTS </Text>
        <Text style={style.text_little}>Telephone: +375 29 336 50 07 {"\n"} 
          e-mail: sasha.shcherbakov.2001@bk.ru {"\n"}
          TELEGRAM: @alxndr_schrbkv</Text>
    </ScrollView>
   
  )
}
export default App