/* eslint-disable react/no-unknown-property */
const Style = () => {
  return <style jsx global>{`
    html,
    body {
      background-image: radial-gradient(circle at top left, rgba(244, 148, 105, 0.14), transparent 24%),
        radial-gradient(circle at bottom right, rgba(136, 72, 204, 0.12), transparent 18%),
        linear-gradient(180deg, #0f0c14 0%, #120e18 35%, #180f23 100%);
      color: #f5f0e7;
      min-height: 100%;
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background-attachment: fixed;
    }

    #theme-lrac {
      min-height: 100vh;
      position: relative;
    }

    .lrac-header {
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(18px);
      background: rgba(10, 8, 16, 0.75);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      box-shadow: 0 24px 76px rgba(0, 0, 0, 0.18);
    }

    .lrac-header-inner {
      max-width: 1300px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem 1.5rem;
      min-height: 72px;
    }

    .lrac-brand {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      color: #fff;
    }

    .lrac-brand .brand-title {
      font-size: 1.4rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-weight: 800;
      color: #fff;
    }

    .lrac-brand .brand-subtitle {
      font-size: 0.88rem;
      color: rgba(255, 255, 255, 0.72);
    }

    .lrac-nav {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      flex-wrap: wrap;
    }

    .lrac-nav a {
      color: rgba(255, 255, 255, 0.82);
      text-decoration: none;
      font-size: 0.96rem;
      transition: color 0.25s ease;
    }

    .lrac-nav a:hover {
      color: #f9e0d9;
    }

    .lrac-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .lrac-action-button {
      border: 1px solid rgba(255, 255, 255, 0.16);
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
      border-radius: 999px;
      padding: 0.7rem 0.95rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.25s ease, transform 0.2s ease;
    }

    .lrac-action-button:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-1px);
    }

    .lrac-hero {
      position: relative;
      overflow: hidden;
      padding: 3rem 1.5rem 4rem;
      margin: 0 auto;
      min-height: 46vh;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    .lrac-hero::before,
    .lrac-hero::after {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .lrac-hero::before {
      background: radial-gradient(circle at 22% 20%, rgba(255, 144, 90, 0.24), transparent 24%);
    }

    .lrac-hero::after {
      background: radial-gradient(circle at 84% 80%, rgba(175, 95, 232, 0.18), transparent 26%);
    }

    .lrac-hero-panel {
      position: relative;
      width: min(100%, 1120px);
      padding: 3rem;
      border-radius: 32px;
      backdrop-filter: blur(24px);
      background: rgba(15, 11, 22, 0.76);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 40px 120px rgba(5, 4, 10, 0.32);
      display: grid;
      grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
      gap: 2rem;
    }

    .lrac-hero-copy h1 {
      margin: 0;
      font-size: clamp(3rem, 5vw, 4.6rem);
      line-height: 0.95;
      letter-spacing: -0.05em;
      color: #fff;
    }

    .lrac-hero-copy p {
      max-width: 48rem;
      margin: 1.25rem 0 0;
      font-size: 1.05rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.78);
    }

    .lrac-hero-info {
      margin-top: 2rem;
      display: grid;
      gap: 0.85rem;
    }

    .lrac-hero-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.88);
      font-size: 0.95rem;
      width: fit-content;
    }

    .lrac-hero-side {
      display: grid;
      align-content: space-between;
      gap: 1rem;
    }

    .lrac-hero-side h2 {
      margin: 0;
      font-size: 1.1rem;
      color: #ffd7c5;
      text-transform: uppercase;
      letter-spacing: 0.2em;
    }

    .lrac-hero-side p {
      margin: 0;
      color: rgba(255, 255,255, 0.7);
      line-height: 1.75;
    }

    .lrac-card,
    .lrac-sidebar-card,
    .lrac-search-panel {
      background: rgba(18, 14, 24, 0.82);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 26px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
      backdrop-filter: blur(18px);
    }

    .lrac-post-grid {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .lrac-post-card {
      position: relative;
      overflow: hidden;
      min-height: 220px;
      display: grid;
      grid-template-rows: 1fr auto;
      border-radius: 28px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .lrac-post-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 26px 80px rgba(0, 0, 0, 0.28);
    }

    .lrac-post-image {
      position: relative;
      min-height: 170px;
      background-size: cover;
      background-position: center;
      filter: saturate(1.05) brightness(0.95);
    }

    .lrac-post-body {
      padding: 1.4rem 1.4rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .lrac-post-title {
      margin: 0;
      font-size: 1.2rem;
      color: #ffffff;
      line-height: 1.35;
    }

    .lrac-post-summary {
      margin: 0;
      color: rgba(255, 255, 255, 0.72);
      line-height: 1.75;
      min-height: 3.6rem;
    }

    .lrac-post-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
      color: rgba(255,255,255,0.65);
      font-size: 0.92rem;
      margin-top: auto;
    }

    .lrac-post-pill {
      padding: 0.45rem 0.75rem;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.04);
      color: rgba(255,255,255,0.82);
      font-size: 0.85rem;
    }

    .lrac-sidebar {
      display: grid;
      gap: 1.25rem;
    }

    .lrac-sidebar-card {
      padding: 1.35rem;
    }

    .lrac-sidebar-card h3 {
      margin: 0 0 1rem;
      font-size: 1rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #ffd7c5;
    }

    .lrac-sidebar-card p,
    .lrac-sidebar-card li {
      color: rgba(255,255,255,0.76);
      line-height: 1.8;
    }

    .lrac-sidebar-list {
      display: grid;
      gap: 0.9rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .lrac-sidebar-list a {
      color: rgba(255,255,255,0.84);
      text-decoration: none;
      transition: color .2s ease;
    }

    .lrac-sidebar-list a:hover {
      color: #ffd7c5;
    }

    .lrac-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .lrac-tag-pill {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 0.9rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.78);
      font-size: 0.86rem;
      border: 1px solid rgba(255,255,255,0.08);
      transition: transform 0.2s ease;
    }

    .lrac-tag-pill:hover {
      transform: translateY(-1px);
    }

    .lrac-footer {
      margin-top: 4rem;
      padding: 2rem 1.5rem 2.5rem;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.95rem;
    }

    .lrac-footer a {
      color: rgba(255,255,255,0.8);
      text-decoration: underline;
    }

    .lrac-search-panel {
      padding: 1.1rem 1.25rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      align-items: center;
    }

    .lrac-search-panel input {
      flex: 1 1 240px;
      min-width: 0;
      border: 1px solid rgba(255,255,255,0.14);
      background: rgba(255,255,255,0.05);
      color: #fff;
      border-radius: 999px;
      padding: 0.95rem 1.1rem;
      outline: none;
      transition: border-color 0.2s ease;
    }

    .lrac-search-panel input:focus {
      border-color: rgba(255, 168, 123, 0.7);
    }

    .lrac-search-panel button {
      border: none;
      color: #111;
      background: #ffc898;
      border-radius: 999px;
      padding: 0.93rem 1.2rem;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .lrac-search-panel button:hover {
      transform: translateY(-1px);
    }

    .lrac-category-pill,
    .lrac-tag-pill-small {
      display: inline-flex;
      align-items: center;
      padding: 0.45rem 0.75rem;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.82);
      font-size: 0.85rem;
    }

    .lrac-meta-line {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      color: rgba(255,255,255,0.65);
      font-size: 0.93rem;
    }

    .lrac-title-block {
      margin-bottom: 2rem;
      padding: 2rem 1.5rem;
      border-radius: 30px;
      background: rgba(18, 14, 24, 0.82);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
    }

    .lrac-title-block h1 {
      margin: 0;
      font-size: clamp(2.5rem, 4vw, 3.8rem);
      line-height: 1.02;
      letter-spacing: -0.05em;
      color: #fff;
    }

    .lrac-title-block p {
      margin: 1rem 0 0;
      color: rgba(255, 255, 255, 0.76);
      line-height: 1.8;
      max-width: 50rem;
    }

    .lrac-category-banner {
      margin-bottom: 1.5rem;
      padding: 1rem 1.25rem;
      border-radius: 22px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255,255,255,0.08);
      color: rgba(255,255,255,0.84);
      font-size: 0.98rem;
    }

    .lrac-hero-side .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.75rem 1rem;
      border-radius: 999px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      font-size: 0.86rem;
      color: rgba(255,255,255,0.8);
    }

    .lrac-mobile-nav-toggle {
      display: none;
      border: none;
      background: rgba(255,255,255,0.06);
      color: #fff;
      border-radius: 999px;
      width: 44px;
      height: 44px;
      font-size: 1.25rem;
      cursor: pointer;
    }

    .lrac-mobile-menu {
      display: none;
    }

    @media (max-width: 1024px) {
      .lrac-hero-panel {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 860px) {
      .lrac-header-inner {
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .lrac-nav {
        display: none;
        width: 100%;
        margin-top: 1rem;
        gap: 0.85rem;
        background: rgba(9, 7, 14, 0.96);
        padding: 1rem 1rem 1.25rem;
        border-radius: 22px;
      }

      .lrac-nav.open {
        display: flex;
      }

      .lrac-mobile-nav-toggle {
        display: inline-flex;
      }

      .lrac-actions {
        margin-left: auto;
      }

      .lrac-post-grid {
        grid-template-columns: 1fr;
      }

      .lrac-sidebar {
        display: none;
      }

      .lrac-hero {
        padding-top: 2rem;
        padding-bottom: 2.5rem;
      }

      .lrac-search-panel {
        flex-direction: column;
        align-items: stretch;
      }

      .lrac-search-panel button {
        width: 100%;
      }
    }

    @media (max-width: 640px) {
      .lrac-header-inner {
        padding: 0.9rem 1rem;
      }

      .lrac-post-card {
        min-height: auto;
      }

      .lrac-post-body {
        padding: 1.1rem 1rem 1.2rem;
      }
    }
  `}</style>
}

export { Style }
