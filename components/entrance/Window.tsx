"use client";

export default function Window() {
  return (
    <div className="relative">

      {/* copy */}
      <div className="pointer-events-none absolute left-[+1vh] top-[22vh] -rotate-[60deg] origin-left whitespace-nowrap">
        <span className="text-s font-medium tracking-[0.2em] text-black">
          まだ見ぬ景色に出会う窓。
        </span>
      </div>

      {/* window */}
      <img
        src="/images/tri_window_test.png"
        alt="Enter"
        className="h-[30vh] w-auto max-w-[50vw] cursor-pointer object-contain"
        onClick={() => {
          window.location.href = "/main";
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