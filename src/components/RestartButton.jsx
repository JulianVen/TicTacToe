export default function RestartButton({ onRestartClick }) {
    return (
        <button className="restart" onClick={onRestartClick}>
            Restart Game
        </button>
    )
}