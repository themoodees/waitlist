import { LandingScripts } from "../landing-scripts";
import "./lp02.css";

export default function Lp02Layout({
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
