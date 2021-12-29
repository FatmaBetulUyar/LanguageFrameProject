import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category"></p>
              <Card style={{height:300}}>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="orange"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Hızlı ilerleme kaydet
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        Hızlı ilerleme kaydet Araştırma, kurslarımızın okuma,
                        dinleme ve konuşma becerilerini etkili ve verimli bir
                        şekilde verdiğini gösteriyor.
                      </p>
                    </TabPane>
                   
                  
                   
                  </TabContent>
                </CardBody>
              </Card>
              <Card style={{height:300}}>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="orange"
                    role="tablist"
                    tabs
                  >
                    
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Motivasyonunu koru
                      </NavLink>
                    </NavItem>
                    
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                     <TabPane tabId="pills2">
                      <p>
                        Oyun tarzında özellikler, eğlenceli mücadeleler ve dost
                        canlısı maskotumuz baykuş Duo'nun hatırlatmaları ile dil
                        öğrenimini alışkanlık haline getirmeyi
                        kolaylaştırıyoruz.
                      </p>
                    </TabPane>
                   
                  </TabContent>
                </CardBody>
              </Card>
              <Card style={{height:300}}>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="orange"
                    role="tablist"
                    tabs
                  >
                    
                    
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Öğrenirken eğlen!
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                       <TabPane tabId="pills3">
                      <p>
                        Yapay zeka ve dil biliminin en yararlı özelliklerinin
                        bir araya getirildiği derslerimiz, en doğru düzey ve
                        hızda öğrenmene yardımcı olacak şekilde
                        özelleştiriliyor.answers. I understand culture. I am the
                        nucleus.
                      </p>
                    </TabPane>
                   
                  </TabContent>
                </CardBody>
              </Card>
              <Card style={{height:300}}>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="orange"
                    role="tablist"
                    tabs
                  >
                    
                    
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Öğrenirken eğlen!
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  > <TabPane tabId="pills4">
                  <p>
                    Etkili öğrenimin sıkıcı olması gerekmez! İlgi çekici
                    alıştırma ve neşeli karakterlerle her gün çalışarak
                    becerilerini geliştir.
                  </p>
                </TabPane>
                   
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
