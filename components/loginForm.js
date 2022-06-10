export default function LoginForm({ onLogin }) {

  async function handleSubmit(event) {
      event.preventDefault();
      onLogin(event.target.username.value, event.target.password.value);
  }

  return (
      <form onSubmit={handleSubmit} className="w-2/4 mx-auto mt-5">
          <fieldset autoComplete='off' className="grid grid-cols-1 grid-rows-5 p-5 text-center border-2 border-solid rounded-md bg-emerald-300 border-emerald-400">
              <label htmlFor="username" className="order-1 h-min">USER NAME</label>
              <input name="username" className="order-2 pl-5 h-min" placeholder="User Name"/>
              <label htmlFor="password" className="order-3 h-min">PASSWORD</label>
              <input type="password" name="password" className="order-4 pl-5 h-min" placeholder="password"/>
              <button className="order-5 py-2 mt-3 rounded-md bg-emerald-500">SIGN IN</button>
          </fieldset>
      </form>
  );
}