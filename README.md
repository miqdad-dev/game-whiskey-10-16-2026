# Game Whiskey



An interactive HTML5 canvas demo showcasing a small particle system. This project demonstrates how to structure and host a static site problem: build a smooth, responsive animation with zero dependencies and deploy it reliably on GitHub Pages.

## Overview
This project addresses the problem of delivering a lightweight, portable interactive visual without any framework or backend. It uses a minimal, dependency-free JavaScript loop to animate particles spawned by user clicks. The solution focuses on clarity, performance, and ease of hosting.

## Features
- Dependency-free interactive animation (HTML/CSS/JS only)
- Particle physics loop with fade-out lifecycle
- Responsive canvas sizing and simple styling
- Ready for static hosting (GitHub Pages)

## Getting Started
### Prerequisites
- A modern web browser

### Installation
1. Clone the repo
   - `git clone <this repo>`
   - `cd <repo>`
2. No build step required

### Usage
- Open `docs/index.html` in a browser
- Click anywhere on the canvas to spawn particles

## Configuration
No runtime configuration required. You can tweak constants in `docs/app.js` (e.g., particle count, velocity, gravity).

## Examples / Screenshots
- See `docs/index.html` and `docs/app.js` for clean, commented code.

## Testing
This static demo is visual; no runtime tests are included. For CI validation, you could add a link checker or lighthouse CI later.

## Deployment / Hosting
- GitHub Pages: Settings → Pages → Deploy from a branch: `main`, folder: `/docs`
- After enabling, visit: `https://<owner>.github.io/<repo>/`

## Roadmap / Future Work
- Add UI toggles for particle physics
- Add FPS meter and performance profiling

## Contributing
Issues and PRs are welcome. Please describe the problem and proposed solution clearly.

## License
MIT

## Acknowledgments
Inspired by classic particle demos and the elegance of small, dependency-free visualizations.

## Overview

Game Whiskey is a game dev 2d web application built with cpp, cmake. It provides a modern, responsive user interface with intuitive functionality.

## Features

- Clear project structure and modular components
- Non-trivial core logic (state machines, parsing, or algorithms)
- Comprehensive tests and examples

## Architecture

- Components: describe key modules/classes and responsibilities
- Data flow: outline request/response or pipeline stages
- Tradeoffs: briefly note choices (performance vs. simplicity, etc.)

## Setup

1. Ensure you have the required runtime (e.g., Java 17, Python 3.11, or Node 20).
2. Install dependencies (see below).

### Dependencies

- Java: Maven `mvn -q -DskipTests install` or Gradle `./gradlew build`
- Python: `python -m pip install -r requirements.txt`
- Node: `npm install` or `yarn install` or `pnpm install`

## Configuration

- Provide environment variables or config files as needed.
- Example: `.env` or `config.yaml`.

## Usage

Provide exact commands. For example:

- Java (Maven): `mvn -q exec:java`
- Java (Gradle): `./gradlew run`
- Python CLI: `python -m package.module --help`
- Web: `npm run dev` and open http://localhost:3000

## Examples

Show minimal inputs/outputs or curl examples for APIs.

## Testing

- Java: `mvn -q test` or `./gradlew test`
- Python: `pytest -q`
- Node: `npm test` / `yarn test` / `pnpm test`

## Deployment

- Docker: provide a `Dockerfile` or `docker-compose.yml` if applicable.
- Cloud: describe minimal steps for common providers (Heroku/Fly.io/Render).
- Data/ML: how to run pipelines or training jobs with parameters.

## Hosting

- Static web: publish `docs/` via GitHub Pages (Settings → Pages).
- Backend: deploy with Docker or a PaaS; expose port and configure env vars.

## Troubleshooting

- Common build errors and how to resolve them.
- Environment/version mismatches.
