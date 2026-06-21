const STORAGE_KEY = "northstar-finance-v1";
const PREVIOUS_STORAGE_KEY = "northstar-finance-v1-previous";
const PORTABLE_DATA_FORMAT = "northstar-finance-portable-v1";

const sampleData = {
  assets: [
    { id: 1, name: "Checking and savings", amount: 18400, category: "cash" },
    { id: 2, name: "Investment accounts", amount: 42000, category: "investments" },
    { id: 3, name: "Vehicle", amount: 18000, category: "property" }
  ],
  liabilities: [
    { id: 1, name: "Student loan", amount: 11200, category: "personal-loans" },
    { id: 2, name: "Auto loan", amount: 5250, category: "auto-loans" }
  ],
  netWorthHistory: [48900, 51200, 54500, 56650, 59400, 61950],
  transactions: [
    { id: 1, name: "June paycheck", amount: 4200, type: "income", category: "Income", date: "2026-06-05" },
    { id: 2, name: "Corner Market", amount: 86.42, type: "expense", category: "Food", date: "2026-06-04" },
    { id: 3, name: "Apartment rent", amount: 1450, type: "expense", category: "Housing", date: "2026-06-01" },
    { id: 4, name: "Freelance project", amount: 680, type: "income", category: "Income", date: "2026-05-30" },
    { id: 5, name: "Metro card", amount: 75, type: "expense", category: "Transport", date: "2026-05-28" },
    { id: 6, name: "Dinner with friends", amount: 64.30, type: "expense", category: "Lifestyle", date: "2026-05-26" }
  ],
  expenseLog: [
    { id: 1, name: "Rent", amount: 1450, status: "paid", payPeriod: "first" },
    { id: 2, name: "Electricity", amount: 95, status: "unpaid", payPeriod: "first" },
    { id: 3, name: "Gym membership", amount: 45, status: "na", payPeriod: "second" }
  ],
  budgets: [
    { id: 1, name: "Housing", limit: 1800, spent: 1450 },
    { id: 2, name: "Food", limit: 650, spent: 392 },
    { id: 3, name: "Transport", limit: 300, spent: 118 },
    { id: 4, name: "Lifestyle", limit: 450, spent: 365 },
    { id: 5, name: "Health", limit: 200, spent: 48 }
  ],
  goals: [
    { id: 1, name: "Emergency fund", target: 12000, saved: 8400, date: "2026-12-31" },
    { id: 2, name: "Japan adventure", target: 6500, saved: 2140, date: "2027-04-15" }
  ],
  debts: [
    { id: 1, name: "Credit card", balance: 2800, apr: 19.9, payment: 250 },
    { id: 2, name: "Student loan", balance: 11200, apr: 5.2, payment: 180 }
  ],
  emergencyFund: { balance: 8400, expenses: 2800 },
  retirement: { age: 34, retireAge: 65, balance: 42000, contribution: 650, returnRate: 7, target: 1200000 },
  bills: [
    { id: 1, name: "Rent", amount: 1450, date: "2026-06-10", paid: false },
    { id: 2, name: "Internet", amount: 75, date: "2026-06-14", paid: false },
    { id: 3, name: "Car insurance", amount: 138, date: "2026-06-18", paid: false }
  ],
  archivedTransactions: [],
  sync: { lastSavedAt: "", lastExportedAt: "", lastImportedAt: "", lastImportName: "" },
  categories: [
    { id: 1, name: "Housing", type: "expense", color: "#2c7658" },
    { id: 2, name: "Utilities", type: "expense", color: "#4f7f9f" },
    { id: 3, name: "Food", type: "expense", color: "#e78065" },
    { id: 4, name: "Transport", type: "expense", color: "#f4c95d" },
    { id: 5, name: "Insurance", type: "expense", color: "#8f78aa" },
    { id: 6, name: "Health", type: "expense", color: "#c55e72" },
    { id: 7, name: "Travel", type: "expense", color: "#3b8f8b" },
    { id: 8, name: "Lifestyle", type: "expense", color: "#ce8f45" },
    { id: 9, name: "Income", type: "income", color: "#194f3b" },
    { id: 10, name: "Freelance", type: "income", color: "#6b8e55" },
    { id: 11, name: "Other", type: "expense", color: "#718078" }
  ],
  settings: {
    general: {
      appName: "Northstar", logoData: "", name: "My finances", householdSize: 1,
      lifeStage: "Building a career", currency: "USD", dateFormat: "mdy", budgetCycle: "monthly",
      theme: "light", accentColor: "#194f3b", secondaryColor: "#2c7658",
      backgroundColor: "#f4f1e8", cardColor: "#fffdf8", moneyColor: "#17251f",
      incomeColor: "#2c7658", debtColor: "#c34f43",
      sectionDensity: "comfortable", expenseLogView: "list",
      sectionTabs: [
        { id: "dashboard", visible: true }, { id: "income", visible: true },
        { id: "budgets", visible: true }, { id: "expenses", visible: true },
        { id: "debt", visible: true }, { id: "savings", visible: true },
        { id: "retirement", visible: true }, { id: "networth", visible: true },
        { id: "bills", visible: true }, { id: "reports", visible: true },
        { id: "settings", visible: true }, { id: "calculator", visible: true }
      ],
      overviewWidgets: [
        { id: "networth", visible: true }, { id: "snapshot", visible: true },
        { id: "budget", visible: true }, { id: "goals", visible: true },
        { id: "recent", visible: true }
      ]
    },
    financial: { incomeFrequency: "biweekly", expectedIncome: 8400, budgetMethod: "custom", savingsTarget: 20, emergencyMonths: 6, autoSavings: true, debtMethod: "avalanche" },
    planning: { inflation: 3, includeVehicles: true, includeInvestments: true },
    notifications: { billReminders: true, budgetAlerts: true, savingsMilestones: true, overspending: true, summaryFrequency: "weekly", billLeadDays: 7 },
    privacy: { hideBalances: false, autoLogout: "off" },
    analytics: { reportPeriod: "month", chartStyle: "line", exportFormat: "pdf", taxTagging: false },
    health: { debtWeight: 25, savingsWeight: 25, netWorthWeight: 25, emergencyWeight: 25 },
    collapsedSections: {}
  }
};

let data = loadData();
const editing = { transaction: null, budget: null, goal: null, asset: null, liability: null, debt: null, bill: null, expenseLog: null };
let transactionFilter = "all";
let draggedExpenseId = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
let currency;
let preciseCurrency;
const SECTION_TAB_LABELS = {
  dashboard: ["Overview", "Dashboard, snapshot, and recent activity"],
  income: ["Income", "Income streams and received payments"],
  budgets: ["Budget", "Monthly category limits"],
  expenses: ["Expenses", "Expense log and spending categories"],
  debt: ["Debt payoff", "Debt balances and payment tracking"],
  savings: ["Savings", "Savings goals and emergency fund"],
  retirement: ["Retirement", "Investment and retirement planning"],
  networth: ["Net worth", "Asset and liability dashboard"],
  bills: ["Bills", "Due-date reminders"],
  reports: ["Reports", "Financial snapshot reports"],
  settings: ["Settings", "App preferences and data tools"],
  calculator: ["Calculator", "Interest, loan, and retirement calculators"]
};

function loadData() {
  try {
    return normalizeData(JSON.parse(localStorage.getItem(STORAGE_KEY)) || structuredClone(sampleData));
  } catch {
    return structuredClone(sampleData);
  }
}

function normalizeData(saved) {
  if (!Array.isArray(saved.assets)) {
    saved.assets = saved.assets ? [{ id: Date.now(), name: "Existing assets", amount: Number(saved.assets) }] : [];
  }
  if (!Array.isArray(saved.liabilities)) {
    saved.liabilities = saved.liabilities ? [{ id: Date.now() + 1, name: "Existing liabilities", amount: Number(saved.liabilities) }] : [];
  }
  saved.assets.forEach(account => { account.category ??= inferAccountCategory(account.name, "asset"); });
  saved.liabilities.forEach(account => { account.category ??= inferAccountCategory(account.name, "liability"); });
  saved.debts ??= structuredClone(sampleData.debts);
  saved.emergencyFund ??= structuredClone(sampleData.emergencyFund);
  saved.retirement ??= structuredClone(sampleData.retirement);
  saved.bills ??= structuredClone(sampleData.bills);
  saved.expenseLog ??= structuredClone(sampleData.expenseLog);
  saved.expenseLog.forEach((item, index) => { item.payPeriod ??= index % 2 ? "second" : "first"; });
  saved.archivedTransactions ??= [];
  saved.sync = Object.assign({ lastSavedAt: "", lastExportedAt: "", lastImportedAt: "", lastImportName: "" }, saved.sync || {});
  saved.categories ??= structuredClone(sampleData.categories);
  saved.settings = mergeSettings(saved.settings);
  return saved;
}

function inferAccountCategory(name, type) {
  const value = String(name).toLowerCase();
  if (type === "asset") {
    if (/(crypto|bitcoin|ethereum|btc|eth)/.test(value)) return "crypto";
    if (/(investment|401|ira|brokerage|stock|fund)/.test(value)) return "investments";
    if (/(property|home|house|vehicle|auto|car|land|real estate)/.test(value)) return "property";
    return "cash";
  }
  if (/(credit|card)/.test(value)) return "credit-cards";
  if (/(mortgage|home|house)/.test(value)) return "home-loans";
  if (/(auto|vehicle|car)/.test(value)) return "auto-loans";
  return "personal-loans";
}

function mergeSettings(saved = {}) {
  const defaults = structuredClone(sampleData.settings);
  Object.keys(defaults).forEach(section => Object.assign(defaults[section], saved[section] || {}));
  const widgetDefaults = sampleData.settings.general.overviewWidgets;
  const savedWidgets = saved.general?.overviewWidgets;
  defaults.general.overviewWidgets = widgetDefaults.map(widget => ({
    id: widget.id,
    visible: savedWidgets?.find(item => item.id === widget.id)?.visible ?? true
  })).sort((a, b) => {
    if (!savedWidgets) return 0;
    const aIndex = savedWidgets.findIndex(item => item.id === a.id);
    const bIndex = savedWidgets.findIndex(item => item.id === b.id);
    return (aIndex < 0 ? 999 : aIndex) - (bIndex < 0 ? 999 : bIndex);
  });
  const tabDefaults = sampleData.settings.general.sectionTabs;
  const savedTabs = saved.general?.sectionTabs;
  defaults.general.sectionTabs = tabDefaults.map(tab => ({
    id: tab.id,
    visible: tab.id === "dashboard" ? true : savedTabs?.find(item => item.id === tab.id)?.visible ?? true
  })).sort((a, b) => {
    if (!savedTabs) return 0;
    const aIndex = savedTabs.findIndex(item => item.id === a.id);
    const bIndex = savedTabs.findIndex(item => item.id === b.id);
    return (aIndex < 0 ? 999 : aIndex) - (bIndex < 0 ? 999 : bIndex);
  });
  return defaults;
}

function updateFormatters() {
  const code = data.settings.general.currency || "USD";
  currency = new Intl.NumberFormat(undefined, { style: "currency", currency: code, maximumFractionDigits: 0 });
  preciseCurrency = new Intl.NumberFormat(undefined, { style: "currency", currency: code });
}

