import AuthButton from "@/components/AuthButton";
import AppRoot from "@/components/appView/AppRoot";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="w-full">
      <nav className="w-full flex border-b border-b-foreground/10 justify-end px-3 py-2 text-sm ">
        <AuthButton />
      </nav>
      <AppRoot />
    </div>
  );
}
