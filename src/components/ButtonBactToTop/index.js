import React, { useCallback, useEffect, useState } from "react";

import { ArrowAltCircleUp } from "@emotion-icons/fa-regular";
import { Button } from "./style.js";

export default function ButtonBackToTop() {
  const [showButton, setShowButton] = useState(false);

  const onScroll = useCallback(() => {
    if (!showButton && window.scrollY > 400) {
      setShowButton(true);
    } else if (showButton && window.scrollY <= 400) {
      setShowButton(false);
    }
  }, [showButton]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const onClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      title="Back to top"
      onClick={onClickToTop}
      style={{ display: showButton ? "grid" : "none" }}
    >
      <ArrowAltCircleUp aria-hidden="true" />
    </Button>
  );
}
