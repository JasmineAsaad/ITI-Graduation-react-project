# Jasmine Dev — Personal Portfolio

This project is my personal developer portfolio, built to showcase who I am as a Junior Frontend Developer and to present the projects I've worked on so far. I built it with **React**, using **Vite** as the build tool for a fast development experience.

## Why React?

I chose React because it lets me break the interface into small, reusable pieces — a `Navbar`, a `Footer`, a `ProjectCard` — instead of repeating the same HTML over and over. Each project card on the Projects page, for example, is rendered from the same component, just with different data passed into it. This made the site much easier to build and maintain than plain HTML and CSS would have.

## Styling with Bootstrap

For the UI, I used **Bootstrap 5** instead of writing every style from scratch. Bootstrap gave me a responsive grid system out of the box, so the layout automatically adjusts between mobile, tablet, and desktop screens without extra work on my end. I also used **Bootstrap Icons** for things like the LinkedIn and GitHub icons in the footer, and Bootstrap's built-in dark/light theming system (`data-bs-theme`) to power the theme toggle button in the navbar. On top of Bootstrap, I added a small custom stylesheet (`index.css`) for things Bootstrap doesn't cover out of the box, like the hover effect on project cards and the animated hero section on the homepage.

## Routing between pages

Since this is a single-page application, I used **React Router** (`react-router-dom`) to handle navigation between pages — Home, Projects, a dynamic Project Details page, and Contact — without reloading the whole website every time. I specifically used `HashRouter`, which keeps the routes in the URL after a `#` symbol. I chose this because it works reliably no matter where the site is hosted, without needing any special server configuration.

## Simulating a api

One of the more interesting parts of this project is the **fake API layer**, which lives in `src/api/fakeApi.js`. Instead of hardcoding project data directly into my components, I built a small set of functions — `getProjects`, `getProjectById`, `getCategories`, and `sendContactMessage` — that behave like real API calls. Each one returns a `Promise` and includes an artificial delay using `setTimeout`, so the app genuinely waits and shows a loading spinner, just like it would with a real server.

I did this on purpose: it means my components (`Home`, `Projects`, `Contact`, etc.) are already written the "real" way, using `async/await` and `useEffect`. If I ever want to connect this project to an actual backend, I only need to change the inside of these few functions — the rest of the app won't need to be touched at all.

## structure

All of the data about my projects — titles, descriptions, images, and links — lives in one place, `src/data/projects.js`, which keeps content separate from logic. The Projects page reads from this data through the fake API and lets visitors filter projects by category. Clicking "more" on any project takes them to a details page built around a dynamic route (`/projects/:id`), and the Contact page collects a name, email, and message through a simple form.

Overall, this project reflects the core stack I've been learning and practicing: **HTML, CSS, JavaScript, Bootstrap, React, and REST-API-style data fetching** — all put together into one responsive, functional website.
 
 vercel:https://react-projects-nine-lime.vercel.app/