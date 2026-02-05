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
  BoltIcon,
  BeakerIcon,
  FolderIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

function App() {
  const [email, setEmail] = useState('');

  const agents = [
    {
      icon: ChartBarIcon,
      name: 'Year-over-Year Comparison',
      description: 'An AI agent that compares this year\'s census or claims to last year\'s. Shows what changed: headcount shifts, demographics, claim patterns. Eliminates manual comparison across spreadsheets.'
    },
    {
      icon: BeakerIcon,
      name: 'Quote Backtesting',
      description: 'An AI agent that tests your quote against different scenarios. See how pricing performs if claims spike, demographics shift, or utilization changes. Understand the risk before committing to rates.'
    },
    {
      icon: CalculatorIcon,
      name: 'Stop-Loss Calculations',
      description: 'An AI agent that handles standard calculations: pooling charges, aggregate factors, credibility adjustments. Automates the time-consuming work that needs to be precise.'
    }
  ];

  const benefits = [
    {
      title: 'Save time on repetitive work',
      description: 'Less time copying data between spreadsheets, more time on actual underwriting decisions.'
    },
    {
      title: 'Requote faster',
      description: 'Reuse the last quote for a client. Update what changed, keep the rest. Especially helpful during busy season.'
    },
    {
      title: 'Keep cases organized',
      description: 'Version history and notes in one place. Makes it easier to work with your team and track what happened.'
    },
    {
      title: 'Medical expertise available',
      description: 'Access to medical experts who can help analyze the clinical aspects of complex claims when needed.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll reach out to ${email} shortly.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF9F7', scrollBehavior: 'smooth' }}>
      {/* Navigation */}
      <nav className="fixed w-full backdrop-blur-sm border-b z-50" style={{ backgroundColor: 'rgba(250, 249, 247, 0.95)', borderColor: '#E5E1DB', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <ChartBarIcon className="h-8 w-8" style={{ color: '#2B4C7E' }} />
              <span className="text-2xl font-bold" style={{ color: '#1B365D' }}>Cantorian AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#agents" className="font-medium transition-all duration-300" style={{ color: '#6B7280' }} onMouseOver={(e) => e.target.style.color = '#1B365D'} onMouseOut={(e) => e.target.style.color = '#6B7280'}>Solutions</a>
              <a href="#benefits" className="font-medium transition-all duration-300" style={{ color: '#6B7280' }} onMouseOver={(e) => e.target.style.color = '#1B365D'} onMouseOut={(e) => e.target.style.color = '#6B7280'}>Benefits</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/hero-bg.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)',
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(27, 54, 93, 0.85) 0%, rgba(43, 76, 126, 0.75) 100%)',
          }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="serif-heading text-5xl md:text-7xl font-bold mb-8 leading-tight text-white" style={{ letterSpacing: '-0.02em', textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              Agentic AI for Stop-Loss Underwriting
            </h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-white" style={{ opacity: 0.95, lineHeight: '1.7' }}>
              AI agents that automate analysis and calculations for stop-loss underwriters. Less time on data processing, more time on underwriting decisions.
            </p>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="agents" className="py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="serif-heading text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1B365D', letterSpacing: '-0.01em' }}>
              Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 transition-all duration-300"
                style={{
                  border: '2px solid #E5E1DB',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#2B4C7E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#E5E1DB';
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1B365D', letterSpacing: '-0.01em' }}>{agent.name}</h3>
                <p style={{ color: '#6B7280', lineHeight: '1.75' }}>{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F3EF', borderTop: '1px solid #E5E1DB' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="serif-heading text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1B365D', letterSpacing: '-0.01em' }}>
              Value Proposition
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 transition-all duration-300"
                style={{
                  border: '2px solid #E5E1DB',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#2B4C7E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#E5E1DB';
                }}
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1B365D', letterSpacing: '-0.01em' }}>{benefit.title}</h3>
                <p style={{ color: '#6B7280', lineHeight: '1.75' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1B365D', borderTop: '1px solid #2B4C7E' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 flex items-center justify-center space-x-3">
            <ChartBarIcon className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">Cantorian AI</span>
          </div>
          <p className="text-sm" style={{ color: '#7B9FCC' }}>
            &copy; 2026 Cantorian AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
