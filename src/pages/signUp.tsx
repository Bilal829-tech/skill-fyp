import { useState } from "react"
import { Link } from "react-router-dom"
function SignUp() {


    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        bio: "",
        message: "",
        error: ""
    })
    const [loading, setLoading] = useState(false)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        let finalValue = value

        setForm({
            ...form,
            [name]: finalValue
        })
        console.log(form)
    }

    const validatePassword = (password: string) => {
        if (!password) return "Password is required."
        if (password.length < 8) return "Password must be at least 8 characters."
        if (password.length > 20) return "Password must be 20 characters or less."
        if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter."
        if (!/[a-z]/.test(password)) return "Password must include at least one lowercase letter."
        if (!/[0-9]/.test(password)) return "Password must include at least one number."
        if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) return "Password must include at least one special character."
        if (/\s/.test(password)) return "Password cannot contain spaces."
        return ""
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const passwordError = validatePassword(form.password)
        if (passwordError) {
            setForm(prev => ({
                ...prev,
                error: passwordError,
                message: ""
            }))
            setLoading(false)
            return
        }

        if (form.password !== form.confirmPassword) {
            setForm(prev => ({
                ...prev,
                error: "Passwords do not match. Please try again.",
                message: ""
            }))
            setLoading(false)
            return
        }

        await new Promise((res) => setTimeout(res, 2000))
        setForm(prev => ({
            ...prev,
            message: "Password Match Form Submitted Successfully",
            error: ""
        }))
        console.log(form)
        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-linear-to-r from-white to-secondary/40 backdrop-blur-lg p-10">
            <div className="w-full  flex justify-center items-center my-20 ">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5 min-h-screen w-full md:w-md mx-auto p-6 bg-white border-2 border-primary/40 hover:border-secondary rounded-xl shadow-lg shadow-primary  ">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h1 className="text-gradient text-3xl font-bold">Sign Up</h1>
                            <p className="text-md text-gray-600">Create an account to get started</p>
                            Or{' '}
                            <Link
                                to="/Login"
                                className="font-md text-secondary hover:text-primary"
                            >
                                sign in to your existing account
                            </Link>
                        </div>
                                <div className="flex flex-col md:flex-row gap-2 border-0">
                            <div className="flex flex-col sm:w-full md:w-1/2 ">
                                <label htmlFor="firstname">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstname"
                                    autoComplete="given-name"
                                    required
                                    placeholder="Enter your first name"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    className="border-2 border-primary/40 hover:border-secondary rounded-xl p-1.5"
                                />
                            </div>
                            <div className="flex flex-col sm:w-full md:w-1/2 ">
                                <label htmlFor="lastname">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastname"
                                    autoComplete="family-name"
                                    required
                                    placeholder="Enter your last name"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    className="border-2 border-primary/40 hover:border-secondary rounded-xl p-1.5"
                                />
                            </div>
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
                            autoComplete="new-password"
                            required
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                            className="border-2 border-primary/40 hover:border-secondary rounded-xl p-1.5"
                        />
                        <p className="text-sm text-gray-600 mt-1">
                            Password must be 8-20 characters, and include uppercase, lowercase, number, and special character.
                        </p>

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            autoComplete="new-password"
                            required
                            placeholder="Confirm your password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="border-2 border-primary/40 hover:border-secondary rounded-xl p-1.5"
                        />

                        <label htmlFor="bio">Bio</label>
                        <textarea
                            name="bio"
                            id="bio"
                            rows={3}
                            required
                            placeholder="Enter your bio"
                            value={form.bio}
                            onChange={handleChange}
                            className="h-30 border-2 border-primary/40 hover:border-secondary rounded-xl p-1.5"
                        />

                        <button type="submit" disabled={loading} className="btn-gradient disabled:opacity-50 disabled:cursor-not-allowed">
                            {loading ? "Submitting..." : "Sign Up"}
                        </button>
                        {
                            form.message ? <p className="text-green-500">{form.message}</p> :
                                form.error && <p className="text-red-500">{form.error}</p>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp