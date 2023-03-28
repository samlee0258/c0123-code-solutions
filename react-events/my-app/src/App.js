import CustomButton from "./CustomButton.js";

function App() {
  return (
    <>
      <CustomButton text="I" color="green" onCustomClick={(text) => alert(`You clicked on the ${text} button!`)} />
      <CustomButton text="Fancy" color="red" onCustomClick={(text) => alert(`You clicked on the ${text} button!`)} />
      <CustomButton text="React" color="lightblue" onCustomClick={(text) => alert(`You clicked on the ${text} button!`)} />
    </>
  );
}

export default App;
