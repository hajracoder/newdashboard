"use client"

import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please fill all fields!")
      return
    }

    // Dummy credentials
    if (email === "sara@system.com" && password === "123456") {
      toast.success("Login successful!")
      router.push("/dashboard")
    } else {
      toast.error("Invalid email or password!")
    }
  }

  return (
    <div className="flex items-center justify-center  p-4">
      <div className="w-full max-w-md p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h2>
        
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
          <button
            onClick={handleLogin}
            className="w-full py-3  bg-primary 
    text-primary-foreground 
    font-medium 
    rounded-lg 
    hover:opacity-90  transition-all "
          >
            Login
          </button>
        </div>

       <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-300">
  Don&apos;t have an account?{" "}
  <Link href="/signup" className=" bg-primary 
    text-primary-foreground 
    font-medium 
    rounded-lg 
    hover:opacity-90  hover:underline">
    Sign up
  </Link>
</p>
      </div>
    </div>
  )
}
