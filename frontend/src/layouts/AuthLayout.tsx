import AnimatedBackground from "@/components/AnimationBackground";

import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <AnimatedBackground />

      <Outlet />
    </div>
  );
};

export default AuthLayout;
