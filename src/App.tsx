import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen bg-indigo-200 flex justify-center items-center w-full">
        <form>
          <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-slate-600">Sign Up</h1>
              <div>
                <label htmlFor="name" className="block mb-1 text-slate-600 font-semibold">Full Name</label>
                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-slate-600 font-semibold">Email</label>
                <input type="email" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 text-slate-600 font-semibold">Password</label>
                <input type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
              </div>
            </div>
            <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
