import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import HomePage from "@/components/pages/home";

export default async function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
