"""Regenerate the CV PDFs in cv/ from index.html's print layout: full and 1-page, per language.

Run after editing site content:
    pip install playwright
    python tools/build_cv.py

Uses the installed Google Chrome, so no browser download is needed.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parent.parent
out = root / 'cv'
out.mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chrome')
    page = browser.new_page(color_scheme='light')
    for lang in ['en', 'fr', 'vi']:
        for suffix in ['', '_1page']:
            page.goto(f'{(root / "index.html").as_uri()}?lang={lang}', wait_until='networkidle')
            page.evaluate('document.fonts.ready')
            if suffix:
                page.evaluate("document.documentElement.classList.add('cv-compact')")
            pdf = out / f'Ngoc_Minh_NGUYEN_CV{suffix}_{lang.upper()}.pdf'
            page.pdf(path=str(pdf), format='A4', print_background=True, prefer_css_page_size=True)
            print('wrote', pdf.relative_to(root))
    browser.close()
