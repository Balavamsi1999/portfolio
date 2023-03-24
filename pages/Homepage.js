import React, {useState, useEffect} from 'react'
import { Col, Row, Button, Card, List, Avatar, Timeline, Carousel, Anchor, Image } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faDownload, faQuoteLeft,faMessage } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';
import LeetCodeIcon from './LeetCodeIcon';
import GmailIcon  from './GmailIcon';




function Homepage() {


  const aboutMe = [
    {
      title: '➢ A self-motivated and enthusiastic programmer with strong problem-solving skills.'

    },{
      title: ' ➢ An Experienced Full Stack Web Developer who is enthusiastic about writing clean, and efficient code. '
    },{
      title: ' ➢ Among top 11% worldwide with a contest rating of 1700+ in Leetcode. '
    }
  ]

  const awards = [
    {
      title: ' ➢ Received Quality Maestro Award and Team Player Award at Kuvera for my unwavering commitment to delivering exceptional code that is consistently free of bugs, as well as for my outstanding teamwork skills.'
    },{
      title: ' ➢ Ranked in the top 11% globally on Leetcode out of 400,000+ participants, with a contest rating of 1700+.'
    },{
      title: ' ➢ Secured an All India rank of 8426 out of 1.2 million students in IIT JEE Advance 2016.'
    },{
      title: ' ➢ Merit Cum Means Scholarship holder at IIT Dharwad from 2016 to 2020.'
    }
  ]

  const programmingLanguages = ['C', 'C++', 'JavaScript', 'Ruby', 'Python', 'Java', 'Solidity']
  const backendFrameWorks = ['Ruby On Rails', 'Node.js', 'Django', 'SpringBoot', 'MySQL', 'MongoDB', 'redis']
  const frontEndFrameWorks = ['Next.js', 'React.js', 'ant design', 'Bootstrap', 'HTML', 'CSS', 'JS(ES6)']


 const kuveraExperience = 
  [{
      color: "#6c62f4",
      children:(
        <>
          <h3 style = {{color: "black", marginBottom: "5px"}}> Senior Software Engineer </h3>
          <h4 style = {{color:"#black", marginBottom: "5px"}}>  
            ➢ Led <span>the backend development of EPF and US stocks features, and optimized complex database queries, resulting in a </span> 99.87% decrease <span>in job execution time, from 12 hours to just 15 minutes.</span>
          </h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}> 
           ➢ Reduced <span>the number of API calls to Vested for retrieving US stocks' historical prices</span> by 90%, <span>resulting in a 10-fold decrease in server load and improving the overall system's performance.</span>
          </h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}> 
            ➢ <span>Collaborated to successfully develop </span> a multi-tenancy architecture <span> enabling </span>Amazon <span>India customers to invest in fixed deposits and mutual funds through Kuvera, which resulted in a remarkable </span> 150% increase in the user base.
          </h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}> 
            ➢ <span>Successfully integrated Tata instant redemption mutual fund, </span>reducing <span>investor withdrawal time </span> from three days to under 30 minutes<span>, significantly improving the withdrawal process.</span>
          </h4>
        </>  
      )
    },{
      color: "#6c62f4",
      children:(
        <>
          <h3 style = {{color: "black", marginBottom: "5px"}}> Software Engineer </h3>
          <h4 style = {{color:"#black", marginBottom: "5px"}}> 
            ➢ Optimized <span>and scaled up the EPF legacy code using AWS Lambdas and SQS,</span> reducing <span>transaction retrieval time </span>by 99%, <span>from 6 hours to just 5 minutes.</span>
          </h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}> 
            ➢ <span>Collaborated on the integration of Axis Bank fixed deposits into our platform, resulting in an impressive </span>50% increase <span>in investments through the platform.</span>
          </h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}> 
            ➢ <span>Successfully managed stock splits in US stocks, accurately adjusting price data and maintaining the accuracy of historical prices, which helped inform investment decisions and financial analyses.</span>
          </h4>
          <h4 style = {{color:"#black", marginBottom: "5px"}}>
            ➢ <span>Successfully integrated Amazon Pay Gift Cards into the rewards section, resulting in a significant increase in gift card redemptions and improving overall customer satisfaction.</span>
          </h4>
        </>

      )
  }]

  const tesarkExperience = 
  [{
    color: "#6c62f4",
    children:(
      <>
        <h3 style = {{color: "black"}}> Software Engineer </h3>
        <h4 style = {{color:"#black"}}>  
            ➢ <span> Successfully designed and developed a B2B invoice discounting application that streamlined the process of invoice discounting, resulting in increased access to capital for businesses and providing a profitable opportunity for investors. </span>
        </h4>
        <h4 style = {{color:"#black"}}> 
          ➢ <span>Developed a comprehensive school/college management software with streamlined administrative tasks, managing admissions, transportation, announcements, exams, grading, and more.</span>
        </h4>
      </>
    )
  }]

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
    const filename = 'Vamsi_resume.pdf';
   
    fetch(pdfURL)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, filename, options);
        // window.open(URL.createObjectURL(blob), '_blank');
      })
      .catch(error => console.error(error));
  }

  const [shouldDisplay, setShouldDisplay] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1350) {
        setShouldDisplay(true);
      } else {
        setShouldDisplay(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const anchorItems = [
    {
      key: '1',
      href: '#anchor-intro',
      title: 'Intro'
    },{
      key: '2',
      href: '#anchor-education',
      title: 'Education'
    },{
      key: '3',
      href: '#anchor-experience',
      title: 'Experience'
    },{
      key: '4',
      href: '#anchor-publications',
      title: 'Publications'
    },{
      key: '5',
      href: '#anchor-projects',
      title: 'Projects'
    },{
      key: '6',
      href: '#anchor-recommendations',
      title: 'Recommendations'
    },{
      key: '7',
      href: '#anchor-awards',
      title: 'awards'
    }
  ];

  const [activeAnchor, setActiveAnchor] = useState("");

  const onAnchorChange = (link) => {
    setActiveAnchor(link);
  }

  const normalCardStyle = {borderRadius: "20px", boxShadow: "0 0px 5px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"};
  const elevatedCardStyle =  {borderRadius: "20px", boxShadow: "0 5px 10px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -8px, 0px)"};


  return(
    <div style={{ backgroundColor: "white", overflow: "auto", display: "flex", flexDirection: "column"}}>
      <div style={{ position: "fixed", top: 0, padding: "10px", backgroundColor: "rgb(244, 241, 241)", zIndex: 1, width: "100%" }}>
        <Row gutter={[16, 16]}  justify="start" align="middle">       
        <Col>
            {/* <h3  style = {{color: "black", marginLeft: "30px"}}> FOLIO </h3> */}
            <Image src = "/logo.png" width = {150} preview = {false} />
          </Col>
          <Col>
            <Button className = "media" href = { "https://www.linkedin.com/in/balavamsi/" } target="_blank" >
                <>
                  <FontAwesomeIcon icon={faLinkedin} style = {{color: "blue", marginRight: "10px"}} loading = "lazy"/> 
                </>
              Linkedin
            </Button>
          </Col>
          <Col>
            <Button className = "media" href = { "https://github.com/Balavamsi1999?tab=repositories" } target="_blank" >
              <>
                <FontAwesomeIcon icon={faGithub} style = {{color: "black", marginRight: "10px"}}/>  
              </>
              Github
            </Button>
          </Col>
          <Col>
            <Button className = "media" href = {"mailto:balavamsiatukuri22@gmail.com"} target="_blank" >
              {/* <FontAwesomeIcon icon={faEnvelope} style = {{color: "red", marginRight: "10px"}}/>   */}
              <GmailIcon /> <span style={{ margin: '0 3px' }}></span> Gmail
            </Button>
          </Col>
          <Col>
            <Button className = "media"  href = {"https://leetcode.com/Balavamsi1999/"} target="_blank" >
              <LeetCodeIcon /> Leetcode
            </Button>
          </Col>
        </Row>
      </div>

      <div style={{flex: 1, overflow: "scroll", padding: "15px", marginTop: "15px"}}>
      <Row id= "anchor-intro"  justify="center">
        <Col sm = {22} md= {22} lg = {18}>
          <Row gutter={[0, 32]}  style = {{padding: "10px", marginTop: "100px"}} justify="space-between" align="middle">
            <Col>
              <h2  style = {{fontSize: "20px", color:"#6c62f4", fontFamily: "sans-serif"}}>  Venkata Bala Vamsi Atukuri</h2> <br />
              <h1 className = "fade-in" style = {{color: "#111029", fontWeight: "bold", fontSize: "62px", fontFamily: "sans-serif"}}>
                Hello, my <br/>name is Vamsi. <br/>
                I'm a Full Stack <br/> Developer
              </h1>
            </Col>
            <Col>
              <Avatar src = "/vamsi.jpeg" size = {{xs: 300, sm: 300, md: 400, lg:400, xl: 400, xxl: 400}}/>
            </Col>
          </Row>


          <Row style = {{padding: "10px", marginTop: "100px"}} justify="center" align="middle">
            <Col>
              <h2 style = {{fontSize: "20px", color:"#6c62f4", fontFamily: "sans-serif"}}>  Who am I</h2> <br />
             
              <Card hoverable style = {{borderRadius: "20px", boxShadow: " 0 2px 7px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}}>

                <h3 style = {{fontSize: "17px",color:"#565757", fontFamily: "sans-serif" }}>
                  A graduate computer science student with two years of experience and possess a high level of expertise in C++ and web technologies. As a self-motivated and enthusiastic programmer, I take pride in taking complete ownership of the products I work on. I have a proven track record of consistently delivering optimized and scalable code that exceeds expectations. With a deep commitment to excellence, I strive to create innovative solutions and make valuable contributions to the field of computer science.
                </h3>

                {/* <List itemLayout="horizontal" dataSource={aboutMe} className="list"
                  renderItem={(item, index) => (
                    <List.Item className="list-item">
                      <h3 style = {{color: "#111029"}} > {item.title} </h3>
                    </List.Item>
                  )}
                /> */}
              </Card>

            </Col>
          </Row>

          <Row style = {{marginTop: "50px", padding: "20px"}} gutter={[30, 16]} justify="center" align="middle">
            <Col>
              <Card className = "hover" hoverable style = {{width: "300px", borderRadius: "20px"}}>
                <h2> Programming Languages</h2>
                <p style = {{marginBottom: "20px"}}> 6 years of experience</p>

                <List itemLayout="horizontal" dataSource={programmingLanguages} className="list"
                    renderItem={(item, index) => (
                      <List.Item>
                        <h4 style = {{color: "white"}}> {item} </h4>
                        {/* <h4 style = {hoveredCard == "1" ? {color: "white"} : {color: "#111029"}} className = "fade-in"> {item} </h4> */}
                      </List.Item>
                    )}
                  />

              </Card>      
            </Col>

            <Col>
              <Card className = "hover" hoverable style = {{width: "300px",borderRadius: "20px"}}>
                <h2> Backend Development</h2>
                <p style = {{marginBottom: "20px"}}> 2 years of experience</p>

                <List itemLayout="horizontal" dataSource={backendFrameWorks} className="list"
                    renderItem={(item, index) => (
                      <List.Item>
                        <h4 style = {{color: "white"}}> {item} </h4>
                        {/* <h4 style = {hoveredCard == "2" ? {color: "white"} : {color: "#111029"}} className = "fade-in"> {item} </h4> */}
                      </List.Item>
                    )}
                  />
              </Card>      
            </Col>


            <Col>
              <Card className = "hover" hoverable style = {{width: "300px",borderRadius: "20px" }}>
                <h2> Frontend Development</h2>
                <p style = {{marginBottom: "20px"}}> 2 years of experience</p>

                <List itemLayout="horizontal" dataSource={frontEndFrameWorks} className="list"
                    renderItem={(item, index) => (
                      <List.Item>
                        <h4 style = {{color: "white"}}> {item} </h4>
                        {/* <h4 style = {hoveredCard == "3" ? {color: "white"} : {color: "#111029"}} className = "fade-in"> {item} </h4> */}
                      </List.Item>
                    )}
                  />
              </Card>      
            </Col>
          </Row>

          <h2 id = "anchor-education" style = {{fontSize: "20px", marginTop: "75px", color:"#6c62f4", fontFamily: "sans-serif"}}>  Education</h2> <br />
            
          <Card  hoverable style = {activeAnchor == "#anchor-education" ? elevatedCardStyle : normalCardStyle}>
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
                    <h3 style = {{fontSize: "14px", color: "#6c62f4"}}> August 2022 - Present </h3>
                  </Col>
                </Row>
            
                <Row style = {{marginBottom: "8px", marginTop: "8px"}}>
                  <h3 style = {{fontSize: "14px", color:"#565757", marginRight: "10px"}}>Computer Science</h3>
                  <h3 style = {{fontSize: "14px", color:"#565757"}}> <b> GPA: </b> 4.0 / 4.0</h3>
                </Row>

                <Row style = {{marginBottom: "8px", marginTop: "8px"}} align="middle">
                  <Col>
                    <h3 style = {{fontSize: "14px", color:"black", marginRight: "10px"}}>CourseWorks: </h3>
                  </Col>
                  <Col flex = "auto">
                    <h4 style = {{fontSize: "14px", color:"#565757", wordWrap: "break-word" }}>
                      Database systems, Data Intensive Computing, Modern Networking Concepts, Data Structures and Algorithms.
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
                    <h3 style = {{fontSize: "14px", color: "#6c62f4"}}> July 2016 - May 2020 </h3>
                  </Col>
                </Row>
            
                <Row style = {{marginBottom: "8px", marginTop: "8px"}}>
                  <h3 style = {{fontSize: "14px", color:"#565757", marginRight: "10px"}}>Computer Science</h3>
                  <h3 style = {{fontSize: "14px", color:"#565757"}}> GPA: 8.37 / 10.0</h3>
                </Row>

                <Row style = {{marginBottom: "8px", marginTop: "8px"}} align="middle">
                  <Col>
                    <h3 style = {{fontSize: "14px", color:"black", marginRight: "10px"}}>CourseWorks: </h3>
                  </Col>
                  <Col flex = "auto">
                    <h4 style = {{fontSize: "14px", color:"#565757", wordWrap: "break-word" }}>
                      Operating systems, Distributed systems, OOPS, Pattern Recognition and Machine Learning.
                    </h4> 
                  </Col> 
                </Row>
              </Col>
              
             
            </Row>
          </Card>

          <h2 id = "anchor-experience" style = {{fontSize: "20px", marginTop: "75px", color:"#6c62f4", fontFamily: "sans-serif"}}>  Experience</h2> <br />
          <Card hoverable style = {activeAnchor == "#anchor-experience" ? elevatedCardStyle : normalCardStyle}>
            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/kuvera_logo.png'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> Kuvera.in, Bangalore, India</h3>
                    <h3 style = {{fontSize: "14px",color: "#565757"}}> Major Focus on Backend Development </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{fontSize: "14px", color: "#6c62f4"}}> May 2021 - July 2022 </h3>
                  </Col>
                </Row>

                {/* <Card  style = {{borderRadius: "20px", margin: "10px 0px 10px 0px", boxShadow: " 0 5px 10px rgba(0,0,0,0.22)" , transform: "translate3d(0px, -1px, 0px)"}}> */}
                  <Row style = {{padding: "10px"}}>
                    <Timeline items={kuveraExperience} style = {{padding: "0px", marginTop: "20px"}}>
                    </Timeline>
                  </Row>
                {/* </Card> */}
              </Col>
            </Row>

            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/tesark.jpeg'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> Tesark, Bangalore, India</h3>
                    <h3 style = {{fontSize: "14px",color: "#565757"}}> Major Focus on Frontend Development </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{fontSize: "14px", color: "#6c62f4"}}> July 2020 - April 2021 </h3>
                  </Col>
                </Row>

                <Row style = {{padding: "10px"}}>
                  <Timeline items={tesarkExperience} style = {{padding: "0px", marginTop: "20px"}}>
                  </Timeline>
                </Row>
              </Col>
            </Row>
          </Card>

          <h2 id = "anchor-publications" style = {{fontSize: "20px", marginTop: "75px", color:"#6c62f4", fontFamily: "sans-serif"}}>  Publications</h2> <br />
          <Card hoverable style = {activeAnchor == "#anchor-publications" ? elevatedCardStyle : normalCardStyle}>
            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/springer.png'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> Segregation of Areca Nuts </h3>
                    <h3 style = {{fontSize: "14px",color: "#565757"}}> 
                      <a href = {"https://link.springer.com/chapter/10.1007/978-3-031-05767-0_2"} target = "_blank"> 
                        <>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} style = {{color: "black"}}/> Publication 
                        </>
                      </a>
                    </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{fontSize: "14px", color: "#6c62f4"}}> Springer icSoftComp2021 </h3>
                  </Col>
                </Row>
                
                <Row style = {{marginLeft: "10px", padding: "20px"}}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <h3 style = {{fontSize: "14px",color: "#565757", display: "block", marginBottom: "5px"}}> ➢ <span style = {{color: "black" }}> Built a machine </span> that identifies areca nuts based on their colour. </h3>
                    <h3 style = {{fontSize: "14px",color: "#565757", display: "block", marginBottom: "5px"}}> ➢ Includes dataset creation, foreground extraction, communication between the Raspberry Pi and the Arduino and classification using machine learning algorithms such as Convolutional Neural Networks, Bayes classifier and Support Vector Machine.</h3> 
                  </div>
                </Row>


              </Col>
            </Row>
          </Card>

          <h2 id = "anchor-projects" style = {{fontSize: "20px", marginTop: "75px", color:"#6c62f4", fontFamily: "sans-serif"}}>  Projects</h2> <br />
          <Card hoverable style = {activeAnchor == "#anchor-projects" ? elevatedCardStyle : normalCardStyle}>

            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/nyce.png'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> New York Cannabis Exchange </h3>
                    <h3 style = {{fontSize: "14px",color: "#565757"}}> <a href = {"https://nycanx.com/"} target = "_blank"> WWW.NYCANX.COM</a> </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{fontSize: "14px", color: "#6c62f4"}}> Feb 2023 - Present </h3>
                  </Col>
                </Row>

                <Row style = {{marginLeft: "10px", padding: "20px"}}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <h3 style = {{fontSize: "14px",color: "#565757", display: "block", marginBottom: "5px"}}> ➢ Developing an <span  style = {{color: "black"}}>online B2B auction application </span> for buying and selling cannabis products in New York state.</h3> 
                    <h3 style = {{fontSize: "14px",color: "#565757", display: "block"}}> ➢Tech Stack: Django, React, AWS </h3>
                  </div>
                </Row>
              </Col>
            </Row>

            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = '/foodbank.png'/>
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> Decentralized food bank application </h3>
                    <h3 style = {{fontSize: "14px",color: "#565757"}}> <a href = {"https://nycanx.com/"} target = "_blank"> WWW.FOODBANK.COM</a> </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{fontSize: "14px", color: "#6c62f4"}}> Sep 2022 - Dec 2022 </h3>
                  </Col>
                </Row>

                <Row style = {{marginLeft: "10px", padding: "20px"}}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <h3 style = {{fontSize: "14px",color: "#565757", display: "block", marginBottom: "5px"}}> ➢ Developed a <span  style = {{color: "black" }}> blockchain application </span> that connects donors and food banks, empowering donors to make crucial decisions about how to utilize the funds raised, thereby reducing the risk of fraud.</h3> 
                    <h3 style = {{fontSize: "14px",color: "#565757", display: "block"}}> ➢Tech Stack: Solidity, React, Next.js </h3>
                  </div>
                </Row>
              </Col>
            </Row>

            <Row align = "top" >
              <Col sm= {24}>
                <Row align = "middle" gutter={[16, 16]}> 
                  <Col >
                    <Avatar shape="square" size={60} src = "/message.png" />
                  </Col>
                  <Col>
                    <h3 style = {{fontSize: "14px",color:"black", fontFamily: "sans-serif", textTransform: "uppercase", marginBottom: "5px"}}> Client-Server Text Chat Application </h3>
                    <h3 style = {{fontSize: "14px",color: "#565757"}}> 
                      <a href = {"https://nycanx.com/"} target = "_blank"> <><FontAwesomeIcon icon={faArrowUpRightFromSquare} style = {{color: "black"}}/> Repository</> </a> </h3>
                  </Col>
                  <Col style = {{marginLeft: "auto"}}>
                    <h3 style = {{fontSize: "14px", color: "#6c62f4"}}> Sep 2022 - Dec 2022 </h3>
                  </Col>
                </Row>

                <Row style = {{marginLeft: "10px", padding: "20px"}}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <h3 style = {{fontSize: "14px",color: "#565757", display: "block", marginBottom: "5px"}}> ➢ Developed a <span  style = {{color: "black" }}> text chat application </span> to communicate between clients and servers using <span  style = {{color: "black"}}>socket programming </span>.</h3> 
                    <h3 style = {{fontSize: "14px",color: "#565757", display: "block"}}> ➢Tech Stack: C++ </h3>
                  </div>
                </Row>
              </Col>
            </Row>
          </Card>

          <h2 id = "anchor-recommendations" style = {{fontSize: "20px", marginTop: "75px", color:"#6c62f4", fontFamily: "sans-serif", marginBottom: "30px"}}>  Recommendations</h2> <br />
          <Row justify = "center">
            <Col sm = {24} md = {20}>
            <Card hoverable  className = "carousel-card" style = {activeAnchor == "#anchor-recommendations" ? elevatedCardStyle : normalCardStyle}>
              <Carousel autoplay autoplaySpeed = {8000} style = {{padding: "10px"}} customDot={customDot}>
                <div>
                  <div>
                    <h3 style = {{fontSize: "20px",color: "black"}}> Suraj Prakash</h3>
                    <h4 style = {{fontSize: "14px",color: "#565757", marginBottom: "20px"}} >Vice President and Head of Engineering at Kuvera.in</h4>
                    <> <FontAwesomeIcon icon = {faQuoteLeft} size = "md" style = {{color: "black", marginRight: "10px"}} />  </>
                    <h3 style = {{fontSize: "16px",color: "#565757", padding: "0 15px"}}>  Vamsi is <span className="fade-in-fast" style = {{color: "black"}}>focused and highly committed  </span> to his work. He <span className="fade-in-fast" style = {{color: "black"}}>takes complete ownership </span>of his projects and tasks. He has consistently demonstrated <span className="fade-in-fast" style = {{color: "black"}}> deep technical knowledge </span>, and the ability to deep dive and get to the root cause of the issues. He is a great team player as well. </h3>
                  </div>
                </div>
                <div>
                    <h3 style = {{fontSize: "20px",color: "black"}}> Naveen Kumar</h3>
                    <h4 style = {{fontSize: "14px",color: "#565757", marginBottom: "20px"}} > Technical Lead at Kuvera.in</h4>
                    <> <FontAwesomeIcon icon = {faQuoteLeft} size = "md" style = {{color: "black", marginRight: "10px"}} />  </>
                    <h3 style = {{fontSize: "16px",color: "#565757", padding: "0 15px"}}>  Mr. Vamsi is a <span className="fade-in-fast" style = {{color: "black"}}> dedicated, patient, guy with a microscopic eye for details! </span> I was amazed at times how he had come up with bugs that were buried deep and went unnoticed and solved them.
                      He is a <span className="fade-in-fast" style = {{color: "black"}}>fast learner, my go-to guy for complex problem. </span>
                      I really <span className="fade-in-fast" style = {{color: "black"}}>enjoyed </span> working with Vamsi! He has been a <span className="fade-in-fast" style = {{color: "black"}}>massive contributor  to solving complex problems and building key features </span> at Kuvera in this short span of time! 
                    </h3>
                </div>
                <div>
                    <h3 style = {{fontSize: "20px",color: "black"}}> Ajaiy Dharsaun</h3>
                    <h4 style = {{fontSize: "14px",color: "#565757", marginBottom: "20px"}} > Managing Director at Tesark</h4>
                    <> <FontAwesomeIcon icon = {faQuoteLeft} size = "md" style = {{color: "black", marginRight: "10px"}} /> </>  
                    <h3 style = {{fontSize: "16px",color: "#565757", padding: "0 15px"}}>  Vamsi was <span className="fade-in-fast" style = {{color: "black"}}> very quick </span>to learn and adapt to new technologies and was a key development contributor to many projects at Tesark. We were very happy with his performance and efficiency.
                    Vamsi is a <span className = "fade-in-fast" style = {{color: "black"}}>self-motivated and organized person </span> and was giving his 100% during the WFH times. I would <span className="fade-in-fast" style = {{color: "black"}}> highly recommend </span> Vamsi for technical roles.
                    </h3>
                </div>
                
              </Carousel>
              </Card>
            </Col>
                
          </Row>

          <h2 id = "anchor-awards" style = {{fontSize: "20px", marginTop: "75px", color:"#6c62f4", fontFamily: "sans-serif", marginBottom: "30px"}}>  AWARDS & ACHIEVEMENTS</h2> <br />
          <Row justify = "center" style = {{marginBottom: "150px"}}>
            <Card hoverable className = "carousel-card" style = {activeAnchor == "#anchor-awards" ? elevatedCardStyle : normalCardStyle}>
              <List itemLayout="horizontal" dataSource={awards} className="list"
                  renderItem={(item, index) => (
                    <List.Item>
                      <h3 style = {{color: "#565757"}} > {item.title} </h3>
                    </List.Item>
                  )}
                />
            </Card>
          </Row>
        </Col>
      </Row>
      

      { shouldDisplay && (
         <Anchor className = "anchor"  offsetTop = {300} affix={true} onChange={onAnchorChange} items={anchorItems} />
      )}
        
      
  
      <Button className = "resume" onClick = {downloadPDF}>
        <>
          <FontAwesomeIcon icon={faDownload} style = {{color: "#6c62f4", marginRight: "10px"}}/>  
        </>
        Resume
      </Button>
      </div>
    </div>
  )
}

export default Homepage
