import RegistrationFormUncontrolled from './RegistrationFormUncontrolled.js';
import RegistrationFormControlled from './RegistrationFormControlled.js';

function App() {
  return (
    <div>
      <RegistrationFormUncontrolled text="Sign Up"/>
      <RegistrationFormControlled text="Sign Up"/>
    </div>
  );
}

export default App;
