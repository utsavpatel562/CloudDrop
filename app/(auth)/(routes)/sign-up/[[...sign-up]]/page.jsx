import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

// Clerk Sign-up
export default function Page() {
  return (
    <>
      <div className="flex justify-between p-5 bg-zinc-900">
        <Link href={"/"}>
          <button className="bg-green-600 p-2 pr-5 pl-5 rounded-full">
            Back to home
          </button>
        </Link>
        <Link href={"/"}>
          <button className="bg-green-600 p-2 pr-5 pl-5 rounded-full">
            Register Now
          </button>
        </Link>
      </div>
      <section className="justify-center place-content-center flex p-10 h-screen bg-slate-950">
        <SignUp />
      </section>
    </>
  );
}
