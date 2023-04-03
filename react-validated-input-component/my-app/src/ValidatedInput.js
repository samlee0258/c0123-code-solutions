import { useState } from "react";

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);

  const validate = (e) => {
    const trimmedValue = e.target.value;
    setPassword(trimmedValue);

    if (trimmedValue === '') {
      setValid(false);
    } else if (trimmedValue.length < 8) {
      setValid(false);
    } else {
      setValid(true);
    }
  }

  return (
    <div>
      <label for="password"> Password
        <div>
          <input id="password"
                 type="password"
                 required
                 onChange={validate}
                 value={ password }
                 className={
                  password === '' || password.length < 8
                  ? "form-control is-invalid"
                  : "form-control is-valid"
                 }
                />
          {password === "" && (
            <div className="invalid-feedback">
              A password is required
            </div>
          )}
          {password !== "" && password.length < 8 && (
            <div className="invalid-feedback">
              Password must be at least 8 characters long
            </div>
          )}
          {valid && (
            <div className="valid-feedback">Looks good!</div>
          )}
        </div>
      </label>
    </div>
  );
}
