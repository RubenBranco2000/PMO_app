# Copilot Instructions for PMO Metrics Management Playwright Automation

## Authentication & Session Management
- **Authentication uses Playwright's `storageState`** (see `playwright.config.js`).
- All tests must **reuse authenticated sessions** by referencing the shared `storageState` file. Do not perform login flows in every test.

## Selector Strategy
- **Use stable selectors**: Prefer `getByRole`, `getByTestId`, or semantic queries over CSS/XPath. Never use auto-generated or position-based selectors.

## Test Structure & Modularity
- **Write modular Playwright tests**: Each test should focus on a single feature or scenario. Use `test.describe` to group related tests. Extract common actions into helper functions or fixtures.

## Dashboard Validation Rules
- **Dashboard tests must validate**:
  - Presence and correctness of all main navigation options.
  - Key dashboard widgets and headings are visible and accurate.
  - Navigation between dashboard sections works as expected.

## Loading State Handling
- **Always handle loading states**: Wait for loading indicators to disappear before making assertions. Use `await expect(locator).not.toBeVisible()` for spinners/loaders.

## Playwright Patterns & Best Practices
- **Preferred patterns**:
  - Use `test.use({ storageState: ... })` for session reuse.
  - Use `page.getByRole` and `page.getByTestId` for element selection.
  - Use fixtures for setup/teardown.
  - Use `await expect` for assertions.
- **Assertions must be meaningful**: Check for correct text, URLs, element visibility, and business logic, not just element existence.

## AI-Generated Test Optimization
- **Write clear, maintainable, and robust tests** to support AI-generated code:
  - Use descriptive test names and comments.
  - Avoid hardcoded waits; always use Playwright's waiting mechanisms.
  - Keep tests independent and idempotent.
  - Document any non-obvious logic or workarounds.
