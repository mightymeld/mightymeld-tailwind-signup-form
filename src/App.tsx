import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  return (
    <section className="h-screen bg-sky-200 flex justify-center items-center w-full">
      <form>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-slate-600">Sign Up</h1>
            <div>
              <label htmlFor="first name" className="block my-1 text-slate-600 font-semibold text-sm">First Name</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-sky-50 px-4 py-2 outline-none rounded-md w-full" />
            </div>
            <div>
              <label htmlFor="last name" className="block my-1 text-slate-600 font-semibold text-sm">Last Name</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-sky-50 px-4 py-2 outline-none rounded-md w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block my-1 text-slate-600 font-semibold text-sm">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-sky-50 px-4 py-2 outline-none rounded-md w-full" />
            </div>
            <div>
              <label htmlFor="password" className="block my-1 text-slate-600 font-semibold text-sm">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-sky-50 px-4 py-2 outline-none rounded-md w-full" />
            </div>
          </div>
          <button onClick={submitForm} className="mt-4 w-full bg-sky-600 hover:bg-sky-700 text-sky-50 py-2 rounded-md text-base tracking-wide ">Signup</button>
        </div>
      </form>
    </section>
  );
}

export default App;
