import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

// import { isAuthenticated } from "@/lib/actions/auth.action";

async function RootLayout( { children }: { children: React.ReactNode }) {
  // const isUserAuthenticated = await isAuthenticated();
  // if (!isUserAuthenticated) redirect("/sign-in");


  return (
    <div className="root-layout">
    <nav>
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="logo" height={80} width={140} />
      </Link>
    </nav>

    {children}
  </div>
  )
}

export default RootLayout