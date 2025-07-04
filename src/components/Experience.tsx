"use client";
// import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Accordion  from "@radix-ui/react-accordion";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Tabtrips",
    time: "April 2025 – Present",
    description:
      "Currently interning at Tabtrips, where I contribute to building scalable web applications using Next.js, Node.js, Express, and MongoDB. My work includes API development, frontend UI design, and integrating third-party services.",
  },
  // Add more experiences here if needed
];

export function Experience() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-6">My Work Experience</h2>
      <Accordion.Root
        type="multiple"
        className="space-y-4"
      >
        {experiences.map((exp, i) => (
          <Accordion.Item
            key={i}
            value={`item-${i}`}
            className="overflow-hidden rounded-md border border-gray-300 dark:border-gray-700"
          >
            <Accordion.Header>
              <Accordion.Trigger
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 text-left text-lg font-medium bg-gray-100 dark:bg-neutral-800"
                )}
              >
                <div>
                  <div>{exp.title}</div>
                  <div className="text-sm text-gray-500">
                    {exp.company} • {exp.time}
                  </div>
                </div>
                <ChevronDown
                  className="transition-transform duration-300 ease-in-out"
                  aria-hidden
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-black">
              {exp.description}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
