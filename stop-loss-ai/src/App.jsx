import { useState } from 'react';
import {
  ChartBarIcon,
  DocumentTextIcon,
  CpuChipIcon,
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  CalculatorIcon,
  UserGroupIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

function App() {
  const [email, setEmail] = useState('');

  const agents = [
    {
      icon: UserGroupIcon,
      name: 'Census Analysis Agent',
      description: 'Automatically validates, cleanses, and analyzes employee census data. Identifies risk factors, demographic trends, and data quality issues in seconds.',
      capabilities: ['Data validation', 'Risk segmentation', 'Anomaly detection', 'Missing data inference']
    },
    {
      icon: CalculatorIcon,
      name: 'Quote Generation Agent',
      description: 'Generates accurate stop-loss quotes based on census data, claims history, and market conditions. Applies rating methodologies and adjusts for risk factors automatically.',
      capabilities: ['Dynamic pricing', 'Multi-scenario modeling', 'Rate calculation', 'Contract comparison']
    },
    {
      icon: ChartBarIcon,
      name: 'Claims Analytics Agent',
      description: 'Deep analysis of historical claims patterns, identifies high-risk claimants, predicts future claim trends, and calculates specific deductible recommendations.',
      capabilities: ['Predictive modeling', 'Trend analysis', 'Large claim forecasting', 'Risk scoring']
    },
    {
      icon: DocumentCheckIcon,
      name: 'Renewal Underwriting Agent',
      description: 'Automates renewal analysis by comparing historical performance, calculating run-out factors, and recommending rate adjustments based on experience.',
      capabilities: ['Experience rating', 'Renewal projections', 'Rate recommendations', 'Performance benchmarking']
    },
    {
      icon: ShieldCheckIcon,
      name: 'Medical Underwriting Agent',
      description: 'Reviews medical questionnaires, identifies high-cost conditions, and assesses aggregate risk exposure. Flags cases requiring additional review.',
      capabilities: ['Condition coding', 'Risk stratification', 'Medical cost estimation', 'Underwriting triage']
    },
    {
      icon: DocumentTextIcon,
      name: 'Document Intelligence Agent',
      description: 'Extracts and processes data from broker submissions, renewal reports, claims summaries, and carrier proposals. Eliminates manual data entry.',
      capabilities: ['OCR processing', 'Data extraction', 'Document classification', 'Automated ingestion']
    }
  ];

  const benefits = [
    {
      icon: ClockIcon,
      title: '90% Faster Quote Generation',
      description: 'What took hours in spreadsheets now takes minutes with automated workflows.'
    },
    {
      icon: CheckCircleIcon,
      title: 'Eliminate Manual Errors',
      description: 'AI-powered validation catches data inconsistencies and calculation errors instantly.'
    },
    {
      icon: ArrowTrendingUpIcon,
      title: 'Data-Driven Pricing',
      description: 'Leverage predictive analytics and market intelligence for competitive, accurate rates.'
    },
    {
      icon: BoltIcon,
      title: 'Scale Your Team',
      description: 'Handle 10x more submissions without increasing headcount or sacrificing accuracy.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll contact ${email} to schedule a demo.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF9F7' }}>
      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-sm border-b z-50" style={{ backgroundColor: 'rgba(250, 249, 247, 0.95)', borderColor: '#E5E1DB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold" style={{ color: '#1B365D' }}>StopLoss<span style={{ color: '#2B4C7E' }}>AI</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#agents" className="font-medium transition" style={{ color: '#6B7280' }} onMouseOver={(e) => e.target.style.color = '#1B365D'} onMouseOut={(e) => e.target.style.color = '#6B7280'}>Solutions</a>
              <a href="#benefits" className="font-medium transition" style={{ color: '#6B7280' }} onMouseOver={(e) => e.target.style.color = '#1B365D'} onMouseOut={(e) => e.target.style.color = '#6B7280'}>Benefits</a>
              <a href="#demo" className="pill-button text-white font-medium" style={{ backgroundColor: '#2B4C7E' }} onMouseOver={(e) => e.target.style.backgroundColor = '#1B365D'} onMouseOut={(e) => e.target.style.backgroundColor = '#2B4C7E'}>Request Demo</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="serif-heading text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{ color: '#1B365D' }}>
              Stop-Loss Underwriting Intelligence
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: '#4B5563' }}>
              Transform manual underwriting operations with AI agents that automate census analysis, quote generation, and risk assessment
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-24 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="serif-heading text-6xl md:text-7xl font-bold mb-3" style={{ color: '#2B4C7E' }}>90%</div>
              <div className="text-base" style={{ color: '#6B7280' }}>Time Savings</div>
            </div>
            <div className="text-center">
              <div className="serif-heading text-6xl md:text-7xl font-bold mb-3" style={{ color: '#2B4C7E' }}>99%</div>
              <div className="text-base" style={{ color: '#6B7280' }}>Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="serif-heading text-6xl md:text-7xl font-bold mb-3" style={{ color: '#2B4C7E' }}>10x</div>
              <div className="text-base" style={{ color: '#6B7280' }}>More Quotes</div>
            </div>
            <div className="text-center">
              <div className="serif-heading text-6xl md:text-7xl font-bold mb-3" style={{ color: '#2B4C7E' }}>$5M+</div>
              <div className="text-base" style={{ color: '#6B7280' }}>Premium Analyzed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F3EF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="serif-heading text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1B365D' }}>
              The challenge of manual underwriting
            </h2>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Stop-loss underwriters face manual processes that slow decision-making and introduce risk
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1B365D' }}>Hours of Manual Work</h3>
              <p style={{ color: '#6B7280' }}>
                Census validation, rate calculations, and claims analysis consume 60-80% of underwriter time
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1B365D' }}>Error-Prone Formulas</h3>
              <p style={{ color: '#6B7280' }}>
                Complex spreadsheets break, formulas get overwritten, and version control becomes challenging
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1B365D' }}>Limited Analytics</h3>
              <p style={{ color: '#6B7280' }}>
                Traditional tools lack predictive modeling capabilities and advanced risk pattern identification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="agents" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="serif-heading text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1B365D' }}>
              Intelligent agents for every workflow
            </h2>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Purpose-built agents that understand stop-loss insurance and work autonomously to accelerate your underwriting process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <div key={index} className="bg-white rounded-lg p-8 card-hover" style={{ border: '1px solid #E5E1DB' }}>
                <div className="rounded-lg p-3 w-fit mb-5" style={{ backgroundColor: '#F0EDE8' }}>
                  <agent.icon className="h-6 w-6" style={{ color: '#2B4C7E' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1B365D' }}>{agent.name}</h3>
                <p className="mb-5" style={{ color: '#6B7280' }}>{agent.description}</p>
                <div className="pt-4" style={{ borderTop: '1px solid #E5E1DB' }}>
                  <div className="flex flex-wrap gap-2">
                    {agent.capabilities.map((capability, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#F5F3EF', color: '#4B5563' }}>
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#2B4C7E' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="serif-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Transform underwriting operations
            </h2>
            <p className="text-xl" style={{ color: '#C7D2E5' }}>
              Move from manual spreadsheet processes to intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="rounded-lg p-8 h-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
                  <benefit.icon className="h-12 w-12 mx-auto mb-5 text-white" />
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p style={{ color: '#C7D2E5' }}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="serif-heading text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1B365D' }}>
              Enterprise-grade platform
            </h2>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Built specifically for stop-loss underwriters with security, compliance, and scalability in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F0EDE8' }}>
                <span className="serif-heading text-3xl font-bold" style={{ color: '#2B4C7E' }}>1</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1B365D' }}>Connect Your Data</h3>
              <p style={{ color: '#6B7280' }}>
                Upload census files, claims data, and carrier proposals. Our agents automatically extract and validate all information.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F0EDE8' }}>
                <span className="serif-heading text-3xl font-bold" style={{ color: '#2B4C7E' }}>2</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1B365D' }}>AI Agents Analyze</h3>
              <p style={{ color: '#6B7280' }}>
                Multiple specialized agents work in parallel to assess risk, calculate rates, and identify trends across your submission.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F0EDE8' }}>
                <span className="serif-heading text-3xl font-bold" style={{ color: '#2B4C7E' }}>3</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1B365D' }}>Generate Quotes</h3>
              <p style={{ color: '#6B7280' }}>
                Receive comprehensive quotes with full audit trails, risk assessments, and recommendations in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F3EF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif-heading text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1B365D' }}>
            Ready to transform your underwriting?
          </h2>
          <p className="text-xl mb-10" style={{ color: '#6B7280' }}>
            See how StopLossAI can transform your workflow. Schedule a personalized demo with our team.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 px-6 py-4 rounded-full focus:outline-none"
                style={{ border: '2px solid #E5E1DB', color: '#1B365D' }}
                onFocus={(e) => e.target.style.borderColor = '#2B4C7E'}
                onBlur={(e) => e.target.style.borderColor = '#E5E1DB'}
              />
              <button
                type="submit"
                className="pill-button text-white font-semibold whitespace-nowrap"
                style={{ backgroundColor: '#2B4C7E' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1B365D'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#2B4C7E'}
              >
                Get Demo
              </button>
            </div>
            <p className="text-sm mt-5" style={{ color: '#9CA3AF' }}>
              Join leading stop-loss carriers and MGUs using AI-powered underwriting
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1B365D' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-5">
                <span className="text-2xl font-bold text-white">StopLoss<span style={{ color: '#7B9FCC' }}>AI</span></span>
              </div>
              <p className="max-w-md" style={{ color: '#9CABBE' }}>
                Intelligent automation for stop-loss insurance underwriting. Transform manual spreadsheet processes into AI-powered workflows.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#agents" className="transition" style={{ color: '#9CABBE' }} onMouseOver={(e) => e.target.style.color = '#FFFFFF'} onMouseOut={(e) => e.target.style.color = '#9CABBE'}>AI Agents</a></li>
                <li><a href="#benefits" className="transition" style={{ color: '#9CABBE' }} onMouseOver={(e) => e.target.style.color = '#FFFFFF'} onMouseOut={(e) => e.target.style.color = '#9CABBE'}>Benefits</a></li>
                <li><a href="#demo" className="transition" style={{ color: '#9CABBE' }} onMouseOver={(e) => e.target.style.color = '#FFFFFF'} onMouseOut={(e) => e.target.style.color = '#9CABBE'}>Request Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="transition" style={{ color: '#9CABBE' }} onMouseOver={(e) => e.target.style.color = '#FFFFFF'} onMouseOut={(e) => e.target.style.color = '#9CABBE'}>About Us</a></li>
                <li><a href="#" className="transition" style={{ color: '#9CABBE' }} onMouseOver={(e) => e.target.style.color = '#FFFFFF'} onMouseOut={(e) => e.target.style.color = '#9CABBE'}>Security</a></li>
                <li><a href="#" className="transition" style={{ color: '#9CABBE' }} onMouseOver={(e) => e.target.style.color = '#FFFFFF'} onMouseOut={(e) => e.target.style.color = '#9CABBE'}>Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 text-center text-sm" style={{ borderTop: '1px solid #2B4C7E', color: '#7B9FCC' }}>
            <p>&copy; 2024 StopLossAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
