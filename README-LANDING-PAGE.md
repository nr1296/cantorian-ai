# StopLossAI Landing Page

Professional landing page for showcasing a quote generation platform to stop-loss insurance underwriting firms during customer discovery.

## Quick Start

### Option 1: Open Directly in Browser (Fastest)
Simply double-click `landing-page.html` to open it in your browser. No installation or build required.

### Option 2: Local Server (Recommended for presentation)
```bash
# Using Python (if installed)
python3 -m http.server 8000

# Or using Node.js (if installed)
npx serve .
```

Then open `http://localhost:8000/landing-page.html`

## Features

### Core Platform Capabilities

1. **Generate Quotes** - Integrate with existing risk models via API, automated census validation, multi-carrier comparison, and complete audit trails
2. **Requote Past Clients** - Historical quote repository, claims experience updates, census delta analysis, and rate change attribution
3. **Collaborate Efficiently** - Shared workspaces, comment tools, version control, and activity logs

### Enterprise-Grade Design
- Professional, business-focused UI with Tailwind CSS
- Responsive design (mobile, tablet, desktop)
- Subdued animations appropriate for financial services
- Industry-appropriate color scheme and typography
- Clear, professional call-to-actions

### Key Messaging
- Addresses inefficiencies in manual underwriting processes
- Focus on integration with existing risk models
- Professional tone suitable for underwriters and financial analysts
- Clear value proposition: modern platform for quote generation and collaboration

## Customization

### Update Contact Information
Edit the form submission handler in the `<script>` section at the bottom of `landing-page.html`:

```javascript
function handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    // Replace this with your actual form submission logic
    // e.g., send to your backend API or email service
    alert(`Thank you! We'll contact ${email} to schedule a demo.`);
}
```

### Modify Color Scheme
The primary blue color can be adjusted by editing the Tailwind classes:
- `text-blue-600` / `bg-blue-600` - Primary action color
- `text-indigo-700` / `bg-indigo-700` - Accent color

### Add Analytics
Insert your analytics tracking code (Google Analytics, Mixpanel, etc.) in the `<head>` section.

## Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** (CDN) - Utility-first styling
- **Vanilla JavaScript** - Form handling and interactions
- **Google Fonts** - Inter font family

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customer Discovery Tips

When presenting to insurance underwriting firms:

1. **Start with the problem** - Show the spreadsheet pain points section first
2. **Demo the agents** - Walk through each AI agent and explain how it maps to their current workflow
3. **Emphasize enterprise features** - Security, compliance, audit trails
4. **Show the benefits** - Focus on time savings and accuracy improvements
5. **Call to action** - Encourage them to schedule a personalized demo

## Next Steps

To convert this into a production-ready site with backend functionality:

1. Set up a proper form backend (e.g., FormSpree, Netlify Forms, or custom API)
2. Add analytics and tracking
3. Implement proper email capture and CRM integration
4. Add testimonials and case studies as you gather them
5. Consider A/B testing different messaging

## License

Proprietary - For customer discovery and sales purposes only.
