import Image from "next/image";

/**
 * Original illustration: figures gathered in a ring around the GRI mark.
 * Purely decorative and deliberately abstract, so it does not imply that it
 * depicts real GRI participants or events.
 */
const fills = ["#fcfaf4", "#e6bc63", "#e39a7d", "#2f7058"];

export function GatheringMotif({ className = "" }: { className?: string }) {
  const count = 12;
  const R = 196;
  return (
    <div className={`relative aspect-square w-full ${className}`} aria-hidden="true">
      <svg viewBox="0 0 520 520" className="absolute inset-0 size-full">
        <circle cx="260" cy="260" r="236" fill="none" stroke="#fcfaf4" strokeOpacity="0.12" strokeWidth="1" />
        <g className="turn-slow">
          <circle cx="260" cy="260" r="148" fill="none" stroke="#e6bc63" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="2 9" strokeLinecap="round" />
        </g>
        {Array.from({ length: count }).map((_, i) => {
          const angle = (360 / count) * i;
          const fill = fills[i % fills.length];
          return (
            <g key={i} transform={`translate(260 260) rotate(${angle}) translate(0 -${R})`}>
              <circle cx="0" cy="-34" r="15" fill={fill} />
              <path d="M -31 16 A 31 31 0 0 1 31 16 Z" fill={fill} />
            </g>
          );
        })}
        <circle cx="260" cy="260" r="112" fill="#fcfaf4" />
        <circle cx="260" cy="260" r="112" fill="none" stroke="#e6bc63" strokeWidth="3" />
      </svg>
      <div className="absolute left-1/2 top-1/2 w-[27%] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/gri-logo.png"
          alt=""
          width={257}
          height={202}
          sizes="140px"
          className="h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}