function accountTotal(accounts) {
  return accounts.reduce((sum, account) => sum + Number(account.amount), 0);
}

function includedAssets() {
  const planning = data.settings.planning;
  return data.assets.filter(asset => {
    const name = asset.name.toLowerCase();
    if (!planning.includeVehicles && asset.category === "property" && /(vehicle|auto|car)/.test(name)) return false;
    if (!planning.includeInvestments && asset.category === "investments") return false;
    return true;
  });
}

function saveData() {
  data.sync ??= {};
  data.sync.lastSavedAt = new Date().toISOString();
  const next = JSON.stringify(data);
  const current = localStorage.getItem(STORAGE_KEY);
  if (current && current !== next) localStorage.setItem(PREVIOUS_STORAGE_KEY, current);
  localStorage.setItem(STORAGE_KEY, next);
  updateRestoreAvailability();
  renderSyncStatus();
}

function updateRestoreAvailability() {
  const button = $("#restorePrevious");
  if (!button) return;
  const available = Boolean(localStorage.getItem(PREVIOUS_STORAGE_KEY));
  button.disabled = !available;
  button.title = available ? "Restore the previous saved version" : "No previous version is available yet";
}

function monthTotals() {
  const monthKey = new Date().toISOString().slice(0, 7);
  const monthly = data.transactions.filter(t => t.date.startsWith(monthKey));
  const income = monthly.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  const spent = monthly.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
  return { income, spent, saved: income - spent };
}

function reportTotals() {
  const now = new Date();
  const period = data.settings.analytics.reportPeriod;
  const filtered = data.transactions.filter(item => {
    const date = new Date(`${item.date}T12:00:00`);
    if (period === "year") return date.getFullYear() === now.getFullYear();
    if (period === "quarter") return date.getFullYear() === now.getFullYear() && Math.floor(date.getMonth() / 3) === Math.floor(now.getMonth() / 3);
    return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
  });
  const income = filtered.filter(item => item.type === "income").reduce((sum, item) => sum + item.amount, 0);
  const spent = filtered.filter(item => item.type === "expense").reduce((sum, item) => sum + item.amount, 0);
  return { income, spent, saved: income - spent };
}

function renderAll() {
  updateFormatters();
  renderDashboard();
  renderIncomeExpenses();
  renderBudgets();
  renderGoals();
  renderNetWorth();
  renderDebts();
  renderEmergencyFund();
  renderRetirement();
  renderBills();
  renderReports();
  renderSettings();
  renderSyncStatus();
  renderExpenseLog();
  renderCalculatorFields();
  applySettings();
  initializeCollapsibles();
}

function formatSyncDate(value, fallback = "Never") {
  if (!value) return fallback;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return fallback;
  return date.toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

function renderSyncStatus() {
  if (!$("#syncLastSaved")) return;
  data.sync ??= {};
  $("#syncLastSaved").textContent = formatSyncDate(data.sync.lastSavedAt, "Not yet");
  $("#syncLastExported").textContent = formatSyncDate(data.sync.lastExportedAt);
  const imported = formatSyncDate(data.sync.lastImportedAt);
  $("#syncLastImported").textContent = data.sync.lastImportName && imported !== "Never" ? `${imported} from ${data.sync.lastImportName}` : imported;
}

function portableFilename() {
  const appName = data.settings.general.appName?.trim() || "northstar";
  const safeName = appName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "northstar";
  return `${safeName}-finance-update-${new Date().toISOString().slice(0, 10)}.json`;
}

function portablePayload(exportedAt = new Date().toISOString()) {
  data.sync ??= {};
  data.sync.lastExportedAt = exportedAt;
  saveData();
  return JSON.stringify({
    format: PORTABLE_DATA_FORMAT,
    app: data.settings.general.appName?.trim() || "Northstar",
    exportedAt,
    instructions: "Import this file in Northstar Settings > Data & privacy to update another browser or mobile device.",
    data
  }, null, 2);
}

function parsePortableData(raw) {
  const parsed = JSON.parse(raw);
  const payload = parsed?.format === PORTABLE_DATA_FORMAT && parsed.data ? parsed.data : parsed;
  if (!payload || typeof payload !== "object") throw new Error("Invalid data file");
  if (!Array.isArray(payload.transactions) || !payload.settings) throw new Error("Not a Northstar data file");
  return normalizeData(payload);
}

async function sharePortableData() {
  const filename = portableFilename();
  const content = portablePayload();
  if (navigator.share && window.File) {
    const file = new File([content], filename, { type: "application/json" });
    if (!navigator.canShare || navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: `${data.settings.general.appName || "Northstar"} finance update`,
        text: "Import this Northstar file on another browser or mobile device to update it.",
        files: [file]
      });
      toast("Update file shared");
      return;
    }
  }
  downloadFile(filename, content, "application/json");
  toast("Sharing is not available here, so the update file was downloaded");
}

const calculatorConfigs = {
  compound: {
    label: "Future value",
    fields: [
      ["principal", "Starting amount", "number", 10000],
      ["rate", "Annual interest rate %", "number", 7],
      ["years", "Years", "number", 10],
      ["contribution", "Monthly contribution", "number", 250],
      ["frequency", "Compounding", "select", "monthly", [["monthly", "Monthly"], ["quarterly", "Quarterly"], ["annually", "Annually"]]]
    ]
  },
  savings: {
    label: "Monthly amount needed",
    fields: [
      ["target", "Savings goal", "number", 25000],
      ["current", "Already saved", "number", 5000],
      ["rate", "Annual interest rate %", "number", 4],
      ["years", "Years to save", "number", 3]
    ]
  },
  loan: {
    label: "Monthly payment",
    fields: [
      ["amount", "Loan amount", "number", 30000],
      ["rate", "Annual interest rate %", "number", 6.5],
      ["years", "Loan term in years", "number", 5],
      ["extra", "Extra monthly payment", "number", 0]
    ]
  },
  retirement: {
    label: "Projected retirement balance",
    fields: [
      ["current", "Current investments", "number", 42000],
      ["contribution", "Monthly contribution", "number", 650],
      ["rate", "Annual return %", "number", 7],
      ["currentAge", "Current age", "number", 34],
      ["retirementAge", "Retirement age", "number", 65],
      ["inflation", "Inflation %", "number", 3]
    ]
  }
};

function renderCalculatorFields() {
  const type = $("#calculatorType")?.value || "compound";
  const config = calculatorConfigs[type];
  if (!config || !$("#calculatorFields")) return;
  $("#calculatorFields").className = "calculator-fields";
  $("#calculatorFields").innerHTML = config.fields.map(([name, label, inputType, value, options]) => {
    if (inputType === "select") return `<label>${label}<select name="${name}">${options.map(([optionValue, text]) => `<option value="${optionValue}" ${optionValue === value ? "selected" : ""}>${text}</option>`).join("")}</select></label>`;
    return `<label>${label}<input name="${name}" type="number" min="0" step="0.01" value="${value}" required></label>`;
  }).join("");
  if (type === "retirement") {
    const plan = data.retirement;
    const form = $("#calculatorForm");
    form.elements.current.value = plan.balance;
    form.elements.contribution.value = plan.contribution;
    form.elements.rate.value = plan.returnRate;
    form.elements.currentAge.value = plan.age;
    form.elements.retirementAge.value = plan.retireAge;
    form.elements.inflation.value = data.settings.planning.inflation;
  }
  $("#calculatorResultLabel").textContent = config.label;
}

function calculateScenario() {
  const type = $("#calculatorType").value;
  const values = formValues($("#calculatorForm"));
  let result = 0;
  let description = "";
  let breakdown = [];

  if (type === "compound") {
    const periods = { monthly: 12, quarterly: 4, annually: 1 }[values.frequency];
    const rate = values.rate / 100 / periods;
    const count = values.years * periods;
    const contributionPerPeriod = values.contribution * 12 / periods;
    const growth = rate ? values.principal * Math.pow(1 + rate, count) + contributionPerPeriod * ((Math.pow(1 + rate, count) - 1) / rate) : values.principal + contributionPerPeriod * count;
    const contributed = values.principal + values.contribution * 12 * values.years;
    result = growth;
    description = `Estimated value after ${values.years} years with ${values.frequency} compounding.`;
    breakdown = [["Contributed", contributed], ["Interest earned", growth - contributed], ["Annual rate", `${values.rate}%`]];
  } else if (type === "savings") {
    const months = Math.max(1, values.years * 12);
    const rate = values.rate / 1200;
    const grownCurrent = values.current * Math.pow(1 + rate, months);
    result = rate ? Math.max(0, (values.target - grownCurrent) * rate / (Math.pow(1 + rate, months) - 1)) : Math.max(0, (values.target - values.current) / months);
    description = `Estimated monthly deposit needed to reach ${currency.format(values.target)} in ${values.years} years.`;
    breakdown = [["Current savings", values.current], ["Goal", values.target], ["Interest rate", `${values.rate}%`]];
  } else if (type === "loan") {
    const months = Math.max(1, values.years * 12);
    const rate = values.rate / 1200;
    const base = rate ? values.amount * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1) : values.amount / months;
    result = base + values.extra;
    let balance = values.amount;
    let paid = 0;
    let payoffMonths = 0;
    while (balance > 0.005 && payoffMonths < 1200) {
      const interest = balance * rate;
      const payment = Math.min(balance + interest, result);
      if (payment <= interest) break;
      balance = balance + interest - payment;
      paid += payment;
      payoffMonths += 1;
    }
    description = `Estimated payment with payoff in ${payoffMonths || "more than 1,200"} months, including the selected extra payment.`;
    breakdown = [["Base payment", base], ["Total payments", paid], ["Estimated interest", paid - values.amount]];
  } else {
    const months = Math.max(0, values.retirementAge - values.currentAge) * 12;
    const rate = Math.max(0, values.rate - values.inflation) / 1200;
    result = rate ? values.current * Math.pow(1 + rate, months) + values.contribution * ((Math.pow(1 + rate, months) - 1) / rate) : values.current + values.contribution * months;
    const contributed = values.current + values.contribution * months;
    description = `Inflation-adjusted projection at age ${values.retirementAge}. This is an estimate, not a guarantee.`;
    breakdown = [["Contributed", contributed], ["Estimated growth", result - contributed], ["Years invested", `${values.retirementAge - values.currentAge}`]];
  }

  $("#calculatorResult").textContent = currency.format(result);
  $("#calculatorResultDescription").textContent = description;
  $("#calculatorBreakdown").innerHTML = breakdown.map(([label, value]) => `<div><span>${label}</span><strong>${typeof value === "number" ? currency.format(value) : value}</strong></div>`).join("");
}

