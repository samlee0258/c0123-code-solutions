import CustomButton from "./CustomButton.js";

function App() {
  function handleCustomClick(text, color) {
    alert(`Clicked ${color} ${text} button!`)
  }

  return (
    <>
      <CustomButton text="I" color="green" onCustomClick={handleCustomClick} />
      <CustomButton text="Fancy" color="red" onCustomClick={handleCustomClick} />
      <CustomButton text="React" color="blue" onCustomClick={handleCustomClick} />
    </>
  )
}

export default App;
