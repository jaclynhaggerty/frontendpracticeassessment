import styled from "styled-components"


const Story = (props) => {

    return (
        <Card>
            <div>
                <h3>{props.name}</h3>
                <img alt="Story cover" src={props.imageUrl}></img>
            </div>
            <div>
                <p>{props.content}</p>
            </div>
        </Card>
    )
}

const Card = styled.div`
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    max-width: 200px;
    max-height: 300px;
`

export default Story