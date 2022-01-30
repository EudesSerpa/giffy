import React from "react";

import { ArrowAltCircleUp } from "@emotion-icons/fa-regular";
import { Link } from "./style.js";

export default function ButtonBackToTop() {
  return (
    <Link href="#" title="Back to top">
      <ArrowAltCircleUp aria-hidden="true" />
    </Link>
  );
}
