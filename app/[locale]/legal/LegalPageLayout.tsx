import React from "react";
import { PageHeading } from "../../components/PageHeading";
import { LegalPageContent, LegalSection } from "./content";

function SectionBlock({ section }: { section: LegalSection }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
      {section.paragraphs?.map((p, idx) => (
        <p key={idx} className="mb-3 leading-relaxed text-gray-800">
          {p}
        </p>
      ))}
      {section.list && (
        <ul className="list-disc space-y-2 pl-5 text-gray-800">
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function LegalPageLayout({ content }: { content: LegalPageContent }) {
  return (
    <main className="bg-white">
      <PageHeading title={content.title} />
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              {content.title} — {content.updated}
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-800">{content.intro}</p>
          </div>
          <div className="space-y-6 md:space-y-8">
            {content.sections.map((section) => (
              <SectionBlock key={section.title} section={section} />
            ))}
          </div>
        </div>
      </section>
      <div className="h-20 md:h-24" aria-hidden="true" />
    </main>
  );
}
