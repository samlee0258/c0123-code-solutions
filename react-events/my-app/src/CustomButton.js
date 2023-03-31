
export default function CustomButton({ text, color, onCustomClick }) {

  return (
    <button style={{ backgroundColor: color }}
            onClick={() => onCustomClick(text, color)}
    >
      {text}
    </button>
  );
}
