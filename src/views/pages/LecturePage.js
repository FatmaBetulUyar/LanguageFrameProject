import NavbarAfterLogin from 'components/Navbars/NavbarAfterLogin'
import React from 'react'
import { Image, Item,Button , Progress, Segment } from 'semantic-ui-react'
import Iframe from 'react-iframe'

function LecturePage() {
    return (
        <div>
            <NavbarAfterLogin/>
            {/* <div style={{marginTop:100}}>
                <Segment inverted style={{width:100,height:50}}>
              <Progress percent={59} inverted color='orange' progress style={{width:200,height:30,marginLeft:100}} />  
            </Segment>
            </div> */}
            
            
          < Item.Group relaxed style={{marginTop:100}}>

<div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
<div >
<Item style={{marginBottom:100,width:800,height:1000,backgroundColor:'black'}}>
  <Item.Content verticalAlign='middle'>
    <Item.Header style={{fontSize:30,padding:10,marginTop:30,backgroundColor:'orange',width:800,height:100,color:'white',alignItems:'center',justifyContent:'center'}}>Öğrenirken eğlen!</Item.Header>
    <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="800px"
        height="550px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative" />
    <Item.Description style={{fontSize:20,padding:10,width:600,color:'white'}}>
Etkili öğrenimin sıkıcı olması gerekmez! İlgi çekici alıştırma ve neşeli karakterlerle her gün çalışarak becerilerini geliştir.</Item.Description>
  </Item.Content>
</Item>
</div>
<div>
    <Item style={{marginBottom:100,width:500,height:1000,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
  <Item.Content verticalAlign='middle'>
    <Item.Header style={{fontSize:30,padding:10,marginTop:30,backgroundColor:'orange',width:500,height:100,color:'white',alignItems:'center'}}>Modul 1</Item.Header>
    <Item.Description style={{fontSize:20,padding:10,width:500,color:'white'}}>LISTENING</Item.Description>
    <ol style={{color:'white'}}>
        <ul style={{color:'white'}}>
        Exercise-1
        </ul>
        <ul >
        Exercise-2
        </ul>
        <ul >
        Exercise-3
        </ul>
        <ul >
        Exercise-4
        </ul>
    </ol>
    
    <Item.Description style={{fontSize:20,padding:10,width:500,color:'white'}}>SPEAKING</Item.Description>
    <ol style={{color:'white'}}>
        <ul style={{color:'white'}}>
        Exercise-1
        </ul>
        <ul >
        Exercise-2
        </ul>
        <ul >
        Exercise-3
        </ul>
        <ul >
       Homework
        </ul>
    </ol>
    <Item.Description style={{fontSize:20,padding:10,width:500,color:'white'}}>WRITING </Item.Description>
     <ol style={{color:'white'}}>
        <ul style={{color:'white'}}>
        Exercise-1
        </ul>
        <ul >
        Exercise-2
        </ul>
        <ul >
        Homework
        </ul>
        <ul >
       Homework
        </ul></ol>
    </Item.Content></Item>
</div> 
</div>







</Item.Group>
        </div>
    )
}

export default LecturePage
