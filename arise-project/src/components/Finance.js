import styled from "styled-components";

const Business = (props) => {
    return (
        <Body>
            <Cardcontainer>
                <Card>
                    <Content>
                        <Text>Book Resources</Text>
                        <Link href="https://www.google.com/search?q=books+on+finance&sxsrf=AJOqlzXJZqRs9pZvDAtB_f2S8e9_MbvKwA:1674650017305&source=lnms&tbm=bks&sa=X&ved=2ahUKEwiM-5273eL8AhWRTaQEHWC3DNgQ_AUoAXoECAEQAw&biw=773&bih=657&dpr=1.35">Click Here to get your book resources</Link>
                    </Content>
                </Card>
                <Card>
                    <Content>
                        <Text>Ten top tips to improve your financial management</Text>
                        <Link href="https://www.nibusinessinfo.co.uk/content/ten-top-tips-improve-your-financial-management">Click Here to Read</Link>
                    </Content>
                </Card>
                <Card>
                    <Content>
                        <Text>Financial Management Explained: Scope, Objectives and Importance</Text>
                        <Link href="https://www.netsuite.com/portal/resource/articles/financial-management/financial-management.shtml">Click Here</Link>
                    </Content>
                </Card>
                <Card>
                    <Content>
                        <Text>books on understanding the finance world</Text>
                        <Link href="https://www.google.com/search?q=books+on+understanding+the+finance+world&sxsrf=AJOqlzVYG_IZRzeuk7rDosn3Yi7Bt8Mrzw:1674650146401&source=lnms&tbm=bks&sa=X&ved=2ahUKEwjinOX43eL8AhX-YqQEHcxfCs8Q_AUoAXoECAEQAw&biw=773&bih=657&dpr=1.35">Click Here to get yourself books on understanding the finance world</Link>
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