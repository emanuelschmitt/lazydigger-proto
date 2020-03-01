import * as React from "react";

function NextSkip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 19 19" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          stroke="currentColor"
          strokeWidth={2}
          d="M-796-58H684v196H-796z"
        />
        <path
          d="M0 19l13.458-9.5L0 0v19zM15.833 0v19H19V0h-3.167z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default NextSkip;
