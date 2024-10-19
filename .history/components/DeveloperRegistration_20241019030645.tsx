'use client'

import { useState } from 'react'

export default function DeveloperRegistration() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registrationType, setRegistrationType] = useState<'github' | 'email' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement registration logic
    console.log('Registering developer with:', { email, password, registrationType })
  }

  const handleGithubLogin = () => {
    // TODO: Implement GitHub OAuth login
    console.log('Logging in with GitHub')
  }

  if (!registrationType) {
    return (
      <div>
        <h2 className="text-xl mb-4">Choose registration method:</h2>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded mr-2"
          onClick={() => setRegistrationType('github')}
        >
          Register with GitHub
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setRegistrationType('email')}
        >
          Register with Email
        </button>
      </div>
    )
  }

  if (registrationType === 'github') {
    return (
      <div>
        <h2 className="text-xl mb-4">GitHub Registration</h2>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded"
          onClick={handleGithubLogin}
        >
          Login with GitHub
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl mb-4">Developer Registration</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  )
}