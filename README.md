# 🛒 Playwright E-Commerce Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-blue)
![POM](https://img.shields.io/badge/Framework-POM-orange)

---

## 📌 Overview

A scalable **End-to-End Test Automation Framework** built using **Playwright** and **JavaScript** following the **Page Object Model (POM)** design pattern.

This framework automates real-world e-commerce workflows including authentication, product selection, cart management, checkout, order history validation, API validation, and network interception.

---

## 🚀 Key Features

* ✅ Page Object Model (POM) Architecture
* ✅ Cross-Browser Testing (Chromium, Firefox, WebKit)
* ✅ End-to-End Purchase Flow Automation
* ✅ Login & Authentication Validation
* ✅ Product Search & Cart Validation
* ✅ Order Placement & Order History Validation
* ✅ Login API Response Validation
* ✅ Network Interception
* ✅ GitHub Actions CI/CD Integration
* ✅ Screenshot Capture on Failure
* ✅ Video Recording on Failure
* ✅ Playwright Trace Viewer Support
* ✅ Reusable Components & Utilities

---

## 🛠️ Tech Stack

| Technology     | Usage                    |
| -------------- | ------------------------ |
| Playwright     | UI Automation            |
| JavaScript     | Test Development         |
| Node.js        | Runtime                  |
| Git            | Version Control          |
| GitHub         | Repository Management    |
| GitHub Actions | CI/CD Pipeline           |
| POM            | Framework Design Pattern |

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
│   ├── orderHistory.spec.js
│   └── networkInterception.spec.js
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

* Valid Login Validation
* Invalid Login Validation
* User Authentication Verification

### 🛍️ Product Management

* Product Search Validation
* Add Product To Cart
* Remove Product From Cart

### 🛒 Cart Validation

* Verify Product In Cart
* Checkout Validation

### 💳 Checkout Flow

* Dynamic Country Selection
* Complete Purchase Flow
* Order Placement

### 📦 Order Management

* Order History Validation
* Order Details Verification
* Order ID Validation

### 🌐 API & Network Validation

* Login API Response Validation
* Network Interception
* Response Status Verification

---

## ⚡ CI/CD Pipeline

GitHub Actions is configured to automatically execute Playwright tests on:

* Push to Main Branch
* Pull Requests

### Workflow Includes

* Dependency Installation
* Browser Installation
* Test Execution
* Playwright Report Generation

---

## ▶️ Installation

```bash
git clone https://github.com/ShivaniNarayanan/playwright-ecommerce-Automation.git

cd playwright-ecommerce-Automation

npm install

npx playwright install
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

Open Playwright Report:

```bash
npx playwright show-report
```

---

## 📊 Reporting & Debugging

* 📸 Screenshots on Failure
* 🎥 Video Recording on Failure
* 📑 HTML Reports
* 🔍 Playwright Trace Viewer
* 🚀 GitHub Actions Reports

---

## 💡 Framework Highlights

* Industry Standard Playwright Framework
* Maintainable POM Design
* Scalable Test Architecture
* Cross-Browser Execution
* API Validation Support
* CI/CD Ready
* Real-World Automation Scenarios

---

## 🔮 Future Enhancements

* Data Driven Testing
* Playwright Fixtures
* Docker Integration
* Advanced Reporting Dashboard
* Performance Testing Integration

---

## 👩‍💻 Author

**Shivani Narayanan**

QA Automation Engineer | Playwright | JavaScript | API Testing | SQL Validation

GitHub: https://github.com/ShivaniNarayanan

⭐ If you found this project useful, feel free to star the repository.
