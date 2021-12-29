import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function AboutPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("about-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Language Frame Nedir?</h2>
                <h5 className="description">
                  Language Frame, dil çerçevesi anlamına gelir. Ana felsefemiz sizlere belirli bir çerveve dahilinde modüller sunarak eğlenceli bir şekilde
                  dil öğrenmenize olanak sağlamaktır. Sitemizde alanında etkin eğitmenlerden modülleri takip edebilir, ve bu modüllere ücretsiz 
                  bir şekilde erişebilirsiniz. Eğitim içeriklerine başlamadan önce seviye tespit sınavına dahil olarak
                  dil öğrenme serüveninize hangi çerçeve dahilinde başlayacağınızı keşfedebilirsiniz.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg").default + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      Language Frame sayesinde hangi seviyede hangi eğitimler almam gerektiğini kolay bir şekilde öğrendim. Öğretirken eğlendiren mükemmel bir uygulama! <br></br>
                      <br></br>
                      <small>-Fatma</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/st1.jpg").default + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/language.jpg").default + ")",
                    }}
                  ></div>
                  <h3>
                    Peki neden Language Frame'i kullanmalısınız?
                  </h3>
                  <p>
                    Burada dil öğrenirken harika içerikler keşfedeceksiniz, bir yandan öğrenme süreciniz mükemmel ilerlerken bir yandan da dil kabiliyetinizi zirveye taşıyacaksınız.
                  </p>
                  <p>
                  Başlangıç için, "Nereden başlasam? Seviyem ne? Acaba ingilizcemi geliştirirken çok zorlanacak mıyım? " diye asla düşünmeyin! Uygulamada sizin için her şeyi düşündük, başlarken kısa ve etkili seviye tespit sınavımızla seviyenizi belirleyin ve sonuçta size sunulan modülleri takip edin, eğlenerek öğrenin...
                  </p>
                  <p>
                    Uygulamamızı inceleyerek bize destek olabilirsiniz.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Takımımız</h2>
            <div className="team">
              <Row>
                <Col md="3">
                  
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/betul.jpg").default}
                    ></img>
                    <h4 className="title">Fatma Betül Uyar</h4>
                    <p className="category text-info">Software Developer</p>
                    <p className="description">
                      Sakarya Üniversitesi bilgisayar mühendisliği 4. sınıf öğrencisi.{" "}
                      {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site. */}
                    </p>
                    
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.linkedin.com/in/fatma-bet%C3%BCl-uyar/"
                      
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="3">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/fatma.jpg").default}
                    ></img>
                    <h4 className="title">Fatma Özdemir</h4>
                    <p className="category text-info">Software Developer</p>
                    <p className="description">
                      Sakarya Üniversitesi bilgisayar mühendisliği 4. sınıf öğrencisi.
                      {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site. */}
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://www.linkedin.com/in/fatma-ozdemir-/"
                      
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Bizimle çalışmak ister misiniz?</h2>
            <p className="description">Görüşleriniz bizim için önemli</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Adınız..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Emailiniz..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Mesajınızı yazınız..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Mesaj Gönder
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default AboutPage;
