import { Link } from "react-router-dom";

import Budaya1 from "../components/budaya/budaya1";
import Budaya2 from "../components/budaya/budaya2";
import Budaya3 from "../components/budaya/budaya3";
import Budaya4 from "../components/budaya/budaya4";
import Budaya5 from "../components/budaya/budaya5";
import { HtmlHead } from "../components/HtmlHead";

export default function Budaya() {
  return (
    <>
      <HtmlHead
        title="Budaya"
        decription="[insert page description]"
        link="/"
      />
      <main className="overflow-hidden">
        <Budaya1 />
        <Budaya2 />
        <Budaya3 />
        <Budaya4 />
        <Budaya5 />
      </main>
    </>
  );
}
