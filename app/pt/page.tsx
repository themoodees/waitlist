import { readFileSync } from "fs";
import { join } from "path";
import { LandingScripts } from "../landing-scripts";

function parseLandingHtml() {
  const html = readFileSync(join(process.cwd(), "index-pt.html"), "utf-8");
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyWithoutScript =
    bodyMatch?.[1]?.replace(/<script[\s\S]*?<\/script>/gi, "") ?? "";

  return {
    styles: styleMatch?.[1] ?? "",
    body: bodyWithoutScript,
  };
}

export default function PtPage() {
  const { styles, body } = parseLandingHtml();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <LandingScripts />
    </>
  );
}
