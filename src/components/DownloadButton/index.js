import React from "react";
import Button from "@mui/joy/Button";

export default function DownloadButton({ link, children, ...props }) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <Button {...props} onClick={handleClick}>
      {children}
    </Button>
  );
}
