import React, {useState} from 'react'
import { Col, Row, Button, Card, List, Avatar, Timeline, Carousel } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownToBracket, faArrowAltCircleDown} from '@fortawesome/free-regular-svg-icons';
import { faArrowDownShortWide, faArrowsDownToLine, faArrowUpRightFromSquare, faDownload, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';



function homepage() {


  const aboutMe = [
    {
      title: '➢ A self-motivated and enthusiastic programmer with strong problem-solving skills.'

    },{
      title: ' ➢ An Experienced Full Stack Web Developer who is enthusiastic about writing clean, and efficient code. '
    },{
      title: ' ➢ Among top 11% worldwide with a contest rating of 1700+ in Leetcode. '
    }
  ]

  const programmingLanguages = ['C', 'C++', 'JavaScript', 'Ruby', 'Python', 'Java', 'Solidity']
  const backendFrameWorks = ['Ruby On Rails', 'Node.js', 'Django', 'SpringBoot', 'MySQL', 'MongoDB', 'redis']
  const frontEndFrameWorks = ['Next.js', 'React.js', 'ant design', 'Bootstrap', 'HTML', 'CSS', 'JS(ES6)']


 const kuveraExperience = 
  [{
      color: "#4c40f7",
      children:(
        <>
          <h3 style = {{color: "black", marginBottom: "5px"}}> Senior Software Engineer </h3>
          <h4 style = {{color:"#black", marginBottom: "5px"}}>  ➢ Led <span  style = {{color:"#868E96"}}>the backend development of EPF and US stocks features.</span> </h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}> ➢ <span  style = {{color:"#868E96"}}>   Collaborated in developing </span>  multi-tenancy <span  style = {{color:"#868E96"}}> architecture to allow </span> Amazon  <span  style = {{color:"#868E96"}}> India customers to invest in fixed deposits and mutual funds through Kuvera. </span></h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}> ➢ <span  style = {{color:"#868E96"}}> Integrated </span> Bombay Stock Exchange (BSE) <span  style = {{color:"#868E96"}}> two-factor authentication for mutual fund redemption transactions.</span> </h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}> ➢ <span  style = {{color:"#868E96"}}>Handled </span> stock split  <span  style = {{color:"#868E96"}}>in US stocks to display accurate historical prices.</span></h4>
        </>
      )
    },{
      color: "#4c40f7",
      children:(
        <>
          <h3 style = {{color: "black", marginBottom: "5px"}}> Software Engineer </h3>
          <h4 style = {{color: "black", marginBottom: "5px"}}> ➢ Reduced <span  style = {{color:"#868E96"}}>the number of API calls to Vested for retrieving US stocks' historical prices </span> from 200,000 to 20,000 per day.</h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}>  ➢ <span  style = {{color:"#868E96"}}>Optimized and scaled up the existing EPF legacy code to support parallel processing,</span> reducing transaction retrieval time from 6 hours to 5 minutes. </h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}> ➢ <span  style = {{color:"#868E96"}}>Collaborated on the integration of </span> Axis Bank <span  style = {{color:"#868E96"}}>fixed deposits into our platform.</span></h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}> ➢ <span  style = {{color:"#868E96"}}> Integrated </span> Tata instant redemption mutual fund, <span  style = {{color:"#868E96"}}> allowing investors to withdraw their investment in  </span> less than 30 minutes rather
  than three days.</h4>
          <h4 style = {{color:"#black"}}> ➢ Integrated Amazon Pay Gift Cards <span  style = {{color:"#868E96"}}> for the rewards section.</span> </h4>
        </>

      )
  }]

  const tesarkExperience = 
  [{
    color: "#4c40f7",
    children:(
      <>
        <h3 style = {{color: "black"}}> Software Engineer </h3>
        <h4 style = {{color:"#black"}}>  ➢ <span  style = {{color:"#868E96"}}>Developed a </span> B2B invoice discounting <span  style = {{color:"#868E96"}}>application that connects buyers, sellers, and investors. </span></h4>
        <h4 style = {{color:"#black"}}> ➢ <span  style = {{color:"#868E96"}}>   Developed a </span> school/college multi-purpose management Software <span  style = {{color:"#868E96"}}>that has features like managing student admissions, Transportation, Announcements, Scheduling Exams, grading, etc.</span></h4>
      </>
    )
  }]

  const dotStyle = {
    backgroundColor: '#black',
    borderColor: '#000'
  };

  const dotActiveStyle = {
    backgroundColor: '#000'
  };

  const customDot = (dot, { index, active, onClick }) => (
    <span
      className={`slick-dot${active ? ' slick-active' : ''}`}
      style={{
        backgroundColor: active ? '#000' : '#fff',
        borderColor: '#000',
      }}
      onClick={() => onClick()}
    />
  );

  const [hoveredCard, setHoveredCard] = useState("");

  const handleMouseOut = () => {
    setHoveredCard("");
  }

  const downloadPDF = () => {
    const pdfURL = '/Vamsi_resume.pdf';
    fetch(pdfURL)
      .then(response => response.blob())
      .then(blob => {
        // Save the PDF file using FileSaver.js
        saveAs(blob, 'Vamsi_resume.pdf');
      })
      .catch(error => console.error(error));
  }
  


  return(
    <div style = {{padding: "20px", backgroundColor: "white"}}>
      <Row  gutter={[16, 16]} justify="start" align="middle">
        <Col>
          <h3 style = {{color: "black", marginLeft: "30px"}}> FOLIO </h3>
        </Col>
        <Col>
          <Button className = "media" href = "https://www.linkedin.com/in/balavamsi/" target="_blank" >
            <FontAwesomeIcon icon={faLinkedin} style = {{color: "black", marginRight: "10px"}}/>  
            Linkedin
          </Button>
        </Col>
        <Col>
          <Button className = "media" href = "https://github.com/Balavamsi1999?tab=repositories" target="_blank" >
            <FontAwesomeIcon icon={faGithub} style = {{color: "black", marginRight: "10px"}}/>  
            Github
          </Button>
        </Col>
        <Col>
          <Button className = "media" href = "mailto:balavamsiatukuri22@gmail.com" target="_blank" >
            <FontAwesomeIcon icon={faEnvelope} style = {{color: "black", marginRight: "10px"}}/>  
            Gmail
          </Button>
        </Col>
        <Col>
          <Button className = "media" href = "https://leetcode.com/Balavamsi1999/" target="_blank" >
            Leetcode
          </Button>
        </Col>
      </Row>

      <Row justify = "center">
        <Col sm = {24} md= {22} lg = {18}>
          <Row gutter={[0, 32]} style = {{padding: "10px", marginTop: "100px"}} justify="space-between" align="middle">
            <Col>
              <h2 style = {{fontSize: "20px", color:"#4c40f7", fontFamily: "sans-serif"}}> ----- Venkata Bala Vamsi Atukuri</h2> <br />
              <h1 className = "fade-in" style = {{color: "#111029", fontWeight: "bold", fontSize: "62px", fontFamily: "sans-serif"}}>
                Hello, my <br/>name is Vamsi. <br/>
                I'm a Full Stack <br/> Developer
              </h1>
            </Col>
            <Col >
              <Avatar src = "/vamsi.jpeg" size = {{xs: 300, sm: 300, md: 400, lg:400, xl: 400, xxl: 400}}/>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify = "center">
        <Col sm = {24} md= {18}>
          <Row style = {{padding: "10px", marginTop: "100px"}} justify="center" align="middle">
            <Col>
              <h2 style = {{fontSize: "20px", color:"#4c40f7", fontFamily: "sans-serif"}}> ----- Who am I</h2> <br />
             
              <Card style = {{borderRadius: "20px", boxShadow: " 0 25px 20px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}}>

                <List itemLayout="horizontal" dataSource={aboutMe} className="list"
                  renderItem={(item, index) => (
                    <List.Item className="list-item">
                      <h3 style = {{color: "#111029"}} > {item.title} </h3>
                    </List.Item>
                  )}
                />
              </Card>

            </Col>
          </Row>
        </Col>
      </Row>

      <Row style = {{marginTop: "50px", padding: "20px"}} gutter={[30, 16]} justify="center" align="middle">
        <Col>
          <Card className = "hover" hoverable style = {{borderRadius: "20px", boxShadow: " 0 25px 20px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}} onMouseOver = {() => {setHoveredCard("1")}} onMouseLeave = {handleMouseOut}>
            <h2> Programming Languages</h2>
            <p style = {{marginBottom: "20px"}}> 6 years of experience</p>

            <List itemLayout="horizontal" dataSource={programmingLanguages} className="list"
                renderItem={(item, index) => (
                  <List.Item>
                    <h4 style = {hoveredCard == "1" ? {color: "white"} : {color: "#111029"}} className = "fade-in"> {item} </h4>
                  </List.Item>
                )}
              />

          </Card>      
        </Col>

        <Col>
          <Card className = "hover" hoverable style = {{borderRadius: "20px", boxShadow: " 0 25px 20px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}} onMouseOver = {() => {setHoveredCard("2")}} onMouseLeave = {handleMouseOut}>
            <h2> Backend Development</h2>
            <p style = {{marginBottom: "20px"}}> 2 years of experience</p>

            <List itemLayout="horizontal" dataSource={backendFrameWorks} className="list"
                renderItem={(item, index) => (
                  <List.Item>
                    <h4 style = {hoveredCard == "2" ? {color: "white"} : {color: "#111029"}} className = "fade-in"> {item} </h4>
                  </List.Item>
                )}
              />
          </Card>      
        </Col>


        <Col>
          <Card className = "hover" hoverable style = {{borderRadius: "20px", boxShadow: " 0 25px 20px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}} onMouseOver = {() => {setHoveredCard("3")}} onMouseLeave = {handleMouseOut}>
            <h2> Front End Development</h2>
            <p style = {{marginBottom: "20px"}}> 2 years of experience</p>

            <List itemLayout="horizontal" dataSource={frontEndFrameWorks} className="list"
                renderItem={(item, index) => (
                  <List.Item>
                    <h4 style = {hoveredCard == "3" ? {color: "white"} : {color: "#111029"}} className = "fade-in"> {item} </h4>
                  </List.Item>
                )}
              />
          </Card>      
        </Col>
      </Row>


      <Row justify="center" style = {{marginTop: "50px", padding: "20px"}}>
        <Col sm = {24} md= {20}>
          <h2 style = {{fontSize: "20px", color:"#4c40f7", fontFamily: "sans-serif"}}> ----- Education</h2> <br />
            
          <Card  style = {{borderRadius: "20px", boxShadow: " 0 25px 20px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}}>
            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/UB_image.jpeg'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "16px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> The State University of New York, Buffalo, NY, USA</h3>
                    <h3 style = {{fontSize: "14px", color:"black", fontFamily: "sans-serif", textTransform: "uppercase"}}> Masters Of Science (MS)</h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{color: "#4c40f7"}}> August 2022 - Present </h3>
                  </Col>
                </Row>
            
                <Row style = {{marginBottom: "8px", marginTop: "8px"}}>
                  <h3 style = {{fontSize: "14px", color:"#868E96", marginRight: "10px"}}>Computer Science</h3>
                  <h3 style = {{fontSize: "14px", color:"#868E96"}}> <b> GPA: </b> 4.0 / 4.0</h3>
                </Row>

                <Row style = {{marginBottom: "8px", marginTop: "8px"}} align="middle">
                  <Col>
                    <h3 style = {{fontSize: "14px", color:"black", marginRight: "10px"}}>CourseWorks: </h3>
                  </Col>
                  <Col flex = "auto">
                    <h4 style = {{fontSize: "14px", color:"#868E96", wordWrap: "break-word" }}>
                      Data Models and Query Language,
                      Data Intensive computing, 
                      MS Project Development, 
                      Modern Networking Concepts, 
                      Analysis of Algorithms,
                      BlockChain, 
                      Machine Learning
                      Computational Linguistics
                    </h4> 
                  </Col> 
                </Row>
              </Col>
              
             
            </Row>


            <Row align = "top" style = {{marginTop: "20px"}}>
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    {/* <Avatar shape="square" size={60} src = '/IITDh_logo.jpg'/> */}
                    <Avatar shape="square" size={60} src = '/IITDh.png'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "16px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> Indian Institute of Technology (IIT), Dharwad, Karnataka, India</h3>
                    <h3 style = {{fontSize: "14px", color:"black", fontFamily: "sans-serif", textTransform: "uppercase"}}>Bachelor of Technology (B.Tech)</h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{color: "#4c40f7"}}> July 2016 - May 2020 </h3>
                  </Col>
                </Row>
            
                <Row style = {{marginBottom: "8px", marginTop: "8px"}}>
                  <h3 style = {{fontSize: "14px", color:"#868E96", marginRight: "10px"}}>Computer Science</h3>
                  <h3 style = {{fontSize: "14px", color:"#868E96"}}> GPA: 8.37 / 10.0</h3>
                </Row>
                <Row>
                
                </Row>

                <Row style = {{marginBottom: "8px", marginTop: "8px"}} align="middle">
                  <Col span={6}>
                    <h3 style = {{fontSize: "14px", color:"black", marginRight: "10px"}}>CourseWorks: </h3>
                  </Col>
                  <Col flex = "auto" style={{ fontSize: "14px", overflowWrap: "anywhere !important" }}>
                    <h4 style = {{color:"#868E96"}}>
                      Data Structures and Algorithms,
                      Operating Systems,
                      Database Management System,
                      Artificial Neural Networks,
                      Machine Learning,
                      Pattern recognition,
                      Object-Oriented programming 
                    </h4> 
                  </Col> 
                </Row>
              </Col>
              
             
            </Row>
          </Card>
        </Col>
      </Row>

      <Row justify="center" style = {{marginTop: "50px", padding: "20px"}}>
        <Col sm = {24} md= {20}>
          <h2 style = {{fontSize: "20px", color:"#4c40f7", fontFamily: "sans-serif"}}> ----- Experience</h2> <br />
          <Card style = {{borderRadius: "20px", boxShadow: " 0 25px 20px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}}>
            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/kuvera_logo.png'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> Kuvera.in, Bangalore, India</h3>
                    <h3 style = {{fontSize: "14px",color: "#868E96"}}> Major Focus on Backend Development </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{color: "#4c40f7"}}> May 2021 - July 2022 </h3>
                  </Col>
                </Row>

                {/* <Card  style = {{borderRadius: "20px", margin: "10px 0px 10px 0px", boxShadow: " 0 5px 10px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}}> */}
                  <Row style = {{padding: "30px"}}>
                    <Timeline items={kuveraExperience} style = {{padding: "0px"}}>
                    </Timeline>
                  </Row>
                {/* </Card> */}
              </Col>
            </Row>

            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/UB_image.jpeg'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> Tesark, Bangalore, India</h3>
                    <h3 style = {{fontSize: "14px",color: "#868E96"}}> Major Focus on Frontend Development </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{color: "#4c40f7"}}> July 2020 - April 2021 </h3>
                  </Col>
                </Row>

                <Row style = {{padding: "30px"}}>
                  <Timeline items={tesarkExperience} >
                  </Timeline>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row justify="center" style = {{marginTop: "20px", padding: "20px"}}>
        <Col sm = {24} md= {20}>
          <h2 style = {{fontSize: "20px", color:"#4c40f7", fontFamily: "sans-serif"}}> ----- Publications</h2> <br />
          <Card style = {{borderRadius: "20px", boxShadow: " 0 25px 20px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}}>
            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/UB_image.jpeg'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> Segregation of Areca Nuts </h3>
                    <h3 style = {{fontSize: "14px",color: "#868E96"}}> 
                      <a href = "https://link.springer.com/chapter/10.1007/978-3-031-05767-0_2" target = "_blank"> 
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} style = {{color: "black"}}/> Publication 
                      </a>
                    </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{color: "#4c40f7"}}> Springer icSoftComp2021 </h3>
                  </Col>
                </Row>
                
                <Row style = {{marginLeft: "10px", padding: "20px"}}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <h3 style = {{fontSize: "14px",color: "#868E96", display: "block", marginBottom: "5px"}}> ➢ <span style = {{color: "black" }}> Built a machine </span> that identifies areca nuts based on their colour. </h3>
                    <h3 style = {{fontSize: "14px",color: "#868E96", display: "block", marginBottom: "5px"}}> ➢ Includes dataset creation, foreground extraction, communication between the Raspberry Pi and the Arduino and classification using machine learning algorithms such as Convolutional Neural Networks, Bayes classifier and Support Vector Machine.</h3> 
                  </div>
                </Row>


              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row justify="center" style = {{marginTop: "20px", padding: "20px"}}>
        <Col sm = {24} md= {20}>
          <h2 style = {{fontSize: "20px", color:"#4c40f7", fontFamily: "sans-serif"}}> ----- Projects</h2> <br />
          <Card style = {{borderRadius: "20px", boxShadow: " 0 25px 20px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}}>

            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/UB_image.jpeg'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> New York Cannabis Exchange </h3>
                    <h3 style = {{fontSize: "14px",color: "#868E96"}}> <a href = "https://nycanx.com/" target = "_blank"> WWW.NYCANX.COM</a> </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{color: "#4c40f7"}}> Feb 2023 - Present </h3>
                  </Col>
                </Row>

                <Row style = {{marginLeft: "10px", padding: "20px"}}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <h3 style = {{fontSize: "14px",color: "#868E96", display: "block", marginBottom: "5px"}}> ➢ Developing an <span  style = {{color: "black"}}>online B2B auction application </span> for buying and selling cannabis products in New York state.</h3> 
                    <h3 style = {{fontSize: "14px",color: "#868E96", display: "block"}}> ➢Tech Stack: Django, React, AWS </h3>
                  </div>
                </Row>
              </Col>
            </Row>

            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/UB_image.jpeg'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> Decentralized food bank application </h3>
                    <h3 style = {{fontSize: "14px",color: "#868E96"}}> <a href = "https://nycanx.com/" target = "_blank"> WWW.FOODBANK.COM</a> </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{color: "#4c40f7"}}> Sep 2022 - Dec 2022 </h3>
                  </Col>
                </Row>

                <Row style = {{marginLeft: "10px", padding: "20px"}}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <h3 style = {{fontSize: "14px",color: "#868E96", display: "block", marginBottom: "5px"}}> ➢ Developed a <span  style = {{color: "black" }}> blockchain application </span> that connects donors and food banks, empowering donors to make crucial decisions about how to utilize the funds raised, thereby reducing the risk of fraud.</h3> 
                    <h3 style = {{fontSize: "14px",color: "#868E96", display: "block"}}> ➢Tech Stack: Solidity, React, Next.js </h3>
                  </div>
                </Row>
              </Col>
            </Row>

            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/UB_image.jpeg'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> Client-Server Text Chat Application </h3>
                    <h3 style = {{fontSize: "14px",color: "#868E96"}}> 
                      <a href = "https://nycanx.com/" target = "_blank"> <FontAwesomeIcon icon={faArrowUpRightFromSquare} style = {{color: "black"}}/> Repository </a> </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{color: "#4c40f7"}}> Sep 2022 - Dec 2022 </h3>
                  </Col>
                </Row>

                <Row style = {{marginLeft: "10px", padding: "20px"}}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <h3 style = {{fontSize: "14px",color: "#868E96", display: "block", marginBottom: "5px"}}> ➢ Developed a <span  style = {{color: "black" }}> text chat application </span> to communicate between clients and servers using <span  style = {{color: "black"}}>socket programming </span>.</h3> 
                    <h3 style = {{fontSize: "14px",color: "#868E96", display: "block"}}> ➢Tech Stack: C++ </h3>
                  </div>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>


      <Row justify="center" style = {{marginTop: "20px"}}>
        <Col sm = {24} md= {20}>
          <h2 style = {{fontSize: "20px", color:"#4c40f7", fontFamily: "sans-serif", marginBottom: "30px"}}> ----- Recommendations</h2> <br />
          <Row justify = "center">
            <Col sm = {24} md = {20}>
              <Card style = {{borderRadius: "40px", boxShadow: " 0 25px 20px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}}>
              <Carousel autoplay autoplaySpeed = {10000} style = {{padding: "30px"}} customDot={customDot}>
                <div>
                  <div>
                    <h3 style = {{fontSize: "20px",color: "black"}}> Suraj Prakash</h3>
                    <h4 style = {{fontSize: "14px",color: "#868E96", marginBottom: "40px"}} >Vice President and Head of Engineering at Kuvera.in</h4>
                    <FontAwesomeIcon icon = {faQuoteLeft} size = "md" style = {{color: "black", marginRight: "10px"}} />  
                    <h3 style = {{fontSize: "16px",color: "#868E96", padding: "0 15px"}}>  Vamsi is <span className="fade-in-fast" style = {{color: "black"}}>focused and highly committed  </span> to his work. He <span className="fade-in-fast" style = {{color: "black"}}>takes complete ownership </span>of his projects and tasks. He has consistently demonstrated <span className="fade-in-fast" style = {{color: "black"}}> deep technical knowledge </span>, and the ability to deep dive and get to the root cause of the issues. He is a great team player as well. </h3>
                  </div>
                </div>
                <div>
                    <h3 style = {{fontSize: "20px",color: "black"}}> Naveen Kumar</h3>
                    <h4 style = {{fontSize: "14px",color: "#868E96", marginBottom: "40px"}} > Technical Lead at Kuvera.in</h4>
                    <FontAwesomeIcon icon = {faQuoteLeft} size = "md" style = {{color: "black", marginRight: "10px"}} />  
                    <h3 style = {{fontSize: "16px",color: "#868E96", padding: "0 15px"}}>  Mr. Vamsi is a <span className="fade-in-fast" style = {{color: "black"}}> dedicated, patient, guy with a microscopic eye for details! </span> I was amazed at times how he had come up with bugs that were buried deep and went unnoticed and solved them.
                      He is a <span className="fade-in-fast" style = {{color: "black"}}>fast learner, my go-to guy for complex problem. </span>
                      I really <span className="fade-in-fast" style = {{color: "black"}}>enjoyed </span> working with Vamsi! He has been a <span className="fade-in-fast" style = {{color: "black"}}>massive contributor  to solving complex problems and building key features </span> at Kuvera in this short span of time! 
                    </h3>
                </div>
                <div>
                    <h3 style = {{fontSize: "20px",color: "black"}}> Ajaiy Dharsaun</h3>
                    <h4 style = {{fontSize: "14px",color: "#868E96", marginBottom: "40px"}} > Managing Director at Tesark</h4>
                    <FontAwesomeIcon icon = {faQuoteLeft} size = "md" style = {{color: "black", marginRight: "10px"}} />  
                    <h3 style = {{fontSize: "16px",color: "#868E96", padding: "0 15px"}}>  Vamsi was <span className="fade-in-fast" style = {{color: "black"}}> very quick </span>to learn and adapt to new technologies and was a key development contributor to many projects at Tesark. We were very happy with his performance and efficiency.
                    Vamsi is a <span className = "fade-in-fast" style = {{color: "black"}}>self-motivated and organized person </span> and was giving his 100% during the WFH times. I would <span className="fade-in-fast" style = {{color: "black"}}> highly recommend </span> Vamsi for technical roles.
                    </h3>
                </div>
                
              </Carousel>
              </Card>
            </Col>
                
          </Row>
        </Col>
      </Row>
      <Button className = "resume" onClick = {downloadPDF}>
        <FontAwesomeIcon icon={faDownload} style = {{color: "black", marginRight: "10px"}}/>  
        resume
      </Button>
    </div>
  )
}

export default homepage