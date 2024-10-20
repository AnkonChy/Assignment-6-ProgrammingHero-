# Peddy

Peddy is a pet website where everyone can choose their pets and purchase them. The project is built with a focus on user experience and responsiveness, allowing users to easily navigate through different pet categories, view pet details, and complete the adoption process.

## Features

### 1. Responsive Navbar and Banner
- A fully responsive navigation bar and banner section.
- On smaller screens, the navbar collapses into a mobile-friendly menu.

### 2. Dynamic Pet Categories and Sorting
- Fetch and display pets dynamically into various categories.
- Users can sort pets by price with a simple click.
- Handles cases where no pets are available by displaying appropriate messages.

### 3. Pet Cards and Liking Mechanism
- Pet cards display essential information such as image, name, breed, gender, and price.
- Users can "Like" pets, which adds the pet thumbnail to a separate section for easy access.

### 4. Pet Details Modal
- Clicking the "Details" button opens a modal with full information about the selected pet.
- The modal can be closed by clicking the close button.

### 5. Adoption Process with Countdown
- When users click the "Adopt" button, a countdown (3, 2, 1) begins.
- After the countdown, the button text changes to "Adopted."

## ES6 Features
This project makes use of modern ES6 JavaScript features, including:
- **Arrow Functions** for cleaner and concise syntax.
- **Template Literals** for string interpolation.
- **Destructuring** to extract values from objects and arrays easily.
- Use of `let` and `const` for variable declarations.

## Live Website
You can check out the live version of the Peddy website at: [https://my-peddy.netlify.app/]

---

### How to Use

1. **Navigation:** Use the responsive navbar to browse different pet categories.
2. **Pet Details:** Click on any pet’s "Details" button to view full information.
3. **Liking Pets:** Click on the "Like" button to add pets to your favorites.
4. **Adoption:** Adopt a pet by clicking the "Adopt" button, which triggers the adoption countdown.

---

## Installation and Setup
To run the project locally:

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/peddy.git
    ```
2. Navigate to the project directory:
    ```bash
    cd peddy
    ```
3. Open `index.html` in your browser to view the project.