function renderDashboard() {
  const netWorth = accountTotal(includedAssets()) - accountTotal(data.liabilities);
  const first = data.netWorthHistory[0];
  const trend = ((netWorth - first) / first) * 100;
  const totals = monthTotals();
  const savingsRate = totals.income ? Math.max(0, totals.saved / totals.income * 100) : 0;

  $("#netWorthValue").textContent = currency.format(netWorth);
  $("#netWorthTrend").textContent = `${trend >= 0 ? "↑" : "↓"} ${Math.abs(trend).toFixed(1)}%`;
  $("#incomeValue").textContent = currency.format(totals.income);
  $("#spentValue").textContent = currency.format(totals.spent);
  $("#savedValue").textContent = currency.format(totals.saved);
  $("#savingsRate").textContent = `${Math.round(savingsRate)}%`;
  $("#savingsProgress").style.width = `${Math.min(savingsRate, 100)}%`;
  renderNetWorthChart(netWorth);

  const totalBudget = data.budgets.reduce((sum, b) => sum + b.limit, 0);
  const totalSpent = data.budgets.reduce((sum, b) => sum + b.spent, 0);
  const budgetPct = totalBudget ? Math.round(totalSpent / totalBudget * 100) : 0;
  $("#budgetPercent").textContent = `${budgetPct}%`;
  $("#budgetRing").style.background = `conic-gradient(var(--green) ${Math.min(budgetPct, 100)}%, #e8e8e1 0)`;

  $("#budgetPreview").innerHTML = data.budgets.slice(0, 3).map(budgetItemMarkup).join("") ||
    `<div class="empty-state">No budgets yet.</div>`;

  $("#goalPreview").innerHTML = data.goals.slice(0, 3).map((goal, i) => {
    const pct = Math.min(100, Math.round(goal.saved / goal.target * 100));
    return `<div class="goal-preview-item">
      <div class="goal-symbol ${i % 2 ? "alt" : ""}">${i % 2 ? "✦" : "⌁"}</div>
      <div><strong>${escapeHtml(goal.name)}</strong><span>${currency.format(goal.saved)} of ${currency.format(goal.target)}</span></div>
      <div class="goal-pct">${pct}%</div>
    </div>`;
  }).join("") || `<div class="empty-state">No goals yet.</div>`;

  $("#recentTransactions").innerHTML = transactionRows(data.transactions.slice(0, 5), false);
}

function renderNetWorth() {
  const assets = accountTotal(includedAssets());
  const liabilities = accountTotal(data.liabilities);
  $("#netWorthPageTotal").textContent = currency.format(assets - liabilities);
  $("#assetTotal").textContent = currency.format(assets);
  $("#liabilityTotal").textContent = currency.format(liabilities);
  $("#assetHeadingTotal").textContent = currency.format(assets);
  $("#liabilityHeadingTotal").textContent = currency.format(liabilities);
  $("#assetCount").textContent = `${data.assets.length} ${data.assets.length === 1 ? "account" : "accounts"}`;
  $("#liabilityCount").textContent = `${data.liabilities.length} ${data.liabilities.length === 1 ? "account" : "accounts"}`;
  $("#assetList").innerHTML = accountGroups(data.assets, "asset");
  $("#liabilityList").innerHTML = accountGroups(data.liabilities, "liability");
}

function accountGroups(accounts, type) {
  const groups = type === "asset"
    ? [["cash", "Cash"], ["investments", "Investments"], ["property", "Property"], ["crypto", "Crypto"]]
    : [["credit-cards", "Credit Cards"], ["home-loans", "Home Loans"], ["auto-loans", "Auto Loans"], ["personal-loans", "Personal Loans"]];
  return groups.map(([key, label]) => {
    const items = accounts.filter(account => account.category === key);
    const subtotal = accountTotal(items);
    return `<section class="account-category-group">
      <div class="account-category-header"><strong>${label}</strong><span>${currency.format(subtotal)}</span></div>
      ${items.length ? accountRows(items, type) : `<div class="account-category-empty">No accounts in this category.</div>`}
    </section>`;
  }).join("");
}

function accountRows(accounts, type) {
  return accounts.map(account => `<div class="account-row">
    <div class="account-row-icon">${type === "asset" ? "＋" : "−"}</div>
    <div class="account-row-name">${escapeHtml(account.name)}</div>
    <div class="account-row-amount">${preciseCurrency.format(account.amount)}</div>
    <div class="entry-actions"><button class="edit-button" data-edit-account="${account.id}" data-account-type="${type}">Edit</button>
    <button class="delete-button" data-delete-account="${account.id}" data-account-type="${type}" aria-label="Delete ${escapeHtml(account.name)}">×</button></div>
  </div>`).join("");
}

