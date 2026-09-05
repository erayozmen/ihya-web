import type { SVGProps } from "react";

// lucide-react dropped brand/logo icons (Instagram, Facebook, ...) for
// licensing reasons, so these are hand-drawn minimal marks instead.

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.6 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.4 4.3c-2.44 0-4.11 1.49-4.11 4.22v2.32H7.72v2.96h2.57V21z" />
    </svg>
  );
}

export function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M4.4 2.6c-.3.3-.4.7-.4 1.2v16.4c0 .5.1.9.4 1.2l.2.1L14 12.2v-.4L4.6 2.5z" fill="#00d2ff" />
      <path d="M17.2 15.4 14 12.2v-.4l3.2-3.2 3.9 2.2c1.1.6 1.1 1.6 0 2.2z" fill="#ffce00" />
      <path d="M17.2 15.4 14 12l-9.6 9.6c.4.4.9.4 1.6.1z" fill="#ff3a44" />
      <path d="M17.2 8.6 6.2 2.3c-.7-.3-1.2-.3-1.6.1L14 12z" fill="#00f076" />
    </svg>
  );
}
