import * as React from "react";

function PlayButtonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 64 64" {...props}>
      <g transform="translate(-688 -902)" fill="none" fillRule="evenodd">
        <circle
          stroke="currentColor"
          strokeWidth={2}
          cx={720}
          cy={934}
          r={31}
        />
        <path
          stroke="currentColor"
          strokeWidth={2}
          d="M-26 867h1480v196H-26z"
        />
        <g transform="translate(689 903)">
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M23.814 18.136v26.508l21.05-13.254z"
          />
          {/* <path d="M9 8h46v46H9z" /> */}
          <circle
            stroke="currentColor"
            strokeWidth={2}
            cx={31}
            cy={31}
            r={31}
          />
        </g>
      </g>
    </svg>
  );
}

export default PlayButtonIcon;