function renderNetWorthChart(current) {
  const values = [...data.netWorthHistory.slice(0, 5), current];
  const min = Math.min(...values) * .96;
  const max = Math.max(...values) * 1.04;
  const width = 600;
  const height = 120;
  const points = values.map((v, i) => {
    const x = i * (width / (values.length - 1));
    const y = height - ((v - min) / (max - min || 1)) * height;
    return [x, y];
  });
  const line = points.map(p => p.join(",")).join(" ");
  const area = `0,${height} ${line} ${width},${height}`;
  $("#netWorthChart").innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
      <defs><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#dceda6" stop-opacity=".32"/>
        <stop offset="100%" stop-color="#dceda6" stop-opacity="0"/>
      </linearGradient></defs>
      <polygon points="${area}" fill="url(#areaFill)"/>
      <polyline points="${line}" fill="none" stroke="#dceda6" stroke-width="3" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/>
      ${points.map((p, i) => `<circle cx="${p[0]}" cy="${p[1]}" r="${i === points.length - 1 ? 5 : 2.5}" fill="#dceda6" stroke="#194f3b" stroke-width="2" vector-effect="non-scaling-stroke"/>`).join("")}
    </svg>`;
}

function budgetItemMarkup(b) {
  const pct = Math.min(100, Math.round(b.spent / b.limit * 100));
  return `<div class="budget-item">
    <div class="budget-item-head"><strong>${escapeHtml(b.name)}</strong><span>${currency.format(b.spent)} / ${currency.format(b.limit)}</span></div>
    <div class="mini-track"><div class="${pct >= 80 ? "warn" : ""}" style="width:${pct}%"></div></div>
  </div>`;
}

function renderIncomeExpenses() {
  const income = data.transactions.filter(t => t.type === "income");
  const expenses = data.transactions.filter(t => t.type === "expense");
  const monthKey = new Date().toISOString().slice(0, 7);
  const monthlyIncome = income.filter(t => t.date.startsWith(monthKey)).reduce((sum, t) => sum + t.amount, 0);
  const annualIncome = income.filter(t => t.date.startsWith(String(new Date().getFullYear()))).reduce((sum, t) => sum + t.amount, 0);
  const averageIncome = income.length ? income.reduce((sum, t) => sum + t.amount, 0) / income.length : 0;
  $("#incomeSummary").innerHTML = `
    <div class="summary-tile"><span>This month</span><strong>${currency.format(monthlyIncome)}</strong></div>
    <div class="summary-tile"><span>This year</span><strong>${currency.format(annualIncome)}</strong></div>
    <div class="summary-tile"><span>Average deposit</span><strong>${currency.format(averageIncome)}</strong></div>`;
  $("#incomeTransactions").innerHTML = transactionRows(income, true);
  $("#expenseTransactions").innerHTML = transactionRows(expenses, true);

  const categories = expenses.reduce((totals, item) => {
    totals[item.category] = (totals[item.category] || 0) + item.amount;
    return totals;
  }, {});
  const max = Math.max(...Object.values(categories), 1);
  const orderedCategories = data.categories.filter(category => category.type === "expense" && categories[category.name]);
  Object.keys(categories).filter(name => !data.categories.some(category => category.name === name))
    .forEach(name => orderedCategories.push({ name, color: "#2c7658" }));
  $("#expenseCategories").innerHTML = orderedCategories
    .map(category => {
      const name = category.name;
      const amount = categories[name];
      const color = category.color || "#2c7658";
      return `<article class="category-card" style="border-top:4px solid ${color}">
      <span>${escapeHtml(name)}</span><strong>${currency.format(amount)}</strong>
      <div class="mini-track"><div style="width:${amount / max * 100}%;background:${color}"></div></div>
    </article>`;
    }).join("") || `<div class="empty-state">Add an expense to see category totals.</div>`;
}

function renderExpenseLog() {
  const statuses = data.expenseLog.reduce((counts, item) => {
    counts[item.status] = (counts[item.status] || 0) + 1;
    return counts;
  }, { paid: 0, unpaid: 0, na: 0 });
  $("#expenseLogSummary").innerHTML = `
    <span>${statuses.paid} paid</span>
    <span>${statuses.unpaid} unpaid</span>
    <span>${statuses.na} N/A</span>`;
  const firstTotal = data.expenseLog.filter(item => item.payPeriod === "first" && item.status === "unpaid").reduce((sum, item) => sum + item.amount, 0);
  const secondTotal = data.expenseLog.filter(item => item.payPeriod === "second" && item.status === "unpaid").reduce((sum, item) => sum + item.amount, 0);
  $("#firstHalfTotal").textContent = preciseCurrency.format(firstTotal);
  $("#secondHalfTotal").textContent = preciseCurrency.format(secondTotal);
  const list = $("#expenseLogList");
  const view = data.settings.general.expenseLogView || "list";
  list.className = `expense-log-list expense-log-list-${view}`;
  const rowTemplate = item => `<div class="expense-log-row" data-expense-row="${item.id}">
    <button class="drag-handle" type="button" draggable="true" aria-label="Drag to reorder ${escapeHtml(item.name)}" title="Drag to reorder">::</button>
    <div class="expense-log-name status-${item.status}">${escapeHtml(item.name)}</div>
    <div class="expense-log-amount">${item.amount ? preciseCurrency.format(item.amount) : "No amount set"}</div>
    <div class="expense-pay-period">${item.payPeriod === "first" ? "1st Half of the Month" : "2nd Half of the Month"}</div>
    <select class="expense-status-select" data-expense-status="${item.id}" aria-label="Status for ${escapeHtml(item.name)}">
      <option value="paid" ${item.status === "paid" ? "selected" : ""}>Paid</option>
      <option value="unpaid" ${item.status === "unpaid" ? "selected" : ""}>Unpaid</option>
      <option value="na" ${item.status === "na" ? "selected" : ""}>N/A</option>
    </select>
    <div class="entry-actions"><button class="order-button" data-move-expense="${item.id}" data-direction="-1" aria-label="Move ${escapeHtml(item.name)} up">Up</button>
    <button class="order-button" data-move-expense="${item.id}" data-direction="1" aria-label="Move ${escapeHtml(item.name)} down">Dn</button>
    <button class="edit-button" data-edit-expense-log="${item.id}">Edit</button>
    <button class="delete-button" data-delete-expense-log="${item.id}" aria-label="Delete ${escapeHtml(item.name)}">x</button></div>
  </div>`;
  if (view === "pay-period-columns") {
    const first = data.expenseLog.filter(item => item.payPeriod === "first").map(rowTemplate).join("") || `<div class="empty-state">No 1st half expenses yet.</div>`;
    const second = data.expenseLog.filter(item => item.payPeriod === "second").map(rowTemplate).join("") || `<div class="empty-state">No 2nd half expenses yet.</div>`;
    list.innerHTML = `
      <section class="expense-log-column" aria-label="1st Half of the Month">
        <div class="expense-log-column-heading"><span>1st Half of the Month</span><strong>${preciseCurrency.format(firstTotal)}</strong></div>
        ${first}
      </section>
      <section class="expense-log-column" aria-label="2nd Half of the Month">
        <div class="expense-log-column-heading"><span>2nd Half of the Month</span><strong>${preciseCurrency.format(secondTotal)}</strong></div>
        ${second}
      </section>`;
    return;
  }
  list.innerHTML = data.expenseLog.map(rowTemplate).join("") || `<div class="empty-state">Add recurring expenses to create your monthly checklist.</div>`;
}

function transactionRows(items, deletable) {
  if (!items.length) return `<div class="empty-state">Nothing here yet. Add your first transaction.</div>`;
  const icons = { Housing: "⌂", Food: "○", Transport: "→", Lifestyle: "✦", Health: "+", Income: "↑", Other: "•" };
  return items.map(t => `<div class="transaction-row">
    <div class="transaction-icon">${icons[t.category] || "•"}</div>
    <div class="transaction-name"><strong>${escapeHtml(t.name)}</strong><span>${formatDate(t.date)}</span></div>
    <div class="transaction-category">${escapeHtml(t.category)}</div>
    <div class="transaction-amount ${t.type}">${t.type === "income" ? "+" : "−"}${preciseCurrency.format(t.amount)}</div>
    ${deletable ? `<div class="entry-actions"><button class="edit-button" data-edit-transaction="${t.id}">Edit</button><button class="delete-button" data-delete-transaction="${t.id}" aria-label="Delete ${escapeHtml(t.name)}">×</button></div>` : "<span></span>"}
  </div>`).join("");
}

function renderBudgets() {
  const limit = data.budgets.reduce((sum, b) => sum + b.limit, 0);
  const spent = data.budgets.reduce((sum, b) => sum + b.spent, 0);
  const remaining = limit - spent;
  $("#budgetSummary").innerHTML = `
    <div class="summary-tile"><span>Total planned</span><strong>${currency.format(limit)}</strong></div>
    <div class="summary-tile"><span>Spent so far</span><strong>${currency.format(spent)}</strong></div>
    <div class="summary-tile"><span>Still available</span><strong>${currency.format(remaining)}</strong></div>`;
  $("#budgetBoard").innerHTML = data.budgets.map((b, i) => {
    const pct = Math.min(100, Math.round(b.spent / b.limit * 100));
    const remaining = b.limit - b.spent;
    return `<article class="budget-tile">
      <div class="tile-top"><div class="category-mark">${["⌂","○","→","✦","+"][i % 5]}</div><div class="entry-actions"><button class="edit-button" data-edit-budget="${b.id}">Edit</button><button class="delete-button" data-delete-budget="${b.id}" aria-label="Delete budget">×</button></div></div>
      <h3>${escapeHtml(b.name)}</h3><span class="tile-caption">${pct}% of monthly limit used</span>
      <div class="budget-number">${currency.format(Math.max(remaining, 0))}</div><span class="tile-caption">remaining of ${currency.format(b.limit)}</span>
      <div class="mini-track tile-progress"><div class="${pct >= 80 ? "warn" : ""}" style="width:${pct}%"></div></div>
    </article>`;
  }).join("") || `<div class="empty-state">Start with one budget category. You can always refine it later.</div>`;
}

function renderGoals() {
  $("#goalBoard").innerHTML = data.goals.map((g, i) => {
    const pct = Math.min(100, Math.round(g.saved / g.target * 100));
    return `<article class="goal-tile">
      <div class="tile-top"><div class="category-mark">${i % 2 ? "✦" : "⌁"}</div><div class="entry-actions"><button class="edit-button" data-edit-goal="${g.id}">Edit</button><button class="delete-button" data-delete-goal="${g.id}" aria-label="Delete goal">×</button></div></div>
      <h3>${escapeHtml(g.name)}</h3><span class="tile-caption">Target ${formatDate(g.date)}</span>
      <div class="goal-amounts"><strong>${currency.format(g.saved)}</strong><span>of ${currency.format(g.target)}</span></div>
      <div class="mini-track"><div style="width:${pct}%"></div></div>
      <span class="tile-caption">${pct}% funded</span>
    </article>`;
  }).join("") || `<div class="empty-state">A named goal is easier to save for. Add something meaningful.</div>`;
}

function renderDebts() {
  const total = data.debts.reduce((sum, debt) => sum + debt.balance, 0);
  const payments = data.debts.reduce((sum, debt) => sum + debt.payment, 0);
  const interest = data.debts.reduce((sum, debt) => sum + debt.balance * debt.apr / 1200, 0);
  $("#debtSummary").innerHTML = `
    <div class="summary-tile"><span>Total debt</span><strong>${currency.format(total)}</strong></div>
    <div class="summary-tile"><span>Planned monthly payments</span><strong>${currency.format(payments)}</strong></div>
    <div class="summary-tile"><span>Estimated monthly interest</span><strong>${currency.format(interest)}</strong></div>`;
  $("#debtBoard").innerHTML = data.debts.map(debt => {
    const months = payoffMonths(debt.balance, debt.apr, debt.payment);
    const payoffLabel = typeof months === "number" ? `${months} months estimated` : "Payment is below monthly interest";
    return `<article class="debt-card">
      <div class="tile-top"><div><h3>${escapeHtml(debt.name)}</h3><div class="debt-meta"><span>${debt.apr}% APR</span><span>${payoffLabel}</span></div></div>
      <div class="entry-actions"><button class="edit-button" data-edit-debt="${debt.id}">Edit</button><button class="delete-button" data-delete-debt="${debt.id}" aria-label="Delete debt">x</button></div></div>
      <div class="debt-balance">${currency.format(debt.balance)}</div>
      <span class="tile-caption">${currency.format(debt.payment)} planned each month</span>
      <div class="debt-actions"><input type="number" min="0.01" step="0.01" value="${debt.payment}" aria-label="Payment amount">
      <button class="small-button" data-pay-debt="${debt.id}">Record payment</button></div>
    </article>`;
  }).join("") || `<div class="empty-state">Add a debt to build a payoff plan.</div>`;
}

function payoffMonths(balance, apr, payment) {
  const monthlyRate = apr / 1200;
  if (payment <= balance * monthlyRate) return "No payoff";
  if (!monthlyRate) return Math.ceil(balance / payment);
  return Math.max(1, Math.ceil(-Math.log(1 - monthlyRate * balance / payment) / Math.log(1 + monthlyRate)));
}

function renderEmergencyFund() {
  const fund = data.emergencyFund;
  const months = fund.expenses ? fund.balance / fund.expenses : 0;
  const targetMonths = data.settings.financial.emergencyMonths;
  $("#emergencyMonths").textContent = months.toFixed(1);
  $("#emergencyProgress").style.width = `${Math.min(100, months / targetMonths * 100)}%`;
  $("#emergencyMessage").textContent = months >= targetMonths
    ? `You have reached your ${targetMonths}-month reserve target.`
    : `${currency.format(Math.max(0, fund.expenses * targetMonths - fund.balance))} more would reach your ${targetMonths}-month target.`;
  $("#emergencyForm [name=balance]").value = fund.balance;
  $("#emergencyForm [name=expenses]").value = fund.expenses;
}

function retirementProjection() {
  const plan = data.retirement;
  const months = Math.max(0, plan.retireAge - plan.age) * 12;
  const rate = Math.max(0, plan.returnRate - data.settings.planning.inflation) / 1200;
  if (!rate) return plan.balance + plan.contribution * months;
  return plan.balance * Math.pow(1 + rate, months) + plan.contribution * ((Math.pow(1 + rate, months) - 1) / rate);
}

function renderRetirement() {
  const plan = data.retirement;
  const projected = retirementProjection();
  const form = $("#retirementForm");
  Object.entries(plan).forEach(([key, value]) => { if (form.elements[key]) form.elements[key].value = value; });
  $("#retirementProjection").textContent = currency.format(projected);
  $("#retirementYears").textContent = `${Math.max(0, plan.retireAge - plan.age)} years to invest`;
  $("#retirementProgress").style.width = `${Math.min(100, projected / plan.target * 100)}%`;
  const gap = plan.target - projected;
  $("#retirementMessage").textContent = gap <= 0
    ? `This projection is ${currency.format(Math.abs(gap))} above your target.`
    : `At these assumptions, the projected gap is ${currency.format(gap)}. Returns are estimates, not guarantees.`;
}

function daysUntil(date) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return Math.ceil((new Date(`${date}T12:00:00`) - today) / 86400000);
}

function renderBills() {
  const sorted = [...data.bills].sort((a, b) => a.date.localeCompare(b.date));
  $("#billBoard").innerHTML = sorted.map(bill => {
    const days = daysUntil(bill.date);
    const label = bill.paid ? "Paid" : days < 0 ? `${Math.abs(days)} days late` : days === 0 ? "Due today" : `Due in ${days} days`;
    const urgent = data.settings.notifications.billReminders && !bill.paid && days <= data.settings.notifications.billLeadDays;
    return `<article class="bill-card ${urgent ? "due-soon" : ""} ${bill.paid ? "paid" : ""}">
      <div class="bill-top"><div><h3>${escapeHtml(bill.name)}</h3><div class="bill-meta"><span>${formatDate(bill.date)}</span><span>${preciseCurrency.format(bill.amount)}</span></div></div>
      <span class="due-pill ${urgent ? "urgent" : ""}">${label}</span></div>
      <div class="bill-actions"><button class="edit-button" data-edit-bill="${bill.id}">Edit</button><button class="small-button" data-toggle-bill="${bill.id}">${bill.paid ? "Mark unpaid" : "Mark paid"}</button>
      <button class="delete-button" data-delete-bill="${bill.id}" aria-label="Delete bill">x</button></div>
    </article>`;
  }).join("") || `<div class="empty-state">Add a bill and its due date to start your reminder list.</div>`;
}

function renderReports() {
  const totals = reportTotals();
  const assets = accountTotal(includedAssets());
  const liabilities = accountTotal(data.liabilities);
  const debt = data.debts.reduce((sum, item) => sum + item.balance, 0);
  const emergencyMonths = data.emergencyFund.balance / data.emergencyFund.expenses;
  const savingsRate = totals.income ? totals.saved / totals.income * 100 : 0;
  const retirementPct = retirementProjection() / data.retirement.target * 100;
  const overdue = data.bills.filter(b => !b.paid && daysUntil(b.date) < 0).length;
  const weights = data.settings.health;
  const weightTotal = Object.values(weights).reduce((sum, value) => sum + Number(value), 0) || 1;
  const debtScore = debt ? Math.max(0, 100 - debt / Math.max(totals.income * 12, 1) * 100) : 100;
  const savingsScore = Math.min(100, Math.max(0, savingsRate / Math.max(data.settings.financial.savingsTarget, 1) * 100));
  const netWorthScore = Math.min(100, Math.max(0, (assets - liabilities) / Math.max(assets, 1) * 100));
  const emergencyScore = Math.min(100, emergencyMonths / Math.max(data.settings.financial.emergencyMonths, 1) * 100);
  const weighted = debtScore * weights.debtWeight + savingsScore * weights.savingsWeight + netWorthScore * weights.netWorthWeight + emergencyScore * weights.emergencyWeight;
  const score = Math.round(Math.min(100, Math.max(0, weighted / weightTotal - Math.min(20, overdue * 5))));
  const periodNames = { month: "Monthly snapshot", quarter: "Quarterly snapshot", year: "Annual snapshot" };
  $("#reportDate").textContent = `${periodNames[data.settings.analytics.reportPeriod]} - ${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}`;
  $("#financialScore").textContent = score;
  $("#reportMetrics").innerHTML = [
    ["Net worth", currency.format(assets - liabilities)],
    ["Monthly cash flow", currency.format(totals.saved)],
    ["Tracked debt", currency.format(debt)],
    ["Emergency reserve", `${emergencyMonths.toFixed(1)} months`]
  ].map(([label, value]) => `<div class="report-metric"><span>${label}</span><strong>${value}</strong></div>`).join("");
  const highlights = [
    `${Math.max(0, savingsRate).toFixed(0)}% of this month's income remains after recorded expenses.`,
    `${data.goals.length} savings goal${data.goals.length === 1 ? "" : "s"} are currently being tracked.`,
    `Retirement investments project to ${currency.format(retirementProjection())} by age ${data.retirement.retireAge}.`
  ];
  const priorities = [
    overdue ? `Bring ${overdue} overdue bill${overdue === 1 ? "" : "s"} current.` : "No overdue bills are currently recorded.",
    emergencyMonths < 6 ? `Build another ${currency.format(data.emergencyFund.expenses * 6 - data.emergencyFund.balance)} in emergency reserves.` : "Maintain the fully funded emergency reserve.",
    debt ? `Continue the planned ${currency.format(data.debts.reduce((sum, item) => sum + item.payment, 0))} monthly debt payments.` : "No debts are currently tracked."
  ];
  $("#reportHighlights").innerHTML = `<div class="report-list">${highlights.map(item => `<div>${item}</div>`).join("")}</div>`;
  $("#reportPriorities").innerHTML = `<div class="report-list">${priorities.map(item => `<div>${item}</div>`).join("")}</div>`;
}

