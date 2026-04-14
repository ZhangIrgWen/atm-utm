import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  PlayCircle,
  Image as ImageIcon,
  FlaskConical,
  ShieldCheck,
  Radar,
  Database,
  Building2,
  Users,
  FileText,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const accent = "#009DC3";
const dark = "#0F172A";

const highlights = [
  {
    icon: Radar,
    title: "Operational awareness",
    text: "Visualise dynamic traffic states, mission conditions, and scenario evolution for autonomous and mixed operations.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and risk analysis",
    text: "Present conflict cases, risk indicators, mitigation logic, and experiment evidence in a structured research format.",
  },
  {
    icon: Database,
    title: "Experiment-driven validation",
    text: "Bring together system videos, screenshots, scenario outputs, and validation results for technical communication.",
  },
];

const experiments = [
  {
    title: "Digital twin scenario replay",
    category: "Case study",
    summary:
      "Replay representative AURD scenarios with supporting explanation of objectives, assumptions, outputs, and observed system behaviour.",
  },
  {
    title: "Conflict detection and resolution evaluation",
    category: "Safety analysis",
    summary:
      "Demonstrate how the platform identifies conflict conditions and supports response analysis under operational constraints.",
  },
  {
    title: "Airspace and mission performance assessment",
    category: "Operations research",
    summary:
      "Show how traffic density, route structure, and scenario settings influence system-level performance and capacity.",
  },
  {
    title: "Integrated risk assessment workflow",
    category: "Methodology",
    summary:
      "Explain how air and ground risk indicators, scenario context, and decision support outputs can be presented together.",
  },
];

const mediaItems = [
  {
    id: 1,
    type: "video",
    title: "System overview video",
    text: "A concise introduction to the AURD platform and its research purpose.",
  },
  {
    id: 2,
    type: "image",
    title: "Interface and dashboard view",
    text: "A place for screenshots of the system interface, state monitoring, or analytics outputs.",
  },
  {
    id: 3,
    type: "video",
    title: "Experiment replay",
    text: "A recorded demonstration of one scenario, experiment, or digital twin result.",
  },
  {
    id: 4,
    type: "image",
    title: "Result figures and diagrams",
    text: "A gallery for experimental figures, workflow diagrams, or setup illustrations.",
  },
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}

function MediaPlaceholder({ type }) {
  return (
    <div className="flex h-56 items-center justify-center border border-slate-200 bg-slate-50">
      <div className="text-center">
        {type === "video" ? (
          <PlayCircle className="mx-auto h-10 w-10 text-slate-500" />
        ) : (
          <ImageIcon className="mx-auto h-10 w-10 text-slate-500" />
        )}
        <p className="mt-3 text-sm text-slate-500">
          Replace with a {type === "video" ? "video embed or MP4" : "figure, screenshot, or photo"}
        </p>
      </div>
    </div>
  );
}

