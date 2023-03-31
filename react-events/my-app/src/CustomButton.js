export default function CustomButton({ text, color, onCustomClick }) {
  function handleCustomClick() {
    return alert(`You clicked on the ${color} ${text} button!`);
  }

  return (
    <button
    style={{ backgroundColor: color }}
    onClick={ handleCustomClick }>
      {text}
    </button>
  )
}
