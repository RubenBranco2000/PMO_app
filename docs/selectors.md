# Playwright Stable Selectors

## Top Navigation
- Navigation bar: `page.getByRole('navigation')`
- Dashboard link: `page.getByRole('link', { name: 'Dashboard' })`
- Accounts link: `page.getByRole('link', { name: 'Accounts' })`
- Reports link: `page.getByRole('link', { name: 'Reports' })`
- Settings link: `page.getByRole('link', { name: 'Settings' })`

## Dashboard Cards
- Accounts card: `page.getByText(/\d+\s*Accounts/)`
- Initiatives card: `page.getByText(/\d+\s*Initiatives/)`
- Open risks card: `page.getByText(/\d+\s*Open risks/)`
- Open issues card: `page.getByText(/\d+\s*Open issues/)`
- Info cards: `page.getByRole('region', { name: /Initiative completion|Total Value|Escape rate|No ESS scores|Issue resolution rate/ })`

## Charts
- Chart by heading: `page.getByRole('heading', { name: /Risk trends|Portfolio Overview|Satisfaction & Quality|CSS|ESS/ })`
- Chart container (if test id): `page.getByTestId('chart-container')`

## Account Pages
- Accounts page heading: `page.getByRole('heading', { name: /Accounts/ })`
- Account table: `page.getByRole('table')`

## Settings Pages
- Settings link: `page.getByRole('link', { name: 'Settings' })`
- Settings heading: `page.getByRole('heading', { name: /Settings/ })`

## Filters
- Account filter: `page.getByRole('combobox', { name: /account/i })`
- General filter: `page.getByRole('combobox', { name: /filter/i })`

## Tables
- Any table: `page.getByRole('table')`
- Table by heading: `page.getByRole('table').filter({ has: page.getByRole('heading', { name: /Action list|Ownership|Initiatives per owner|Accounts per manager/ }) })`

## Action Buttons
- All: `page.getByRole('button', { name: 'All' })`
- Watched: `page.getByRole('button', { name: /Watched/ })`
- Avg: `page.getByRole('button', { name: 'Avg' })`
- Detail: `page.getByRole('button', { name: 'Detail' })`

---
- Prefer getByRole() and accessible names for all selectors.
- Avoid brittle CSS and nth-child selectors.
- Group selectors by feature/page for maintainability.
