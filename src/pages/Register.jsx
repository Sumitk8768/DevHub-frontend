import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router'

import api from '../services/api'
import { Auth } from '../context/AuthContext'

const Register = () => {
  const navigate = useNavigate()

  const {
    setIsAuthenticated,
    setLoggedInUser,
  } = useContext(Auth)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/auth/register", data)

      setIsAuthenticated(true)
      setLoggedInUser(response.data.user)

      reset()

      navigate("/dashboard")
    } catch (error) {
      console.log("Register Error", error)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      
      <div
        className="w-full max-w-md rounded-[28px] border p-8"
        style={{
          background: "rgba(15,23,42,0.65)",
          borderColor: "var(--border-color)",
        }}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3">
          
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--accent) font-bold text-black">
            D
          </div>

          <h1 className="text-3xl font-bold text-(--text-primary)">
            DevHub
          </h1>
        </div>

        {/* HEADING */}
        <div className="mt-8">
          
          <h2 className="text-4xl font-bold leading-tight text-(--text-primary)">
            Create account
          </h2>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
        >
          {/* NAME */}
          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-(--text-secondary)">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-3.5 text-(--text-primary) outline-none placeholder:text-(--text-secondary)"
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-(--text-secondary)">
              Email Address
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-3.5 text-(--text-primary) outline-none placeholder:text-(--text-secondary)"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-(--text-secondary)">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full rounded-2xl border border-(--border-color) bg-[#060816] px-5 py-3.5 text-(--text-primary) outline-none placeholder:text-(--text-secondary)"
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            disabled={isSubmitting}
            className="mt-2 w-full rounded-2xl bg-(--accent) py-3.5 text-base font-bold text-[#060816] transition-all hover:bg-(--accent-hover)"
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* LOGIN */}
        <p className="mt-8 text-center text-sm text-(--text-secondary)">
          Already have an account?{" "}
          
          <Link
            to="/login"
            className="font-semibold text-(--accent)"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  )
}

export default Register