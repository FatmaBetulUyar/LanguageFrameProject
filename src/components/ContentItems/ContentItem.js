import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const ContentItem = () => (
  <Item.Group style={{margin:100}}>
    <Item style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Item.Image style={{width:500}}  src={require("assets/img/c1.jpeg").default}/>
      <Item.Content style={{margin:10}}>
        <Item.Header style={{fontWeight:'bold',fontSize:40}} as='a'>HIZLI İLERLEME KAYDET</Item.Header>
        <Item.Meta style={{width:480}}> Araştırma, kurslarımızın okuma, dinleme ve konuşma becerilerini etkili ve verimli bir şekilde verdiğini gösteriyor. </Item.Meta>
        <Item.Description>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item style={{justifyContent:'flex-end'}}>
      <Item.Image style={{width:500}}  src={require("assets/img/c1.jpeg").default}/>
      <Item.Content style={{margin:10}}>
        <Item.Header style={{fontWeight:'bold',fontSize:40}} as='a'>MOTİVASYONUNU KORU
</Item.Header>
        <Item.Meta style={{width:480}}> Oyun tarzında özellikler, eğlenceli mücadeleler ve dost canlısı maskotumuz baykuş Duo'nun hatırlatmaları ile dil öğrenimini alışkanlık haline getirmeyi kolaylaştırıyoruz. </Item.Meta>
        <Item.Description>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image style={{width:500}}  src={require("assets/img/c1.jpeg").default}/>
      <Item.Content style={{margin:10}}>
        <Item.Header style={{fontWeight:'bold',fontSize:40}} as='a'>ÖĞRENİRKEN EĞLEN</Item.Header>
        <Item.Meta style={{width:480}}> Etkili öğrenimin sıkıcı olması gerekmez! İlgi çekici alıştırma ve neşeli karakterlerle her gün çalışarak becerilerini geliştir. </Item.Meta>
        <Item.Description>
        </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image style={{width:500}}  src={require("assets/img/c1.jpeg").default}/>
      <Item.Content style={{margin:10}}>
        <Item.Header style={{fontWeight:'bold',fontSize:40}} as='a'>HIZLI İLERLEME KAYDET</Item.Header>
        <Item.Meta style={{width:480}}> Araştırma, kurslarımızın okuma, dinleme ve konuşma becerilerini etkili ve verimli bir şekilde verdiğini gösteriyor. </Item.Meta>
        <Item.Description>
        </Item.Description>
      </Item.Content>
    </Item>
    
  </Item.Group>
)

export default ContentItem