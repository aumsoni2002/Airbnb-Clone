"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

function SignOutLink() {
  const { toast } = useToast();
  const router = useRouter();

  const handleLogout = () => {
    toast({ description: "You have been signed out." });
    router.push("/"); // Manually redirect to the home page
  };
  return (
    <SignOutButton>
      <button className="w-full text-left" onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
}
export default SignOutLink;
