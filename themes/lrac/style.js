/* eslint-disable react/no-unknown-property */
export const Style = () => {
  return <style jsx global>{`
    :root {
      --lr-bg: #f3eee6;
      --lr-bg-2: #e9dfd1;
      --lr-paper: #fbf7f0;
      --lr-paper-strong: #fffaf3;
      --lr-ink: #171412;
      --lr-ink-2: #3a332e;
      --lr-muted: #786f66;
      --lr-faint: #a89d91;
      --lr-line: rgba(34, 27, 22, .14);
      --lr-line-strong: rgba(34, 27, 22, .28);
      --lr-rust: #ad4b2c;
      --lr-rust-bright: #d56d46;
      --lr-bark: #5d4437;
      --lr-cream: #ead9bd;
      --lr-moss: #3e4a3d;
      --lr-charcoal: #1e211e;
      --lr-shadow: 0 30px 80px rgba(70, 47, 32, .12);
      --lr-soft-shadow: 0 16px 42px rgba(70, 47, 32, .08);
      --lr-radius-xl: 40px;
      --lr-radius-lg: 28px;
      --lr-radius-md: 18px;
      --lr-header: 74px;
      --lr-serif: ui-serif, Georgia, Cambria, "Times New Roman", "Songti SC", "STSong", serif;
      --lr-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
    }

    html.dark {
      --lr-bg: #151412;
      --lr-bg-2: #0e0e0d;
      --lr-paper: #1d1b18;
      --lr-paper-strong: #24211d;
      --lr-ink: #f2e9dc;
      --lr-ink-2: #d2c7b8;
      --lr-muted: #a29687;
      --lr-faint: #71685f;
      --lr-line: rgba(243, 233, 219, .11);
      --lr-line-strong: rgba(243, 233, 219, .22);
      --lr-rust: #d76d46;
      --lr-rust-bright: #ef9673;
      --lr-bark: #aa7d68;
      --lr-cream: #d9c09a;
      --lr-moss: #8c9b86;
      --lr-charcoal: #090a09;
      --lr-shadow: 0 32px 80px rgba(0, 0, 0, .36);
      --lr-soft-shadow: 0 18px 42px rgba(0, 0, 0, .24);
    }

    html {
      background: var(--lr-bg);
      scroll-behavior: smooth;
      scroll-padding-top: calc(var(--lr-header) + 28px);
    }

    body {
      margin: 0;
      background: var(--lr-bg) !important;
      color: var(--lr-ink);
      font-family: var(--lr-sans);
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }

    body::-webkit-scrollbar { width: 10px; }
    body::-webkit-scrollbar-track { background: var(--lr-bg); }
    body::-webkit-scrollbar-thumb {
      background: color-mix(in srgb, var(--lr-rust) 48%, transparent);
      border: 3px solid var(--lr-bg);
      border-radius: 999px;
    }

    #theme-lrac,
    #theme-lrac * { box-sizing: border-box; }

    #theme-lrac a { color: inherit; }
    #theme-lrac button,
    #theme-lrac input { font: inherit; }

    .lrac-shell {
      min-height: 100vh;
      position: relative;
      overflow: clip;
      background:
        radial-gradient(circle at 6% 12%, color-mix(in srgb, var(--lr-rust) 8%, transparent), transparent 28rem),
        radial-gradient(circle at 94% 38%, color-mix(in srgb, var(--lr-cream) 17%, transparent), transparent 32rem),
        linear-gradient(180deg, var(--lr-bg) 0%, var(--lr-bg) 74%, var(--lr-bg-2) 100%);
    }

    .lrac-shell::before {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      opacity: .23;
      background-image:
        linear-gradient(rgba(28, 20, 16, .024) 1px, transparent 1px),
        linear-gradient(90deg, rgba(28, 20, 16, .024) 1px, transparent 1px);
      background-size: 38px 38px;
      mask-image: linear-gradient(to bottom, black, transparent 60%);
      z-index: 0;
    }

    html.dark .lrac-shell::before { opacity: .12; }

    .lrac-atmosphere { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
    .lrac-atmosphere span { position: absolute; display: block; border-radius: 999px; filter: blur(84px); opacity: .08; }
    .lrac-atmosphere span:nth-child(1) { width: 24rem; height: 24rem; left: -11rem; top: 28vh; background: var(--lr-rust); }
    .lrac-atmosphere span:nth-child(2) { width: 30rem; height: 18rem; right: -17rem; top: 62vh; background: var(--lr-moss); }
    .lrac-atmosphere span:nth-child(3) { width: 18rem; height: 18rem; left: 44%; top: 2vh; background: var(--lr-cream); opacity: .06; }

    /* Header */
    .lrac-header {
      position: sticky;
      top: 0;
      z-index: 90;
      border-bottom: 1px solid var(--lr-line);
      background: color-mix(in srgb, var(--lr-bg) 85%, transparent);
      -webkit-backdrop-filter: blur(22px) saturate(1.1);
      backdrop-filter: blur(22px) saturate(1.1);
    }

    .lrac-progress-track { position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; overflow: hidden; }
    .lrac-progress-bar { height: 100%; background: linear-gradient(90deg, var(--lr-rust), var(--lr-cream), var(--lr-moss)); transition: width 80ms linear; }

    .lrac-header-frame {
      width: min(calc(100% - 48px), 1420px);
      min-height: var(--lr-header);
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .lrac-brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      flex: 0 0 auto;
      text-decoration: none !important;
    }

    .lrac-mark {
      width: 92px;
      aspect-ratio: 1;
      position: relative;
      display: grid;
      place-items: center;
      overflow: hidden;
      border-radius: 28px;
      background: var(--lr-charcoal);
      color: #f5e8d4;
      box-shadow: 0 18px 35px rgba(24, 17, 13, .16);
      isolation: isolate;
    }

    .lrac-mark.is-compact { width: 38px; border-radius: 13px; box-shadow: none; }
    .lrac-mark-type { position: relative; z-index: 3; font-size: 21px; font-weight: 840; letter-spacing: -.09em; }
    .lrac-mark.is-compact .lrac-mark-type { font-size: 11px; }
    .lrac-mark-band { position: absolute; z-index: 1; display: block; width: 110%; height: 18%; left: -5%; transform: rotate(-16deg); border-radius: 999px; }
    .lrac-mark-band-a { top: 4%; background: var(--lr-rust); }
    .lrac-mark-band-b { bottom: 11%; background: var(--lr-cream); opacity: .9; }
    .lrac-mark-band-c { bottom: -7%; background: var(--lr-rust); }

    .lrac-brand-text { display: flex; flex-direction: column; line-height: 1.02; gap: 4px; }
    .lrac-brand-text strong { font-size: 14px; font-weight: 860; letter-spacing: .06em; }
    .lrac-brand-text small { color: var(--lr-muted); font-size: 8px; font-weight: 650; letter-spacing: .08em; }

    .lrac-desktop-nav { display: flex; align-items: stretch; height: var(--lr-header); margin-left: auto; }
    .lrac-desktop-nav > a {
      position: relative;
      min-width: 76px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      padding: 0 14px;
      color: var(--lr-muted) !important;
      text-decoration: none !important;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
      transition: color .2s ease, background .2s ease, border-color .2s ease;
    }
    .lrac-desktop-nav > a small { font-size: 7px; font-weight: 800; color: var(--lr-faint); letter-spacing: .08em; }
    .lrac-desktop-nav > a span { font-size: 11px; font-weight: 700; }
    .lrac-desktop-nav > a:hover,
    .lrac-desktop-nav > a.is-active {
      color: var(--lr-ink) !important;
      border-color: var(--lr-line);
      background: color-mix(in srgb, var(--lr-paper) 58%, transparent);
    }
    .lrac-desktop-nav > a.is-active::after {
      content: '';
      position: absolute;
      left: 12px;
      right: 12px;
      bottom: -1px;
      height: 2px;
      background: var(--lr-rust);
    }

    .lrac-header-actions { display: flex; align-items: center; gap: 7px; }
    .lrac-round-action,
    .lrac-menu-trigger {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      border: 1px solid var(--lr-line);
      border-radius: 50%;
      background: color-mix(in srgb, var(--lr-paper) 60%, transparent);
      color: var(--lr-ink) !important;
      cursor: pointer;
      text-decoration: none !important;
      transition: transform .2s ease, background .2s ease, border-color .2s ease;
    }
    .lrac-round-action:hover { transform: translateY(-2px); border-color: var(--lr-line-strong); background: var(--lr-paper); }
    .lrac-round-action span { font-size: 16px; line-height: 1; }
    .lrac-menu-trigger { display: none; position: relative; }
    .lrac-menu-trigger span { position: absolute; left: 11px; right: 11px; height: 1px; background: currentColor; transition: .2s ease; }
    .lrac-menu-trigger span:first-child { top: 14px; }
    .lrac-menu-trigger span:last-child { bottom: 14px; }
    .lrac-menu-trigger[aria-expanded='true'] span:first-child { top: 18px; transform: rotate(45deg); }
    .lrac-menu-trigger[aria-expanded='true'] span:last-child { bottom: 18px; transform: rotate(-45deg); }

    .lrac-mobile-menu { display: none; }

    /* Main frame */
    .lrac-main { position: relative; z-index: 2; }
    .lrac-main-frame {
      width: min(calc(100% - 48px), 1420px);
      margin: 0 auto;
      padding: 30px 0 104px;
    }
    .lrac-main.has-reading-rail .lrac-main-frame {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 270px;
      gap: clamp(34px, 4vw, 64px);
      align-items: start;
    }
    .lrac-main-content { min-width: 0; }

    .lrac-overline {
      margin: 0;
      color: var(--lr-rust);
      font-size: 8px;
      line-height: 1.4;
      font-weight: 820;
      letter-spacing: .18em;
      text-transform: uppercase;
    }

    /* Hero */
    .lrac-hero {
      position: relative;
      overflow: hidden;
      border: 1px solid var(--lr-line);
      border-radius: var(--lr-radius-xl);
      background: var(--lr-paper);
      box-shadow: var(--lr-shadow);
    }
    .lrac-hero::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        linear-gradient(90deg, transparent 0 66%, color-mix(in srgb, var(--lr-rust) 3%, transparent) 66% 100%),
        radial-gradient(circle at 15% 15%, color-mix(in srgb, var(--lr-cream) 20%, transparent), transparent 26rem);
    }

    .lrac-hero-grid {
      min-height: 670px;
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(390px, .95fr);
      gap: clamp(36px, 5vw, 86px);
      padding: clamp(42px, 5.4vw, 78px);
      align-items: center;
    }

    .lrac-hero-copy h1 {
      max-width: 780px;
      margin: 24px 0 24px;
      font-family: var(--lr-serif);
      font-size: clamp(52px, 6.3vw, 88px);
      font-weight: 600;
      line-height: .97;
      letter-spacing: -.055em;
      text-wrap: balance;
    }
    .lrac-hero-copy h1 span { display: block; }
    .lrac-hero-desc { max-width: 640px; margin: 0; color: var(--lr-muted); font-size: 14px; line-height: 1.95; }

    .lrac-hero-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 34px; }
    .lrac-button {
      min-height: 46px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 0 19px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 760;
      text-decoration: none !important;
      transition: transform .22s ease, box-shadow .22s ease, background .22s ease;
    }
    .lrac-button:hover { transform: translateY(-2px); }
    .lrac-button-primary { background: var(--lr-charcoal); color: #fff4e3 !important; box-shadow: 0 13px 25px rgba(18, 16, 13, .15); }
    html.dark .lrac-button-primary { background: var(--lr-rust); color: #fff9f2 !important; }
    .lrac-button-ghost { border: 1px solid var(--lr-line-strong); background: transparent; color: var(--lr-ink) !important; }
    .lrac-button-ghost:hover { background: var(--lr-paper-strong); }

    .lrac-hero-index {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      margin-top: 52px;
      border-top: 1px solid var(--lr-line);
      border-bottom: 1px solid var(--lr-line);
    }
    .lrac-hero-index > div { min-height: 76px; display: flex; flex-direction: column; justify-content: center; padding: 12px 16px 12px 0; }
    .lrac-hero-index > div + div { padding-left: 18px; border-left: 1px solid var(--lr-line); }
    .lrac-hero-index strong { font-family: var(--lr-serif); font-size: 27px; font-weight: 600; letter-spacing: -.04em; }
    .lrac-hero-index span { margin-top: 2px; color: var(--lr-muted); font-size: 8px; letter-spacing: .08em; }

    .lrac-hero-photo-wrap { position: relative; min-width: 0; }
    .lrac-hero-photo-stage {
      position: relative;
      aspect-ratio: 1.14;
      min-height: 355px;
      overflow: hidden;
      border-radius: 32px 32px 120px 32px;
      background: var(--lr-charcoal);
      box-shadow: 0 30px 72px rgba(46, 30, 20, .24);
      transform: rotate(1.2deg);
    }
    .lrac-hero-photo { width: 100%; height: 100%; display: block; object-fit: cover; object-position: 53% 50%; filter: saturate(.94) contrast(1.03); transform: scale(1.015); }
    .lrac-photo-shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15, 15, 13, .13), transparent 40%, rgba(15, 15, 13, .58)); }
    .lrac-photo-caption { position: absolute; left: 19px; right: 19px; display: flex; align-items: center; justify-content: space-between; gap: 16px; color: #fff3df; }
    .lrac-photo-caption-top { top: 18px; padding-bottom: 13px; border-bottom: 1px solid rgba(255, 245, 227, .25); }
    .lrac-photo-caption-top span,
    .lrac-photo-caption-top strong { font-size: 7px; letter-spacing: .12em; font-weight: 760; }
    .lrac-photo-caption-bottom { bottom: 18px; align-items: flex-end; }
    .lrac-photo-caption-bottom small { font-size: 7px; font-weight: 800; letter-spacing: .15em; }
    .lrac-photo-caption-bottom strong { font-family: var(--lr-serif); font-size: clamp(30px, 4vw, 56px); font-weight: 600; letter-spacing: -.05em; }

    .lrac-photo-note {
      width: 77%;
      position: relative;
      z-index: 4;
      margin: -35px 0 0 -32px;
      display: grid;
      grid-template-columns: 44px 1fr;
      gap: 15px;
      padding: 18px 20px;
      border: 1px solid var(--lr-line);
      border-radius: 18px;
      background: color-mix(in srgb, var(--lr-paper-strong) 92%, transparent);
      box-shadow: var(--lr-soft-shadow);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
    }
    .lrac-photo-note > span { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%; background: var(--lr-rust); color: #fff4e4; font-size: 8px; font-weight: 850; }
    .lrac-photo-note p { margin: 0; color: var(--lr-muted); font-size: 9px; line-height: 1.7; }

    .lrac-hero-featured {
      position: relative;
      z-index: 3;
      min-height: 76px;
      display: grid;
      grid-template-columns: 116px 100px minmax(0, 1fr) 28px;
      gap: 14px;
      align-items: center;
      padding: 12px clamp(28px, 4vw, 54px);
      border-top: 1px solid var(--lr-line);
      background: color-mix(in srgb, var(--lr-bg-2) 34%, var(--lr-paper));
      text-decoration: none !important;
      transition: background .2s ease;
    }
    .lrac-hero-featured:hover { background: color-mix(in srgb, var(--lr-rust) 5%, var(--lr-paper)); }
    .lrac-hero-featured-label { color: var(--lr-rust); font-size: 7px; font-weight: 850; letter-spacing: .16em; }
    .lrac-hero-featured-date { color: var(--lr-muted); font-size: 8px; letter-spacing: .06em; }
    .lrac-hero-featured strong { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: var(--lr-serif); font-size: 17px; font-weight: 600; }
    .lrac-hero-featured-arrow { text-align: right; font-size: 16px; }

    /* Sections */
    .lrac-section { margin-top: clamp(70px, 8vw, 116px); }
    .lrac-section-title { display: flex; align-items: flex-end; justify-content: space-between; gap: 28px; margin-bottom: 34px; }
    .lrac-section-title > div { min-width: 0; }
    .lrac-section-title p { margin: 0 0 10px; color: var(--lr-rust); font-size: 8px; font-weight: 840; letter-spacing: .17em; }
    .lrac-section-title h2 { margin: 0; font-family: var(--lr-serif); font-size: clamp(31px, 4vw, 48px); font-weight: 600; line-height: 1.06; letter-spacing: -.045em; }
    .lrac-section-title > div > span { display: block; margin-top: 9px; color: var(--lr-muted); font-size: 11px; line-height: 1.7; }
    .lrac-inline-link,
    .lrac-section-title > a { flex: 0 0 auto; color: var(--lr-ink) !important; font-size: 10px; font-weight: 760; text-decoration: none !important; border-bottom: 1px solid var(--lr-line-strong); padding: 0 0 5px; }
    .lrac-inline-link span { color: var(--lr-rust); margin-left: 7px; }

    .lrac-section-rule { display: flex; align-items: center; gap: 12px; margin-bottom: 31px; color: var(--lr-muted); }
    .lrac-section-rule span { color: var(--lr-rust); font-size: 8px; font-weight: 820; letter-spacing: .12em; }
    .lrac-section-rule i { height: 1px; flex: 1; background: var(--lr-line); }
    .lrac-section-rule strong { font-size: 8px; letter-spacing: .14em; }

    /* Post cards */
    .lrac-note-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; }
    .lrac-note-grid.is-home { grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 20px; }
    .lrac-note-card {
      min-width: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      border: 1px solid var(--lr-line);
      border-radius: var(--lr-radius-lg);
      background: color-mix(in srgb, var(--lr-paper) 90%, transparent);
      box-shadow: 0 8px 26px rgba(54, 38, 29, .035);
      transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease;
    }
    .lrac-note-card:hover { transform: translateY(-4px); border-color: var(--lr-line-strong); box-shadow: var(--lr-soft-shadow); }
    .lrac-note-grid.is-home .lrac-note-card:nth-child(1) { grid-column: span 7; }
    .lrac-note-grid.is-home .lrac-note-card:nth-child(2) { grid-column: span 5; }
    .lrac-note-grid.is-home .lrac-note-card:nth-child(n+3) { grid-column: span 4; }

    .lrac-note-media { position: relative; display: block; min-height: 260px; overflow: hidden; background: var(--lr-charcoal); text-decoration: none !important; }
    .lrac-note-grid.is-home .lrac-note-card:nth-child(1) .lrac-note-media { min-height: 380px; }
    .lrac-note-grid.is-home .lrac-note-card:nth-child(2) .lrac-note-media { min-height: 380px; }
    .lrac-note-media img { width: 100%; height: 100%; min-height: inherit; position: absolute; inset: 0; display: block; object-fit: cover; transition: transform .6s cubic-bezier(.2,.7,.2,1), filter .3s ease; }
    .lrac-note-card:hover .lrac-note-media img { transform: scale(1.035); filter: saturate(1.05); }
    .lrac-note-media::after { content: ''; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(180deg, transparent 50%, rgba(13, 12, 10, .24)); }
    .lrac-note-media-index { position: absolute; z-index: 3; right: 15px; top: 14px; min-width: 30px; height: 30px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.28); border-radius: 999px; background: rgba(22, 18, 15, .32); color: #fff4e5; font-size: 7px; font-weight: 820; backdrop-filter: blur(12px); }

    .lrac-note-placeholder { min-height: inherit; position: absolute; inset: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; padding: 28px; background: linear-gradient(145deg, var(--lr-rust) 0 42%, var(--lr-bark) 42% 58%, var(--lr-charcoal) 58% 100%); color: #fff1dc; }
    .lrac-note-placeholder::before,
    .lrac-note-placeholder::after { content: ''; position: absolute; border-radius: 999px; transform: rotate(-21deg); }
    .lrac-note-placeholder::before { width: 70%; height: 16%; right: -18%; top: 22%; background: var(--lr-cream); opacity: .92; }
    .lrac-note-placeholder::after { width: 55%; height: 12%; right: -9%; top: 45%; background: var(--lr-rust-bright); opacity: .9; }
    .lrac-note-placeholder > * { position: relative; z-index: 2; }
    .lrac-note-placeholder span { font-family: var(--lr-serif); font-size: clamp(50px, 7vw, 90px); line-height: .8; opacity: .24; }
    .lrac-note-placeholder strong { margin-top: 18px; font-size: 9px; font-weight: 820; letter-spacing: .14em; }
    .lrac-note-placeholder small { margin-top: 5px; font-size: 7px; letter-spacing: .13em; opacity: .72; }

    .lrac-note-content { flex: 1; display: flex; flex-direction: column; padding: 24px 25px 22px; }
    .lrac-note-meta { min-height: 18px; display: flex; align-items: center; gap: 9px; flex-wrap: wrap; color: var(--lr-muted); font-size: 7px; font-weight: 720; letter-spacing: .08em; text-transform: uppercase; }
    .lrac-note-meta i { width: 3px; height: 3px; border-radius: 50%; background: var(--lr-rust); }
    .lrac-note-title { text-decoration: none !important; }
    .lrac-note-title h2 { margin: 13px 0 10px; font-family: var(--lr-serif); font-size: clamp(25px, 2.5vw, 37px); font-weight: 600; line-height: 1.1; letter-spacing: -.04em; text-wrap: balance; transition: color .2s ease; }
    .lrac-note-card:hover .lrac-note-title h2 { color: var(--lr-rust); }
    .lrac-note-content > p { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; margin: 0; color: var(--lr-muted); font-size: 11px; line-height: 1.8; }
    .lrac-note-bottom { display: flex; align-items: flex-end; justify-content: space-between; gap: 18px; margin-top: auto; padding-top: 24px; }
    .lrac-note-tags { min-width: 0; display: flex; flex-wrap: wrap; gap: 7px; color: var(--lr-muted); font-size: 8px; }
    .lrac-note-tags span { padding: 4px 7px; border-radius: 999px; background: color-mix(in srgb, var(--lr-rust) 7%, transparent); }
    .lrac-note-read { flex: 0 0 auto; color: var(--lr-ink) !important; font-size: 9px; font-weight: 760; text-decoration: none !important; }
    .lrac-note-read span { margin-left: 6px; color: var(--lr-rust); }

    .lrac-empty-state { min-height: 350px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: 44px; border: 1px dashed var(--lr-line-strong); border-radius: var(--lr-radius-lg); background: color-mix(in srgb, var(--lr-paper) 70%, transparent); }
    .lrac-empty-state > span { color: var(--lr-rust); font-size: 8px; font-weight: 820; letter-spacing: .15em; }
    .lrac-empty-state h2 { margin: 14px 0 8px; font-family: var(--lr-serif); font-size: 38px; font-weight: 600; letter-spacing: -.04em; }
    .lrac-empty-state p { max-width: 500px; margin: 0; color: var(--lr-muted); font-size: 11px; line-height: 1.8; }
    .lrac-empty-state a { margin-top: 22px; font-size: 10px; font-weight: 750; text-decoration: none !important; border-bottom: 1px solid var(--lr-line-strong); }

    /* Topics */
    .lrac-topic-atlas {
      display: grid;
      grid-template-columns: minmax(300px, .7fr) minmax(0, 1.3fr);
      gap: clamp(34px, 6vw, 92px);
      padding: clamp(34px, 5vw, 64px);
      border: 1px solid var(--lr-line);
      border-radius: var(--lr-radius-xl);
      background: var(--lr-charcoal);
      color: #f6ead9;
      box-shadow: var(--lr-shadow);
    }
    .lrac-topic-atlas-head p { margin: 0 0 18px; color: #d78a68; font-size: 8px; font-weight: 820; letter-spacing: .16em; }
    .lrac-topic-atlas-head h2 { margin: 0; font-family: var(--lr-serif); font-size: clamp(35px, 4.2vw, 58px); font-weight: 600; line-height: 1.05; letter-spacing: -.05em; }
    .lrac-topic-atlas-body { min-width: 0; }
    .lrac-category-chips { border-top: 1px solid rgba(255, 244, 228, .16); }
    .lrac-category-chips a { min-height: 58px; display: grid; grid-template-columns: 34px 1fr 30px; gap: 12px; align-items: center; border-bottom: 1px solid rgba(255, 244, 228, .16); text-decoration: none !important; }
    .lrac-category-chips a small { color: rgba(255, 244, 228, .45); font-size: 7px; }
    .lrac-category-chips a strong { font-family: var(--lr-serif); font-size: 18px; font-weight: 600; }
    .lrac-category-chips a span { justify-self: end; color: #d78a68; font-size: 8px; }
    .lrac-category-chips a:hover strong { color: #efb08d; }
    .lrac-tag-river { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 26px; }
    .lrac-tag-river a { padding: 7px 10px; border: 1px solid rgba(255, 244, 228, .15); border-radius: 999px; color: rgba(255, 244, 228, .65) !important; font-size: 8px; text-decoration: none !important; transition: .2s ease; }
    .lrac-tag-river a:hover { border-color: rgba(255, 244, 228, .34); color: #fff1df !important; transform: translateY(-1px); }

    /* Manifesto */
    .lrac-manifesto {
      display: grid;
      grid-template-columns: 90px minmax(0, 1fr) minmax(280px, .7fr);
      gap: clamp(26px, 4vw, 58px);
      align-items: stretch;
      padding-top: 30px;
      border-top: 1px solid var(--lr-line-strong);
    }
    .lrac-manifesto-number { font-family: var(--lr-serif); color: var(--lr-rust); font-size: 72px; line-height: .9; letter-spacing: -.07em; opacity: .82; }
    .lrac-manifesto-copy > p:first-child { margin: 3px 0 16px; color: var(--lr-rust); font-size: 8px; font-weight: 820; letter-spacing: .16em; }
    .lrac-manifesto-copy h2 { margin: 0; font-family: var(--lr-serif); font-size: clamp(35px, 4.6vw, 61px); font-weight: 600; line-height: 1.03; letter-spacing: -.05em; }
    .lrac-manifesto-copy > p:not(:first-child) { max-width: 720px; margin: 22px 0 0; color: var(--lr-muted); font-size: 12px; line-height: 1.95; }
    .lrac-manifesto-links { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 28px; }
    .lrac-manifesto-links a { font-size: 9px; font-weight: 750; text-decoration: none !important; border-bottom: 1px solid var(--lr-line-strong); padding-bottom: 4px; }
    .lrac-manifesto-card { min-height: 260px; display: flex; flex-direction: column; justify-content: flex-end; padding: 28px; border-radius: 50% 50% 22px 22px / 34% 34% 22px 22px; background: linear-gradient(155deg, var(--lr-rust), #773422 68%, var(--lr-charcoal)); color: #fff0dd; box-shadow: var(--lr-soft-shadow); }
    .lrac-manifesto-card small { margin-bottom: auto; font-size: 7px; font-weight: 820; letter-spacing: .16em; opacity: .72; }
    .lrac-manifesto-card strong { font-family: var(--lr-serif); font-size: 27px; font-weight: 600; letter-spacing: -.03em; }
    .lrac-manifesto-card p { margin: 9px 0 15px; color: rgba(255, 240, 221, .72); font-size: 9px; line-height: 1.7; }
    .lrac-manifesto-card span { font-size: 7px; font-weight: 780; letter-spacing: .12em; }

    /* Generic interior intro */
    .lrac-page-intro {
      position: relative;
      min-height: 290px;
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 30px;
      padding: clamp(34px, 5vw, 64px);
      border: 1px solid var(--lr-line);
      border-radius: var(--lr-radius-xl);
      background:
        radial-gradient(circle at 85% 25%, color-mix(in srgb, var(--lr-rust) 13%, transparent), transparent 18rem),
        var(--lr-paper);
      box-shadow: var(--lr-soft-shadow);
    }
    .lrac-page-intro > div { position: relative; z-index: 2; }
    .lrac-page-intro p { margin: 0 0 16px; color: var(--lr-rust); font-size: 8px; font-weight: 820; letter-spacing: .16em; }
    .lrac-page-intro h1 { max-width: 900px; margin: 0; font-family: var(--lr-serif); font-size: clamp(47px, 7vw, 88px); font-weight: 600; line-height: .96; letter-spacing: -.06em; }
    .lrac-page-intro > div > span { display: block; margin-top: 18px; color: var(--lr-muted); font-size: 11px; }
    .lrac-page-intro > strong { align-self: center; color: color-mix(in srgb, var(--lr-rust) 9%, transparent); font-family: var(--lr-serif); font-size: clamp(150px, 20vw, 300px); font-weight: 700; line-height: .65; letter-spacing: -.12em; user-select: none; }
    .lrac-list-page .lrac-note-grid { margin-top: 38px; }

    /* Search */
    .lrac-search-box {
      min-height: 98px;
      display: grid;
      grid-template-columns: 58px minmax(0, 1fr) auto;
      gap: 18px;
      align-items: center;
      margin-top: 32px;
      padding: 18px 20px;
      border: 1px solid var(--lr-line-strong);
      border-radius: 24px;
      background: var(--lr-paper);
      box-shadow: var(--lr-soft-shadow);
    }
    .lrac-search-symbol { width: 52px; height: 52px; display: grid; place-items: center; border-radius: 18px; background: var(--lr-charcoal); color: #fff0db; font-size: 23px; }
    .lrac-search-box label { display: block; margin-bottom: 6px; color: var(--lr-rust); font-size: 7px; font-weight: 820; letter-spacing: .14em; }
    .lrac-search-box input { width: 100%; padding: 0; border: 0; outline: 0; background: transparent; color: var(--lr-ink); font-family: var(--lr-serif); font-size: 25px; letter-spacing: -.03em; }
    .lrac-search-box input::placeholder { color: var(--lr-faint); }
    .lrac-search-box button { min-height: 44px; padding: 0 18px; border: 0; border-radius: 999px; background: var(--lr-rust); color: #fff6ec; font-size: 10px; font-weight: 760; cursor: pointer; }
    .lrac-search-box button span { margin-left: 9px; }
    .lrac-search-results { margin-top: 64px; }
    .lrac-search-suggestions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 26px; }
    .lrac-search-suggestions small { margin-right: 6px; color: var(--lr-muted); font-size: 7px; font-weight: 780; letter-spacing: .13em; }
    .lrac-search-suggestions a { padding: 8px 11px; border: 1px solid var(--lr-line); border-radius: 999px; font-size: 9px; text-decoration: none !important; }
    .lrac-search-mark { padding: 0 .12em; border-radius: .15em; background: color-mix(in srgb, var(--lr-rust) 24%, transparent); color: inherit; }

    /* Archive */
    .lrac-archive { margin-top: 48px; }
    .lrac-archive-group { display: grid; grid-template-columns: 170px minmax(0, 1fr); gap: 34px; padding: 28px 0; border-top: 1px solid var(--lr-line-strong); }
    .lrac-archive-month { position: sticky; top: calc(var(--lr-header) + 22px); align-self: start; display: flex; flex-direction: column; gap: 5px; }
    .lrac-archive-month strong { font-family: var(--lr-serif); font-size: 30px; font-weight: 600; letter-spacing: -.04em; }
    .lrac-archive-month span { color: var(--lr-rust); font-size: 7px; font-weight: 800; letter-spacing: .13em; }
    .lrac-archive-list a { min-height: 66px; display: grid; grid-template-columns: 28px 92px minmax(0, 1fr) 110px 20px; gap: 12px; align-items: center; border-bottom: 1px solid var(--lr-line); text-decoration: none !important; }
    .lrac-archive-list a small { color: var(--lr-faint); font-size: 7px; }
    .lrac-archive-list time { color: var(--lr-muted); font-size: 8px; letter-spacing: .05em; }
    .lrac-archive-list strong { font-family: var(--lr-serif); font-size: 16px; font-weight: 600; transition: color .2s ease; }
    .lrac-archive-list a > span { justify-self: end; color: var(--lr-muted); font-size: 8px; }
    .lrac-archive-list em { justify-self: end; color: var(--lr-rust); font-style: normal; }
    .lrac-archive-list a:hover strong { color: var(--lr-rust); }

    /* Taxonomy */
    .lrac-taxonomy-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 38px; }
    .lrac-taxonomy-card { min-height: 220px; position: relative; overflow: hidden; display: flex; flex-direction: column; padding: 25px; border: 1px solid var(--lr-line); border-radius: var(--lr-radius-lg); background: var(--lr-paper); text-decoration: none !important; transition: transform .22s ease, box-shadow .22s ease; }
    .lrac-taxonomy-card::after { content: ''; position: absolute; width: 150px; height: 150px; right: -60px; bottom: -75px; border: 26px solid color-mix(in srgb, var(--lr-rust) 13%, transparent); border-radius: 50%; }
    .lrac-taxonomy-card:hover { transform: translateY(-4px); box-shadow: var(--lr-soft-shadow); }
    .lrac-taxonomy-card small { color: var(--lr-rust); font-size: 8px; font-weight: 820; }
    .lrac-taxonomy-card strong { margin-top: auto; font-family: var(--lr-serif); font-size: 34px; font-weight: 600; letter-spacing: -.04em; }
    .lrac-taxonomy-card span { margin-top: 4px; color: var(--lr-muted); font-size: 8px; letter-spacing: .08em; }
    .lrac-taxonomy-card em { position: absolute; right: 24px; top: 24px; font-style: normal; }

    .lrac-tag-index { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid var(--lr-line-strong); border-left: 1px solid var(--lr-line-strong); margin-top: 38px; }
    .lrac-tag-index a { min-height: 130px; display: flex; flex-direction: column; padding: 18px; border-right: 1px solid var(--lr-line-strong); border-bottom: 1px solid var(--lr-line-strong); text-decoration: none !important; transition: background .2s ease; }
    .lrac-tag-index a:hover { background: color-mix(in srgb, var(--lr-rust) 5%, var(--lr-paper)); }
    .lrac-tag-index small { color: var(--lr-faint); font-size: 7px; }
    .lrac-tag-index strong { margin-top: auto; font-family: var(--lr-serif); font-size: 20px; font-weight: 600; }
    .lrac-tag-index span { margin-top: 4px; color: var(--lr-rust); font-size: 8px; }

    /* Pagination */
    .lrac-pagination { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-top: 42px; padding-top: 22px; border-top: 1px solid var(--lr-line-strong); }
    .lrac-pagination-label { color: var(--lr-muted); font-size: 7px; font-weight: 780; letter-spacing: .12em; }
    .lrac-pagination > div { display: flex; align-items: center; gap: 6px; }
    .lrac-pagination a,
    .lrac-pagination > div > span { width: 34px; height: 34px; display: grid; place-items: center; border: 1px solid var(--lr-line); border-radius: 50%; color: var(--lr-muted) !important; font-size: 9px; text-decoration: none !important; }
    .lrac-pagination a.is-active { border-color: var(--lr-rust); background: var(--lr-rust); color: #fff6ec !important; }
    .lrac-pagination a:hover { color: var(--lr-ink) !important; border-color: var(--lr-line-strong); }

    /* Article */
    .lrac-article { min-width: 0; }
    .lrac-article-head { padding-top: 18px; }
    .lrac-article-breadcrumb { display: flex; align-items: center; gap: 9px; color: var(--lr-muted); font-size: 8px; font-weight: 750; letter-spacing: .08em; text-transform: uppercase; }
    .lrac-article-breadcrumb a { text-decoration: none !important; }
    .lrac-article-breadcrumb a:hover { color: var(--lr-rust) !important; }
    .lrac-article-title-row { display: grid; grid-template-columns: minmax(0, 1fr) 84px; gap: 30px; align-items: end; margin-top: 34px; }
    .lrac-article-title-row h1 { max-width: 1050px; margin: 14px 0 0; font-family: var(--lr-serif); font-size: clamp(50px, 7.2vw, 94px); font-weight: 600; line-height: .96; letter-spacing: -.06em; text-wrap: balance; }
    .lrac-article-deck { max-width: 820px; margin: 22px 0 0; color: var(--lr-muted); font-size: 14px; line-height: 1.9; }
    .lrac-article-stamp { width: 78px; height: 78px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 1px solid var(--lr-rust); border-radius: 50%; color: var(--lr-rust); transform: rotate(8deg); }
    .lrac-article-stamp strong { font-family: var(--lr-serif); font-size: 23px; line-height: 1; }
    .lrac-article-stamp span { margin-top: 4px; font-size: 6px; font-weight: 820; letter-spacing: .14em; }

    .lrac-article-info { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 42px; border-top: 1px solid var(--lr-line-strong); border-bottom: 1px solid var(--lr-line-strong); }
    .lrac-article-info > div { min-height: 74px; display: flex; flex-direction: column; justify-content: center; padding: 10px 18px 10px 0; }
    .lrac-article-info > div + div { padding-left: 18px; border-left: 1px solid var(--lr-line); }
    .lrac-article-info small { color: var(--lr-rust); font-size: 6px; font-weight: 820; letter-spacing: .13em; }
    .lrac-article-info strong { margin-top: 4px; font-family: var(--lr-serif); font-size: 15px; font-weight: 600; }
    .lrac-article-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 18px; }
    .lrac-article-tags a { padding: 6px 9px; border: 1px solid var(--lr-line); border-radius: 999px; color: var(--lr-muted) !important; font-size: 8px; text-decoration: none !important; }
    .lrac-article-tags a:hover { border-color: var(--lr-rust); color: var(--lr-rust) !important; }

    .lrac-article-cover { margin: 38px 0 0; overflow: hidden; border-radius: 30px; background: var(--lr-charcoal); box-shadow: var(--lr-soft-shadow); }
    .lrac-article-cover img { width: 100%; max-height: 720px; display: block; object-fit: cover; }
    .lrac-article-cover figcaption { min-height: 42px; display: flex; align-items: center; justify-content: space-between; padding: 0 15px; background: var(--lr-charcoal); color: rgba(255, 244, 226, .62); font-size: 6px; font-weight: 780; letter-spacing: .13em; }

    .lrac-mobile-toc { display: none; margin-top: 26px; padding: 14px 16px; border: 1px solid var(--lr-line); border-radius: 18px; background: var(--lr-paper); }
    .lrac-mobile-toc summary { cursor: pointer; display: flex; justify-content: space-between; gap: 16px; list-style: none; font-size: 10px; font-weight: 760; }
    .lrac-mobile-toc summary::-webkit-details-marker { display: none; }
    .lrac-mobile-toc summary small { color: var(--lr-muted); font-size: 7px; font-weight: 680; letter-spacing: .08em; }

    .lrac-notion-wrap {
      margin-top: 42px;
      padding: clamp(32px, 5vw, 68px);
      border: 1px solid var(--lr-line);
      border-radius: 30px;
      background: color-mix(in srgb, var(--lr-paper) 94%, transparent);
      box-shadow: 0 16px 52px rgba(57, 38, 27, .04);
    }

    .lrac-notion-wrap .notion { color: var(--lr-ink-2) !important; font-family: var(--lr-sans); }
    .lrac-notion-wrap .notion-page { width: 100% !important; max-width: none !important; padding: 0 !important; }
    .lrac-notion-wrap .notion-page-no-cover { margin-top: 0 !important; padding-top: 0 !important; }
    .lrac-notion-wrap .notion-title { display: none !important; }
    .lrac-notion-wrap .notion-text,
    .lrac-notion-wrap .notion-list,
    .lrac-notion-wrap .notion-list li,
    .lrac-notion-wrap .notion-quote,
    .lrac-notion-wrap .notion-callout-text { font-size: 15px; line-height: 2; }
    .lrac-notion-wrap .notion-text { margin: 1em 0; }
    .lrac-notion-wrap .notion-h { color: var(--lr-ink) !important; font-family: var(--lr-serif); font-weight: 600; letter-spacing: -.035em; }
    .lrac-notion-wrap .notion-h1 { margin-top: 2.3em !important; font-size: 34px !important; }
    .lrac-notion-wrap .notion-h2 { margin-top: 2.1em !important; font-size: 28px !important; }
    .lrac-notion-wrap .notion-h3 { margin-top: 1.8em !important; font-size: 22px !important; }
    .lrac-notion-wrap .notion-link { color: var(--lr-rust) !important; text-decoration-color: color-mix(in srgb, var(--lr-rust) 45%, transparent) !important; text-underline-offset: .18em; }
    .lrac-notion-wrap .notion-quote { margin: 2em 0 !important; padding: 8px 0 8px 20px !important; border-left: 2px solid var(--lr-rust) !important; color: var(--lr-ink) !important; font-family: var(--lr-serif); font-size: 18px !important; }
    .lrac-notion-wrap .notion-callout { margin: 1.6em 0 !important; padding: 16px 18px !important; border: 1px solid var(--lr-line) !important; border-radius: 16px !important; background: color-mix(in srgb, var(--lr-rust) 4%, var(--lr-paper)) !important; }
    .lrac-notion-wrap .notion-code { border-radius: 16px !important; border: 1px solid var(--lr-line) !important; box-shadow: none !important; }
    .lrac-notion-wrap pre,
    .lrac-notion-wrap code { font-size: 12px !important; }
    .lrac-notion-wrap .notion-bookmark { border: 1px solid var(--lr-line) !important; border-radius: 16px !important; overflow: hidden; }
    .lrac-notion-wrap .notion-asset-wrapper { margin: 2em auto !important; }
    .lrac-notion-wrap .notion-asset-wrapper img,
    .lrac-notion-wrap .notion-image { border-radius: 16px !important; }
    .lrac-notion-wrap .notion-hr { border-color: var(--lr-line) !important; margin: 2.2em 0 !important; }
    .lrac-notion-wrap .notion-table { font-size: 12px; }

    /* Reading rail */
    .lrac-reading-rail { position: sticky; top: calc(var(--lr-header) + 24px); display: flex; flex-direction: column; gap: 15px; }
    .lrac-reading-rail-block { padding: 19px; border: 1px solid var(--lr-line); border-radius: 20px; background: color-mix(in srgb, var(--lr-paper) 84%, transparent); box-shadow: 0 8px 24px rgba(45, 31, 24, .035); }
    .lrac-rail-label { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding-bottom: 11px; margin-bottom: 8px; border-bottom: 1px solid var(--lr-line); }
    .lrac-rail-label span { color: var(--lr-rust); font-size: 7px; font-weight: 820; letter-spacing: .13em; }
    .lrac-rail-label small { color: var(--lr-muted); font-size: 6px; letter-spacing: .08em; }
    .lrac-toc { display: flex; flex-direction: column; }
    .lrac-toc a { position: relative; padding: 7px 8px 7px calc(8px + var(--toc-indent, 0px)); border-radius: 9px; color: var(--lr-muted) !important; font-size: 9px; line-height: 1.45; text-decoration: none !important; transition: color .18s ease, background .18s ease; }
    .lrac-toc a:hover { color: var(--lr-ink) !important; }
    .lrac-toc a.is-active { background: color-mix(in srgb, var(--lr-rust) 8%, transparent); color: var(--lr-rust) !important; }
    .lrac-toc a.is-active::before { content: ''; position: absolute; width: 3px; height: 3px; left: 3px; top: 13px; border-radius: 50%; background: var(--lr-rust); }
    .lrac-rail-back { background: var(--lr-charcoal); color: #f5e9d8; }
    .lrac-rail-number { display: block; color: var(--lr-rust-bright); font-family: var(--lr-serif); font-size: 32px; letter-spacing: -.05em; }
    .lrac-rail-back p { margin: 10px 0 16px; color: rgba(245, 233, 216, .63); font-size: 9px; line-height: 1.65; }
    .lrac-rail-back > div { display: flex; gap: 12px; }
    .lrac-rail-back a { color: #f5e9d8 !important; font-size: 8px; text-decoration: none !important; }
    .lrac-rail-latest > a { display: grid; grid-template-columns: 25px 1fr; gap: 9px; padding: 9px 0; border-bottom: 1px solid var(--lr-line); text-decoration: none !important; }
    .lrac-rail-latest > a:last-child { border-bottom: 0; }
    .lrac-rail-latest > a small { color: var(--lr-rust); font-size: 7px; }
    .lrac-rail-latest > a span { font-family: var(--lr-serif); font-size: 12px; line-height: 1.35; }

    /* After article */
    .lrac-after-article { margin-top: 46px; }
    .lrac-end-note { min-height: 210px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 30px; border-radius: var(--lr-radius-lg); background: linear-gradient(150deg, var(--lr-charcoal), #29261f 60%, #603523); color: #f7ebdb; text-align: center; }
    .lrac-end-note span { color: #e89470; font-size: 7px; font-weight: 820; letter-spacing: .18em; }
    .lrac-end-note strong { margin-top: 12px; font-family: var(--lr-serif); font-size: 34px; font-weight: 600; }
    .lrac-end-note p { margin: 8px 0 0; color: rgba(247, 235, 219, .66); font-size: 10px; }
    .lrac-share-shell { margin-top: 18px; padding: 16px 18px; border: 1px solid var(--lr-line); border-radius: 18px; background: var(--lr-paper); }
    .lrac-article-around { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 26px; }
    .lrac-around-card { min-height: 150px; display: flex; flex-direction: column; padding: 22px; border: 1px solid var(--lr-line); border-radius: 22px; background: var(--lr-paper); text-decoration: none !important; transition: transform .2s ease, border-color .2s ease; }
    .lrac-around-card:hover { transform: translateY(-3px); border-color: var(--lr-line-strong); }
    .lrac-around-card small { color: var(--lr-rust); font-size: 7px; font-weight: 800; letter-spacing: .12em; }
    .lrac-around-card strong { margin-top: 12px; font-family: var(--lr-serif); font-size: 19px; font-weight: 600; line-height: 1.3; }
    .lrac-around-card > span { margin-top: auto; color: var(--lr-muted); }
    .lrac-around-card.is-next { text-align: right; align-items: flex-end; }

    .lrac-recommend { margin-top: 58px; }
    .lrac-recommend-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
    .lrac-recommend-card { min-height: 170px; display: flex; flex-direction: column; padding: 20px; border: 1px solid var(--lr-line); border-radius: 20px; background: color-mix(in srgb, var(--lr-paper) 85%, transparent); text-decoration: none !important; transition: background .2s ease, transform .2s ease; }
    .lrac-recommend-card:hover { transform: translateY(-3px); background: var(--lr-paper); }
    .lrac-recommend-card small { color: var(--lr-rust); font-size: 7px; font-weight: 800; letter-spacing: .12em; }
    .lrac-recommend-card strong { margin-top: auto; font-family: var(--lr-serif); font-size: 17px; line-height: 1.3; font-weight: 600; }
    .lrac-recommend-card span { margin-top: 12px; color: var(--lr-muted); font-size: 8px; }
    .lrac-comments { margin-top: 64px; padding-top: 30px; border-top: 1px solid var(--lr-line-strong); }

    /* Lock */
    .lrac-lock-card { max-width: 650px; margin: 70px auto; display: flex; flex-direction: column; align-items: center; padding: 48px; border: 1px solid var(--lr-line); border-radius: var(--lr-radius-xl); background: var(--lr-paper); box-shadow: var(--lr-shadow); text-align: center; }
    .lrac-lock-mark .lrac-mark { width: 76px; }
    .lrac-lock-card > .lrac-overline { margin-top: 20px; }
    .lrac-lock-card h1 { margin: 14px 0 8px; font-family: var(--lr-serif); font-size: 38px; font-weight: 600; letter-spacing: -.04em; }
    .lrac-lock-card > p:not(.lrac-overline) { margin: 0; color: var(--lr-muted); font-size: 11px; line-height: 1.8; }
    .lrac-lock-form { width: 100%; display: grid; grid-template-columns: 1fr auto; gap: 8px; margin-top: 25px; }
    .lrac-lock-form input { min-height: 48px; min-width: 0; padding: 0 15px; border: 1px solid var(--lr-line-strong); border-radius: 14px; outline: 0; background: var(--lr-bg); color: var(--lr-ink); }
    .lrac-lock-form button { min-height: 48px; padding: 0 18px; border: 0; border-radius: 14px; background: var(--lr-rust); color: #fff5e9; cursor: pointer; }
    .lrac-lock-error { margin-top: 10px; color: var(--lr-rust); font-size: 9px; }

    /* 404 */
    .lrac-not-found { min-height: 650px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 0; text-align: center; }
    .lrac-not-found-code { display: flex; align-items: center; gap: 12px; }
    .lrac-not-found-code span { font-family: var(--lr-serif); font-size: clamp(95px, 14vw, 180px); line-height: .8; letter-spacing: -.1em; }
    .lrac-not-found-code img { width: clamp(110px, 14vw, 175px); aspect-ratio: 1; object-fit: cover; border-radius: 50%; border: 7px solid var(--lr-paper); box-shadow: var(--lr-soft-shadow); }
    .lrac-not-found > p { margin: 28px 0 12px; color: var(--lr-rust); font-size: 8px; font-weight: 820; letter-spacing: .15em; }
    .lrac-not-found h1 { margin: 0; font-family: var(--lr-serif); font-size: clamp(34px, 5vw, 56px); font-weight: 600; letter-spacing: -.045em; }
    .lrac-not-found > span { margin-top: 10px; color: var(--lr-muted); font-size: 11px; }
    .lrac-not-found > div:last-child { display: flex; gap: 10px; margin-top: 28px; }

    /* Footer */
    .lrac-footer {
      position: relative;
      z-index: 3;
      margin-top: 30px;
      padding: 0 max(24px, calc((100vw - 1420px) / 2));
      background: var(--lr-charcoal);
      color: #f5ead9;
    }
    .lrac-footer-topline { min-height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 20px; border-bottom: 1px solid rgba(255, 244, 228, .14); color: rgba(255, 244, 228, .52); font-size: 7px; font-weight: 760; letter-spacing: .13em; }
    .lrac-footer-main { display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(320px, .55fr); gap: 60px; padding: 58px 0 52px; }
    .lrac-footer-statement { display: flex; align-items: flex-start; gap: 25px; }
    .lrac-footer-statement .lrac-mark { flex: 0 0 auto; border: 1px solid rgba(255,255,255,.12); box-shadow: none; }
    .lrac-footer-statement .lrac-overline { color: #e08661; }
    .lrac-footer-statement h2 { margin: 11px 0 11px; font-family: var(--lr-serif); font-size: clamp(35px, 4.2vw, 58px); font-weight: 600; line-height: 1.03; letter-spacing: -.05em; }
    .lrac-footer-statement p:last-child { margin: 0; color: rgba(245, 234, 217, .57); font-size: 10px; }
    .lrac-footer-links { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .lrac-footer-links > div { display: flex; flex-direction: column; gap: 9px; }
    .lrac-footer-links small { margin-bottom: 6px; color: #d57952; font-size: 7px; font-weight: 800; letter-spacing: .13em; }
    .lrac-footer-links a { color: rgba(245, 234, 217, .74) !important; font-size: 10px; text-decoration: none !important; }
    .lrac-footer-links a:hover { color: #fff5e8 !important; }
    .lrac-footer-bottom { min-height: 56px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; align-items: center; border-top: 1px solid rgba(255, 244, 228, .14); color: rgba(245, 234, 217, .39); font-size: 7px; letter-spacing: .08em; }
    .lrac-footer-bottom span:nth-child(2) { text-align: center; }
    .lrac-footer-bottom span:nth-child(3) { text-align: right; }

    /* Mobile dock and back top */
    .lrac-mobile-dock { display: none; }
    .lrac-back-top { position: fixed; z-index: 70; right: 18px; bottom: 18px; width: 42px; height: 42px; border: 1px solid var(--lr-line-strong); border-radius: 50%; background: color-mix(in srgb, var(--lr-paper) 88%, transparent); color: var(--lr-ink); box-shadow: var(--lr-soft-shadow); backdrop-filter: blur(16px); cursor: pointer; }

    @media (max-width: 1180px) {
      .lrac-header-frame,
      .lrac-main-frame { width: min(calc(100% - 36px), 1120px); }
      .lrac-main.has-reading-rail .lrac-main-frame { grid-template-columns: minmax(0, 1fr) 238px; gap: 30px; }
      .lrac-hero-grid { grid-template-columns: minmax(0, 1fr) 390px; gap: 40px; padding: 54px; }
      .lrac-hero-copy h1 { font-size: clamp(50px, 6vw, 72px); }
      .lrac-photo-note { width: 88%; margin-left: -16px; }
      .lrac-note-grid.is-home .lrac-note-card:nth-child(n+3) { grid-column: span 6; }
      .lrac-taxonomy-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .lrac-tag-index { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .lrac-footer { padding-left: 28px; padding-right: 28px; }
    }

    @media (max-width: 960px) {
      :root { --lr-header: 66px; }
      .lrac-header-frame { width: calc(100% - 28px); min-height: var(--lr-header); }
      .lrac-desktop-nav { display: none; }
      .lrac-menu-trigger { display: grid; }
      .lrac-mobile-menu { display: grid; grid-template-rows: 0fr; width: min(calc(100% - 28px), 620px); margin: 0 auto; transition: grid-template-rows .28s ease; }
      .lrac-mobile-menu.is-open { grid-template-rows: 1fr; }
      .lrac-mobile-menu-inner { overflow: hidden; min-height: 0; }
      .lrac-mobile-menu-label { padding: 12px 14px 7px; color: var(--lr-muted); font-size: 7px; font-weight: 800; letter-spacing: .13em; }
      .lrac-mobile-menu nav { margin-bottom: 14px; padding: 6px; border: 1px solid var(--lr-line); border-radius: 18px; background: var(--lr-paper); box-shadow: var(--lr-soft-shadow); }
      .lrac-mobile-menu a { min-height: 48px; display: grid; grid-template-columns: 32px 1fr 22px; align-items: center; padding: 0 11px; border-radius: 13px; text-decoration: none !important; }
      .lrac-mobile-menu a:hover { background: color-mix(in srgb, var(--lr-rust) 6%, transparent); }
      .lrac-mobile-menu a small { color: var(--lr-rust); font-size: 7px; }
      .lrac-mobile-menu a strong { font-size: 12px; }
      .lrac-mobile-menu a span { justify-self: end; color: var(--lr-muted); }

      .lrac-main-frame { width: calc(100% - 28px); padding-top: 22px; padding-bottom: 88px; }
      .lrac-main.has-reading-rail .lrac-main-frame { display: block; }
      .lrac-reading-rail { display: none; }
      .lrac-mobile-toc { display: block; }

      .lrac-hero-grid { min-height: 0; grid-template-columns: 1fr; gap: 46px; padding: 46px; }
      .lrac-hero-copy { order: 1; }
      .lrac-hero-photo-wrap { order: 2; max-width: 680px; }
      .lrac-hero-photo-stage { aspect-ratio: 1.18; min-height: 0; border-radius: 28px 28px 90px 28px; transform: none; }
      .lrac-photo-note { width: min(78%, 480px); }
      .lrac-hero-featured { grid-template-columns: 100px 90px minmax(0,1fr) 25px; }

      .lrac-note-grid { grid-template-columns: 1fr 1fr; }
      .lrac-note-grid.is-home { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .lrac-note-grid.is-home .lrac-note-card:nth-child(n) { grid-column: auto; }
      .lrac-note-grid.is-home .lrac-note-card:nth-child(1) { grid-column: 1 / -1; }
      .lrac-note-grid.is-home .lrac-note-card:nth-child(1) .lrac-note-media { min-height: 390px; }
      .lrac-note-grid.is-home .lrac-note-card:nth-child(2) .lrac-note-media { min-height: 260px; }

      .lrac-topic-atlas { grid-template-columns: 1fr; }
      .lrac-manifesto { grid-template-columns: 70px 1fr; }
      .lrac-manifesto-card { grid-column: 2; max-width: 460px; }
      .lrac-archive-group { grid-template-columns: 130px minmax(0,1fr); gap: 20px; }
      .lrac-archive-list a { grid-template-columns: 24px 80px minmax(0,1fr) 18px; }
      .lrac-archive-list a > span { display: none; }
      .lrac-tag-index { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .lrac-recommend-grid { grid-template-columns: 1fr; }
      .lrac-footer-main { grid-template-columns: 1fr; }
    }

    @media (max-width: 700px) {
      .lrac-section { margin-top: 68px; }
      .lrac-hero { border-radius: 28px; }
      .lrac-hero-grid { padding: 34px 26px 31px; gap: 35px; }
      .lrac-hero-copy h1 { margin-top: 18px; font-size: clamp(43px, 12vw, 62px); }
      .lrac-hero-desc { font-size: 12px; line-height: 1.85; }
      .lrac-hero-index { margin-top: 36px; }
      .lrac-hero-index > div { min-height: 66px; }
      .lrac-hero-index strong { font-size: 23px; }
      .lrac-hero-photo-stage { aspect-ratio: 1; border-radius: 22px 22px 70px 22px; }
      .lrac-photo-note { width: 92%; margin: -24px auto 0; grid-template-columns: 35px 1fr; padding: 13px; }
      .lrac-photo-note > span { width: 32px; height: 32px; }
      .lrac-photo-note p { font-size: 8px; }
      .lrac-photo-caption-top strong { display: none; }
      .lrac-photo-caption-bottom strong { font-size: 34px; }
      .lrac-hero-featured { grid-template-columns: 80px minmax(0,1fr) 20px; padding: 12px 18px; }
      .lrac-hero-featured-date { display: none; }
      .lrac-hero-featured strong { font-size: 14px; }

      .lrac-section-title { align-items: flex-start; flex-direction: column; margin-bottom: 24px; }
      .lrac-note-grid,
      .lrac-note-grid.is-home { grid-template-columns: 1fr; }
      .lrac-note-grid.is-home .lrac-note-card:nth-child(n) { grid-column: auto; }
      .lrac-note-grid.is-home .lrac-note-card:nth-child(1) .lrac-note-media,
      .lrac-note-grid.is-home .lrac-note-card:nth-child(2) .lrac-note-media,
      .lrac-note-media { min-height: 250px; }
      .lrac-note-content { padding: 21px; }
      .lrac-note-title h2 { font-size: 28px; }

      .lrac-topic-atlas { padding: 30px 24px; border-radius: 28px; }
      .lrac-topic-atlas-head h2 { font-size: 38px; }
      .lrac-manifesto { grid-template-columns: 1fr; gap: 20px; }
      .lrac-manifesto-number { font-size: 45px; }
      .lrac-manifesto-card { grid-column: auto; max-width: none; min-height: 230px; }

      .lrac-page-intro { min-height: 250px; padding: 30px 24px; border-radius: 28px; }
      .lrac-page-intro h1 { font-size: 48px; }
      .lrac-page-intro > strong { position: absolute; right: -16px; top: 48px; font-size: 150px; }
      .lrac-search-box { grid-template-columns: 46px minmax(0,1fr); gap: 12px; padding: 14px; }
      .lrac-search-symbol { width: 44px; height: 44px; border-radius: 14px; }
      .lrac-search-box input { font-size: 19px; }
      .lrac-search-box button { grid-column: 1 / -1; }

      .lrac-archive { margin-top: 34px; }
      .lrac-archive-group { grid-template-columns: 1fr; gap: 10px; }
      .lrac-archive-month { position: static; flex-direction: row; align-items: baseline; justify-content: space-between; }
      .lrac-archive-list a { grid-template-columns: 22px 64px minmax(0,1fr) 18px; gap: 8px; min-height: 59px; }
      .lrac-archive-list strong { font-size: 13px; }
      .lrac-taxonomy-grid { grid-template-columns: 1fr; }
      .lrac-tag-index { grid-template-columns: 1fr 1fr; }

      .lrac-article-title-row { grid-template-columns: 1fr; gap: 20px; }
      .lrac-article-title-row h1 { font-size: clamp(43px, 12vw, 61px); }
      .lrac-article-stamp { display: none; }
      .lrac-article-deck { font-size: 12px; }
      .lrac-article-info { grid-template-columns: 1fr 1fr; }
      .lrac-article-info > div { min-height: 66px; }
      .lrac-article-info > div:nth-child(3) { border-left: 0; border-top: 1px solid var(--lr-line); padding-left: 0; }
      .lrac-article-info > div:nth-child(4) { border-top: 1px solid var(--lr-line); }
      .lrac-article-cover { border-radius: 22px; }
      .lrac-notion-wrap { margin-top: 28px; padding: 25px 20px; border-radius: 22px; }
      .lrac-notion-wrap .notion-text,
      .lrac-notion-wrap .notion-list,
      .lrac-notion-wrap .notion-list li,
      .lrac-notion-wrap .notion-callout-text { font-size: 14px; line-height: 1.9; }
      .lrac-notion-wrap .notion-h1 { font-size: 29px !important; }
      .lrac-notion-wrap .notion-h2 { font-size: 24px !important; }
      .lrac-notion-wrap .notion-h3 { font-size: 20px !important; }
      .lrac-article-around { grid-template-columns: 1fr; }
      .lrac-around-card.is-next { text-align: left; align-items: flex-start; }

      .lrac-footer { padding-left: 18px; padding-right: 18px; }
      .lrac-footer-main { padding: 44px 0 38px; }
      .lrac-footer-statement { flex-direction: column; }
      .lrac-footer-statement .lrac-mark { width: 74px; }
      .lrac-footer-links { grid-template-columns: 1fr 1fr; }
      .lrac-footer-bottom { grid-template-columns: 1fr; gap: 6px; padding: 16px 0; }
      .lrac-footer-bottom span:nth-child(2),
      .lrac-footer-bottom span:nth-child(3) { text-align: left; }

      .lrac-mobile-dock {
        position: fixed;
        z-index: 85;
        left: 50%;
        bottom: max(10px, env(safe-area-inset-bottom));
        transform: translateX(-50%);
        width: min(calc(100% - 24px), 430px);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 6px;
        border: 1px solid var(--lr-line-strong);
        border-radius: 22px;
        background: color-mix(in srgb, var(--lr-paper) 88%, transparent);
        box-shadow: 0 14px 38px rgba(28, 20, 16, .18);
        backdrop-filter: blur(22px) saturate(1.2);
      }
      .lrac-mobile-dock a { min-height: 49px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; border-radius: 16px; color: var(--lr-muted) !important; text-decoration: none !important; }
      .lrac-mobile-dock a.is-active { background: var(--lr-charcoal); color: #fff1df !important; }
      .lrac-mobile-dock a > span { font-size: 15px; line-height: 1; }
      .lrac-mobile-dock a small { font-size: 7px; font-weight: 720; }
      .lrac-back-top { display: none; }
    }

    @media (max-width: 460px) {
      .lrac-header-frame { width: calc(100% - 20px); gap: 7px; }
      .lrac-brand { gap: 8px; }
      .lrac-brand-text strong { font-size: 12px; }
      .lrac-brand-text small { font-size: 7px; }
      .lrac-round-action,
      .lrac-menu-trigger { width: 35px; height: 35px; }
      .lrac-main-frame { width: calc(100% - 20px); }
      .lrac-hero-grid { padding: 28px 19px 24px; }
      .lrac-hero-copy h1 { font-size: 42px; }
      .lrac-hero-actions { gap: 8px; }
      .lrac-button { min-height: 42px; padding: 0 15px; gap: 12px; font-size: 9px; }
      .lrac-hero-index > div { padding-right: 8px; }
      .lrac-hero-index > div + div { padding-left: 10px; }
      .lrac-hero-index strong { font-size: 20px; }
      .lrac-hero-index span { font-size: 6px; }
      .lrac-hero-photo-stage { aspect-ratio: .92; }
      .lrac-photo-caption { left: 13px; right: 13px; }
      .lrac-photo-caption-top { top: 13px; }
      .lrac-photo-caption-bottom { bottom: 13px; }
      .lrac-hero-featured { min-height: 68px; grid-template-columns: 66px minmax(0,1fr) 16px; gap: 8px; padding: 10px 13px; }
      .lrac-hero-featured-label { font-size: 6px; }
      .lrac-hero-featured strong { font-size: 12px; }
      .lrac-section-title h2 { font-size: 34px; }
      .lrac-page-intro h1 { font-size: 42px; }
      .lrac-tag-index { grid-template-columns: 1fr; }
      .lrac-archive-list a { grid-template-columns: 20px 56px minmax(0,1fr) 15px; }
      .lrac-archive-list time { font-size: 6px; }
      .lrac-archive-list strong { font-size: 11px; }
      .lrac-lock-card { margin: 36px auto; padding: 30px 20px; border-radius: 26px; }
      .lrac-lock-form { grid-template-columns: 1fr; }
      .lrac-footer-topline span:first-child { display: none; }
      .lrac-footer-topline { justify-content: flex-end; }
    }

    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      .lrac-shell *,
      .lrac-shell *::before,
      .lrac-shell *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; }
    }
  `}</style>
}
