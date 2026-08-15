import type { Work } from "@/components/works"

type WorkCardProps = Pick<
    Work,
    "number" | "title" | "description" | "image" | "href"
>

export default function WorkCard({
    number,
    title,
    description,
    image,
    href,
}: WorkCardProps) {
    return (
        <a href={href} className="group block w-[70vw] shrink-0 md:w-[38vw] border-t border-white/50 py-8 transition duration-300 hover:translate-x-2 hover:opacity-70">

            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="aspect-[4/3] h-full w-full object-cover"
                />
            </div>

            <div className="mt-6">
                <p className="text-s tracking-[0.2em] text-gray-100">
                    {number}
                </p>

                <h2 className="mt-6 text-3xl font-light text-gray-100">
                    {title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                    {description}
                </p>
            </div>

        </a>
    )
}