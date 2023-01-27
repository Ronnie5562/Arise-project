import styled from "styled-components";

const Business = (props) =>{
    return(
        <Body>
            <Cardcontainer>
                <Card>
                    <Content>
                        <Text>Book Resources</Text>
                        <Link href="https://www.google.com/search?q=business+resources&sxsrf=AJOqlzXuvz2F78Ivzw8EtG9nMYqTKhJhWA:1674626708841&source=lnms&tbm=bks&sa=X&ved=2ahUKEwiFoPLQhuL8AhXARKQEHWSDDcYQ_AUoA3oECAEQBQ&biw=1422&bih=668&dpr=1.35">Click Here to get your book resources</Link>
                    </Content>
                </Card>
                <Card>
                    <Content>
                        <Text>5 Resources You Need to Succeed to Start a Business</Text>
                        <Link href="https://smallbusiness.chron.com/startup-business-procedures-2394.html">Click Here to get Read</Link>
                    </Content>
                </Card>
                <Card>
                    <Content>
                        <Text>books on understanding the business world</Text>
                        <Link href="https://www.google.com/search?q=books+on+understanding+the+business+world&sxsrf=AJOqlzVcLEhkFKRfZEVdOIRDQ6SPpOZ83g:1674627017905&source=lnms&tbm=bks&sa=X&ved=2ahUKEwjo76Hkh-L8AhVjcKQEHccGCSAQ_AUoAXoECAEQAw&biw=1422&bih=668&dpr=1.35">Click Here to get your book resources</Link>
                    </Content>
                </Card>
                <Card>
                    <Content>
                        <Text>20 Habits Of Billionaires That You Can Do</Text>
                        <Link href="https://crasa.org.za/2021/11/10/20-habits-of-billionaires-that-you-can-do/">Click Here to Understand the concepts you need to thrive in the business world</Link>
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