import { useNavigate } from "react-router-dom";


const Space = (props) => {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        e.preventDefault();
        navigate(`/spaces/${props.spaceId}`)
    }
    // todo: The button here should navigate to something like "/spaces/3"
    // Where 3 is the id of the space (props.spaceId)
    return (

        <div className="spaceContainer" style={{ backgroundColor: props.backgroundColor }}>
            <h2 style={{ color: props.color }}> {props.title} </h2>
            <p style={{color: props.color }}> {props.description} </p>
            <button onClick={handleNavigation}> Visit Space </button>
        </div>
    )
}

export default Space;