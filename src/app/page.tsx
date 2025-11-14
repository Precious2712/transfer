import { SignupField } from "@/components/signup/SignupField";

import { AnimatedBackground } from "@/components/FormField/animated-background";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative min-h-screen flex flex-col justify-center items-center px-4">
        <SignupField />
        <Link href="/login-page">
          <p className="text-center underline underline-offset-2 text-blue-500 mt-7">
            Already have an account? Login!!
          </p>
        </Link>
      </main>
    </>
  );
}
