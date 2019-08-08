import React from "react";

export function Container({ fluid, children, className }) {
  return <div style={{flex:"1 0 auto"}} className={`container${fluid ? "-fluid" : ""}${className ? " " + className : "" }`}>{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
