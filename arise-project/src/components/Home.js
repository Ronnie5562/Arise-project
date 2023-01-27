import styled from "styled-components";
import Confetti from "react-confetti"
import { useState } from "react";

const Home = (props) => {
    const [showConfetti, setShowConfetti] = useState(true);
    <Confetti run={showConfetti}  />
    return (
        <Container>
            {showConfetti && 
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    run={showConfetti}
                />
            }
            <Content>
                <CTA>
                    <SignUp href="">GET STARTED</SignUp>
                    <Description>
                        This website that offers free information on business, leadership, and finance is Investopedia. It is a trusted source for financial education and provides a wide range of content, including in-depth articles, videos, and tutorials on topics such as financial analysis, investing, personal finance, and more. Investopedia also offers educational courses to help users improve their knowledge and skills in these areas.
                    </Description>
                </CTA>
                <Bgimage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
    overflow-x: hidden;
`;

const Bgimage = styled.div`
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("./images/background2.png");
    background-position: top;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: 760px) {
        height: 500px;
    }
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 17px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
    }

    @media (max-width: 760px) {
        padding: 0px
    }
`;

const Description = styled.p`
    color: white;
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5em;
    letter-spacing: 1.5px;
    font-weight: bold;
`;

export default Home;