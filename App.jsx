const highlights = [
  {
    title: 'Operational awareness',
    text: 'Visualise dynamic traffic states, mission conditions, and scenario evolution for autonomous and mixed operations.',
  },
  {
    title: 'Safety and risk analysis',
    text: 'Present conflict cases, risk indicators, mitigation logic, and experiment evidence in a structured research format.',
  },
  {
    title: 'Experiment-driven validation',
    text: 'Bring together system videos, screenshots, scenario outputs, and validation results for technical communication.',
  },
]

const mediaItems = [
  {
    type: 'Video',
    title: 'System overview video',
    text: 'Replace this block with a YouTube embed, MP4 demonstration, or simulation replay.',
  },
  {
    type: 'Image',
    title: 'Interface and dashboard view',
    text: 'Use this area for interface screenshots, traffic visualisation, or result dashboards.',
  },
  {
    type: 'Video',
    title: 'Experiment replay',
    text: 'Show one representative scenario with short explanatory text and a clear title.',
  },
  {
    type: 'Image',
    title: 'Result figures and diagrams',
    text: 'Display experimental figures, architecture diagrams, setup photos, or analytical outputs.',
  },
]

const caseStudies = [
  {
    category: 'Case study',
    title: 'Digital twin scenario replay',
    text: 'Replay representative AURD scenarios with supporting explanation of objectives, assumptions, outputs, and observed system behaviour.',
  },
  {
    category: 'Safety analysis',
    title: 'Conflict detection and resolution evaluation',
    text: 'Demonstrate how the platform identifies conflict conditions and supports response analysis under operational constraints.',
  },
  {
    category: 'Operations research',
    title: 'Airspace and mission performance assessment',
    text: 'Show how traffic density, route structure, and scenario settings influence system-level performance and capacity.',
  },
  {
    category: 'Methodology',
    title: 'Integrated risk assessment workflow',
    text: 'Explain how air and ground risk indicators, scenario context, and decision support outputs can be presented together.',
  },
]

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  )
}

