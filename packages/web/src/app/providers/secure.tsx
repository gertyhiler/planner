import { SignIn } from "entity/auth";

import { auth } from "@/auth";

async function Secure({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) return <NotAuthorized />;

  return <>{children}</>;
}

function NotAuthorized() {
  return (
    <main className="bg-background h-svh max-w-[1440px] w-full flex flex-1 mx-auto">
      <div className="flex flex-1 flex-col items-center justify-center">
        <SignIn />
      </div>
    </main>
  );
}

export default Secure;
