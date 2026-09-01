# Pricing Widget Backup

Removed 2026-09-01. To restore, add `<PricingWidget />` back to `SiteLayout.jsx` or `HomePage.jsx` and restore the component file.

## Price
$21 / month

## Plan Features
- 250 messages every billing month, refills automatically
- 24/7 access to Tanya's professional-level coaching by text
- Personal follow-up texts a couple days after your sessions
- Add more messages ($5 for 60) if you run out
- Cancel anytime by texting "cancel subscription"

## Button
"Add contact" — opens terms sheet, then sends to SMS link

## Fine print
Test it free for 25 messages. No signup required, no credit card. Love it? $21/month to get started.

## UI
- Fixed top-right corner, "Pricing" pill button triggers a dropdown panel
- Panel: glass-panel style, rounded-2xl, w-72, shadow-xl
- Dropdown animates in with opacity + y + scale
- Closes when clicking outside
