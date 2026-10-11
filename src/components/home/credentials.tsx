import { Icon } from "@/components/ui/icon";
import { Highlight } from "@/components/ui/section-heading";
import { credentials } from "@/content/home";

export function Credentials() {
  return (
    <section className="bg-lavender py-14 lg:py-16" aria-labelledby="credentials-heading">
      <div className="container-x">
        <div className="text-center">
          <p className="eyebrow">A Credible &amp; Trusted Partner</p>
          <h2 id="credentials-heading" className="mx-auto mt-3 max-w-3xl text-[26px] leading-tight font-extrabold text-ink sm:text-[30px]">
            <Highlight
              text="Assured by Leading Banks, Global Standards and Government Recognition"
              highlight="Leading Banks, Global Standards"
            />
          </h2>
        </div>
        <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {credentials.map((c) => (
            <li key={c.title} className="flex flex-col items-center rounded-2xl border border-line bg-white px-3 py-5 text-center">
              <span className={`grid size-12 place-items-center rounded-full bg-surface ${c.tone}`}>
                <Icon name={c.icon} className="size-6" />
              </span>
              <p className="mt-3 text-[13.5px] leading-tight font-extrabold text-ink">{c.title}</p>
              <p className="mt-1 text-[11.5px] leading-4 text-muted">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
