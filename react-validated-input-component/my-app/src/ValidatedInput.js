import { useState } from "react";

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  let valid = false;

  const validate = (e) => {
    setPassword(e.target.value);

    if (e.target.value === '') {
      valid = false;
    } else if (e.target.value.length < 8) {
      valid = false;
    } else {
      valid = true;
    }
    return valid;
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
