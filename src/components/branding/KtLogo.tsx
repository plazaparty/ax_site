/** KT wordmark — black letterforms + KT red accent stroke (#ED2024). */
export default function KtLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 76 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="#000000"
        d="M4 5h2.8v7.2l6.4-7.2h3.3l-6.6 7.3 6.9 7.9h-3.4l-5.6-6.4V21H4V5z"
      />
      <path
        fill="#000000"
        d="M27.6 7.9h-5.2V5.4h5.2V3h2.7v2.4h4.6v2.5h-4.6v9.8c0 1 .4 1.5 1.4 1.5.7 0 1.4-.2 2-.5v2.5c-.9.3-1.8.5-2.9.5-2.4 0-3.2-1.2-3.2-3.7V7.9z"
      />
      <path
        d="M1.5 19.2c8.8-4.4 17.6-6.6 26.2-6.1 7.2.5 14.2 2.2 20.6 4.8"
        stroke="#ED2024"
        strokeWidth="2.35"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
