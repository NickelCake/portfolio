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
    overview: 'Simplifying enterprise AI platform navigation and workflows',
    role: 'Product Design, Interaction Design',
    timeline: '14 weeks',
    tools: 'Figma, User Interviews, Analytics',
    sections: [
      {
        title: '1. Problem / Challenge',
        content: `
          <p>Aible is an enterprise AI platform that helps companies build and deploy machine learning models without requiring deep technical expertise. The platform democratizes AI by making it accessible to business users, not just data scientists.</p>
          <p>The users were business analysts and operations managers at enterprise companies—people who understood their business problems but weren't ML engineers. They needed to create predictive models to solve challenges like customer churn, demand forecasting, and fraud detection.</p>
          <p>The core problem: Complex workflows and unclear navigation prevented users from maximizing the platform's value. Users were getting lost in the multi-step model creation process, abandoning projects partway through, and not discovering powerful features that could help them. The interface reflected the platform's technical complexity rather than the user's mental model of their work.</p>
        `,
      },
      {
        title: '2. Role & Responsibilities',
        content: `
          <p><strong>My role:</strong> I led product design and interaction design, partnering with a product manager, data science team, and engineering. I conducted user research with enterprise clients, designed information architecture improvements, created high-fidelity prototypes, and worked closely with engineering on implementation.</p>
          <p><strong>Timeline:</strong> 14 weeks from research through implementation</p>
          <p><strong>Tools:</strong> Figma for design and prototyping, user interviews with enterprise clients, Mixpanel analytics to identify drop-off points, collaborative workshops with the product team</p>
        `,
      },
      {
        title: '3. Research & Insights',
        content: `
          <p>I conducted 10 user interviews with business analysts and operations managers at client companies. I also analyzed platform usage data to identify where users were dropping off, and shadowed 3 users as they worked through real projects to understand friction points in context.</p>
          <h4>Key Insights</h4>
          <ul>
            <li><strong>Lost in the process:</strong> The model-building workflow had 8+ steps spread across different sections of the app. Users couldn't see where they were in the process or what came next, leading to confusion and abandonment</li>
            <li><strong>Feature blindness:</strong> Users were unaware of key features like automated model optimization and data quality checks because they were buried in menus. They were manually doing work the platform could automate</li>
            <li><strong>Unclear value:</strong> Users didn't understand the impact of their design choices. When setting parameters, they didn't know how their selections would affect model performance, so they defaulted to whatever was pre-selected</li>
          </ul>
          <div class="highlight-box">
            <p>"I know this platform can do a lot, but I feel like I'm only using 20% of it because I can't find things. I'm probably doing things the hard way without knowing there's a better option." — Interview participant, business analyst at Fortune 500 company</p>
          </div>
        `,
      },
      {
        title: '4. Design Goals / Constraints',
        content: `
          <p>The main design goals were:</p>
          <ul>
            <li>Create clear navigation that matches users' mental model of "building a model" rather than the technical architecture of the system</li>
            <li>Surface helpful features at the moment users need them, rather than hiding everything in menus</li>
            <li>Provide contextual guidance that helps users understand the impact of their choices without requiring ML expertise</li>
          </ul>
          <p><strong>Constraints:</strong> We couldn't change the underlying technical workflow—model building inherently requires multiple steps with dependencies between them. We also had to maintain backwards compatibility for existing power users who had learned the current system. Platform performance was a concern (we couldn't add too many UI elements that would slow load times for enterprise-scale data). Timeline was tight—we needed to ship before the annual user conference.</p>
        `,
      },
      {
        title: '5. Ideation & Iteration',
        content: `
          <p>I started by mapping the current user journey and identifying the highest-impact pain points. My initial design concept introduced a left-hand navigation rail showing all 8 steps at once. Early testing revealed this created new confusion—users felt overwhelmed seeing all steps upfront when they weren't ready for later ones.</p>
          <p><strong>Iteration 1:</strong> I tested a wizard-style flow that locked users into a linear path. Power users hated it—they needed to jump back and forth between steps as they refined their model. The rigidity prevented the iterative workflow that's essential for model development.</p>
          <p><strong>Key learning:</strong> We needed progressive structure, not rigid linearity. Show users where they are and what's next, but allow flexibility for iteration.</p>
          <p><strong>Iteration 2:</strong> I designed a stepped progress indicator at the top of the workspace that showed the user's current step in context of the full workflow, with completed steps marked and future steps visible but de-emphasized. This let users see the full picture while focusing on their current task. Critically, all steps remained clickable so power users could jump around.</p>
          <p><strong>Specific design decision:</strong> We added contextual tooltips and inline suggestions that appeared at decision points. For example, when a user was setting a data threshold, we showed "Higher values = more precision, lower values = catch more cases" with a visualization of the tradeoff. This surfaced the impact of technical choices without requiring users to understand the underlying ML concepts.</p>
        `,
      },
      {
        title: '6. Final Solution',
        content: `
          <p>The redesigned platform helps users navigate complex AI workflows with clarity and confidence:</p>
          <ul>
            <li><strong>Clear progress tracking</strong> — Stepped navigation shows users where they are in the 8-step process, what's complete, and what's next, while allowing flexibility to jump between steps</li>
            <li><strong>Contextual feature discovery</strong> — Automated optimization and data quality tools now appear inline at the moment users need them, with clear explanations of what they do</li>
            <li><strong>Guided decision-making</strong> — At every parameter selection, users see the impact of their choice explained in business terms, not technical jargon</li>
          </ul>
          <div class="highlight-box">
            <p>How it solves the original problem: Users can now navigate the platform confidently, discovering features that save time and improve outcomes. The interface hides technical complexity while surfacing the right information at the right time, letting business users focus on their goals rather than learning ML.</p>
          </div>
        `,
      },
      {
        title: '7. Outcomes / Learnings',
        content: `
          <p><strong>Impact:</strong> Model completion rate increased from 42% to 71%—significantly more users were finishing projects they started. Usage of automated optimization features increased 3x after we made them more discoverable. Support tickets about "how do I..." decreased by 40%. Client feedback: "It finally feels like a tool designed for people like me, not just data scientists."</p>
          <p><strong>What I'd measure next:</strong> I'd track feature adoption depth (are users just trying features or integrating them into their regular workflow?) and time-to-value (how long from account creation to first successful model deployment). Would also measure model quality improvements to see if better feature discovery leads to better outcomes.</p>
          <p><strong>What I learned:</strong> Complex workflows don't require complex interfaces. Users can handle sophisticated tools if the interface maps to their mental model rather than the system architecture. Also, progressive disclosure works best when paired with flexibility—show users what's next without forcing them down a single path. Context is more valuable than features—users need to understand why they should care, not just what the feature does.</p>
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
