import Image from "next/image";
import { Playfair } from "next/font/google";

const playfair = Playfair({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header
        className={`bg-surface-sunken p-8 mb-8 w-full flex flex-col justify-center items-center static ${playfair.className}`}
      >
        <div className="w-full py-4">
          <Image
            className="sm:w-64 h-auto mx-auto w-32"
            src="/csl_logo_concept.svg"
            alt="Cornerstone Sober Living logo"
            width={791}
            height={884}
            priority
          />
        </div>
        <h1 className="flex flex-col items-center">
          <span className="text-4xl font-bold text-heading">CORNERSTONE</span>
          <span className="text-3xl font-semibold text-accent-ink">
            SOBER LIVING
          </span>
        </h1>
        <hr className="w-full border-t border-accent-ink my-4" />
        <p className="text-2xl flex sm:flex-col sm:items-center md:flex-row md:justify-between px-2 font-semibold">
          <span className="text-heading">FOUNDATION. </span>
          <span className="text-accent-ink">FAITH. </span>
          <span className="text-heading">FREEDOM.</span>
        </p>
      </header>
      <div className="flex flex-col flex-1 items-center justify-center font-sans bg-background xl:max-w-1/2 mx-auto">
        <main className="flex flex-1 w-full flex-col items-center justify-between pb-32 px-16 bg-background">
          <section className="bg-surface border border-border p-8 rounded-lg shadow-sm w-full max-w-3xl">
            <header className="text-2xl font-bold text-heading mb-4">
              Built on a Sure Foundation
            </header>
            <blockquote className="bg-surface-gold border-l-4 border-accent text-lg italic text-center my-4 py-4 px-6 text-heading">
              &ldquo;...built on the foundation of the apostles and prophets,
              Christ Jesus himself being the cornerstone.&rdquo; <br /> —
              Ephesians 2:20, ESV
            </blockquote>
            At Cornerstone Sober Living, recovery isn&rsquo;t built on willpower
            alone. It&rsquo;s built on faith, community, and a foundation that
            holds. We walk alongside you as you rebuild, one day at a time.
          </section>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dictum diam in nisi sodales pellentesque. Nulla facilisi. In vitae
            justo dolor. Donec convallis, metus quis lacinia ultricies, urna leo
            dapibus metus, ullamcorper ultricies quam lectus vel diam.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Aliquam erat volutpat. Aliquam et
            sollicitudin orci, at sagittis mi. Pellentesque id tristique augue,
            eu mattis sem. Nulla ullamcorper tortor a elit hendrerit, sit amet
            semper eros blandit. Duis condimentum lacus et magna tempor, ut
            facilisis eros interdum. Nullam lacinia lorem non purus scelerisque,
            nec malesuada orci rhoncus. Sed at purus rutrum sapien maximus
            rhoncus. Fusce sagittis efficitur enim, id interdum eros consectetur
            efficitur. In hac habitasse platea dictumst.
          </p>
        </main>
      </div>
    </>
  );
}
