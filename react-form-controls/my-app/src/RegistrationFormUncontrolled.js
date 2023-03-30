
export default function RegistrationFormUncontrolled({text}) {

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    console.log('state:',formJson);
  }

  return (
    <form method="" onSubmit={ handleSubmit }>
      <label>
        Username: <input name="username" type="text" required={true}/>
      </label>
      <label>
        Password: <input name="password" type="password" />
      </label>
      <button type="submit">
        {text}
      </button>
    </form>
  );
}
