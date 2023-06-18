<h1 align="center">MY HEALTH</h1>

<h2 align="center">Summary</h2>

<p align="center">
    <a href="#about">📙 About</a>
    <a href="#preview">🖼️ Preview</a>
    <a href="#start">📖 How to Start</a>
    <a href="#features">💡 Features</a>
    <a href="#technologies">💻 Technologies</a>
</p>

<h4 align="center">
   🚧 My Health project in progress... 🚧
</h4>

<h2 id="about">📙 About</H2>

<p>Getting vaccinated is the best way to protect yourself from a variety of serious illnesses and their complications, which can even lead to death (Pfizer, 2022). The printed vaccination card is still used for vaccine control. However, there is a risk of loss, theft or misplacement, and forgetting the dates of the next vaccines.
In this sense, <strong>My Health</strong> aims to implement a digital vaccination portfolio to control the vaccines received, including the image of the vaccination receipt as well as the dates of the next doses.</p>
<p>Idea and visual concept created by professor Henrique Shishido and made by <a href="https://www.linkedin.com/in/kleverson-kenji-iwatani/">Kenji Iwatani</a></p>

---

<H2 id="preview">🖼️ Preview</H2>

<section align="center">
    <img alt="project overview" src="./assets/preview.gif" width="300"/>
</section>

---

<H2 id="start">📖 How to Start</H2>

```bash
# Clone this repository
$ git clone https://github.com/iwataniKenji/my-health

# Access the project directory
$ cd my-health

# Install dependencies
$ yarn

# Rename '.env.example' to '.env' and set your env variable
$ ren ".env.example" ".env"

# Start bundle at expo
$ yarn start start

# Download expo app on your phone and scan the QR Code
```

---

<H2 id="features">💡 Features</H2>

- [x] Authentication and password recover system
- [x] Drawer and stack navigation
- [x] Vaccine listing integrated with filters
- [x] Image upload through expo-image-picker and Firebase storage
- [x] Data persistence with Firestore database
- [x] Organized project structure and architecture
- [x] Full application made with typescript

---

<H2 id="technologies">💻 Technologies</H2>

- [x] <a href="https://reactnative.dev/">React Native</a>
- [x] <a href="https://www.typescriptlang.org/">Typescript</a>
- [x] <a href="https://firebase.google.com/">Firebase</a>
- [x] <a href="https://redux.js.org/">Redux</a>
- [x] <a href="https://expo.dev/">Expo</a>
