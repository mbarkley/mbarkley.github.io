# PDF Instructions

To create PDF, run this command:
```bash
wkhtmltopdf --page-size Letter \
            -T 0.5in \
            -B 0.5in \
            -L 0.5in \
            -R 0.5in \
            resume.html \
            MaxBarkleyResume.pdf
```