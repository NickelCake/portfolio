export interface ProjectSection {
  title: string
  content: string
}

export interface ProjectData {
  title: string
  overview: string
  role: string
  timeline: string
  tools: string
  sections: ProjectSection[]
}

export const projectData: Record<string, ProjectData> = {
  'bonded-diamond': {
    title: 'Bonded Diamond',
    overview: 'Designing tools for diamond lifecycle transparency and trust',
    role: 'Product Design, UX Research',
    timeline: '12 weeks',
    tools: 'Figma, User Interviews, Prototyping',
    sections: [
      {
        title: '1. Problem / Challenge',
        content: `
          <p>Bonded Diamond is building a platform to track diamonds through their entire lifecycle—from mine to market—creating transparency and trust in an industry historically plagued by ethical concerns and fraud.</p>
          <p>The users were diamond industry professionals (jewelers, traders, manufacturers) who needed to verify diamond provenance and authenticity, as well as end consumers who wanted assurance about their purchases.</p>
          <p>The challenge was twofold: the platform's user flows were confusing, making it difficult for professionals to complete verification tasks efficiently, and trust indicators weren't clear enough to give consumers confidence in the system.</p>
        `,
      },
      {
        title: '2. Role & Responsibilities',
        content: `
          <p><strong>My role:</strong> I led product design and user research, working directly with the founding team and engineering. I conducted user interviews with industry professionals, designed and tested prototypes, and collaborated closely with developers to ensure implementation matched the design intent.</p>
          <p><strong>Timeline:</strong> 12 weeks from research through final designs</p>
          <p><strong>Tools:</strong> Figma for design and prototyping, user interviews for research, collaborative workshops for stakeholder alignment</p>
        `,
      },
      {
        title: '3. Research & Insights',
        content: `
          <p>I conducted 15 user interviews with jewelers and diamond traders to understand their current verification processes and pain points. I also analyzed existing user behavior data to identify where people were getting stuck in the platform.</p>
          <h4>Key Insights</h4>
          <ul>
            <li><strong>Information overload:</strong> Users were presented with too much technical data upfront without context, causing decision paralysis when trying to verify diamonds</li>
            <li><strong>Missing trust signals:</strong> The verification results didn't clearly communicate what users should trust and why—the system showed data but didn't help users interpret it</li>
            <li><strong>Workflow fragmentation:</strong> Users had to jump between multiple screens to complete a single verification task, breaking their mental model of the process</li>
          </ul>
          <div class="highlight-box">
            <p>"I need to know if I can trust this diamond immediately. Right now I'm swimming in numbers but I don't know what they mean for my business." — Interview participant, jewelry store owner</p>
          </div>
        `,
      },
      {
        title: '4. Design Goals / Constraints',
        content: `
          <p>The main design goals were to:</p>
          <ul>
            <li>Simplify the verification workflow from 6 disconnected steps to a clear, linear process</li>
            <li>Surface trust indicators prominently—users should understand verification status at a glance</li>
            <li>Progressive disclosure of technical details—show simple results first, with the ability to drill deeper</li>
          </ul>
          <p><strong>Constraints:</strong> We were working within existing blockchain infrastructure, so the underlying data structure couldn't change. We also had a tight 3-month deadline to ship improvements before a major industry conference. Brand guidelines required maintaining the company's premium, trustworthy aesthetic.</p>
        `,
      },
      {
        title: '5. Ideation & Iteration',
        content: `
          <p>I started by mapping out the current verification journey and identifying friction points. My first design concept used a wizard-style flow with step indicators, but early testing revealed users wanted to see more context before committing to a multi-step process.</p>
          <p><strong>Iteration 1:</strong> I tested a single-page layout with collapsible sections. Users appreciated seeing the full picture but found the page overwhelming and struggled to know where to focus first.</p>
          <p><strong>Key learning:</strong> We needed a middle ground—not a fragmented multi-page flow, but also not everything at once.</p>
          <p><strong>Iteration 2:</strong> I designed a progressive card-based interface where the verification result appeared immediately as a clear status badge (Verified, Warning, Failed), followed by a summary of key attributes. Technical details were available through expandable sections for users who wanted to investigate further.</p>
          <p>This approach tested much better. Users said: "I can make a quick decision, but if something seems off, I can dig in to understand why."</p>
          <p><strong>Specific design decision:</strong> We moved from a list layout to a visual card-based feed because users said they wanted context and trust signals before tapping through to details. The visual hierarchy of cards made it easier to scan multiple diamonds quickly.</p>
        `,
      },
      {
        title: '6. Final Solution',
        content: `
          <p>The final design streamlined the verification process into a single, scannable view with clear trust indicators:</p>
          <ul>
            <li><strong>Immediate verification status</strong> — Color-coded badges (green for verified, yellow for warnings, red for failed) appeared at the top of each diamond record</li>
            <li><strong>Progressive information disclosure</strong> — Essential information (carat, cut, origin) displayed by default, with technical blockchain data available through "View Details"</li>
            <li><strong>Simplified workflow</strong> — Reduced verification from 6 separate screens to 1 unified view, with optional deep-dive paths for power users</li>
          </ul>
          <div class="highlight-box">
            <p>How it solves the original problem: Users can now make trust-based decisions in seconds instead of minutes, while still having access to comprehensive data when needed. The system communicates not just "here's data" but "here's what this data means for you."</p>
          </div>
        `,
      },
      {
        title: '7. Outcomes / Learnings',
        content: `
          <p><strong>Impact:</strong> Post-launch, users completed diamond verification tasks 40% faster on average. Customer support tickets related to "how do I verify" dropped by 65%. Qualitative feedback showed users felt more confident in the platform's verification results.</p>
          <p><strong>What I'd measure next:</strong> I'd track task success rate (percentage of users who successfully complete verification without errors or support) and time-to-trust (how long it takes new users to feel confident making decisions based on verification results).</p>
          <p><strong>What I learned:</strong> Trust isn't just about showing data—it's about helping users interpret that data in their context. Also, progressive disclosure is powerful, but only when the initial view gives users enough to make a decision. If you hide too much, you just create a different kind of friction.</p>
        `,
      },
    ],
  },
  'corner': {
    title: 'Corner',
    overview: 'Designing a vibe-based social map to discover places through people, not ratings.',
    role: 'UX/UI Design, Product Thinking, Interaction Design',
    timeline: '24-hour designathon (Stanford We the Design Kids)',
    tools: 'Figma, Rapid Ideation, Competitive Analysis',
    sections: [
      {
        title: '1. Problem / Challenge',
        content: `
          <p>Finding good places to go with friends shouldn’t feel like doing research. Most discovery tools like Google Maps and Yelp optimize for ratings, reviews, and popularity—but those metrics strip away context.</p>
          <p>In practice, a 4.5‑star restaurant might be perfect for a fitness guru but completely wrong for a busy student. People are left asking:</p>
          <ul>
            <li>Will <em>I</em> actually like this place?</li>
            <li>Is this my vibe—or just popular?</li>
            <li>Where do people like me actually go?</li>
          </ul>
          <p>Corner’s existing experience largely served Type A planners—the friends who naturally take initiative and drive decisions. But social plans rarely involve a single decision‑maker. To increase engagement, Corner needed a way to actively include Type B participants—the more passive, reactive, or mood‑driven friends—without killing spontaneity.</p>
          <p><strong>Core challenge:</strong> Most tools assume one planner. Real groups don’t work that way.</p>
          <p>We framed our “How might we” as: <strong>How might we design an inclusive, engaging planning experience that actively involves both planners and participants without forcing rigid structure?</strong></p>
        `,
      },
      {
        title: '2. Context, Team & Role',
        content: `
          <p>This project was completed during a 24‑hour designathon at Stanford We the Design Kids.</p>
          <p><strong>Context:</strong> High‑pressure, short‑timeline sprint focused on rethinking place discovery in a more human, social, and personal way.</p>
          <p><strong>Team:</strong> 3 designers collaborating closely across research, concepting, and UI.</p>
          <p><strong>My role:</strong> UX/UI Design, product thinking, and interaction design. I helped define the product thesis, co‑led research synthesis, and designed core flows and UI in Figma.</p>
          <p><strong>Outcome:</strong> The project was awarded <strong>1st place</strong> out of 150+ participants and was presented directly to Corner’s CEO.</p>
        `,
      },
      {
        title: '3. Research & Key Insights',
        content: `
          <p>Within the 24‑hour window, we ran rapid research to understand how people actually make plans with friends.</p>
          <p><strong>We explored:</strong></p>
          <ul>
            <li>How often people hang out with friends and how those plans start.</li>
            <li>Who usually takes initiative versus who “goes with the flow.”</li>
            <li>How social media, hype, and mood influence decisions.</li>
          </ul>
          <h4>What we learned</h4>
          <ul>
            <li>&gt;50% of people decide where to go based on how they feel in the moment.</li>
            <li>&gt;90% lean on places popularized by social media more than personal exploration.</li>
            <li>~50% switch between “planner” and “follower” depending on mood and group.</li>
            <li>~50% are flexible and willing to change plans last‑minute.</li>
          </ul>
          <div class="highlight-box">
            <p>“We send places throughout the week, but decide on the weekend based on how we’re feeling.”</p>
          </div>
          <p><strong>Key reframe:</strong> People aren’t strictly planners or followers—they oscillate depending on group context. The problem isn’t “How do we help planners plan better?” but “How do we support shared, fluid decision‑making?”</p>
        `,
      },
      {
        title: '4. Concept: Corner',
        content: `
          <p>We reframed Corner as a social, vibe‑based map that reflects <em>your</em> world—not the internet’s.</p>
          <p><strong>Corner helps people:</strong></p>
          <ul>
            <li>Import places they love from anywhere—Google Maps, Instagram, TikTok.</li>
            <li>Discover spots through friends and taste‑aligned people, not anonymous ratings.</li>
            <li>Understand the story and vibe behind a place, not just its score.</li>
          </ul>
          <p>Instead of asking, “What’s top‑rated nearby?” Corner answers: <strong>“Where would someone like me go tonight?”</strong></p>
          <p>This led to a core interaction model built around lightweight, game‑like group decision‑making—so plans feel collaborative, fast, and fun.</p>
        `,
      },
      {
        title: '5. Design Goals',
        content: `
          <p>Guided by our research, we defined three design goals:</p>
          <ul>
            <li><strong>Work for both planners and followers.</strong> Type A users should be able to lead without carrying all the cognitive load; Type B users should be able to participate meaningfully without pressure.</li>
            <li><strong>Encourage discovery driven by mood and curiosity, not just popularity.</strong> Surfacing places based on people, vibes, and social overlap rather than pure ratings.</li>
            <li><strong>Create a mechanism for active participation that still feels lightweight.</strong> Group decisions should be fast, satisfying, and inclusive—not bogged down by endless scrolling or voting fatigue.</li>
          </ul>
          <p>These principles set the foundation for Corner’s gamified decision experience.</p>
        `,
      },
      {
        title: '6. Solution & Design Decisions',
        content: `
          <p>We translated our insights into three core design principles that shaped the product experience.</p>
          <h4>1. Live participation</h4>
          <p>Corner introduces a live “session” mode where friends make decisions together in real time:</p>
          <ul>
            <li>Everyone joins the same session from a link.</li>
            <li>Suggested places appear as a shared, swipeable stack.</li>
            <li>Reactions and votes are visible so decisions feel collaborative, not dictated.</li>
          </ul>
          <p>This enables instant alignment, reduces back‑and‑forth in group chats, and supports spontaneous plans.</p>
          <h4>2. Freedom of choice</h4>
          <p>The interaction model respects different social roles:</p>
          <ul>
            <li>Type A users can propose places directly from their saved spots or social feeds.</li>
            <li>Type B users don’t have to suggest anything—they can still participate through swipes, reactions, and quick votes.</li>
          </ul>
          <p>This keeps planning inclusive without forcing everyone into the “planner” role.</p>
          <h4>3. Structured boundaries</h4>
          <p>To avoid decision paralysis, Corner limits each live session to a focused set of options:</p>
          <ul>
            <li>A small, curated stack of places per session.</li>
            <li>Clear round‑based progress (for example, “3 places left to decide”).</li>
            <li>Lightweight gamification that nudges the group toward a decision.</li>
          </ul>
          <p>This balance of freedom and constraint keeps the experience playful while still getting the group somewhere concrete, fast.</p>
        `,
      },
      {
        title: '7. Outcomes, Next Steps & Reflection',
        content: `
          <p><strong>Outcome:</strong> Corner won <strong>1st place</strong> at the Stanford We the Design Kids designathon out of 150+ participants and was presented directly to the CEO. The concept was praised for strong product intuition, clear framing of group social dynamics, and polished execution under extreme time pressure.</p>
          <p><strong>If we had more time, we would:</strong></p>
          <ul>
            <li>Define and track feature‑level hypotheses and metrics like save‑to‑visit rate, repeat group sessions, and social‑overlap engagement.</li>
            <li>Deepen taste‑matching and trust calibration so users understand <em>why</em> they see certain recommendations.</li>
            <li>Design an experimentation framework to test variations in game mechanics and group flows.</li>
            <li>Explore long‑term social dynamics as friend groups change, people move, and tastes evolve.</li>
          </ul>
          <p><strong>Reflection:</strong> This project reinforced a lesson from Corner’s CEO—good design is a science, and great design happens when strong process meets strong taste. In 24 hours, we:</p>
          <ul>
            <li>Defined a clear product thesis rooted in real social behavior.</li>
            <li>Grounded decisions in quick but targeted research.</li>
            <li>Executed an end‑to‑end experience that felt personal, expressive, and human.</li>
          </ul>
          <p>Corner shows how reframing discovery around people instead of data can turn a familiar utility (maps) into something that actually reflects your world.</p>
        `,
      },
    ],
  },
  'switch-ai-urbiverse': {
    title: 'Switch AI – Urbiverse',
    overview:
      'Designing an AI-powered fleet management simulation dashboard to support confident EV charging and operations decisions.',
    role: 'UX/UI Designer, UX Researcher',
    timeline: '10 weeks',
    tools: 'Figma, User Interviews, Usability Testing',
    sections: [
      {
        title: '1. Problem / Challenge',
        content: `
          <p>Switch AI – Urbiverse is an AI-driven fleet management platform that helps enterprise teams plan, simulate, and optimize electric vehicle (EV) charging infrastructure. Its users—fleet managers, operations analysts, and sustainability leads—make high-stakes decisions involving infrastructure costs, charging coverage, and day-to-day operational efficiency.</p>
          <p>While Switch’s underlying algorithms produced robust optimization results, the UX made those insights difficult to understand and act on. Simulation outputs were presented in dense, technical views that assumed a high level of analytical expertise.</p>
          <p>Users struggled to answer fundamental questions like:</p>
          <ul>
            <li>Is this the best charging configuration for my fleet?</li>
            <li>What trade-offs am I making between cost, coverage, and charging time?</li>
            <li>Why should I trust this scenario over others?</li>
          </ul>
          <p>As a result, users lacked confidence in the platform—even when the system was technically correct.</p>
        `,
      },
      {
        title: '2. Role & Responsibilities',
        content: `
          <p>I led UX research and design for Switch’s new AI simulation platform, Urbiverse, working closely with a product manager and engineering partners.</p>
          <p><strong>My responsibilities included:</strong></p>
          <ul>
            <li>Conducting discovery interviews with fleet managers and operations stakeholders to understand real decision workflows.</li>
            <li>Mapping end-to-end journeys for simulation review, comparison, and final decision-making.</li>
            <li>Designing wireframes and high-fidelity UI for dashboards, scenario overviews, and simulation result pages.</li>
            <li>Iterating on the experience through usability testing and ongoing stakeholder feedback.</li>
          </ul>
          <p>The goal was to transform complex AI outputs into clear, actionable decision support that fleet teams could trust.</p>
        `,
      },
      {
        title: '3. Research & Insights',
        content: `
          <p>I conducted qualitative interviews with fleet operators and reviewed existing simulation workflows to understand how users interpreted results and made decisions.</p>
          <h4>Key insights</h4>
          <ul>
            <li><strong>Results without context felt meaningless.</strong> Users saw metrics like “zones,” “charging poles,” and “relocation cost,” but lacked guidance on whether those values were good or bad.</li>
            <li><strong>Users thought in scenarios, not charts.</strong> Fleet managers naturally framed decisions as comparisons—best case vs. worst case, cost-optimized vs. demand-optimized—but the interface emphasized raw outputs rather than scenario reasoning.</li>
            <li><strong>Confidence mattered as much as optimization.</strong> Because these decisions affected long-term infrastructure investments, users wanted reassurance, not just the “optimal” number. They needed summaries, explanations, and clarity—not only dense metrics.</li>
          </ul>
          <div class="highlight-box">
            <p>“I see the output, but I don’t know if I should trust it or what to do next.” — Fleet Manager</p>
          </div>
        `,
      },
      {
        title: '4. Design Goals & Constraints',
        content: `
          <p>Based on research, I defined clear design goals for the Urbiverse experience:</p>
          <ul>
            <li>Make AI-generated simulation results immediately understandable.</li>
            <li>Clearly communicate trade-offs between cost, coverage, and performance.</li>
            <li>Help users feel confident selecting a “best” scenario for their specific context.</li>
            <li>Reduce cognitive load when reviewing complex datasets and multiple simulations.</li>
          </ul>
          <p><strong>Constraints:</strong></p>
          <ul>
            <li>The platform needed to support multiple simulations and configurations side by side.</li>
            <li>Data structures and much of the terminology were fixed by backend models.</li>
            <li>The UI had to scale to enterprise-level complexity without overwhelming users.</li>
          </ul>
        `,
      },
      {
        title: '5. Ideation & Iteration',
        content: `
          <p><strong>Initial approach:</strong> Early designs prioritized transparency by exposing most metrics at once, assuming more data would build trust. Usability testing showed the opposite—users felt overwhelmed and unsure where to focus.</p>
          <p><strong>Iteration 1 – Scenario highlighting:</strong> I introduced a “Best Scenario Results” section that surfaced optimal configurations based on different goals (for example, cost efficiency vs. satisfied demand). This helped users orient themselves, but they still lacked a clear understanding of <em>why</em> a scenario was recommended.</p>
          <p><strong>Iteration 2 – Structured insight layers:</strong> I redesigned the results experience around a clearer hierarchy:</p>
          <ul>
            <li><strong>Top-line recommendation:</strong> A plain-language explanation of the best configuration and what it optimizes for.</li>
            <li><strong>Key metric cards:</strong> Zones, charging time, relocation cost, infrastructure cost, each with short labels explaining what “good” looks like.</li>
            <li><strong>Geospatial visualization:</strong> A map of charging pole distribution by zone to connect numbers to real-world geography.</li>
            <li><strong>Expandable detail:</strong> Deeper tables and charts for power users who wanted to validate assumptions.</li>
          </ul>
          <p>This layered approach let users move from insight → validation → exploration without getting lost.</p>
        `,
      },
      {
        title: '6. Final Solution',
        content: `
          <p>The final design reframes complex simulation outputs into an intuitive decision-making experience.</p>
          <ul>
            <li><strong>Best Scenario Summary:</strong> Prominent callouts explain the recommended configuration in simple, goal-aligned language so users understand “what the system thinks” and why.</li>
            <li><strong>Scannable metric cards:</strong> Key performance and cost indicators are presented as digestible cards, each with contextual descriptions rather than raw labels.</li>
            <li><strong>Geospatial visualization:</strong> An interactive map shows where charging infrastructure is placed across zones, helping users connect the proposal to real roads and depots.</li>
            <li><strong>Scenario management panel:</strong> Users can search, compare, and revisit past simulations, enabling iterative planning and collaboration across teams over time.</li>
          </ul>
          <p>Together, these elements help users move from opaque AI output to confident, well-explained decisions.</p>
        `,
      },
      {
        title: '7. Outcomes & Learnings',
        content: `
          <p><strong>Impact (in testing):</strong> Users were able to identify and explain the “best” scenario significantly faster. Stakeholders reported increased confidence in simulation results, and the new structure reduced back-and-forth clarification between operations and product teams.</p>
          <p><strong>What I’d measure next:</strong> Time to decision across multiple simulations, frequency of scenario comparison before final selection, and long-term trust metrics such as repeated scenario reuse.</p>
          <p><strong>What I learned:</strong> Designing for AI systems isn’t about showing more data—it’s about explaining <em>why</em> the system is right. For high-stakes infrastructure decisions, clarity, hierarchy, and reassurance are just as important as optimization. Thoughtful UX turns intelligence into confidence.</p>
        `,
      },
    ],
  },
  'switch': {
    title: 'SWITCH',
    overview: 'Redesigning financial tools for student loan borrowers',
    role: 'UX/UI Design, User Research',
    timeline: '10 weeks',
    tools: 'Figma, User Testing, Surveys',
    sections: [
      {
        title: '1. Problem / Challenge',
        content: `
          <p>SWITCH helps student loan borrowers understand and navigate repayment options—a notoriously complex landscape with multiple plans, eligibility requirements, and long-term financial implications.</p>
          <p>The users were primarily recent college graduates and current students trying to make informed decisions about their loans. Many felt overwhelmed by financial jargon and uncertain about which repayment plan was best for their situation.</p>
          <p>The problem: Students needed a clearer way to understand and compare loan repayment options. The existing interface presented information in dense tables and technical language that assumed financial literacy most users didn't have. Users were making critical financial decisions without truly understanding their options.</p>
        `,
      },
      {
        title: '2. Role & Responsibilities',
        content: `
          <p><strong>My role:</strong> I led UX research and design, working with a product manager and two engineers. I conducted user interviews and surveys with student loan borrowers, created wireframes and high-fidelity designs, and ran usability tests throughout the design process.</p>
          <p><strong>Timeline:</strong> 10 weeks from initial research to handoff</p>
          <p><strong>Tools:</strong> Figma for design and prototyping, user interviews and surveys for research, UserTesting.com for remote usability testing</p>
        `,
      },
      {
        title: '3. Research & Insights',
        content: `
          <p>I conducted 12 user interviews with current and recent borrowers, supplemented by a survey of 50+ users to validate findings at scale. I also analyzed support tickets to understand common confusion points.</p>
          <h4>Key Insights</h4>
          <ul>
            <li><strong>Comparison paralysis:</strong> Users struggled to compare repayment plans because they couldn't see the long-term implications side-by-side. They understood monthly payments but not total cost over time</li>
            <li><strong>Jargon barrier:</strong> Terms like "Income-Driven Repayment" and "capitalized interest" were barriers. Users said "I just want to know what I'll actually pay"</li>
            <li><strong>Missing context:</strong> Users didn't know if a plan was "good" or "bad" for their situation because they lacked relevant context and benchmarks</li>
          </ul>
          <div class="highlight-box">
            <p>"I spent 2 hours trying to figure out which plan to choose and I still don't know if I made the right decision. The numbers mean nothing to me without context." — Interview participant, recent graduate</p>
          </div>
        `,
      },
      {
        title: '4. Design Goals / Constraints',
        content: `
          <p>The main design goals were:</p>
          <ul>
            <li>Make plan comparisons visual and intuitive—show total cost, monthly payments, and payoff timeline side-by-side</li>
            <li>Replace jargon with plain language explanations that users can understand immediately</li>
            <li>Provide personalized context—help users understand which plan fits their specific financial situation</li>
          </ul>
          <p><strong>Constraints:</strong> We had to work within federal loan terminology requirements for legal compliance—we couldn't just invent our own terms. The platform also needed to integrate with existing loan servicer APIs, which limited what data we could pull and display. We had a 10-week timeline to ship before the federal loan payment pause ended.</p>
        `,
      },
      {
        title: '5. Ideation & Iteration',
        content: `
          <p>My initial concept used a traditional comparison table, thinking users would want to see all details at once. Early testing revealed this was still overwhelming—users didn't know which columns to focus on.</p>
          <p><strong>Iteration 1:</strong> I designed a wizard flow that asked users questions about their financial situation first, then showed personalized recommendations. Users appreciated the guidance but felt "locked in" to the wizard's recommendation without understanding alternatives.</p>
          <p><strong>Key learning:</strong> Users wanted both guidance AND autonomy. They needed help understanding their options but didn't want to feel like the system was deciding for them.</p>
          <p><strong>Iteration 2:</strong> I created a card-based comparison view where each plan appeared as a visual card showing three key numbers: monthly payment, total paid, and years to payoff. Below each number, I added plain-language context like "This is $200 more per month than the standard plan, but you'll pay $12,000 less total."</p>
          <p><strong>Specific design decision:</strong> We moved from a dense table layout to large, scannable cards with visual indicators (like progress bars showing "% of income") because users said they wanted to "feel" the difference between plans, not just read numbers. The visual format made abstract financial concepts more tangible.</p>
        `,
      },
      {
        title: '6. Final Solution',
        content: `
          <p>The final design helps users understand loan repayment through clear comparisons and contextual explanations:</p>
          <ul>
            <li><strong>Visual plan cards</strong> — Each repayment option shows monthly payment, total cost, and timeline with visual indicators, making comparison immediate and intuitive</li>
            <li><strong>Contextual explanations</strong> — Below each number, we show what it means in plain language (e.g., "$150/month is about 8% of your expected income")</li>
            <li><strong>Smart recommendations</strong> — The system suggests a plan based on user input but always shows all options with clear explanations of why one might be better for their situation</li>
          </ul>
          <div class="highlight-box">
            <p>How it solves the original problem: Users can now make informed decisions about loan repayment without needing a finance degree. The interface translates complex financial concepts into visual, comparable information with enough context to build confidence in their choice.</p>
          </div>
        `,
      },
      {
        title: '7. Outcomes / Learnings',
        content: `
          <p><strong>Impact:</strong> Post-launch usability testing showed users could successfully compare plans and make a selection 85% of the time (up from 43% with the old interface). Time to complete plan selection dropped from an average of 18 minutes to 6 minutes. User feedback: "Finally I understand what I'm actually signing up for."</p>
          <p><strong>What I'd measure next:</strong> I'd track plan selection confidence (through post-selection survey) and plan switching rates (if users frequently change their choice, it might indicate continued confusion). Would also measure long-term engagement to see if the improved understanding leads to better financial outcomes.</p>
          <p><strong>What I learned:</strong> Context is everything when designing for complex decisions. Raw data isn't helpful unless users can interpret what it means for them personally. Also, users want guidance but not paternalism—showing recommendations alongside alternatives builds trust and confidence.</p>
        `,
      },
    ],
  },
  'aible': {
    title: 'Aible',
    overview:
      'Designing an explainable AI experience that empowers non-technical business users to make confident, data‑driven decisions.',
    role: 'UX/UI Designer, UX Researcher, Prototype Builder',
    timeline: '16 weeks (semester UX design course)',
    tools: 'Figma, User Interviews, Usability Testing, Competitive Analysis',
    sections: [
      {
        title: '1. Problem / Challenge',
        content: `
          <p>Aible is an enterprise AI platform that helps business teams generate predictive insights tied directly to business KPIs. While the underlying models are powerful, the interface historically reflected how data scientists think, not how business users decide.</p>
          <p>Non‑technical stakeholders were confronted with long text blocks, abstract labels, and dense views that assumed analytical expertise. They struggled to interpret what the AI was doing, why it mattered, and how to act on it.</p>
          <p>The core challenge: <strong>How might we make data science principles accessible, interpretable, and actionable for non‑technical business users?</strong></p>
        `,
      },
      {
        title: '2. Role & Responsibilities',
        content: `
          <p>This was a UX class project grounded in a real enterprise product.</p>
          <p><strong>My role:</strong> UX/UI Designer, Researcher, Prototype Builder. I framed the problem around business user accessibility, conducted usability walkthroughs and informal interviews, analyzed analogous enterprise tools, and designed high‑fidelity prototypes in Figma.</p>
          <p><strong>Team:</strong> Solo design work with collaborative critiques from classmates and instructors.</p>
          <p><strong>Timeline:</strong> 16 weeks (semester‑long UX design course).</p>
        `,
      },
      {
        title: '3. Research & Insights',
        content: `
          <p>I combined competitive teardown, informal interviews, and usability testing to understand expectations and friction points for enterprise AI tools.</p>
          <p><strong>Methods:</strong> Competitive analysis of analytics and AI platforms; informal interviews and walkthroughs with classmates acting as business users; lightweight usability tests of early Figma flows.</p>
          <h4>Key Insights</h4>
          <ul>
            <li><strong>Users didn’t understand results—even when they were correct.</strong> AI outputs were accurate but felt opaque. Participants said things like “I see the result, but I don’t know what caused it or what to do next.”</li>
            <li><strong>Business users think in scenarios, not models.</strong> They framed questions as “What if we change X?” but the UI emphasized system steps and technical logic.</li>
            <li><strong>Trust depended on traceability.</strong> When users couldn’t see how their assumptions or feedback affected outcomes, confidence dropped—even if the AI was right.</li>
          </ul>
          <div class="highlight-box">
            <p>"I see the result, but I don’t really know what caused it or what I should do next." — Classmate acting as a business stakeholder</p>
          </div>
        `,
      },
      {
        title: '4. Design Goals / Constraints',
        content: `
          <p>The main design goals were:</p>
          <ul>
            <li>Make AI insights understandable at a glance, with scannable summaries rather than dense paragraphs.</li>
            <li>Clearly communicate why a recommendation exists and which factors influenced it.</li>
            <li>Enable users to explore “what‑if” business scenarios and compare outcomes side‑by‑side.</li>
            <li>Reduce the cognitive gap between AI output and real decision‑making.</li>
          </ul>
          <p><strong>Constraints:</strong> I didn’t have access to live data or real back‑end models, and much of the platform terminology was fixed. The prototype had to communicate AI behavior and explainability using static but believable flows.</p>
        `,
      },
      {
        title: '5. Ideation & Iteration',
        content: `
          <p>I started by examining the “before” experience: long text explanations, minimal visual feedback during loading, and abstract labels like “Agent Steps” that meant little to non‑experts.</p>
          <p><strong>Iteration 1 – Progress transparency:</strong> I introduced visible step‑by‑step progress indicators and clearer system feedback so users always knew where they were in the AI process. This improved trust, but outcomes still felt hard to interpret.</p>
          <p><strong>Iteration 2 – Visual insight delivery:</strong> I translated dense summaries into structured, card‑based insights tied directly to business KPIs, emphasizing “what changed” and “why it matters” instead of raw text. This dramatically improved scan‑ability in testing.</p>
        `,
      },
      {
        title: '6. Final Solution',
        content: `
          <p>The final prototype reframes AI output as decision support rather than a technical report.</p>
          <ul>
            <li><strong>Scannable insight dashboard</strong> — Key results are presented as visual cards tied directly to business KPIs, reducing time to understanding.</li>
            <li><strong>Explainability panel</strong> — Users can drill into each recommendation to see which inputs and assumptions influenced the outcome most.</li>
            <li><strong>Scenario exploration</strong> — Side‑by‑side scenario views let users compare different “what‑if” configurations and understand trade‑offs instead of just raw model accuracy.</li>
            <li><strong>Transparent system feedback</strong> — Progress indicators and clear status states reduce uncertainty while the AI is running.</li>
          </ul>
          <div class="highlight-box">
            <p>How it solves the original problem: Non‑technical business users can now see what the AI is doing, why a recommendation exists, and how different choices affect outcomes—turning a black box into a collaborative decision partner.</p>
          </div>
        `,
      },
      {
        title: '7. Outcomes / Learnings',
        content: `
          <p><strong>Impact (in testing):</strong> Participants understood AI recommendations faster, reported higher confidence in results, and preferred the visual summaries over the original dense text.</p>
          <p><strong>What I'd measure next:</strong> Time to insight comprehension, confidence ratings before and after explanations, and how often users explore scenarios before deciding.</p>
          <p><strong>What I learned:</strong> Designing AI tools for business users isn’t about simplifying intelligence—it’s about reframing it. When UX aligns AI reasoning with business decision‑making, complex systems feel approachable, trustworthy, and empowering.</p>
        `,
      },
    ],
  },
  'governaice': {
    title: 'GovernAIce',
    overview: 'Building trust in AI governance systems through transparency',
    role: 'UX Research, Service Design',
    timeline: '16 weeks',
    tools: 'Figma, Stakeholder Interviews, Journey Mapping',
    sections: [
      {
        title: '1. Problem / Challenge',
        content: `
          <p>GovernAIce is a platform that helps organizations govern their AI systems—ensuring models are fair, compliant, and operating as intended. As AI becomes critical to business decisions, companies need visibility into how these systems work and confidence that they're behaving appropriately.</p>
          <p>The users were AI governance teams, compliance officers, and executives at enterprises deploying AI at scale. These stakeholders needed to audit AI decision-making, ensure regulatory compliance, and manage risk across dozens or hundreds of AI models.</p>
          <p>The core problem: Organizations lacked visibility into AI decision-making processes, creating trust issues both internally (teams couldn't validate that models worked as expected) and externally (companies couldn't demonstrate compliance to regulators or explain decisions to customers). The platform had technical monitoring capabilities but didn't make governance actionable—users got data but didn't know what to do with it.</p>
        `,
      },
      {
        title: '2. Role & Responsibilities',
        content: `
          <p><strong>My role:</strong> I led UX research and service design, working with a product team and AI ethics advisors. I conducted stakeholder interviews across different organizational roles, mapped end-to-end governance workflows, designed interface concepts for transparency features, and created journey maps that identified gaps in the current experience.</p>
          <p><strong>Timeline:</strong> 16 weeks from initial research through validated design concepts</p>
          <p><strong>Tools:</strong> Figma for interface design, stakeholder interviews and workshops, journey mapping to understand cross-functional workflows, collaborative design sessions with compliance experts</p>
        `,
      },
      {
        title: '3. Research & Insights',
        content: `
          <p>I conducted 18 stakeholder interviews across different roles (AI governance leads, compliance officers, data scientists, executives) to understand the full governance ecosystem. I also ran workshops with cross-functional teams to map their actual governance processes and pain points.</p>
          <h4>Key Insights</h4>
          <ul>
            <li><strong>Invisible decision chains:</strong> When an AI model made a decision (like denying a loan application), stakeholders couldn't trace why. The system showed metrics like "accuracy: 94%" but not "this person was denied because X, Y, Z factors"</li>
            <li><strong>Reactive, not proactive:</strong> Teams only investigated models when something went wrong. They lacked tools to proactively identify issues like bias or drift before they caused harm</li>
            <li><strong>Communication breakdown:</strong> Different stakeholders needed different views of the same information. Data scientists needed technical metrics while compliance officers needed regulatory language. There was no shared understanding across teams</li>
          </ul>
          <div class="highlight-box">
            <p>"We have all this monitoring data, but when an executive asks 'can we trust this model?' I don't have a clear answer. I can show them numbers, but numbers don't build trust without context." — Interview participant, AI governance lead at financial services company</p>
          </div>
        `,
      },
      {
        title: '4. Design Goals / Constraints',
        content: `
          <p>The main design goals were:</p>
          <ul>
            <li>Make AI decision-making transparent and traceable—show not just what a model decided, but why</li>
            <li>Enable proactive governance—surface potential issues before they become problems</li>
            <li>Create a shared language across technical and non-technical stakeholders so everyone can understand model behavior</li>
          </ul>
          <p><strong>Constraints:</strong> We were operating in a complex regulatory environment where compliance requirements were still evolving—we had to design for flexibility. The technical challenge was significant: explaining ML decisions in plain language without oversimplifying to the point of inaccuracy. We also had to balance transparency with intellectual property concerns (companies didn't want to expose proprietary model details). Different industries had different needs, so the solution needed to be adaptable across healthcare, finance, and other sectors.</p>
        `,
      },
      {
        title: '5. Ideation & Iteration',
        content: `
          <p>I started by mapping the current governance workflow end-to-end, identifying where different stakeholders interacted with the system. My first concept was a comprehensive dashboard showing all model metrics in one view. Testing with compliance officers revealed this was overwhelming—they needed focused views for specific governance tasks, not a "kitchen sink" dashboard.</p>
          <p><strong>Iteration 1:</strong> I designed role-specific views—one for data scientists, another for compliance, another for executives. Users appreciated seeing relevant information, but this created siloed understanding. When teams needed to collaborate on an issue, they were literally looking at different systems.</p>
          <p><strong>Key learning:</strong> We needed shared visibility with role-specific actions, not completely separate interfaces.</p>
          <p><strong>Iteration 2:</strong> I created a layered transparency model. The core view showed model behavior in plain language anyone could understand (e.g., "This model denied 45 applications this week. Top reasons: credit score too low (60%), insufficient income (25%), employment history (15%)"). Each stakeholder could then "drill down" into their relevant details—data scientists could see technical metrics, compliance could see regulatory mappings, executives could see business impact.</p>
          <p><strong>Specific design decision:</strong> We introduced "decision explanations" that traced individual AI decisions through a visual flow. For example, if reviewing a denied loan, users could see: "Applicant data → Model considered 23 factors → Primary decision drivers: income-to-debt ratio and credit history → Result: Application denied." This gave teams a shared understanding while allowing technical deep-dives when needed. We tested this with mixed stakeholder groups and found it enabled productive conversations between technical and non-technical teams for the first time.</p>
        `,
      },
      {
        title: '6. Final Solution',
        content: `
          <p>The redesigned governance platform makes AI decision-making visible and actionable:</p>
          <ul>
            <li><strong>Transparent decision tracking</strong> — For any AI decision, users can trace the reasoning from input through model logic to outcome, explained in plain language with technical details available on demand</li>
            <li><strong>Proactive issue detection</strong> — Automated monitoring surfaces potential bias, performance drift, and compliance risks before they cause harm, with clear alerts and recommended actions</li>
            <li><strong>Cross-functional communication</strong> — A shared view of model behavior that different stakeholders can interpret through their lens (technical, regulatory, business) creates alignment across teams</li>
          </ul>
          <div class="highlight-box">
            <p>How it solves the original problem: Organizations can now confidently answer "how does this AI system work?" and "can we trust it?" The platform transforms technical monitoring data into governance insights that different stakeholders can understand and act on. Trust is built through visibility, not just metrics.</p>
          </div>
        `,
      },
      {
        title: '7. Outcomes / Learnings',
        content: `
          <p><strong>Impact:</strong> During pilot testing, compliance officers reported 60% reduction in time spent investigating model decisions. Cross-functional teams could now have productive governance discussions without getting stuck on translation between technical and business language. Executives reported increased confidence in AI deployments—one said "for the first time I can actually explain to the board how we're governing AI."</p>
          <p><strong>What I'd measure next:</strong> I'd track issue detection rate (are we catching problems earlier?) and resolution time (how quickly can teams respond to governance issues?). Would also measure cross-functional collaboration quality through team surveys and meeting outcomes. Long-term, would track whether better governance visibility correlates with reduced AI incidents and improved regulatory compliance.</p>
          <p><strong>What I learned:</strong> Transparency isn't about showing everything—it's about showing the right thing to the right person at the right time. Service design requires understanding not just individual user needs but the ecosystem of interactions between different roles. Also, trust in complex systems comes from understanding, not just performance metrics. You can't design trust into an interface, but you can design experiences that enable people to develop trust through visibility and control.</p>
        `,
      },
    ],
  },
}