function renderSettings() {
  const sections = [
    ["generalSettingsForm", data.settings.general],
    ["financialSettingsForm", data.settings.financial],
    ["notificationSettingsForm", data.settings.notifications],
    ["privacySettingsForm", data.settings.privacy],
    ["analyticsSettingsForm", data.settings.analytics],
    ["healthSettingsForm", data.settings.health]
  ];
  sections.forEach(([id, values]) => fillForm($(`#${id}`), values));
  fillForm($("#planningSettingsForm"), {
    retireAge: data.retirement.retireAge,
    returnRate: data.retirement.returnRate,
    inflation: data.settings.planning.inflation,
    includeVehicles: data.settings.planning.includeVehicles,
    includeInvestments: data.settings.planning.includeInvestments
  });
  const methods = {
    custom: "Build category limits that fit your own plan.",
    zero: "Give every unit of income a job until income minus planned spending equals zero.",
    "503020": "Use 50% for needs, 30% for wants, and 20% for saving or debt repayment.",
    envelope: "Assign spending money to category envelopes and stop when each envelope is empty."
  };
  $("#budgetMethodHelp").textContent = methods[data.settings.financial.budgetMethod];
  renderCategorySettings();
  Object.entries(data.settings.health).forEach(([key, value]) => {
    const output = $(`#${key}Output`);
    if (output) output.textContent = `${value}%`;
  });
  renderOverviewSettings();
  renderSectionTabSettings();
  updateLogoPreview();
  updateRestoreAvailability();
}

function renderOverviewSettings() {
  const labels = {
    networth: ["Net worth", "Balance and six-month trend"],
    snapshot: ["Monthly snapshot", "Income, spending, and savings rate"],
    budget: ["Budget pulse", "Top monthly category limits"],
    goals: ["Savings goals", "Progress toward future goals"],
    recent: ["Recent activity", "Latest income and expenses"]
  };
  $("#overviewWidgetList").innerHTML = data.settings.general.overviewWidgets.map((widget, index, list) => `
    <div class="overview-widget-row">
      <div><strong>${labels[widget.id][0]}</strong><small>${labels[widget.id][1]}</small></div>
      <label class="toggle-row"><input type="checkbox" data-toggle-widget="${widget.id}" ${widget.visible ? "checked" : ""}></label>
      <div class="order-controls"><button class="order-button" data-move-widget="${widget.id}" data-direction="-1" ${index === 0 ? "disabled" : ""}>Up</button>
      <button class="order-button" data-move-widget="${widget.id}" data-direction="1" ${index === list.length - 1 ? "disabled" : ""}>Dn</button></div>
    </div>`).join("");
}

function renderSectionTabSettings() {
  $("#sectionTabList").innerHTML = data.settings.general.sectionTabs.map((tab, index, list) => {
    const label = SECTION_TAB_LABELS[tab.id] || [tab.id, "App section"];
    const locked = tab.id === "dashboard";
    return `
      <div class="section-tab-row">
        <div><strong>${label[0]}</strong><small>${label[1]}</small></div>
        <label class="toggle-row">
          <input type="checkbox" data-toggle-section-tab="${tab.id}" ${tab.visible ? "checked" : ""} ${locked ? "disabled" : ""}>
        </label>
        <div class="order-controls"><button class="order-button" data-move-section-tab="${tab.id}" data-direction="-1" ${index === 0 ? "disabled" : ""}>Up</button>
        <button class="order-button" data-move-section-tab="${tab.id}" data-direction="1" ${index === list.length - 1 ? "disabled" : ""}>Dn</button></div>
      </div>`;
  }).join("");
}

function fillForm(form, values) {
  if (!form) return;
  Object.entries(values).forEach(([key, value]) => {
    const fields = form.querySelectorAll(`[name="${key}"]`);
    fields.forEach(field => {
      if (field.type === "radio") field.checked = field.value === String(value);
      else if (field.type === "checkbox") field.checked = Boolean(value);
      else field.value = value;
    });
  });
}

function formValues(form) {
  const values = {};
  form.querySelectorAll("[name]").forEach(field => {
    if (field.type === "radio") {
      if (field.checked) values[field.name] = field.value;
    } else if (field.type === "checkbox") values[field.name] = field.checked;
    else if (field.type === "number" || field.type === "range") values[field.name] = Number(field.value);
    else values[field.name] = field.value;
  });
  return values;
}

function renderCategorySettings() {
  $("#managedCategoryList").innerHTML = data.categories.map((category, index) => `<div class="managed-category">
    <input class="category-color-input" type="color" value="${category.color}" data-category-color="${category.id}" aria-label="Change ${escapeHtml(category.name)} color">
    <strong>${escapeHtml(category.name)}</strong><span>${category.type}</span>
    <div class="order-controls"><button class="order-button" data-move-category="${category.id}" data-direction="-1" ${index === 0 ? "disabled" : ""} aria-label="Move ${escapeHtml(category.name)} up">Up</button>
    <button class="order-button" data-move-category="${category.id}" data-direction="1" ${index === data.categories.length - 1 ? "disabled" : ""} aria-label="Move ${escapeHtml(category.name)} down">Dn</button></div>
    <button class="small-button" data-rename-category="${category.id}">Rename</button>
    <button class="delete-button" data-delete-category="${category.id}" aria-label="Delete category">x</button>
  </div>`).join("");
  const select = $("#transactionForm [name=category]");
  const selected = select.value;
  select.innerHTML = data.categories.map(category => `<option value="${escapeHtml(category.name)}">${escapeHtml(category.name)}</option>`).join("");
  if ([...select.options].some(option => option.value === selected)) select.value = selected;
}

function initializeCollapsibles() {
  const selectors = [
    ".view > article", ".view > .hero-grid > article", ".dashboard-grid > article",
    ".settings-group", ".account-grid > article", ".retirement-grid > article",
    ".budget-board", ".goal-board", ".debt-board", ".bill-board", ".category-board",
    ".pay-period-totals", ".calculator-layout > article"
  ].join(",");
  document.querySelectorAll(selectors).forEach((section, index) => {
    if (section.dataset.collapseReady) return;
    const view = section.closest(".view")?.id || "global";
    const label = section.querySelector("h2,h3,.eyebrow")?.textContent?.trim() || "Section";
    const key = `${view}:${section.className}:${index}`;
    section.dataset.collapseReady = "true";
    section.dataset.collapseKey = key;
    section.dataset.collapseLabel = label;
    section.classList.add("collapsible-section");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "collapse-toggle";
    button.setAttribute("aria-label", `Collapse ${label}`);
    button.textContent = "-";
    section.append(button);
    const collapsed = data.settings.collapsedSections?.[key];
    section.classList.toggle("section-collapsed", Boolean(collapsed));
    button.textContent = collapsed ? "+" : "-";
    button.setAttribute("aria-expanded", String(!collapsed));
  });
}

function applySettings() {
  const general = data.settings.general;
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.classList.toggle("dark-theme", general.theme === "dark" || (general.theme === "auto" && prefersDark));
  document.body.classList.toggle("balance-hidden", data.settings.privacy.hideBalances);
  document.body.classList.toggle("compact-sections", general.sectionDensity === "compact");
  $(".profile strong").textContent = general.name || "My finances";
  $(".avatar").textContent = (general.name || "MF").split(/\s+/).map(word => word[0]).join("").slice(0, 2).toUpperCase();
  const appName = general.appName?.trim() || "Northstar";
  $("#brandName").textContent = appName;
  $("#brandInitial").textContent = appName.charAt(0).toUpperCase();
  $("#brandLogo").src = general.logoData || "";
  $("#brandMark").classList.toggle("has-logo", Boolean(general.logoData));
  $(".brand").setAttribute("aria-label", `${appName} home`);
  document.title = `${appName} | Personal Finance Planner`;
  document.body.style.setProperty("--green", general.accentColor || "#194f3b");
  document.body.style.setProperty("--green-2", general.secondaryColor || "#2c7658");
  document.body.style.setProperty("--cream", general.backgroundColor || "#f4f1e8");
  document.body.style.setProperty("--paper", general.cardColor || "#fffdf8");
  document.body.style.setProperty("--money-color", general.moneyColor || "#17251f");
  document.body.style.setProperty("--income-color", general.incomeColor || "#2c7658");
  document.body.style.setProperty("--debt-color", general.debtColor || "#c34f43");
  $("#monthPlanTitle").textContent = `${general.budgetCycle[0].toUpperCase()}${general.budgetCycle.slice(1)} plan`;
  applySectionTabLayout();
  applyOverviewLayout();
}

function applySectionTabLayout() {
  const tabs = data.settings.general.sectionTabs || sampleData.settings.general.sectionTabs;
  const nav = $(".nav-list");
  tabs.forEach(tab => {
    const item = nav.querySelector(`[data-view="${tab.id}"]`);
    if (!item) return;
    nav.append(item);
    item.hidden = tab.id !== "dashboard" && tab.visible === false;
  });
  $$(".mobile-nav-item[data-mobile-view]").forEach(item => {
    const tab = tabs.find(entry => entry.id === item.dataset.mobileView);
    item.hidden = item.dataset.mobileView !== "dashboard" && tab?.visible === false;
  });
  const activeView = $(".view.active")?.id?.replace("View", "");
  const activeTab = tabs.find(tab => tab.id === activeView);
  if (activeView && activeTab?.visible === false) navigate("dashboard");
}

