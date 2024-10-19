import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
      {/* Add other provider options here like Google or Facebook */}
    </div>
  );
}
