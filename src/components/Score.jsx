export default function Score({ label = "Score", value = 0 }){
    return (
        <div className="score">
            <h3 className="score-label"> { label.toUpperCase() }</h3>
            <p className="score-value"> { value } </p>
        </div>
    );
}