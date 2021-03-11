import React from 'react';
import './AllTeams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Col, Card, Button } from 'react-bootstrap';

const AllTeams = ({teams, handleClick}) => {

    const {strTeamBadge, strTeam, strSport, idTeam} = teams;

    return (
        <Col md={4}>
            <Card className='my-3'>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Sport Type: {strSport}
                    </Card.Text>
                    <Button onClick={ () => handleClick(idTeam)} variant="primary">
                        Explore <span className='ml-1'> <FontAwesomeIcon icon={faArrowRight} /> </span>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllTeams;