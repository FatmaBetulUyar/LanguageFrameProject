import React from 'react'
import { Image, Item,Button } from 'semantic-ui-react'

const ContentItem = () => (
    <div>


<Item.Group relaxed>
<Item style={{marginBottom:100}}>
  <Item.Image  style={{marginLeft:200, marginTop:100,width:800,height:500,padding:30,backgroundColor:'blue',marginBottom:1}}
                      src={require("assets/img/lf2.png").default}
                    />
  <Item.Content >
    <Item.Header style={{fontSize:50,marginLeft:300,padding:10,marginTop:30,backgroundColor:'blue',width:600,height:100,color:'white'}}>Kaliteli İçeriklere Ulaş!</Item.Header>
    <Item.Description style={{fontSize:20,marginLeft:300,padding:5,width:600,color:'black'}}> Language Frame, bünyesinde barındırdığı tecrübeli eğitmenleri sayesinde oldukça kapsamlı bir içeriğe sahip. Sizlere sunulan metaryelleri takip edebilmek için daha fazla bekleme! Sen de bu ekibin bir parçası ol!..</Item.Description>
  </Item.Content>
</Item>

<Item style={{marginBottom:100}}>
  <Item.Image style={{marginLeft:500,width:800,height:500,padding:30,backgroundColor:'orange'}}
                      src={require("assets/img/lf2.png").default} />

  <Item.Content verticalAlign='middle'>
    <Item.Header style={{fontSize:50,marginLeft:600,padding:10,marginTop:30,backgroundColor:'orange',width:600,height:100}}>Öğrenirken eğlen!</Item.Header>
    <Item.Description style={{fontSize:20,marginLeft:600,padding:5,width:600,color:'black'}}>
Etkili öğrenimin sıkıcı olması gerekmez! İlgi çekici alıştırma ve neşeli karakterlerle her gün çalışarak becerilerini geliştir. Language Frame'de eğlenerek dil öğrenmeye hazır mısın? Hemen bugün başla, modülünü seç harekete geç!</Item.Description>
  </Item.Content>
</Item>

<Item style={{marginBottom:100}}>
  <Item.Image  style={{marginLeft:200, marginTop:100,width:800,height:500,padding:30,backgroundColor:'blue',marginBottom:1}}
                      src={require("assets/img/lf2.png").default}
                    />
  <Item.Content >
    <Item.Header style={{fontSize:50,marginLeft:300,padding:10,marginTop:30,backgroundColor:'blue',width:600,height:100,color:'white'}}>Kaliteli İçeriklere Ulaş!</Item.Header>
    <Item.Description style={{fontSize:20,marginLeft:300,padding:5,width:600,color:'black'}}> İngilizceyi dinleyerek konuşarak ve eğlenerek öğrenmeye hazır mısın? </Item.Description>
  </Item.Content>
</Item>

<Item style={{marginBottom:100}}>
  <Item.Image style={{marginLeft:500,width:800,height:500,padding:30,backgroundColor:'orange'}}
                      src={require("assets/img/lf2.png").default} />

  <Item.Content verticalAlign='middle'>
    <Item.Header style={{fontSize:50,marginLeft:600,padding:10,marginTop:30,backgroundColor:'orange',width:600,height:100}}>Öğrenirken eğlen!</Item.Header>
    <Item.Description style={{fontSize:20,marginLeft:600,padding:5,width:600,color:'black'}}>
Etkili öğrenimin sıkıcı olması gerekmez! İlgi çekici alıştırma ve neşeli karakterlerle her gün çalışarak becerilerini geliştir.</Item.Description>
  </Item.Content>
</Item>




</Item.Group>
</div>
)

export default ContentItem