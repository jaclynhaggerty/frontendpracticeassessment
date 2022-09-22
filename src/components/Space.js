

const Space = (props) => {
    // todo: The button here should navigate to something like "/space/3"
    // Where 3 is the id of the space (props.key)
    return (

        <div className="spaceContainer" style={{ backgroundColor: props.backgroundColor }}>
            <h2 style={{ color: props.color }}> {props.title} </h2>
            <p style={{color: props.color }}> {props.description} </p>
            <button> Visit Space </button>
        </div>
    )
}

export default Space;