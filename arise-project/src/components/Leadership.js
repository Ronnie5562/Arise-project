import styled from "styled-components";

const Business = (props) => {
    return (
        <Body>
            <Cardcontainer>
                <Card>
                    <Content>
                        <Text>Book Resources</Text>
                        <Link href="https://www.google.com/search?q=leadership+resources&sxsrf=AJOqlzWmnM3ROq0k7M9NgIx2xESlkafK4g:1674626754077&source=lnms&tbm=bks&sa=X&ved=2ahUKEwiUl7vmhuL8AhXFTKQEHVFpBx4Q_AUoBHoECAMQBg&cshid=1674626783391588&biw=1422&bih=668&dpr=1.35">Click Here to get your book resources</Link>
                    </Content>
                </Card>
                <Card>
                    <Content>
                        <Text>Leadership Qualities</Text>
                        <Link href="https://lrsuccess.com/">Get the top-notch resource you need to kick start your journey into the world of Leadership</Link>
                    </Content>
                </Card>
                <Card>
                    <Content>
                        <Text>A Guide to Organizational Resources and How to Manage Them</Text>
                        <Link href="https://www.uagrantham.edu/blog/a-guide-to-organizational-resources-and-how-to-manage-them/#:~:text=What%20Is%20a%20Resource%3F,space%2C%20equipment%2C%20or%20capital.">Click Here</Link>
                    </Content>
                </Card>
                <Card>
                    <Content>
                        <Text>16 Leadership Resources for Any Stage of Your Career + 9 Extra Tools</Text>
                        <Link href="https://blog.hubspot.com/marketing/leadership-resources">Click Here to Understand the concepts you need to thrive as a Leader</Link>
                    </Content>
                </Card>
            </Cardcontainer>
        </Body>
    )
}


const Body = styled.div`
    display: flex;
    margin-top: 40px;
    padding: 0 30px;
    justify-content: center;
    align-items: center;
`
const Cardcontainer = styled.div`
    display: flex;
    display: block;
    align-items: center;
    justify-content: center;
    width: 70%;

    @media (max-width: 760px) {
        width: 100%;
    }
`
const Card = styled.div`
    height: 300px;
    width: 100%;
    background-color: #4a586b;
    margin-top: 70px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div``
const Img = styled.img``
const Text = styled.p`
    text-decoration: underline;
    font-size: 25px;
    color: white;
`
const Link = styled.a`
    text-decoration: none;
    font-size: 25px;
    color: white;
`

export default Business;