import React from 'react'
import { Col, Row, Button, Card, List, Avatar, Timeline, Carousel, Anchor, Image } from 'antd';


function Test() {
  return (
    <div style={{ padding: "20px", backgroundColor: "white", overflow: "auto", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "sticky", top: 0, backgroundColor: "white", zIndex: 1, color: "black" }}>
            <Row gutter={[16, 16]} justify="start" align="middle">
            <Col span={8}>
                <a href="#">Home</a>
            </Col>
            <Col span={8}>
                <a href="#">About</a>
            </Col>
            <Col span={8}>
                <a href="#">Contact</a>
            </Col>
            </Row>
        </div>
        <div style={{ flex: 1, overflow: "scroll", backgroundColor: "white", color: "black" }}>
            <Row id= "anchor-intro"  justify="center">
            <Col>
                <h2 class='flipX'>flip vertical</h2>
            </Col>
            </Row>
        </div>
    </div>

  )
}

export default Test