function applyOverviewLayout() {
  const dashboard = $("#dashboardView");
  const hero = dashboard.querySelector("[data-dashboard-zone=hero]");
  const plan = dashboard.querySelector("[data-dashboard-zone=plan]");
  const heading = dashboard.querySelector(".dashboard-plan-heading");
  const recent = dashboard.querySelector("[data-widget=recent]");
  const settings = data.settings.general.overviewWidgets;
  const heroWidgets = settings.filter(item => ["networth", "snapshot"].includes(item.id));
  const planWidgets = settings.filter(item => ["budget", "goals"].includes(item.id));
  heroWidgets.forEach(item => hero.append(dashboard.querySelector(`[data-widget="${item.id}"]`)));
  planWidgets.forEach(item => plan.append(dashboard.querySelector(`[data-widget="${item.id}"]`)));
  settings.forEach(item => dashboard.querySelector(`[data-widget="${item.id}"]`)?.classList.toggle("dashboard-widget-hidden", !item.visible));
  hero.classList.toggle("dashboard-widget-hidden", !heroWidgets.some(item => item.visible));
  plan.classList.toggle("dashboard-widget-hidden", !planWidgets.some(item => item.visible));
  heading.classList.toggle("dashboard-widget-hidden", !planWidgets.some(item => item.visible));
  const firstRecent = settings.findIndex(item => item.id === "recent") < settings.findIndex(item => ["budget", "goals"].includes(item.id));
  if (firstRecent) dashboard.insertBefore(recent, heading);
  else dashboard.append(recent);
}

function updateLogoPreview() {
  const general = data.settings.general;
  const appName = general.appName?.trim() || "Northstar";
  const preview = $("#logoPreview");
  preview.querySelector("span").textContent = appName.charAt(0).toUpperCase();
  preview.querySelector("img").src = general.logoData || "";
  preview.classList.toggle("has-logo", Boolean(general.logoData));
  $("#removeLogo").disabled = !general.logoData;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = filename; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
}

function navigate(view) {
  const target = $(`#${view}View`);
  if (!target) return;
  $$(".view").forEach(el => el.classList.remove("active"));
  $$(".nav-item").forEach(el => el.classList.toggle("active", el.dataset.view === view));
  $$(".mobile-nav-item[data-mobile-view]").forEach(el => el.classList.toggle("active", el.dataset.mobileView === view));
  $("#mobileMore").classList.toggle("active", !["dashboard", "income", "expenses"].includes(view));
  target.classList.add("active");
  const titles = {
    dashboard: greeting(), income: "Track every source", budgets: "Plan the month",
    expenses: "Understand your spending", debt: "Build a payoff path", savings: "Strengthen your safety net",
    retirement: "Invest in future you", networth: "Know where you stand", bills: "Never miss a due date",
    reports: "See the whole picture", settings: "Shape your experience", calculator: "Explore the numbers"
  };
  $("#pageTitle").textContent = titles[view];
  closeMobileMenu();
  if (window.location.hash !== `#${view}`) history.replaceState(null, "", `#${view}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setMobileMenu(open) {
  $(".sidebar").classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  $(".mobile-menu").setAttribute("aria-expanded", String(open));
  $("#mobileMore").setAttribute("aria-expanded", String(open));
}

function closeMobileMenu() {
  setMobileMenu(false);
}

function openModal(id) {
  const modal = $(`#${id}`);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  if (id === "transactionModal" && !editing.transaction) $("#transactionForm [name=date]").value = new Date().toISOString().slice(0, 10);
  if (id === "goalModal" && !$("#goalForm [name=date]").value) {
    const future = new Date(); future.setFullYear(future.getFullYear() + 1);
    $("#goalForm [name=date]").value = future.toISOString().slice(0, 10);
  }
  setTimeout(() => modal.querySelector("input")?.focus(), 50);
}

function closeModal(id) {
  const modal = $(`#${id}`);
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (id === "transactionModal") resetEdit("transaction");
  if (id === "goalModal") resetEdit("goal");
  if (id === "budgetModal") resetEdit("budget");
}

function resetEdit(type) {
  editing[type] = null;
  const config = {
    transaction: ["transactionForm", "transactionTitle", "Add a transaction", "transactionSubmit", "Save transaction"],
    goal: ["goalForm", "goalTitle", "Create a savings goal", "goalSubmit", "Create goal"],
    budget: ["budgetForm", "budgetTitle", "Add a monthly budget", "budgetSubmit", "Add budget"],
    asset: ["assetForm", null, null, "assetSubmit", "Add asset", "cancelAssetEdit"],
    liability: ["liabilityForm", null, null, "liabilitySubmit", "Add liability", "cancelLiabilityEdit"],
    debt: ["debtForm", null, null, "debtSubmit", "Add debt", "cancelDebtEdit"],
    bill: ["billForm", null, null, "billSubmit", "Add reminder", "cancelBillEdit"]
  }[type];
  if (!config) return;
  const [formId, titleId, title, submitId, submitText, cancelId] = config;
  $(`#${formId}`).reset();
  if (titleId) $(`#${titleId}`).textContent = title;
  $(`#${submitId}`).textContent = submitText;
  if (cancelId) $(`#${cancelId}`).classList.remove("visible");
}

function resetExpenseLogEdit() {
  editing.expenseLog = null;
  $("#expenseLogForm").reset();
  $("#expenseLogSubmit").textContent = "Add to log";
  $("#cancelExpenseLogEdit").classList.remove("visible");
}

function editExpenseLog(id) {
  const item = data.expenseLog.find(entry => entry.id === id);
  if (!item) return;
  editing.expenseLog = id;
  const form = $("#expenseLogForm");
  form.elements.name.value = item.name;
  form.elements.amount.value = item.amount;
  form.elements.payPeriod.value = item.payPeriod;
  $("#expenseLogSubmit").textContent = "Save changes";
  $("#cancelExpenseLogEdit").classList.add("visible");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
  form.elements.name.focus();
}

function moveExpenseLogItem(id, direction) {
  const index = data.expenseLog.findIndex(item => item.id === id);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= data.expenseLog.length) return;
  [data.expenseLog[index], data.expenseLog[nextIndex]] = [data.expenseLog[nextIndex], data.expenseLog[index]];
  saveData(); renderAll(); toast("Expense order updated");
}

function reorderExpenseLog(sourceId, targetId) {
  const sourceIndex = data.expenseLog.findIndex(item => item.id === sourceId);
  const targetIndex = data.expenseLog.findIndex(item => item.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) return;
  const [item] = data.expenseLog.splice(sourceIndex, 1);
  const insertionIndex = sourceIndex < targetIndex ? targetIndex - 1 : targetIndex;
  data.expenseLog.splice(insertionIndex, 0, item);
  saveData(); renderAll(); toast("Expense order updated");
}

function editTransaction(id) {
  const item = data.transactions.find(entry => entry.id === id);
  if (!item) return;
  editing.transaction = id;
  const form = $("#transactionForm");
  form.elements.name.value = item.name;
  form.elements.amount.value = item.amount;
  form.elements.type.value = item.type;
  form.elements.category.value = item.category;
  form.elements.date.value = item.date;
  $("#transactionTitle").textContent = "Edit transaction";
  $("#transactionSubmit").textContent = "Save changes";
  openModal("transactionModal");
}

function editGoal(id) {
  const item = data.goals.find(entry => entry.id === id);
  if (!item) return;
  editing.goal = id;
  const form = $("#goalForm");
  form.elements.name.value = item.name;
  form.elements.target.value = item.target;
  form.elements.saved.value = item.saved;
  form.elements.date.value = item.date;
  $("#goalTitle").textContent = "Edit savings goal";
  $("#goalSubmit").textContent = "Save changes";
  openModal("goalModal");
}

function editBudget(id) {
  const item = data.budgets.find(entry => entry.id === id);
  if (!item) return;
  editing.budget = id;
  const form = $("#budgetForm");
  form.elements.name.value = item.name;
  form.elements.limit.value = item.limit;
  form.elements.spent.value = item.spent;
  $("#budgetTitle").textContent = "Edit monthly budget";
  $("#budgetSubmit").textContent = "Save changes";
  openModal("budgetModal");
}

function editInline(type, id) {
  const configs = {
    asset: { list: data.assets, form: "assetForm", submit: "assetSubmit", cancel: "cancelAssetEdit", fields: ["name", "amount", "category"] },
    liability: { list: data.liabilities, form: "liabilityForm", submit: "liabilitySubmit", cancel: "cancelLiabilityEdit", fields: ["name", "amount", "category"] },
    debt: { list: data.debts, form: "debtForm", submit: "debtSubmit", cancel: "cancelDebtEdit", fields: ["name", "balance", "apr", "payment"] },
    bill: { list: data.bills, form: "billForm", submit: "billSubmit", cancel: "cancelBillEdit", fields: ["name", "amount", "date"] }
  };
  const config = configs[type];
  const item = config?.list.find(entry => entry.id === id);
  if (!item) return;
  editing[type] = id;
  const form = $(`#${config.form}`);
  config.fields.forEach(field => { form.elements[field].value = item[field]; });
  $(`#${config.submit}`).textContent = "Save changes";
  $(`#${config.cancel}`).classList.add("visible");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
  form.elements.name.focus();
}

function toast(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("show");
  setTimeout(() => $("#toast").classList.remove("show"), 2200);
}

