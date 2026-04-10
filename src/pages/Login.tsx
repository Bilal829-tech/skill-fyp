import { useState } from "react"
import { Link } from "react-router-dom" 

function Login (){

  const [form, setForm] = useState({
    email: "",
    password: "",
    error: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((res) => setTimeout(res, 2000))
    setForm({
      ...form,
      message: "Login successful",
      error: ""
    })
    setLoading(false)
  }

  return (
<>
<div className="min-h-screen bg-linear-to-r from-white to-secondary/40 backdrop-blur-lg p-10">
  <div className="flex flex-col justify-center items-center mx-auto my-20">
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 w-full md:w-md mx-auto px-6 py-10 bg-white border-2 border-primary/40 hover:border-secondary rounded-xl shadow-lg shadow-primary  ">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-gradient text-3xl font-bold">Login</h1>
          <p className="text-md text-gray-600">Login to your account</p>
          Or{' '}
          <Link
            to="/signUp"
            className="font-md text-secondary hover:text-primary"
          >
            sign up for a new account
          </Link>
        </div>
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="border-2 border-primary/40 hover:border-secondary rounded-xl p-1.5"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="current-password"
          required
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          className="border-2 border-primary/40 hover:border-secondary rounded-xl p-1.5"
        />
        {form.error && <p className="text-red-500">{form.error}</p>}
        {form.message && <p className="text-green-500">{form.message}</p>}
        <button
          type="submit"
          disabled={loading}
          className="btn-gradient"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </form> 
    
  </div>
</div>
</>
  )
}

export default Login