
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Container, Row } from 'react-bootstrap';
import AllTeams from '../AllTeams/AllTeams';
import { useHistory } from 'react-router';
import Header from '../Header/Header';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(response => response.json())
            .then(data => setTeams(data.teams))
    }, []);

    const first15Teams = teams.slice(0, 15);

    let history = useHistory();

    const handleClick = teamId => {
        history.push(`/team/${teamId}`);
    }

    return (
        <>
            <Header />
                <div className='allTeams-bg'>
                    <Container>
                        <Row className='text-center'>
                            {
                                first15Teams.map(teams => <AllTeams teams={teams} handleClick={handleClick} key={teams.idTeam} />)
                            }
                        </Row>
                    </Container>
                </div>
        </>
    );
};

export default Home;