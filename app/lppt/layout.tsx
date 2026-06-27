import { LandingScripts } from "../landing-scripts";
import "./lppt.css";

export default function LpptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <LandingScripts />
    </>
  );
}
