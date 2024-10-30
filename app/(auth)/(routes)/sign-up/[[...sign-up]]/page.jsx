import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <section className="justify-center place-content-center flex p-10 h-screen bg-slate-100">
        <div className="flex place-content-center justify-center p-10 bg-gray-900 rounded-lg md:h-fit">
          <SignUp />
        </div>
      </section>
    </>
  );
}
