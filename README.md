# 🎨 Color Sort Viz

An interactive, browser-based visualization tool that brings sorting algorithms to life using the HSL color spectrum. 

Built with **React** and **JavaScript**, this project maps numerical data to color hues, allowing users to watch the "chaos" of a random array transform into a perfect rainbow gradient.

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v14 or higher)
* npm (comes with Node)

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/swan556/Color-Sort-Viz
   ```

2. **Install dependencies**
   ```bash
   cd Color-Sort-Viz
   npm install
   ```

3. **Run the application**
   ```bash
   npm start
   ```
   The app will launch at `http://localhost:3000`.

---

## ✨ Features

* **Dynamic HSL Mapping:** Every bar's height and color are tied to its **Hue** value ($0^\circ$ to $360^\circ$). Saturation ($100\%$) and Lightness ($50\%$) remain constant for maximum visual clarity.
* **Dual Input Modes:**
    * **Random Generation:** Create a controlled set of random colors instantly.
    * **Manual Selection:** Click on the custom-built 360-degree Hue spectrum to "hand-pick" your specific array.
* **Algorithm Selection:** Compare how different logics handle the same data, starting with a smooth, step-by-step Bubble Sort implementation.
* **Real-time Visualization:** Watch the sorting process in real-time with a controlled asynchronous delay.

---

## 🛠️ Technical Challenges & Solutions

### 1. Synchronous Logic vs. Asynchronous UI
Sorting algorithms are typically synchronous and execute in milliseconds. To make the process visible, I implemented an **Asynchronous Animation Loop**. 

By calculating a "Plan of Action" (an array of swap/compare steps) and then executing them using a custom `sleep` utility based on Promises, I bridged the gap between raw algorithmic speed and React's render cycles.

### 2. State Immutability & Snapshots
To avoid the "stale state" bug common in React loops, I utilized **Functional State Updates** (`setColorArray(prev => ...)`) and ensured all sorting logic operates on deep copies of data, preventing accidental mutation of the UI state before the animation begins.

---

## 📂 Project Structure

* `RandomArrayGenerator.js`: Handles data creation and the manual color-picking logic.
* `Visualizer.js`: The "Canvas" where color bars are scaled and rendered based on the current state.
* `bubble_sort.js`: The pure logic engine that generates the step-by-step animation instructions.

---

## 📈 Roadmap
- [ ] Add **Merge Sort** and **Quick Sort** (Visualizing recursion).
- [ ] Implement **Selection Sort** and **Insertion Sort**.
- [ ] **Comparison Highlighting:** Change bar colors (e.g., to Red) when they are being compared.
- [ ] **Adjustable Speed:** Add a slider to control the animation delay in real-time.

---

## 👤 Author

**[Your Name]**
* **Education:** Undergraduate at **IIT (BHU)**, Mechanical Engineering
* **Interests:** Competitive Programming, Web Development
* **Codeforces:** [Your Profile Link Here]
* **GitHub:** [@swan556](https://github.com/swan556)

---
*Created for the love of algorithms and clean UI.*
