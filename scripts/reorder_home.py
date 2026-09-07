PATH = "/app/frontend/src/pages/Home.jsx"
src = open(PATH).read()
lines = src.split("\n")

def idx(marker, start=0):
    for i in range(start, len(lines)):
        if marker in lines[i]:
            return i
    raise SystemExit("marker not found: " + marker)

# 1. Move INSIGHTS block to just after JUDGMENTS (before TESTIMONIALS)
i_ins = idx("{/* INSIGHTS PREVIEW */}")
i_jud = idx("{/* SELECTED JUDGMENTS & LEGAL MATTERS */}")
ins_block = lines[i_ins:i_jud]
del lines[i_ins:i_jud]
i_test = idx("{/* CLIENT TESTIMONIALS */}")
lines[i_test:i_test] = ins_block

# 2. Move group [JUDGMENTS + INSIGHTS + TESTIMONIALS] to just before LOCATIONS
i_jud = idx("{/* SELECTED JUDGMENTS & LEGAL MATTERS */}")
i_cta = idx("      <CtaSection />")
group = lines[i_jud:i_cta]
del lines[i_jud:i_cta]
i_loc = idx("{/* LOCATIONS */}")
lines[i_loc:i_loc] = group

src = "\n".join(lines)

# 3. Renumber section overlines
src = src.replace('<Overline className="text-gold">03 — Courts & Jurisdiction</Overline>',
                  '<Overline className="text-gold">04 — Courts & Jurisdiction</Overline>')
src = src.replace("<Overline>05 — Where the Practice Reaches</Overline>",
                  "<Overline>06 — Where the Practice Reaches</Overline>")
src = src.replace("<Overline>06 — Legal Insights</Overline>",
                  "<Overline>05 — Legal Insights</Overline>")

# 4. Add "View All Judgments" CTA inside the judgments section, before its disclaimer note
note = "The judgments and legal matters presented are provided for informational purposes."
ji = src.index(note)
rev = src.rindex("          <Reveal delay={0.2}>", 0, ji)
cta_html = """          <Reveal delay={0.15}>
            <Link
              to="/judgments"
              data-testid="view-all-judgments"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-navy transition-colors hover:text-gold-dark"
            >
              View All Judgments <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
"""
src = src[:rev] + cta_html + src[rev:]

open(PATH, "w").write(src)
print("reorder done")
