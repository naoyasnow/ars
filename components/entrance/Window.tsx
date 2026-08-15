"use client";

import { useRouter } from "next/navigation";

export default function Window() {
  const router = useRouter();

  return (
    <div className="relative">

      {/* copy */}
      <div className="pointer-events-none absolute left-[-3vh] top-[20vh] -rotate-[60deg] origin-left whitespace-nowrap">
        <span className="text-s font-medium tracking-[0.2em] text-black">
          　まだ見ぬ景色に出会う窓。
        </span>
      </div>

      {/* window */}
      <img
        src="/ars/images/tri_window_test.png"
        alt="Enter"
        className="h-[30vh] w-auto max-w-[50vw] cursor-pointer object-contain"
        onClick={() => {
          router.push("/main");
        }}
      />

      {/* ARS */}
      <div className="pointer-events-none absolute left-1/2 top-27/40 -translate-x-1/2 -translate-y-1/2">
        <span className="text-3xl font-bold tracking-[0.2em] text-white">
          
        </span>
      </div>

    </div>
  );
}