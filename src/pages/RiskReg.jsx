import { motion } from "framer-motion";

import Header from "../components/common/Header";

const RiskReg = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Risk Register' />

			<main className='mx-auto py-6 px-1 lg:px-2'>
				{/* Effort STATS */}
				<motion.div
					className='grid grid-cols-1 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
				<p>Components needs to developed...</p>
				
				<div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="space-y-8">
        {/* Dashboard Section */}
        <section>
          <h2 className="text-3xl font-semibold">1. Dashboard</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">Overview:</span> A high-level view of key
              project risk metrics, such as risk levels, mitigation progress, and
              overall project health.
            </li>
            <li>
              <span className="font-bold">Risk Heatmap:</span> Visual
              representation of risk severity and probability, showing critical,
              high, medium, and low-risk areas.
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-semibold">2. Projects</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">All Projects:</span> List of all ongoing
              projects with their current risk assessments and statuses.
            </li>
            <li>
              <span className="font-bold">Project Details:</span> Ability to select
              a specific project to view detailed risk reports, analysis, and
              mitigation strategies.
            </li>
            <li>
              <span className="font-bold">New Project:</span> Option to create and
              initiate a new project with risk parameters.
            </li>
          </ul>
        </section>

        {/* Risk Register Section */}
        <section>
          <h2 className="text-3xl font-semibold">3. Risk Register</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">Active Risks:</span> List of all identified
              risks, categorized by type (e.g., financial, operational, technical).
            </li>
            <li>
              <span className="font-bold">Risk Assessment:</span> Interface for adding,
              editing, and assessing risks with relevant details (impact, probability,
              etc.).
            </li>
            <li>
              <span className="font-bold">Risk History:</span> Log of past risk events
              and outcomes, tracking how risks were managed or mitigated.
            </li>
          </ul>
        </section>

        {/* Risk Analysis Tools Section */}
        <section>
          <h2 className="text-3xl font-semibold">4. Risk Analysis Tools</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">Risk Matrix:</span> Tools to analyze risks
              using a matrix approach to evaluate probability versus impact.
            </li>
            <li>
              <span className="font-bold">Monte Carlo Simulation:</span> Option to run
              simulations to predict risk outcomes based on various inputs.
            </li>
            <li>
              <span className="font-bold">SWOT Analysis:</span> Tool for performing a
              SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis for a
              project.
            </li>
            <li>
              <span className="font-bold">Risk Scoring:</span> Feature to score and
              rank risks based on defined criteria (e.g., probability * impact).
            </li>
          </ul>
        </section>

        {/* Risk Mitigation Section */}
        <section>
          <h2 className="text-3xl font-semibold">5. Risk Mitigation</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">Mitigation Plans:</span> View and manage risk
              mitigation plans for each identified risk.
            </li>
            <li>
              <span className="font-bold">Action Items:</span> Create and track tasks
              assigned to team members to reduce or eliminate specific risks.
            </li>
            <li>
              <span className="font-bold">Timeline:</span> Gantt chart or timeline view
              of risk mitigation milestones and deadlines.
            </li>
            <li>
              <span className="font-bold">Contingency Plans:</span> Option to define and
              track contingency plans for high-priority risks.
            </li>
          </ul>
        </section>

        {/* Reports & Analytics Section */}
        <section>
          <h2 className="text-3xl font-semibold">6. Reports & Analytics</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">Risk Reports:</span> Generate detailed
              reports based on risk levels, trends, and mitigation activities.
            </li>
            <li>
              <span className="font-bold">Project Health Reports:</span> Reports
              showing the overall health of the project, including risk impacts.
            </li>
            <li>
              <span className="font-bold">Custom Reports:</span> Option to create
              tailored reports with specific filters (e.g., project phase, risk type,
              team).
            </li>
          </ul>
        </section>

        {/* Team Collaboration Section */}
        <section>
          <h2 className="text-3xl font-semibold">7. Team Collaboration</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">Team Members:</span> List of team members,
              their roles, and their involvement in risk management.
            </li>
            <li>
              <span className="font-bold">Communication Logs:</span> Logs of meetings,
              discussions, or decisions related to project risks.
            </li>
            <li>
              <span className="font-bold">Notifications:</span> Alert system to notify
              team members about high-priority risks, updates, and changes in
              mitigation plans.
            </li>
          </ul>
        </section>

        {/* Settings Section */}
        <section>
          <h2 className="text-3xl font-semibold">8. Settings</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">Risk Categories:</span> Customizable categories
              for different types of risks (e.g., financial, operational, technical).
            </li>
            <li>
              <span className="font-bold">Risk Thresholds:</span> Configure thresholds
              for risk levels (e.g., when to classify a risk as high, medium, or low).
            </li>
            <li>
              <span className="font-bold">User Permissions:</span> Define user roles
              and permissions (e.g., admin, manager, team member).
            </li>
          </ul>
        </section>

        {/* Audit & Compliance Section */}
        <section>
          <h2 className="text-3xl font-semibold">9. Audit & Compliance</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">Audit Trail:</span> Track and view all changes
              made to risk data, including who made the changes and when.
            </li>
            <li>
              <span className="font-bold">Compliance Check:</span> Ensure the project
              is adhering to relevant regulations and industry standards (e.g., ISO,
              GDPR).
            </li>
          </ul>
        </section>

        {/* Integrations Section */}
        <section>
          <h2 className="text-3xl font-semibold">10. Integrations</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">External Tools:</span> Integration with
              external project management tools (e.g., Jira, Asana) or financial systems
              (e.g., QuickBooks, SAP).
            </li>
            <li>
              <span className="font-bold">Data Import/Export:</span> Ability to
              import/export data for reporting or collaboration purposes.
            </li>
          </ul>
        </section>

        {/* Help & Support Section */}
        <section>
          <h2 className="text-3xl font-semibold">11. Help & Support</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold">Knowledge Base:</span> Access to user manuals,
              tutorials, and FAQs.
            </li>
            <li>
              <span className="font-bold">Support Tickets:</span> Submit and track
              support tickets for any issues or queries.
            </li>
            <li>
              <span className="font-bold">Community Forum:</span> Forum for discussing
              risk management best practices and troubleshooting.
            </li>
          </ul>
        </section>
      </div>
    </div>

				</motion.div>

				


			</main>
		</div>
	);
};
export default RiskReg;