export default function CranfieldStyleAURDWebsite() {
  const [filter, setFilter] = useState("all");

  const filteredMedia = useMemo(() => {
    if (filter === "all") return mediaItems;
    return mediaItems.filter((item) => item.type === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="border-b border-slate-200 bg-slate-50 text-sm text-slate-600">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" style={{ color: accent }} />
            <span>Cranfield University</span>
          </div>
          <div className="hidden gap-6 md:flex">
            <a href="#overview" className="hover:text-slate-900">Overview</a>
            <a href="#research" className="hover:text-slate-900">Research</a>
            <a href="#experiments" className="hover:text-slate-900">Experiments</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </div>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Research platform</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">AURD System</h1>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            <a href="#overview" className="hover:text-slate-900">About</a>
            <a href="#media" className="hover:text-slate-900">Media</a>
            <a href="#experiments" className="hover:text-slate-900">Case studies</a>
            <a href="#publications" className="hover:text-slate-900">Outputs</a>
            <a href="#contact" className="hover:text-slate-900">Get in touch</a>
          </nav>
          <Button className="rounded-none px-5" style={{ backgroundColor: accent }}>
            Request information
          </Button>
        </div>
      </header>

      <main>
        <section id="overview" className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
                <span>Home</span>
                <ChevronRight className="h-4 w-4" />
                <span>Research</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-slate-700">AURD System</span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Autonomous UAS research and demonstration</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                A formal research showcase for the Cranfield AURD system
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                This site template is designed to present the AURD system in a style closer to a university research centre or laboratory page. It supports videos, images, experiment summaries, system background, and project outputs in a clear and academically credible format.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="rounded-none px-6" style={{ backgroundColor: accent }}>
                  Explore media
                </Button>
                <Button variant="outline" className="rounded-none px-6 border-slate-300">
                  View case studies
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Research platform", "AURD"],
                  ["Primary content", "Video, image, experiment"],
                  ["Audience", "Academic and industrial"],
                ].map(([label, value]) => (
                  <div key={label} className="border-l-4 border-sky-600 bg-slate-50 px-4 py-4">
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex items-stretch"
            >
              <div className="w-full border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700">
                  Featured demonstration
                </div>
                <div className="p-5">
                  <div className="flex h-[320px] items-center justify-center border border-slate-200 bg-slate-100 text-center">
                    <div>
                      <PlayCircle className="mx-auto h-12 w-12 text-slate-500" />
                      <p className="mt-3 text-sm text-slate-500">
                        Replace with a system video, live demonstration, or scenario replay
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="border border-slate-200 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Suggested content</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Overview of the platform, research motivation, and visual demonstration of the interface or scenario workflow.
                      </p>
                    </div>
                    <div className="border border-slate-200 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Use cases</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Consortium briefings, supervisor presentations, public engagement, and research dissemination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="research" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeader
            eyebrow="Research context"
            title="Position the AURD system as a serious academic and experimental platform"
            description="This section is intended for a concise and institutionally aligned explanation of the system, its research purpose, and its relevance to autonomous aviation, digital twin validation, safety analysis, and operational decision support."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <Card className="h-full rounded-none border-slate-200 shadow-none">
                    <CardContent className="p-7">
                      <div className="flex h-11 w-11 items-center justify-center border border-slate-200 bg-slate-50">
                        <Icon className="h-5 w-5" style={{ color: accent }} />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="media" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader
                eyebrow="Media and demonstrations"
                title="A structured place for video, image, and interface-based communication"
                description="Use this gallery for platform walkthroughs, simulation videos, dashboard screenshots, experimental results, and architecture figures."
              />
              <div className="flex flex-wrap gap-2">
                {[
                  ["All", "all"],
                  ["Videos", "video"],
                  ["Images", "image"],
                ].map(([label, value]) => (
                  <Button
                    key={value}
                    variant={filter === value ? "default" : "outline"}
                    className="rounded-none px-4"
                    style={filter === value ? { backgroundColor: dark } : {}}
                    onClick={() => setFilter(value)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {filteredMedia.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <Card className="overflow-hidden rounded-none border-slate-200 shadow-none">
                    <CardContent className="p-0">
                      <MediaPlaceholder type={item.type} />
                      <div className="p-6">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="rounded-none border-slate-300 capitalize">
                            {item.type}
                          </Badge>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experiments" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeader
            eyebrow="Case studies"
            title="Present experiments in the tone of a university project or centre page"
            description="The cards below are intended for concise summaries of experimental aims, methods, data sources, and outcomes. They are deliberately more formal and publication-oriented than product-style feature blocks."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experiments.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Card className="h-full rounded-none border-slate-200 shadow-none">
                  <CardContent className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{item.category}</p>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h3>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50">
                        <FlaskConical className="h-5 w-5" style={{ color: accent }} />
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-600">{item.summary}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-700">
                      <span>Read case study</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="publications" className="border-y border-slate-200 bg-slate-900 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#7DD3FC" }}>
                Outputs and engagement
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Add publications, partners, facilities, and project outputs
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                This section is suitable for recent papers, technical reports, project summaries, partner logos, facilities, datasets, or related laboratory pages.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Journal papers and conference outputs",
                  "Related projects, demonstrators, and case studies",
                  "Laboratory facilities and platform capabilities",
                  "Industrial and academic collaboration links",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 border border-white/10 px-4 py-4 text-sm text-slate-200">
                    <FileText className="h-4 w-4" style={{ color: "#7DD3FC" }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">Suggested right-hand panel</p>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div className="border border-white/10 p-4">
                  <p className="font-medium text-white">Partners</p>
                  <p className="mt-2 leading-7">Insert partner identities, research collaborators, or consortium affiliations here.</p>
                </div>
                <div className="border border-white/10 p-4">
                  <p className="font-medium text-white">Facilities</p>
                  <p className="mt-2 leading-7">Summarise laboratories, simulation environments, or test infrastructure related to AURD.</p>
                </div>
                <div className="border border-white/10 p-4">
                  <p className="font-medium text-white">Latest output</p>
                  <p className="mt-2 leading-7">Highlight one recent publication, experiment video, or technical demonstration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title="Prepared for real institutional content"
                description="The structure is now closer to a Cranfield-style research page. You can next replace the placeholders with official text, real video embeds, system screenshots, experiment descriptions, partner information, and publication links."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border border-slate-200 p-5">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" style={{ color: accent }} />
                    <p className="font-medium text-slate-900">Email enquiry</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Add a project or lab contact email for collaboration, media requests, or technical enquiries.</p>
                </div>
                <div className="border border-slate-200 p-5">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" style={{ color: accent }} />
                    <p className="font-medium text-slate-900">Location</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Use this area for Cranfield campus, laboratory location, or centre affiliation details.</p>
                </div>
              </div>
            </div>

            <Card className="rounded-none border-slate-200 shadow-none">
              <CardContent className="p-7">
                <h3 className="text-2xl font-semibold text-slate-950">Contact form</h3>
                <p className="mt-2 text-sm text-slate-500">Replace with a real form or institutional contact route.</p>
                <div className="mt-6 space-y-4">
                  <Input placeholder="Name" className="h-12 rounded-none" />
                  <Input placeholder="Email address" className="h-12 rounded-none" />
                  <Input placeholder="Institution" className="h-12 rounded-none" />
                  <textarea
                    placeholder="Message"
                    className="min-h-[140px] w-full rounded-none border border-slate-200 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-slate-400"
                  />
                  <Button className="w-full rounded-none py-6" style={{ backgroundColor: accent }}>
                    Submit enquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Cranfield AURD System. Website prototype for research communication.</p>
          <div className="flex gap-5">
            <a href="#overview" className="hover:text-slate-900">About</a>
            <a href="#experiments" className="hover:text-slate-900">Case studies</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
