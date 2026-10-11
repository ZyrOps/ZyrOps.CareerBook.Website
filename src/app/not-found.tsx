import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="dot-grid">
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">This page could not be found</h1>
        <p className="mt-4 max-w-md text-body">The page you are looking for may have moved. Explore the platform or talk to our team.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" arrow>
            Back to Home
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
