import { LandingScripts } from "../landing-scripts";
import "../lppt/lppt.css";

export default function PtLayout({
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
