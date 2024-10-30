import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="h-[cal(100vh-96px)] flex items-center justify-center">
        <SignUp />
    </div>

  ) 
}