function settingsSaved() {
  $("#settingsStatus").textContent = "Saved just now";
  clearTimeout(settingsSaved.timer);
  settingsSaved.timer = setTimeout(() => {
    $("#settingsStatus").textContent = "Changes save automatically";
  }, 1800);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function formatDate(date) {
  const value = new Date(`${date}T12:00:00`);
  const style = data.settings?.general?.dateFormat || "mdy";
  if (style === "ymd") return date;
  return value.toLocaleDateString(style === "dmy" ? "en-GB" : "en-US", { month: "short", day: "numeric", year: "numeric" });
}

function greeting() {
  const hour = new Date().getHours();
  return hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
}

function initialize() {
  if (!localStorage.getItem(STORAGE_KEY)) localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  $("#currentDate").textContent = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  $("#monthPlanTitle").textContent = `${new Date().toLocaleDateString("en-US", { month: "long" })} plan`;
  $("#pageTitle").textContent = greeting();
  renderAll();
  const initialView = window.location.hash.slice(1);
  if ($(`#${initialView}View`)) navigate(initialView);

  $$(".nav-item").forEach(button => button.addEventListener("click", () => navigate(button.dataset.view)));
  $$(".mobile-nav-item[data-mobile-view]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.mobileView)));
  $$("[data-target]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.target)));
  $$(".settings-nav-item").forEach(button => button.addEventListener("click", () => {
    $$(".settings-nav-item").forEach(item => item.classList.toggle("active", item === button));
    $$(".settings-panel").forEach(panel => panel.classList.toggle("active", panel.dataset.panel === button.dataset.settingsPanel));
  }));
  $(".mobile-menu").addEventListener("click", () => setMobileMenu(!$(".sidebar").classList.contains("open")));
  $("#mobileMore").addEventListener("click", () => setMobileMenu(!$(".sidebar").classList.contains("open")));
  $("#sidebarBackdrop").addEventListener("click", closeMobileMenu);
  $("#mobileAddTransaction").addEventListener("click", () => {
    resetEdit("transaction");
    openModal("transactionModal");
    $("#transactionForm [name=type]").value = "expense";
  });
  $("#openTransaction").addEventListener("click", () => {
    resetEdit("transaction");
    openModal("transactionModal");
    $("#transactionForm [name=type]").value = "expense";
  });
  $("#openIncome").addEventListener("click", () => {
    resetEdit("transaction");
    openModal("transactionModal");
    $("#transactionForm [name=type]").value = "income";
    $("#transactionForm [name=category]").value = "Income";
  });
  $("#openExpense").addEventListener("click", () => {
    resetEdit("transaction");
    openModal("transactionModal");
    $("#transactionForm [name=type]").value = "expense";
    $("#transactionForm [name=category]").value = "Food";
  });
  $("#openGoal").addEventListener("click", () => { resetEdit("goal"); openModal("goalModal"); });
  $("#openGoalPage").addEventListener("click", () => { resetEdit("goal"); openModal("goalModal"); });
  $("#openBudget").addEventListener("click", () => { resetEdit("budget"); openModal("budgetModal"); });
  $$("[data-close]").forEach(button => button.addEventListener("click", () => closeModal(button.dataset.close)));
  $$(".modal-backdrop").forEach(modal => modal.addEventListener("click", e => { if (e.target === modal) closeModal(modal.id); }));

  $("#transactionForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const values = { name: form.get("name").trim(), amount: Number(form.get("amount")), type: form.get("type"), category: form.get("category"), date: form.get("date") };
    const item = data.transactions.find(entry => entry.id === editing.transaction);
    if (item) Object.assign(item, values);
    else data.transactions.unshift({ id: Date.now(), ...values });
    const wasEditing = Boolean(item);
    saveData(); renderAll(); closeModal("transactionModal"); toast(wasEditing ? "Transaction updated" : "Transaction added");
  });

  $("#goalForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const values = { name: form.get("name").trim(), target: Number(form.get("target")), saved: Number(form.get("saved")), date: form.get("date") };
    const item = data.goals.find(entry => entry.id === editing.goal);
    if (item) Object.assign(item, values);
    else data.goals.push({ id: Date.now(), ...values });
    const wasEditing = Boolean(item);
    saveData(); renderAll(); closeModal("goalModal"); toast(wasEditing ? "Goal updated" : "Goal created");
  });

  $("#budgetForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const values = { name: form.get("name").trim(), limit: Number(form.get("limit")), spent: Number(form.get("spent")) };
    const item = data.budgets.find(entry => entry.id === editing.budget);
    if (item) Object.assign(item, values);
    else data.budgets.push({ id: Date.now(), ...values });
    const wasEditing = Boolean(item);
    saveData(); renderAll(); closeModal("budgetModal"); toast(wasEditing ? "Budget updated" : "Budget added");
  });

  $("#assetForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const values = { name: form.get("name").trim(), amount: Number(form.get("amount")), category: form.get("category") };
    const item = data.assets.find(entry => entry.id === editing.asset);
    if (item) Object.assign(item, values);
    else data.assets.push({ id: Date.now(), ...values });
    const wasEditing = Boolean(item);
    saveData(); renderAll(); resetEdit("asset"); toast(wasEditing ? "Asset updated" : "Asset added");
  });

  $("#liabilityForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const values = { name: form.get("name").trim(), amount: Number(form.get("amount")), category: form.get("category") };
    const item = data.liabilities.find(entry => entry.id === editing.liability);
    if (item) Object.assign(item, values);
    else data.liabilities.push({ id: Date.now(), ...values });
    const wasEditing = Boolean(item);
    saveData(); renderAll(); resetEdit("liability"); toast(wasEditing ? "Liability updated" : "Liability added");
  });

  $("#debtForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const values = { name: form.get("name").trim(), balance: Number(form.get("balance")), apr: Number(form.get("apr")), payment: Number(form.get("payment")) };
    const item = data.debts.find(entry => entry.id === editing.debt);
    if (item) Object.assign(item, values);
    else data.debts.push({ id: Date.now(), ...values });
    const wasEditing = Boolean(item);
    saveData(); renderAll(); resetEdit("debt"); toast(wasEditing ? "Debt updated" : "Debt added");
  });

  $("#emergencyForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    data.emergencyFund = { balance: Number(form.get("balance")), expenses: Number(form.get("expenses")) };
    saveData(); renderAll(); toast("Emergency fund updated");
  });

  $("#retirementForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    data.retirement = {
      age: Number(form.get("age")), retireAge: Number(form.get("retireAge")),
      balance: Number(form.get("balance")), contribution: Number(form.get("contribution")),
      returnRate: Number(form.get("returnRate")), target: Number(form.get("target"))
    };
    saveData(); renderAll(); toast("Projection updated");
  });

  $("#billForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const values = { name: form.get("name").trim(), amount: Number(form.get("amount")), date: form.get("date") };
    const item = data.bills.find(entry => entry.id === editing.bill);
    if (item) Object.assign(item, values);
    else data.bills.push({ id: Date.now(), ...values, paid: false });
    const wasEditing = Boolean(item);
    saveData(); renderAll(); resetEdit("bill"); toast(wasEditing ? "Bill updated" : "Bill reminder added");
  });

  $("#expenseLogForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const values = { name: form.get("name").trim(), amount: Number(form.get("amount") || 0), payPeriod: form.get("payPeriod") };
    const item = data.expenseLog.find(entry => entry.id === editing.expenseLog);
    if (item) Object.assign(item, values);
    else data.expenseLog.push({ id: Date.now(), ...values, status: "unpaid" });
    const wasEditing = Boolean(item);
    saveData(); renderAll(); resetExpenseLogEdit(); toast(wasEditing ? "Expense log updated" : "Expense added to monthly log");
  });

  $("#cancelAssetEdit").addEventListener("click", () => resetEdit("asset"));
  $("#cancelLiabilityEdit").addEventListener("click", () => resetEdit("liability"));
  $("#cancelDebtEdit").addEventListener("click", () => resetEdit("debt"));
  $("#cancelBillEdit").addEventListener("click", () => resetEdit("bill"));
  $("#cancelExpenseLogEdit").addEventListener("click", resetExpenseLogEdit);
  $("#resetExpenseLog").addEventListener("click", () => {
    if (!window.confirm("Are you sure you want to reset every monthly expense status to Unpaid?")) return;
    data.expenseLog.forEach(item => { item.status = "unpaid"; });
    saveData(); renderAll(); toast("Monthly expense statuses reset");
  });

  $("#calculatorType").addEventListener("change", () => {
    renderCalculatorFields();
    $("#calculatorResult").textContent = currency.format(0);
    $("#calculatorResultDescription").textContent = "Configure a scenario and calculate the result.";
    $("#calculatorBreakdown").innerHTML = "";
  });
  $("#calculatorForm").addEventListener("submit", e => {
    e.preventDefault();
    calculateScenario();
  });

  const settingsForms = {
    generalSettingsForm: "general",
    financialSettingsForm: "financial",
    notificationSettingsForm: "notifications",
    privacySettingsForm: "privacy",
    analyticsSettingsForm: "analytics",
    healthSettingsForm: "health"
  };
  Object.entries(settingsForms).forEach(([formId, section]) => {
    $(`#${formId}`).addEventListener("change", e => {
      data.settings[section] = { ...data.settings[section], ...formValues(e.currentTarget) };
      saveData(); renderAll(); settingsSaved();
    });
  });

  $("#generalSettingsForm").addEventListener("input", e => {
    if (!["appName", "accentColor", "secondaryColor", "backgroundColor", "cardColor", "moneyColor", "incomeColor", "debtColor"].includes(e.target.name)) return;
    data.settings.general = { ...data.settings.general, ...formValues(e.currentTarget) };
    saveData(); applySettings(); updateLogoPreview(); settingsSaved();
  });

  $("#logoUpload").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 1500000) {
      toast("Please choose a logo smaller than 1.5 MB");
      e.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      data.settings.general.logoData = reader.result;
      saveData(); applySettings(); updateLogoPreview(); settingsSaved(); toast("Logo updated");
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  });

  $("#removeLogo").addEventListener("click", () => {
    data.settings.general.logoData = "";
    saveData(); applySettings(); updateLogoPreview(); settingsSaved(); toast("Logo removed");
  });

  $("#resetPalette").addEventListener("click", () => {
    if (!window.confirm("Are you sure you want to restore all default app and dollar-value colors?")) return;
    Object.assign(data.settings.general, {
      accentColor: "#194f3b", secondaryColor: "#2c7658",
      backgroundColor: "#f4f1e8", cardColor: "#fffdf8", moneyColor: "#17251f",
      incomeColor: "#2c7658", debtColor: "#c34f43"
    });
    saveData(); renderAll(); settingsSaved(); toast("Default colors restored");
  });

  $("#healthSettingsForm").addEventListener("input", e => {
    if (e.target.type !== "range") return;
    const output = $(`#${e.target.name}Output`);
    if (output) output.textContent = `${e.target.value}%`;
  });

  $("#planningSettingsForm").addEventListener("change", e => {
    const values = formValues(e.currentTarget);
    data.retirement.retireAge = values.retireAge;
    data.retirement.returnRate = values.returnRate;
    data.settings.planning = {
      ...data.settings.planning, inflation: values.inflation,
      includeVehicles: values.includeVehicles, includeInvestments: values.includeInvestments
    };
    saveData(); renderAll(); settingsSaved();
  });

  $("#categoryForm").addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData(e.target);
    data.categories.push({ id: Date.now(), name: form.get("name").trim(), type: form.get("type"), color: form.get("color") });
    saveData(); renderAll(); e.target.reset(); e.target.elements.color.value = "#2c7658"; toast("Category added");
  });

  document.addEventListener("click", e => {
    if (e.target.matches(".collapse-toggle")) {
      const section = e.target.closest(".collapsible-section");
      const collapsed = !section.classList.contains("section-collapsed");
      section.classList.toggle("section-collapsed", collapsed);
      e.target.textContent = collapsed ? "+" : "-";
      e.target.setAttribute("aria-expanded", String(!collapsed));
      e.target.setAttribute("aria-label", `${collapsed ? "Expand" : "Collapse"} ${section.dataset.collapseLabel}`);
      data.settings.collapsedSections ??= {};
      data.settings.collapsedSections[section.dataset.collapseKey] = collapsed;
      saveData();
      return;
    }
    const moveCategoryId = e.target.dataset.moveCategory;
    if (moveCategoryId) {
      const index = data.categories.findIndex(category => category.id === Number(moveCategoryId));
      const nextIndex = index + Number(e.target.dataset.direction);
      if (index >= 0 && nextIndex >= 0 && nextIndex < data.categories.length) {
        [data.categories[index], data.categories[nextIndex]] = [data.categories[nextIndex], data.categories[index]];
        saveData(); renderAll(); toast("Category order updated");
      }
      return;
    }
    const moveWidgetId = e.target.dataset.moveWidget;
    if (moveWidgetId) {
      const widgets = data.settings.general.overviewWidgets;
      const index = widgets.findIndex(widget => widget.id === moveWidgetId);
      const nextIndex = index + Number(e.target.dataset.direction);
      if (index >= 0 && nextIndex >= 0 && nextIndex < widgets.length) {
        [widgets[index], widgets[nextIndex]] = [widgets[nextIndex], widgets[index]];
        saveData(); renderAll(); settingsSaved();
      }
      return;
    }
    const moveSectionTabId = e.target.dataset.moveSectionTab;
    if (moveSectionTabId) {
      const tabs = data.settings.general.sectionTabs;
      const index = tabs.findIndex(tab => tab.id === moveSectionTabId);
      const nextIndex = index + Number(e.target.dataset.direction);
      if (index >= 0 && nextIndex >= 0 && nextIndex < tabs.length) {
        [tabs[index], tabs[nextIndex]] = [tabs[nextIndex], tabs[index]];
        saveData(); renderAll(); settingsSaved();
      }
      return;
    }
    const moveExpenseId = e.target.dataset.moveExpense;
    if (moveExpenseId) {
      moveExpenseLogItem(Number(moveExpenseId), Number(e.target.dataset.direction));
      return;
    }
    const editTransactionId = e.target.dataset.editTransaction;
    const editBudgetId = e.target.dataset.editBudget;
    const editGoalId = e.target.dataset.editGoal;
    const editAccountId = e.target.dataset.editAccount;
    const editDebtId = e.target.dataset.editDebt;
    const editBillId = e.target.dataset.editBill;
    const editExpenseLogId = e.target.dataset.editExpenseLog;
    if (editTransactionId) editTransaction(Number(editTransactionId));
    if (editBudgetId) editBudget(Number(editBudgetId));
    if (editGoalId) editGoal(Number(editGoalId));
    if (editAccountId) editInline(e.target.dataset.accountType, Number(editAccountId));
    if (editDebtId) editInline("debt", Number(editDebtId));
    if (editBillId) editInline("bill", Number(editBillId));
    if (editExpenseLogId) editExpenseLog(Number(editExpenseLogId));

    const transactionId = e.target.dataset.deleteTransaction;
    const budgetId = e.target.dataset.deleteBudget;
    const goalId = e.target.dataset.deleteGoal;
    const accountId = e.target.dataset.deleteAccount;
    const accountType = e.target.dataset.accountType;
    const debtId = e.target.dataset.deleteDebt;
    const payDebtId = e.target.dataset.payDebt;
    const billId = e.target.dataset.deleteBill;
    const toggleBillId = e.target.dataset.toggleBill;
    const categoryId = e.target.dataset.deleteCategory;
    const renameCategoryId = e.target.dataset.renameCategory;
    const expenseLogId = e.target.dataset.deleteExpenseLog;
    if (transactionId) data.transactions = data.transactions.filter(t => t.id !== Number(transactionId));
    if (budgetId) data.budgets = data.budgets.filter(b => b.id !== Number(budgetId));
    if (goalId) data.goals = data.goals.filter(g => g.id !== Number(goalId));
    if (accountId && accountType === "asset") data.assets = data.assets.filter(a => a.id !== Number(accountId));
    if (accountId && accountType === "liability") data.liabilities = data.liabilities.filter(a => a.id !== Number(accountId));
    if (debtId) data.debts = data.debts.filter(debt => debt.id !== Number(debtId));
    if (billId) data.bills = data.bills.filter(bill => bill.id !== Number(billId));
    if (categoryId) data.categories = data.categories.filter(category => category.id !== Number(categoryId));
    if (expenseLogId) data.expenseLog = data.expenseLog.filter(item => item.id !== Number(expenseLogId));
    if (renameCategoryId) {
      const category = data.categories.find(item => item.id === Number(renameCategoryId));
      const nextName = window.prompt("Rename this category:", category?.name || "");
      if (category && nextName?.trim()) {
        const oldName = category.name;
        category.name = nextName.trim();
        data.transactions.forEach(item => { if (item.category === oldName) item.category = category.name; });
      }
    }
    if (toggleBillId) {
      const bill = data.bills.find(item => item.id === Number(toggleBillId));
      if (bill) bill.paid = !bill.paid;
    }
    if (payDebtId) {
      const debt = data.debts.find(item => item.id === Number(payDebtId));
      const amount = Number(e.target.closest(".debt-actions").querySelector("input").value);
      if (debt && amount > 0) debt.balance = Math.max(0, debt.balance - amount);
    }
    if (transactionId || budgetId || goalId || accountId || debtId || billId || toggleBillId || payDebtId || categoryId || renameCategoryId || expenseLogId) {
      saveData(); renderAll(); toast(payDebtId ? "Payment recorded" : toggleBillId ? "Bill updated" : "Plan updated");
    }
  });

  document.addEventListener("change", e => {
    const toggleWidgetId = e.target.dataset.toggleWidget;
    if (toggleWidgetId) {
      const widget = data.settings.general.overviewWidgets.find(item => item.id === toggleWidgetId);
      if (widget) {
        widget.visible = e.target.checked;
        saveData(); renderAll(); settingsSaved();
      }
      return;
    }
    const toggleSectionTabId = e.target.dataset.toggleSectionTab;
    if (toggleSectionTabId) {
      const tab = data.settings.general.sectionTabs.find(item => item.id === toggleSectionTabId);
      if (tab && tab.id !== "dashboard") {
        tab.visible = e.target.checked;
        saveData(); renderAll(); settingsSaved();
      }
      return;
    }
    const expenseStatusId = e.target.dataset.expenseStatus;
    if (expenseStatusId) {
      const item = data.expenseLog.find(entry => entry.id === Number(expenseStatusId));
      if (item) {
        item.status = e.target.value;
        saveData(); renderAll(); toast(`Expense marked ${e.target.options[e.target.selectedIndex].text}`);
      }
      return;
    }
    const categoryColorId = e.target.dataset.categoryColor;
    if (!categoryColorId) return;
    const category = data.categories.find(item => item.id === Number(categoryColorId));
    if (category) {
      category.color = e.target.value;
      saveData(); renderAll(); settingsSaved();
    }
  });

  $("#expenseLogList").addEventListener("dragstart", e => {
    const row = e.target.closest("[data-expense-row]");
    if (!row) return;
    draggedExpenseId = Number(row.dataset.expenseRow);
    row.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", row.dataset.expenseRow);
  });

  $("#expenseLogList").addEventListener("dragover", e => {
    const row = e.target.closest("[data-expense-row]");
    if (!row || Number(row.dataset.expenseRow) === draggedExpenseId) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    $$(".expense-log-row.drag-over").forEach(item => item.classList.remove("drag-over"));
    row.classList.add("drag-over");
  });

  $("#expenseLogList").addEventListener("drop", e => {
    const target = e.target.closest("[data-expense-row]");
    if (!target || draggedExpenseId === null) return;
    e.preventDefault();
    reorderExpenseLog(draggedExpenseId, Number(target.dataset.expenseRow));
  });

  $("#expenseLogList").addEventListener("dragend", () => {
    draggedExpenseId = null;
    $$(".expense-log-row.dragging, .expense-log-row.drag-over").forEach(item => item.classList.remove("dragging", "drag-over"));
  });

  $("#printReport").addEventListener("click", () => window.print());

  $("#exportData").addEventListener("click", () => {
    downloadFile(portableFilename(), portablePayload(), "application/json");
    toast("Update file exported");
  });

  $("#shareData").addEventListener("click", () => {
    sharePortableData().catch(() => toast("The update file could not be shared"));
  });

  $("#exportCsv").addEventListener("click", () => {
    const rows = [["Date", "Description", "Type", "Category", "Amount"], ...data.transactions.map(t => [t.date, t.name, t.type, t.category, t.amount])];
    const csv = rows.map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(",")).join("\r\n");
    downloadFile(`northstar-transactions-${new Date().toISOString().slice(0, 10)}.csv`, csv, "text/csv");
    toast("Transactions exported");
  });

  $("#importData").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    if (!window.confirm("Are you sure you want to replace this browser's current financial data with the selected update file? Export this device first if you want a backup.")) {
      e.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      try {
        data = parsePortableData(reader.result);
        data.sync.lastImportedAt = new Date().toISOString();
        data.sync.lastImportName = file.name;
        saveData(); renderAll(); toast("Update file imported");
      } catch {
        toast("That update file could not be read");
      }
      e.target.value = "";
    };
    reader.readAsText(file);
  });

  $("#archiveTransactions").addEventListener("click", () => {
    const cutoff = new Date(); cutoff.setFullYear(cutoff.getFullYear() - 1);
    const before = data.transactions.length;
    const older = data.transactions.filter(item => new Date(`${item.date}T12:00:00`) < cutoff);
    data.archivedTransactions.push(...older);
    data.transactions = data.transactions.filter(item => new Date(`${item.date}T12:00:00`) >= cutoff);
    saveData(); renderAll(); toast(`${before - data.transactions.length} older transactions archived`);
  });

  $("#optimizeData").addEventListener("click", () => {
    data = normalizeData(JSON.parse(JSON.stringify(data)));
    saveData(); renderAll(); toast("Local data optimized");
  });

  $("#showDiagnostics").addEventListener("click", () => {
    const panel = $("#diagnostics");
    panel.textContent = [
      `Storage version: ${STORAGE_KEY}`,
      `Transactions: ${data.transactions.length}`,
      `Archived transactions: ${data.archivedTransactions.length}`,
      `Budgets: ${data.budgets.length}`,
      `Goals: ${data.goals.length}`,
      `Assets / liabilities: ${data.assets.length} / ${data.liabilities.length}`,
      `Debts / bills: ${data.debts.length} / ${data.bills.length}`,
      `Categories: ${data.categories.length}`,
      `Last saved: ${data.sync?.lastSavedAt || "not recorded"}`,
      `Last import: ${data.sync?.lastImportedAt || "not recorded"}`,
      `Approximate local size: ${Math.round(JSON.stringify(data).length / 1024)} KB`
    ].join("\n");
    panel.classList.toggle("show");
  });

  $("#advancedReset").addEventListener("click", () => {
    if (!window.confirm("Are you sure you want to replace all current information with the sample plan? You can restore the previous version afterward.")) return;
    data = structuredClone(sampleData); saveData(); renderAll(); toast("Sample plan restored");
  });

  $("#restorePrevious").addEventListener("click", () => {
    const previous = localStorage.getItem(PREVIOUS_STORAGE_KEY);
    if (!previous) {
      toast("No previous version is available");
      return;
    }
    if (!window.confirm("Are you sure you want to restore the previous saved version? Your current version will remain available as the next restore point.")) return;
    try {
      const current = localStorage.getItem(STORAGE_KEY);
      data = normalizeData(JSON.parse(previous));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      if (current) localStorage.setItem(PREVIOUS_STORAGE_KEY, current);
      renderAll();
      toast("Previous version restored");
    } catch {
      toast("The previous version could not be restored");
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      $$(".modal-backdrop.open").forEach(modal => closeModal(modal.id));
      closeMobileMenu();
    }
  });

  let installPrompt = null;
  const installButton = $("#installApp");
  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    installPrompt = event;
    installButton.hidden = false;
  });
  installButton.addEventListener("click", async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    installButton.hidden = true;
  });
  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    installButton.hidden = true;
    closeMobileMenu();
    toast("Northstar installed");
  });

  if ("serviceWorker" in navigator && ["http:", "https:"].includes(window.location.protocol)) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMobileMenu();
  });
}

initialize();