function MediaPlaceholder({ label }) {
  return (
    <div className="media-placeholder">
      <div className="media-placeholder-inner">
        <div className="placeholder-icon">{label === 'Video' ? '▶' : '🖼'}</div>
        <p>{label === 'Video' ? 'Replace with video content' : 'Replace with image content'}</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Cranfield University</span>
          <div className="topbar-links">
            <a href="#overview">Overview</a>
            <a href="#experiments">Experiments</a>
            <a href="#outputs">Outputs</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <div>
            <p className="header-tag">Research platform</p>
            <h1>AURD System</h1>
          </div>
          <nav className="main-nav">
            <a href="#overview">About</a>
            <a href="#media">Media</a>
            <a href="#experiments">Case studies</a>
            <a href="#outputs">Outputs</a>
            <a href="#contact">Get in touch</a>
          </nav>
          <a className="button primary" href="#contact">
            Request information
          </a>
        </div>
      </header>

      <main>
        <section id="overview" className="hero-section">
          <div className="container hero-grid">
            <div>
              <div className="breadcrumb">Home / Research / AURD System</div>
              <p className="eyebrow">ATM/UTM Research and Development Environment (AURD)</p>
              <h2 className="hero-title">A formal research showcase for the Cranfield AURD system</h2>
              <p className="hero-text">
                This website template is designed to present the AURD system in a style closer to a university
                research centre or laboratory page. It supports videos, images, experiment summaries, system
                background, and project outputs in a clear and academically credible format.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#media">
                  Explore media
                </a>
                <a className="button secondary" href="#experiments">
                  View case studies
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-card">
                  <span className="stat-label">Research platform</span>
                  <strong>AURD</strong>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Primary content</span>
                  <strong>Video, image, experiment</strong>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Audience</span>
                  <strong>Academic and industrial</strong>
                </div>
              </div>
            </div>

            <div className="feature-panel">
              <div className="feature-panel-header">Featured demonstration</div>
              <div className="feature-video-area">
                <div>
                  <div className="feature-video-icon">▶</div>
                  <p>Replace with a system video, live demonstration, or scenario replay</p>
                </div>
              </div>
              <div className="feature-notes">
                <div className="note-card">
                  <h3>Suggested content</h3>
                  <p>Overview of the platform, research motivation, and visual demonstration of the interface or scenario workflow.</p>
                </div>
                <div className="note-card">
                  <h3>Use cases</h3>
                  <p>Consortium briefings, supervisor presentations, public engagement, and research dissemination.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <SectionTitle
              eyebrow="Research context"
              title="Position the AURD system as a serious academic and experimental platform"
              description="This section is intended for a concise and institutionally aligned explanation of the system, its research purpose, and its relevance to autonomous aviation, digital twin validation, safety analysis, and operational decision support."
            />
            <div className="card-grid three-up">
              {highlights.map((item) => (
                <article className="info-card" key={item.title}>
                  <div className="icon-box">■</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="media" className="content-section muted-section">
          <div className="container">
            <SectionTitle
              eyebrow="Media and demonstrations"
              title="A structured place for video, image, and interface-based communication"
              description="Use this gallery for platform walkthroughs, simulation videos, dashboard screenshots, experimental results, and architecture figures."
            />
            <div className="card-grid two-up">
              {mediaItems.map((item) => (
                <article className="media-card" key={item.title}>
                  <MediaPlaceholder label={item.type} />
                  <div className="media-card-body">
                    <span className="badge">{item.type}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiments" className="content-section">
          <div className="container">
            <SectionTitle
              eyebrow="Case studies"
              title="Present experiments in the tone of a university project or centre page"
              description="The cards below are intended for concise summaries of experimental aims, methods, data sources, and outcomes."
            />
            <div className="card-grid two-up">
              {caseStudies.map((item) => (
                <article className="case-card" key={item.title}>
                  <p className="case-category">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href="#contact" className="inline-link">
                    Read case study →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="outputs" className="content-section dark-section">
          <div className="container split-grid">
            <div>
              <SectionTitle
                eyebrow="Outputs and engagement"
                title="Add publications, partners, facilities, and project outputs"
                description="This section is suitable for recent papers, technical reports, project summaries, partner logos, facilities, datasets, or related laboratory pages."
              />
              <div className="output-list">
                <div className="output-item">Journal papers and conference outputs</div>
                <div className="output-item">Related projects, demonstrators, and case studies</div>
                <div className="output-item">Laboratory facilities and platform capabilities</div>
                <div className="output-item">Industrial and academic collaboration links</div>
              </div>
            </div>
            <div className="side-panel">
              <div className="panel-block">
                <h3>Partners</h3>
                <p>Insert partner identities, research collaborators, or consortium affiliations here.</p>
              </div>
              <div className="panel-block">
                <h3>Facilities</h3>
                <p>Summarise laboratories, simulation environments, or test infrastructure related to AURD.</p>
              </div>
              <div className="panel-block">
                <h3>Latest output</h3>
                <p>Highlight one recent publication, experiment video, or technical demonstration.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section">
          <div className="container split-grid contact-grid">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="Prepared for real institutional content"
                description="The structure is set up so you can replace placeholders with official text, real video embeds, system screenshots, experiment descriptions, partner information, and publication links."
              />
              <div className="contact-notes">
                <div className="note-card light">
                  <h3>Email enquiry</h3>
                  <p>Add a project or lab contact email for collaboration, media requests, or technical enquiries.</p>
                </div>
                <div className="note-card light">
                  <h3>Location</h3>
                  <p>Use this area for Cranfield campus, laboratory location, or centre affiliation details.</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <h3>Contact form</h3>
              <p>Replace with a real form or institutional contact route.</p>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email address" />
              <input type="text" placeholder="Institution" />
              <textarea rows="6" placeholder="Message" />
              <button className="button primary" type="button">
                Submit enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Cranfield AURD System. Website prototype for research communication.</p>
          <div className="footer-links">
            <a href="#overview">About</a>
            <a href="#experiments">Case studies</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
