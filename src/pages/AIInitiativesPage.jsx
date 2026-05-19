import FadeUp from '../components/FadeUp'

export default function AIInitiativesPage() {
  return (
    <section id="ai-initiatives" className="page-section">
      <div className="section-eyebrow">AI Initiatives</div>
      <h2>Frameworks &amp; Resources<br />Powering My AI Practice</h2>
      <p className="ai-initiatives-intro">
        As an active AI practitioner, I curate structured frameworks and comprehensive reference guides that
        inform how I integrate AI across the engineering lifecycle — from prompt design to tool selection.
        These two resources capture that thinking.
      </p>

      <div className="ai-initiatives-grid">

        <FadeUp style={{ '--i': 0 }} className="ai-doc-card">
          <div className="ai-doc-header">
            <div className="ai-doc-tag">Framework · Prompt Engineering</div>
            <h3>Prompt Engineering Framework</h3>
            <p>
              A structured methodology for designing effective prompts — covering chain-of-thought reasoning,
              role prompting, few-shot patterns, and enterprise-grade prompt design principles for production AI workflows.
            </p>
          </div>
          <div className="ai-doc-embed">
            <iframe
              src="Prompt_Framework.pdf"
              title="Prompt Engineering Framework"
              loading="lazy"
            />
          </div>
        </FadeUp>

        <FadeUp style={{ '--i': 1 }} className="ai-doc-card">
          <div className="ai-doc-header">
            <div className="ai-doc-tag">Reference Guide · Tools &amp; Extensions</div>
            <h3>AI Extensions &amp; Tools Reference Guide</h3>
            <p>
              A comprehensive reference covering 30+ AI browser extensions, productivity tools, coding assistants,
              and agentic frameworks — catalogued by platform, key features, best usage, and target audience.
            </p>
          </div>
          <div className="ai-doc-embed">
            <iframe
              src="Extensions_Tools.pdf"
              title="AI Extensions &amp; Tools Reference Guide"
              loading="lazy"
            />
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
