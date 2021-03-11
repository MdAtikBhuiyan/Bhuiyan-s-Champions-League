import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import './TeamDetails.css';
import male from '../../../src/image/male.png';
import female from '../../../src/image/female.png';
import Header from '../Header/Header';

const TeamDetails = () => {

    const { teamId } = useParams();
    console.log('p', teamId)

    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(response => response.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId])

    console.log('s', team);
    const { strTeamBadge,strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strStadiumDescription, strTwitter, strFacebook, strYoutube } = team;


    return (
        <>
            <Header  teamLogo={strTeamBadge} />
            <div className='details-area'>
                <Container>

                    <Row className='banner'>
                        <Col md={6}>
                            <div className="details-content">
                                <h2>{strTeam} </h2>
                                <p><span><FontAwesomeIcon icon={faClock} /></span> <span>Founded: {intFormedYear}</span></p>
                                <p><span><FontAwesomeIcon icon={faFlag} /></span> <span>Country: {strCountry}</span></p>
                                <p><span><FontAwesomeIcon icon={faFutbol} /></span> <span>Sport Type: {strSport}</span></p>
                                <p><span><FontAwesomeIcon icon={faMars} /></span> <span>Gender: {strGender} </span></p>

                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="details-img">
                                {

                                    (strGender === 'Male') ? <img src={male} alt="" /> : <img src={female} alt="" />
                                }

                            </div>
                        </Col>
                    </Row>

                    <div className="description">
                        <p>{strDescriptionEN}</p>
                        <p className='my-5'>{strStadiumDescription}</p>
                        <div className="social-area text-center">
                            <a href={`https://${strTwitter}`} target='_blank'> <FontAwesomeIcon icon={faTwitterSquare} size="2x" /> </a>
                            <a href={`https://${strFacebook}`} target='_blank'> <FontAwesomeIcon icon={faFacebook} size="2x" /> </a>
                            <a href={`https://${strYoutube}`} target='_blank'> <FontAwesomeIcon icon={faYoutubeSquare} size="2x" /> </a>
                        </div>
                    </div>

                </Container>
            </div>
        </>
    );
};

export default TeamDetails;