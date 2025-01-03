import {fetchUserAttributes } from 'aws-amplify/auth'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'

function App() {
  const { user, signOut } = useAuthenticator(context => [context.user])
  const [userRole, setUserRole] =
    useState<'GLOBAL_ADMIN' | 'TENANT_ADMIN' | null>(null)

  useEffect(() => {
    async function checkUserRole() {
      try {
        const attributes = await fetchUserAttributes()
        const groups = (attributes['cognito:groups'] || []) as string[]

        if (groups.includes('global_admins')) setUserRole('GLOBAL_ADMIN')
        else if (groups.includes('tenant_admins')) setUserRole('TENANT_ADMIN')
        else setUserRole(null)
      } catch (error) {
        console.error('Error checking user role:', error)
        setUserRole(null)
      }
    }

    if (user) checkUserRole()
  }, [user])

  // If user is not logged in
  if (!user) return <div>Please sign in</div>

  // Show a quick loading UI if we haven't resolved the role yet
  if (userRole === null) return <div>Loading...</div>

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>Your role: {userRole}</p>
      {userRole === 'GLOBAL_ADMIN' && <div>Global Admin Dashboard</div>}
      {userRole === 'TENANT_ADMIN' && <div>Tenant Admin Dashboard</div>}
      {userRole === null && <div>Tenant Admin Dashboard</div>}
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default App
