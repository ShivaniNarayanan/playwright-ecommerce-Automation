# 🛒 Playwright E-Commerce Automation Framework

## 📌 Project Overview

A robust End-to-End Test Automation Framework developed using **Playwright** and **JavaScript** to automate critical e-commerce workflows. The framework follows the **Page Object Model (POM)** design pattern to ensure scalability, maintainability, and reusability.

This project simulates real-world user journeys including authentication, product selection, cart management, checkout, and order history validation.

---

## 🚀 Key Features

✅ Page Object Model (POM) Architecture

✅ Cross-Browser Testing (Chromium, Firefox, WebKit)

✅ Reusable Components & Locators

✅ End-to-End Purchase Flow Automation

✅ Dynamic Dropdown Handling

✅ Cart & Checkout Validation

✅ Order History Verification

✅ Assertion-Based Validation

✅ Scalable Framework Structure

---

## 🛠️ Tech Stack

| Technology        | Purpose                  |
| ----------------- | ------------------------ |
| Playwright        | UI Automation            |
| JavaScript        | Programming Language     |
| Node.js           | Runtime Environment      |
| Git               | Version Control          |
| GitHub            | Source Code Repository   |
| Page Object Model | Framework Design Pattern |

---

## 📂 Framework Structure

```text
playwright-ecommerce-automation
│
├── pages
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── OrdersPage.js
│
├── tests
│   ├── ecommercePurchase.spec.js
│   ├── invalidLogin.spec.js
│   ├── removeProduct.spec.js
│   └── orderHistory.spec.js
│
├── test-data
│   └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## 🎯 Automated Test Scenarios

### 🔐 Authentication

* Valid Login
* Invalid Login Validation
* User Authentication Verification

### 🛍️ Product Management

* Product Search
* Product Selection
* Add Product To Cart

### 🛒 Cart Validation

* Verify Product In Cart
* Remove Product From Cart
* Cart Validation

### 💳 Checkout Flow

* Country Selection
* Checkout Validation
* Order Placement

### 📦 Order Management

* Order ID Capture
* Order History Validation
* Order Details Verification

---

## ▶️ Installation

```bash
git clone https://github.com/ShivaniNarayanan/playwright-ecommerce-Automation.git

cd playwright-ecommerce-Automation

npm install
```

---

## ▶️ Execute Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/ecommercePurchase.spec.js
```

Run in headed mode:

```bash
npx playwright test --headed
```

Open HTML Report:

```bash
npx playwright show-report
```

---

## 📊 Reporting

* Playwright HTML Reports
* Failure Screenshots
* Execution Logs
* Trace Viewer Support

---

## 💡 Framework Highlights

* Industry Standard POM Framework
* Clean & Maintainable Code Structure
* Reusable Methods and Components
* Easy Scalability for Future Enhancements
* Real-World E-Commerce Workflow Coverage

---

## 🔮 Future Enhancements

* API Testing Integration
* Network Interception
* Data-Driven Testing
* GitHub Actions CI/CD
* Playwright Fixtures
* Parallel Execution Optimization

---

## 👩‍💻 Author

**Shivani Narayanan**

QA Automation Engineer | Playwright | JavaScript | API Testing | SQL Validation

GitHub: https://github.com/ShivaniNarayanan
