import React from "react";

import { Tile } from './flowertile';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const FlowerGrid = () => {
    return<>
        <Container className="flowergrid">
            <Row>
                <Col>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                </Col>
            </Row>
        </Container>
    </>
}



