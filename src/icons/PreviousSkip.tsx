import * as React from "react";

function PreviousSkip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 19 19" {...props}>
      <title>{"ic_skip_previous_48px"}</title>
      <g fill="none" fillRule="evenodd">
        <path
          stroke="currentColor"
          strokeWidth={2}
          d="M-678-58H802v196H-678z"
        />
        <path
          d="M0 0h3.167v19H0V0zm5.542 9.5L19 19V0L5.542 9.5z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default PreviousSkip;
