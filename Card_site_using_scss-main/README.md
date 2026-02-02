# Anime Character Gallery - Expanding Card Collection

A static web page showcasing an "Anime Collection" using an interactive expanding/collapsing card gallery layout. This template is designed to display character art in an engaging, visually dynamic way, perfect for fan pages, personal portfolios, or specialized content showcases.

**⚠️ Note:** This is a **static (non-responsive)** layout. The design is fixed for a desktop view and **does not** adapt gracefully to smaller screens like tablets or mobile phones. The layout is optimized to display the full row of cards horizontally.

---

## 🚀 Project Overview

The core feature of this project is a **CSS-driven expanding card system** (often implemented using Flexbox or Grid properties combined with transition effects).

### Key Features:

* **Fixed Gallery:** A horizontal row of image panels fixed to a single width.
* **Hover Effect:** When a user hovers over a panel:
    * The selected panel **expands** horizontally to reveal the full, high-quality character image (and often the character's name).
    * The unhovered panels **collapse** to a narrow width and transition to a grayscale, darkened, or black-and-white state.
* **Aesthetic:** Uses dark, intense imagery, a bold title ("Anime collection"), and likely features a background texture (visible behind the cards).

---

## 🛠️ Technology Stack

* **HTML5:** Provides the structure for the gallery container and individual character cards.
* **CSS3:** Essential for the visual effect:
    * **Layout:** Uses **Flexbox** or **CSS Grid** to manage the fixed-width row of cards.
    * **Interaction:** Heavy use of the `:hover` pseudo-class to trigger width changes.
    * **Visual Effects:** Utilizes `transition` for smooth expanding/collapsing, and `filter: grayscale()` to create the black-and-white effect on inactive cards.
* **Images/Assets:** High-resolution vertical images for each character.

---

## 🖼️ Design & Structure Notes (Non-Responsive)

The design is built around a single, full-width container that houses the entire gallery.

* **Fixed Card Count:** The layout is configured for a specific number of cards (e.g., 7 or 8) that perfectly fit the fixed desktop viewport.
* **Aspect Ratio:** All images maintain a consistent, narrow vertical aspect ratio.
* **Theming:** Dark theme with vibrant color contrasts created by the expanding color images against the dark, static background elements.

---

## ⚙️ Setup and Installation

This is a static HTML/CSS template and requires no special server-side setup.

1.  **Clone the repository:**
    ```bash
    git clone [REPOSITORY_URL]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd anime-collection-gallery
    ```
3.  **Open the file:** Open the `index.html` file in your web browser to view the collection.
