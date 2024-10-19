'use client'

import { useState } from 'react'
import { UserRole } from '@prisma/client'
import DeveloperRegistration from './DeveloperRegistration'
import RecruiterRegistration from './RecruiterRegistration'

export default function RegisterForm() {
  const [userRole, setUserRole] = useState<UserRole | null>(null)

  return (
    <div>
      {!userRole ? (
        <div>
          <h2 className="text-xl mb-4">Are you a developer or a recruiter?</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => setUserRole(UserRole.DEVELOPER)}
          >
            Developer
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setUserRole(UserRole.RECRUITER)}
          >
            Recruiter
          </button>
        </div>
      ) : userRole === UserRole.DEVELOPER ? (
        <DeveloperRegistration />
      ) : (
        <RecruiterRegistration />
      )}
    </div>
  )
}