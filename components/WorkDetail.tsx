import type { Work } from "@/components/works"

type WorkDetailProps = Work

export default function WorkDetail({
    id,
    number,
    title,
    description,
    image,
    year,
    role,
    category,
    thought,
}: WorkDetailProps) {
    return (

        <section
            id={id}
            className="relative min-h-screen border-t border-black/10 px-8 py-40"
        >

             {/* Gallery wall */}
            <img
                src="/ars/images/gallery_wall.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />

              {/* Detail content */}
            <div className="relative z-10 mx-auto max-w-6xl">

                <p className="text-8xl font-light tracking-tight text-gray-100">
                    {number}
                </p>

                <p className="mt-8 text-[12px] tracking-[0.4em] text-gray-100">
                    WORK / {title.toUpperCase()}
                </p>

                <h2 className="mt-8 text-5xl font-light tracking-wide">
                    {title}
                </h2>

                <p className="mt-6 max-w-xl text-[18px] leading-8 text-gray-800">
                    {description}
                </p>

                <div className="mt-16 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">

                    <div>
                        <p className="text-[10px] tracking-[0.4em] text-gray-100">
                            YEAR
                        </p>
                        <p className="mt-3 text-sm">
                            {year}
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] tracking-[0.4em] text-gray-100">
                            ROLE
                        </p>
                        <p className="mt-3 text-sm">
                            {role}
                        </p>
                    </div>

                    <div>
                        <p className="text-[10px] tracking-[0.4em] text-gray-100">
                            CATEGORY
                        </p>
                        <p className="mt-3 text-sm">
                            {category}
                        </p>
                    </div>

                </div>

                <div className="mt-24 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="h-auto w-full object-cover"
                    />
                </div>

                <div className="mt-24 px-8 grid gap-12 md:grid-cols-[1fr_5fr]">

                    <div>
                        <p className="text-[10px] tracking-[0.4em] text-gray-400">
                            THOUGHT
                        </p>
                    </div>

                    <div>
                        <p className="max-w-2xl text-md leading-8 text-white">
                            {thought}
                        </p>
                    </div>

                </div>

                <div className="mt-24 flex items-center justify-between border-t border-black/10 pt-8">

                    <a
                        href="#works"
                        className="text-[10px] tracking-[0.4em] text-gray-100 transition-opacity duration-300 hover:opacity-50"
                    >
                        ← BACK TO WORKS
                    </a>

                    <a
                        href="#contact"
                        className="text-[10px] tracking-[0.4em] text-gray-100 transition-opacity duration-300 hover:opacity-50"
                    >
                        CONTACT →
                    </a>

                </div>

            </div>

        </section>
    )
}