// Playwright reusable selectors for PMO Metrics Management
// Grouped by feature/page, using getByRole and accessible names

module.exports = {
  navigation: {
    navBar: page => page.getByRole('navigation'),
    dashboard: page => page.getByRole('link', { name: 'Dashboard' }),
    accounts: page => page.getByRole('link', { name: 'Accounts' }),
    reports: page => page.getByRole('link', { name: 'Reports' }),
    settings: page => page.getByRole('link', { name: 'Settings' })
  },
  dashboard: {
    accountsCard: page => page.getByText(/\d+\s*Accounts/),
    initiativesCard: page => page.getByText(/\d+\s*Initiatives/),
    openRisksCard: page => page.getByText(/\d+\s*Open risks/),
    openIssuesCard: page => page.getByText(/\d+\s*Open issues/),
    infoCards: page => page.getByRole('region', { name: /Initiative completion|Total Value|Escape rate|No ESS scores|Issue resolution rate/ })
  },
  charts: {
    byHeading: (page, heading) => page.getByRole('heading', { name: new RegExp(heading, 'i') }),
    container: page => page.getByTestId('chart-container')
  },
  accounts: {
    heading: page => page.getByRole('heading', { name: /Accounts/ }),
    table: page => page.getByRole('table')
  },
  settings: {
    link: page => page.getByRole('link', { name: 'Settings' }),
    heading: page => page.getByRole('heading', { name: /Settings/ })
  },
  filters: {
    account: page => page.getByRole('combobox', { name: /account/i }),
    general: page => page.getByRole('combobox', { name: /filter/i })
  },
  tables: {
    any: page => page.getByRole('table'),
    byHeading: (page, heading) => page.getByRole('table').filter({ has: page.getByRole('heading', { name: new RegExp(heading, 'i') }) })
  },
  buttons: {
    all: page => page.getByRole('button', { name: 'All' }),
    watched: page => page.getByRole('button', { name: /Watched/ }),
    avg: page => page.getByRole('button', { name: 'Avg' }),
    detail: page => page.getByRole('button', { name: 'Detail' })
  }
};
