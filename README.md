# ⚡️  SPRINT 5: Using React for Bookmark landingpage

This project is focused on migrating and refactoring the static Bookmark landing page (originally built using vanilla HTML and CSS from Sprint 1) into a component-based 
application using **React** and **TypeScript**.

## 🎯 Objectives:

- **Implement Atomic Design:** Structure components following the atomic design pattern 
- **Strict TypeScript Implementation:** Build the entire application with TypeScript, defining clear interfaces and types for all component props and configurations.
- **Multiple Variants:** Implement flexible components with variant props to support different visual styles.
- **Responsive Design:** Develop a mobile-first, responsive layout that adapts seamlessly across all device sizes.
- **Clean Architecture:** Maintain clear separation between components, types, and styles for optimal code organization.

## 💻 Technology Stack:

- **React**
- **TypeScript**
- **Vite**
- **CSS**
- **npm**

## 📋 Files:

```├── SPRINT5-REACTBOOKMARK/
│   ├── .gitignore
│   ├── node_modules/
│   ├── package.json
│   ├── vite.config.ts
│   ├── public/
│   │   ├── images/
│   ├── src/
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Icon.tsx
│   │   │   │   └── Logo.tsx
│   │   │   ├── molecules/
│   │   │   │   ├── FaqItem.tsx
│   │   │   │   ├── FeatureCard.tsx
│   │   │   │   └── MobileMenu.tsx
│   │   │   └── organisms/
│   │   │       ├── Contact.tsx 
│   │   │       ├── Extensions.tsx
│   │   │       ├── Faq.tsx
│   │   │       ├── Features.tsx
│   │   │       ├── FooterNav.tsx
│   │   │       ├── HeaderNav.tsx
│   │   │       └── Hero.tsx
│   │   ├── config/
│   │   │   ├── appData.ts
│   │   │   └── types.ts
│   │   ├── styles/
│   │   │   ├── _extensions.css
│   │   │   ├── _faq.css
│   │   │   ├── _features.css
│   │   │   ├── _footer.css
│   │   │   ├── _general.css
│   │   │   ├── _header.css
│   │   │   └── _newsletter.css
│   │   ├── test/
│   │   │   ├── Extensions.test.tsx
│   │   │   ├── Hero.test.tsx
│   │   │   └── Newsletter.test.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── setup.ts
```

## 🛠 Installation:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/claudiabcn/sprint5-reactBookmark.git
    ```

2.  **Install Dependencies:**

    ```bash
    cd sprint5-reactBookmark
    npm install
    ```

3. **Run Development Server:**
 npm run dev

4. **Run the Tests:** `npm test`

## 📸 Demo:

https://sprint5-react-bookmark.vercel.app/

<img width="1207" height="593" alt="image" src="https://github.com/user-attachments/assets/0a31e6ac-ec18-4f26-85ef-0300908aec51" />


## ⭐ Learnings and challenges:

This sprint was a successful refactor of a static page into a modern, component-based React application using TypeScript. This marks my initiation into React, where I gained key experience in hook-based state management and modular CSS styling. A particularly interesting outcome was applying the principles of Atomic Design to structure the components (separating them into atoms, molecules, and organisms), which greatly improved understanding and reusability. Some technical challenges were establishing a reliable Vitest testing environment.
