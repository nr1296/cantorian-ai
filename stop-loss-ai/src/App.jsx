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
  const [selectedArticle, setSelectedArticle] = useState(null);

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

  const newsArticles = [
    {
      title: 'Aggregate vs Specific Stop-Loss: What Drives the Pricing Difference',
      date: 'Feb 1, 2026',
      content: `The relationship between aggregate and specific coverage is more nuanced than most pricing models reflect.\n\nSpecific deductibles are straightforward: a per-claimant limit that triggers when an individual's claims exceed the threshold. The challenge is that specific coverage doesn't just protect against random catastrophic claims. It also protects against known high-cost claimants at renewal, which is why carriers scrutinize prior authorization lists and pharmacy data when pricing specific.\n\nAggregate coverage is harder to price correctly. The attachment point relative to expected claims matters, but so does the specific deductible. A lower specific deductible reduces the tail risk in aggregate by capping individual claim contributions. This is why you sometimes see aggregate rates that seem counterintuitive until you account for the specific deductible in place.\n\nThe underwriting mistake to avoid: treating these as independent coverages. A group with volatile demographics might need a lower aggregate attachment point even if specific coverage is in place, because utilization swings affect the non-specific claims that aggregate must cover.\n\nContract language around lasering, which allows carriers to exclude or surcharge specific known claimants, fundamentally changes the risk profile of both coverages. Groups that accept lasers typically pay less for specific but may see higher aggregate volatility.`
    },
    {
      title: 'Why Run-Out Periods Matter More Than Most Underwriters Think',
      date: 'Jan 28, 2026',
      content: `The run-out period determines which carrier pays for claims incurred during the policy period but filed after it ends. Standard language gives carriers twelve months after the policy ends to receive and process these claims.\n\nWhat many underwriters miss: run-out length directly affects renewal pricing accuracy. A group switching carriers with incomplete run-out means the new carrier is pricing without seeing the full claims picture. The prior carrier is still paying claims that would inform the new rate. This creates a lag in experience data that matters most for groups with large claims that develop slowly.\n\nShorter run-out periods shift more financial risk to the employer if they switch carriers before all claims are settled. Longer periods give the carrier more tail risk but provide cleaner data at renewal.\n\nThe practical implication: when you see claims data that looks unusually good for a group shopping carriers, check the run-out period from the prior policy. The claims may not have fully developed yet. Similarly, groups that have been with the same carrier for multiple years have more complete run-out data and fewer pricing surprises.\n\nTerminal liability provisions, which specify what happens to claims that remain unpaid after run-out expires, vary more than most people realize. Some contracts make these the employer's responsibility. Others extend carrier liability indefinitely for claims incurred during the policy period, regardless of when they're filed.`
    },
    {
      title: 'The Census Data Points That Actually Predict Claims',
      date: 'Jan 15, 2026',
      content: `Most census analysis focuses on age and gender, but those tell you less than you'd think. What matters more:\n\nGeographic concentration. A group with employees clustered in high-cost metropolitan areas will have different utilization than a distributed workforce, even with identical demographics. This affects both medical and pharmacy spending, and standard trend factors often miss it.\n\nIndustry and occupation type. Not because of injury risk, but because of healthcare-seeking behavior. Professional services employees use preventive care differently than manufacturing workers, which affects both claim frequency and severity patterns.\n\nDependent coverage rates. Groups where few employees elect dependent coverage are fundamentally different risks than those with high family enrollment, but many pricing models treat coverage tier distribution as a simple mathematical adjustment rather than a risk signal.\n\nPlan design interaction with demographics. A young workforce with a high-deductible plan generates different claims than the same workforce with a low-deductible plan. The demographic risk is filtered through plan design choices, and the combination matters more than either factor alone.\n\nThe underwriting question isn't whether the census looks good or bad in absolute terms. It's whether the census suggests the group is likely to generate claims that exceed or fall short of what standard risk models predict. Groups that don't fit standard patterns are harder to price but not necessarily worse risks.`
    },
    {
      title: 'Aggregate Attachment Points: The Math Behind the Choice',
      date: 'Jan 8, 2026',
      content: `Aggregate attachment points are typically set as a percentage of expected claims, but the right percentage depends on what you're trying to accomplish.\n\nHigher attachment points provide more premium savings but less protection. The question is whether the employer can absorb the additional risk. A group with stable cash flow and low turnover can handle more aggregate risk than one with volatile revenue or workforce changes.\n\nThe relationship between specific and aggregate deductibles creates coverage gaps that many groups don't recognize until claims hit. If aggregate is set as a percentage of expected claims but specific deductibles are high relative to the group size, there's a range where total claims could exceed aggregate but no individual claims trigger specific. This is particularly common in smaller groups.\n\nAggregation methods vary by contract. Some aggregate all claims including those above the specific deductible (integrated aggregation), others only aggregate claims below the specific deductible (non-integrated). The premium difference between these structures should reflect the tail risk, but market pricing doesn't always get this right.\n\nLaser provisions affect aggregate pricing more than specific. If a carrier can exclude or surcharge known high claimants from aggregate coverage, it reduces the carrier's risk significantly. Groups that accept lasers pay less but take on more individual claimant risk themselves.\n\nThe underwriting decision isn't just about picking a percentage. It's about understanding how the employer's risk tolerance, specific deductible level, and contract terms interact to create the actual coverage profile.`
    },
    {
      title: 'What Underwriters Get Wrong About Medical Trend',
      date: 'Dec 20, 2025',
      content: `Medical trend isn't a single number you apply to last year's claims. Different components of claims trend at different rates, and the mix matters.\n\nPharmacy trend runs differently than medical trend, and within pharmacy, specialty drugs trend differently than generic maintenance medications. A group with high specialty drug utilization will trend differently than one with mostly generic fills, even if total pharmacy spend starts at the same level.\n\nInpatient facility costs trend differently than outpatient. Outpatient procedures have been shifting away from hospital settings to ambulatory surgery centers, which changes both the trend rate and the cost per service. Groups in markets where this shift is happening faster will trend differently than those where hospital outpatient still dominates.\n\nPlan design changes matter as much as underlying cost increases. If a group raises deductibles or adds cost-sharing, utilization changes. This isn't trend—it's a structural change in how much the plan pays. But it affects claims the same way trend does, and needs to be factored separately.\n\nThe mistake many underwriters make is applying a standard trend rate without considering these factors. Two groups with identical prior-year claims could have very different expected future claims depending on their pharmacy mix, provider network composition, and planned design changes.\n\nTrend assumptions also need to account for whether prior-year claims were unusually high or low. If a group had an anomalous year, trending forward from that baseline compounds the error. You need to normalize the base before applying trend, which requires understanding what drove the prior year's results.`
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
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            <h1 className="serif-heading text-5xl md:text-6xl font-bold mb-6 leading-tight text-white" style={{ letterSpacing: '-0.02em', textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              Agentic AI for Stop-Loss Underwriting
            </h1>
            <p className="text-lg md:text-xl mb-0 leading-relaxed text-white" style={{ opacity: 0.95, lineHeight: '1.7' }}>
              AI agents that automate analysis and calculations for stop-loss underwriters. Less time on data processing, more time on underwriting decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Main Content Column */}
            <div className="lg:col-span-9 lg:pr-8 lg:border-r" style={{ borderColor: '#E5E1DB' }}>
              {/* AI Agents Section */}
              <section id="agents" className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="serif-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B365D', letterSpacing: '-0.01em' }}>
                    Capabilities
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 transition-all duration-300"
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
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#1B365D', letterSpacing: '-0.01em' }}>{agent.name}</h3>
                  <p className="text-sm" style={{ color: '#6B7280', lineHeight: '1.75' }}>{agent.description}</p>
                </div>
              ))}
                </div>
              </section>

              {/* Benefits Section */}
              <section id="benefits" className="pt-16 pb-0" style={{ borderTop: '1px solid #E5E1DB' }}>
                <div className="text-center mb-12">
                  <h2 className="serif-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B365D', letterSpacing: '-0.01em' }}>
                    Value Proposition
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 transition-all duration-300"
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
                  <h3 className="text-sm font-bold mb-2" style={{ color: '#1B365D', letterSpacing: '-0.01em' }}>{benefit.title}</h3>
                  <p className="text-xs" style={{ color: '#6B7280', lineHeight: '1.6' }}>{benefit.description}</p>
                </div>
              ))}
                </div>
              </section>
            </div>

            {/* News Sidebar - Spans both sections */}
            <div className="lg:col-span-3 lg:pl-8">
              <div className="sticky top-24">
                <h3 className="text-lg font-bold mb-6" style={{ color: '#1B365D', letterSpacing: '-0.01em' }}>Industry Insights</h3>
                <div className="space-y-5">
                  {newsArticles.map((article, index) => (
                    <div key={index} className="pb-5" style={{ borderBottom: index < newsArticles.length - 1 ? '1px solid #E5E1DB' : 'none' }}>
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="text-left w-full group transition-colors"
                      >
                        <h4 className="text-sm font-semibold mb-1 group-hover:underline" style={{ color: '#2B4C7E', lineHeight: '1.4' }}>
                          {article.title}
                        </h4>
                        <p className="text-xs" style={{ color: '#9CA3AF' }}>{article.date}</p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)' }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="serif-heading text-2xl font-bold mb-2" style={{ color: '#1B365D', letterSpacing: '-0.01em' }}>
                  {selectedArticle.title}
                </h2>
                <p className="text-sm" style={{ color: '#9CA3AF' }}>{selectedArticle.date}</p>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-gray-400 hover:text-gray-600 text-3xl leading-none ml-4"
                style={{ marginTop: '-4px' }}
              >
                ×
              </button>
            </div>
            <div style={{ color: '#4B5563' }}>
              {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4" style={{ lineHeight: '1.8', fontSize: '15px' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

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
