import { useState } from "react";

export default function RegistrationFormControlled({ text }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('username state:', username);
    console.log('password state:', password);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        Username: <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password: <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">
        {text}
      </button>
    </form>
  );
}
