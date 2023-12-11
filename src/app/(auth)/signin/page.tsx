import SignInForm from '@/components/form/SignInForm'
import Navbar from '@/app/components/navbar'

const signin = () => {
  return (
    <div className="bg-custom-light-purple min-h-screen">
      <Navbar />
      <SignInForm />
    </div>
  )
}

export default signin