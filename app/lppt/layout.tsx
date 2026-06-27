import { LandingScripts } from "../landing-scripts";
import "../lp02/lp02.css";

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
