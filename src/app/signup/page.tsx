"use client"

import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      toast.error("Please fill all fields!")
      return
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!")
      return
    }

    // Dummy credentials check
    if (email === "sara@system.com" && password === "123456") {
      toast.success("Signup successful!")
      localStorage.setItem("userEmail", email)
      localStorage.setItem("userPassword", password)
      router.push("/dashboard")
    } else {
      toast.error("Please use email: sara@system.com and password: 123456")
    }
  }

  return (
    <div className="flex items-center justify-center p-4 min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Create Account</h2>

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            onClick={handleSignup}
            className="w-full py-3  bg-primary 
    text-primary-foreground 
    font-medium 
    
    hover:opacity-90  rounded-xl hover:bg-orange-600 transition-all "
          >
            Sign Up
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className=" 
    
    font-medium 
    rounded-lg 
    hover:opacity-90 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
