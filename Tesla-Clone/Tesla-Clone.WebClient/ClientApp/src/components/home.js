import React, {} from 'react';
import styled from 'styled-components';
import Section from "./section";

const Home = (props) => {
    return (
        <>
            <Container>
                <Section />
            </Container>
        </>
    );
}

const Container = styled.div`
    height: 100vh;
`;
export default Home;