import { useState } from "react";
// import FontAwesomeIcon from 'FontAwesomeIcon';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  function validate(value) {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
    return 'A password is required!';
    }
  }

  const error = validate(password);

  return (
    <label> Password
      <div>
        <input type="password"
               required
               minLength={8}
               onChange={(e) => setPassword(e.target.value)}
               value={ password }
               />
        {<div>{error}</div>}
        {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-xmark" /> */}
      </div>
    </label>
  );
}
