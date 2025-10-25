# RookSec Student — BCA Portfolio (Flask) - v3

This portfolio is tailored for a BCA student learning red teaming and cybersecurity. It emphasizes practical labs, CTF participation, and simple writeups suitable for coursework or internships.

## What's included
- `app.py` - minimal Flask app to serve `index.html`
- `templates/index.html` - single-page portfolio with student-oriented content
- `static/css/styles.css` - responsive styles
- `static/js/app.js` - small UI interactions (menu, smooth scroll)
- `requirements.txt` - Flask

## Run locally (Linux)
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
# open http://127.0.0.1:5000
```

## How to use for coursework / internships
- Update the "About" section with your year (e.g., 3rd year BCA) and college name.
- Add lab reports and short writeups inside the `Projects` section — include steps and screenshots saved in `assets/images/`.
- Link to GitHub repos or CTF profiles to show practical work (e.g., TryHackMe, HackTheBox).

## Responsible disclosure
Only test systems that are in-scope and authorized. Use proper NDAs and scope definitions for paid engagements or red team ops.
