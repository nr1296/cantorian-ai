# StopLossAI Landing Page

Enterprise-grade landing page for showcasing AI-powered stop-loss insurance underwriting workflows to potential partners.

## Quick Start

### Option 1: Open Directly in Browser (Fastest)
Simply double-click `landing-page.html` to open it in your browser. No installation or build required!

### Option 2: Local Server (Recommended for presentation)
```bash
# Using Python (if installed)
python3 -m http.server 8000

# Or using Node.js (if installed)
npx serve .
```

Then open `http://localhost:8000/landing-page.html`

## Features

### 🎯 **Thoughtful AI Agent Offerings**

1. **Census Analysis Agent** - Validates and analyzes employee census data with risk segmentation
2. **Quote Generation Agent** - Automated quote generation with dynamic pricing models
3. **Claims Analytics Agent** - Predictive modeling for claims trends and risk scoring
4. **Renewal Underwriting Agent** - Experience rating and rate recommendations
5. **Medical Underwriting Agent** - Condition coding and risk stratification
6. **Document Intelligence Agent** - OCR and automated data extraction from submissions

### 💼 **Enterprise-Grade Design**
- Professional, modern UI with Tailwind CSS
- Responsive design (mobile, tablet, desktop)
- Smooth animations and hover effects
- Industry-appropriate color scheme (blues, professional typography)
- Clear call-to-actions for demo requests

### 📊 **Key Messaging**
- Addresses the "spreadsheet problem" directly
- Quantifiable benefits (90% faster, 99.9% accuracy, 10x capacity)
- Industry-specific language (stop-loss, census data, specific deductibles, run-out factors)
- Clear value proposition: migration from spreadsheets to AI workflows

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
