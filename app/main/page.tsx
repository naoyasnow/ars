import WorkCard from "@/components/WorkCard";
import WorkDetail from "@/components/WorkDetail";
import { works } from "@/components/works";


export default function Main() {
  return (
    <main className="relative min-h-screen">
      
        {/* Main background */}

        <img
            src="/images/museum.png"
            alt=""
            className="fixed inset-0 -z-10 h-full w-full object-cover object-[38%_center]"
        />

        {/* Header */}

        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-white/80 px-10 py-6 backdrop-blur">
            <a
            href="#top"
            className="text-sm tracking-[0.3em] transition-opacity duration-300 hover:opacity-50"
            >
                アリス
            </a>

            <nav className="flex gap-6 text-xs tracking-widest">
                <a
                href="#about"
                className="transition-opacity duration-300 hover:opacity-50"
                >
                    ABOUT
                </a>
                <a
                href="#works"
                className="transition-opacity duration-300 hover:opacity-50"
                >
                    WORKS
                </a>
                <a
                href="#contact"
                className="transition-opacity duration-300 hover:opacity-50"
                >
                    CONTACT
                </a>
            </nav>

        </header>

        {/* Hero */}

        <section
        id="top"
        className="relative flex min-h-[calc(100vh-80px)] items-center justify-center"
        >

        <div className="text-center">
            <p className="text-6xl font-bold tracking-[0.2em] md:text-8xl">
                アリス
            </p>

            <p className="mt-18 text-lg tracking-[0.25em] md:text-2xl">
                まだ見ぬ景色に出会う窓。
            </p>

            <p className="mt-24 text-sm tracking-[0.3em] text-gray-700 px-[clamp(24px,calc(24px+10vw),120px)] md:text-[16px]">
                社会・組織・個人。さまざまなスコープで<br/>
                「人」や「つながり」を探求する。<br/>
                学び・遊びながら、新しい視点を共有し、<br/>
                もっと多様な景色を心の中に見つける。<br/>
                それが、アリスです。<br/><br/>
                一緒に、"窓"をひとつ 開けてみましょう。
            </p>
          
        </div>

        <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[12px] tracking-[0.4em] text-gray-100 md:text-[18px]"
        >
            SCROLL
        </a>

        </section>

        {/* About */}

        <section
        id="about"
        className="scroll-mt-17 flex min-h-screen items-center border-t border-black/20"
        >
        <div className="mx-auto w-full max-w-3xl px-16">
            <div className="max-w-2xl -translate-x-[4vw] px-8">
                <p className="mb-6 text-xs tracking-[0.35em] text-gray-500">
                ABOUT
                </p>

                <h2 className="text-3xl font-bold tracking-wide">
                Thinking about people, ideas, and the spaces between them.
                </h2>

                <p className="mt-8 text-sm leading-8 text-gray-600">
                    Advertising and HR are my current fields.
                    I&apos;m interested in how people connect, how ideas move,
                    and how small changes can create meaningful experiences.
                </p>
            </div>
        </div>
        </section>

        {/* Works */}

        <section
        id="works"
        className="relative scroll-mt-17 min-h-screen overflow-hidden border-t border-black/10 py-32"
        >

            {/* Gallery background */}
            <img
                src="/images/gallery.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Gallery content */}

            <div className="relative z-10">
                
                {/* Gallery title */}

                <div className="mx-auto w-full max-w-6xl px-8">
                    <p className="mt-48 mb-24 text-sm tracking-[0.35em] text-gray-100">
                    WORKS
                    </p>
                </div>

                {/* Horizontal gallery */}

                <div className="flex flex-1 items-center px-8">
                <div className="gallery-scroll flex gap-12 overflow-x-auto pb-8">

                    {works.map((work) => (
                        <WorkCard
                            className="w-[70vw] shrink-0 md:w-[38vw]"
                            key={work.number}
                            number={work.number}
                            title={work.title}
                            description={work.description}
                            image={work.image}
                            href={work.href}
                        />
                    ))}

                </div>
                </div>

            </div>

        </section>

        {/* Work Details */}

        {works.map((work) => (
            <WorkDetail
                key={work.id}
                id={work.id}
                number={work.number}
                title={work.title}
                description={work.description}
                image={work.image}
                year={work.year}
                role={work.role}
                category={work.category}
                thought={work.thought}
            />
        ))}

        {/* Contact */}

        <section
        id="contact"
        className="scroll-mt-17 flex min-h-screen items-center justify-center border-t border-black/10 px-8"
        >
        <div className="text-center">
        <p className="text-lg tracking-[0.0em] text-gray-600 md:text-2xl font-dm-mono">
            naoyasnow
        </p>

        <h2 className="mt-6 text-3xl font-light tracking-wide">
            {/*Let&apos;s talk. */}
        </h2>

        <p className="mt-4 text-sm text-gray-600">
            {/*Feel free to get in touch.*/}
        </p>

        <a
            href="https://naoyasnow.github.io/hub/"
            className="mt-8 inline-block border border-black px-6 py-2 text-sm tracking-[0.3em] transition hover:bg-black hover:text-white md:text-md"
        >
            CONTACT
        </a>
        </div>
        </section>


    </main>
  );
}