import json, urllib.request, http.cookiejar, re

BASE = None
with open("/app/frontend/.env") as f:
    for line in f:
        if line.startswith("REACT_APP_BACKEND_URL"):
            BASE = line.split("=", 1)[1].strip() + "/api"

cj = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))

def call(method, path, payload=None):
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(BASE + path, data=data, method=method,
                                 headers={"Content-Type": "application/json",
                                          "User-Agent": "Mozilla/5.0 (X11; Linux x86_64)"})
    with opener.open(req) as r:
        return json.loads(r.read())

call("POST", "/auth/login", {"email": "admin@adityagauradvocate.in", "password": "AGaur#2026Admin"})

ARTICLES = [
    {
        "title": "What Is Anticipatory Bail? Meaning, Process and When to Seek It",
        "slug": "what-is-anticipatory-bail",
        "excerpt": "Anticipatory bail is the remedy the law gives a person who apprehends arrest in a cognizable, non-bailable offence — what it does, how courts decide, and when to seek it.",
        "meta_description": "What is anticipatory bail in India? Meaning, legal process under Section 482 BNSS (earlier Section 438 CrPC), how courts decide, conditions imposed, and when to apply.",
        "status": "published",
        "content": """
<p>If you have reason to believe that you may be arrested in a criminal case — perhaps an FIR has been lodged against you, or a dispute has taken a criminal turn — Indian law gives you a remedy before arrest ever happens. That remedy is called <strong>anticipatory bail</strong>.</p>

<h2>What is anticipatory bail?</h2>
<p>Anticipatory bail is a direction by a court that, in the event of your arrest in a particular case, you shall be released on bail. It was earlier governed by Section 438 of the Code of Criminal Procedure (CrPC) and is now provided under <strong>Section 482 of the Bharatiya Nagar Suraksha Sanhita (BNSS), 2023</strong>. It is available when a person apprehends arrest in a cognizable, non-bailable offence.</p>
<p>It is important to understand what anticipatory bail is <em>not</em>. It is not a declaration of innocence, and it does not end the investigation or the case. It protects your personal liberty while the investigation and trial proceed — usually subject to conditions such as joining the investigation when called, not leaving the country without permission, and not influencing witnesses.</p>

<h2>Who can apply, and where?</h2>
<p>Any person who has a reasonable apprehension of arrest may apply — you do not need to wait for an arrest memo or even for the FIR to reach you. The application is ordinarily moved first before the <strong>Sessions Court</strong> having jurisdiction over the police station concerned. If it is rejected there, or in appropriate cases directly, the <strong>High Court</strong> can be approached. After an adverse High Court order, the remedy lies before the Supreme Court by way of a Special Leave Petition.</p>

<h2>How do courts decide an anticipatory bail application?</h2>
<p>There is no automatic formula. Courts weigh, among other things:</p>
<ul>
<li>The nature and gravity of the accusation</li>
<li>The material collected by the investigating agency at that stage</li>
<li>The specific role attributed to the applicant in the FIR</li>
<li>The applicant's antecedents and roots in society</li>
<li>Whether custodial interrogation is genuinely necessary</li>
<li>Whether the accusation appears motivated, exaggerated, or essentially civil in nature</li>
</ul>
<p>Where allegations are omnibus — for example, an entire family named in a matrimonial FIR without specific roles — courts do grant protection. Equally, where the offence is grave or the investigation genuinely requires custody, courts refuse it. Each case turns on its own record, which is why the petition and its annexures must be prepared with care.</p>

<h2>Anticipatory bail vs regular bail — the difference</h2>
<p><strong>Anticipatory bail</strong> is sought <em>before</em> arrest, when arrest is apprehended. <strong>Regular bail</strong> is sought <em>after</em> arrest, when the person is already in custody. The forum, the strategy and the arguments differ — and which remedy fits your situation depends entirely on the stage your matter has reached. The Supreme Court has also held that an anticipatory bail order can continue till the end of the trial unless the court itself limits it, provided its conditions are scrupulously followed.</p>

<h2>What should you do if you apprehend arrest?</h2>
<ol>
<li><strong>Act early.</strong> Waiting for the police to arrive narrows your options and your timeline.</li>
<li><strong>Gather the record.</strong> The FIR number and police station, any notice or complaint you have received, and documents that support your account — messages, agreements, receipts, call records.</li>
<li><strong>Do not contact the complainant</strong> to "settle" matters informally without advice — it can later be portrayed as pressure or threat.</li>
<li><strong>Consult an advocate immediately</strong> so the application can be drafted and filed at the earliest workable date.</li>
</ol>

<h2>In conclusion</h2>
<p>Anticipatory bail is a shield, not a verdict. Used in time and prepared properly, it lets you face an investigation without the trauma of custody. If you apprehend arrest in Faridabad, Delhi NCR or elsewhere, you can read more about how such matters are handled on our <a href="/anticipatory-bail-lawyer">Anticipatory Bail Lawyer</a> page, or about post-arrest remedies on our <a href="/bail-lawyer">Bail Lawyer</a> page. For advice on your specific situation, <a href="/contact">book a consultation</a> with the chamber.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice. Please consult an advocate about the facts of your specific matter.</em></p>
""",
    },
    {
        "title": "Mutual Consent Divorce Procedure in India — A Step-by-Step Guide",
        "slug": "mutual-consent-divorce-procedure-india",
        "excerpt": "When both spouses agree to part, mutual consent divorce is the shortest and most dignified route. Here is the complete procedure — petition, motions, cooling-off period, settlement and decree.",
        "meta_description": "Mutual consent divorce procedure in India explained step by step — Section 13B petition, first and second motion, cooling-off period waiver, settlement terms, documents and timeline.",
        "status": "published",
        "content": """
<p>When both husband and wife have decided — clearly and finally — that the marriage should end, the law offers a dignified exit: <strong>divorce by mutual consent</strong>. Done properly, it is measured in months rather than years. But the paperwork must be drafted to survive the future, not just the courtroom.</p>

<h2>Who can file for mutual consent divorce?</h2>
<p>Under <strong>Section 13B of the Hindu Marriage Act, 1955</strong> (with similar provisions under other personal laws and the Special Marriage Act), the spouses must show three things:</p>
<ul>
<li>They have been living separately for at least <strong>one year</strong></li>
<li>They have not been able to live together</li>
<li>They have <strong>mutually agreed</strong> to dissolve the marriage</li>
</ul>
<p>"Living separately" does not necessarily mean different houses — courts accept that spouses can live separately under the same roof if the marital relationship has ended in substance.</p>

<h2>The step-by-step procedure</h2>
<h3>Step 1 — Settlement before the petition</h3>
<p>Before anything is filed, the terms are settled in writing: maintenance or alimony (one-time or monthly), child custody and visitation, return of stridhan and belongings, closure of joint accounts and loans, withdrawal of any pending cases, and mutual non-interference. This memorandum of understanding is the real foundation of the case — a loosely drafted settlement invites a second round of litigation.</p>
<h3>Step 2 — Filing the joint petition (First Motion)</h3>
<p>A joint petition is filed before the <strong>Family Court</strong> having jurisdiction — where the marriage was solemnised, where the parties last resided together, or where the respondent resides. Both spouses appear, and their statements are recorded. This is called the first motion.</p>
<h3>Step 3 — The cooling-off period</h3>
<p>The statute provides a waiting period of <strong>six months</strong> between the first and second motion, intended as a window for reconciliation. The Supreme Court (in <em>Amardeep Singh v. Harveen Kaur</em>) has held that this period is directory, not mandatory — courts can <strong>waive it</strong> where the separation has been long, all issues are fully settled, and waiting would only prolong the agony. The waiver is a judicial discretion, not an entitlement.</p>
<h3>Step 4 — Second Motion and decree</h3>
<p>After the waiting period (or its waiver), both parties appear again and confirm that their consent continues. The court then passes the <strong>decree of divorce</strong>. Consent must exist at both stages — if either spouse withdraws consent before the decree, the petition fails, and the remaining option is a contested divorce on statutory grounds.</p>

<h2>Documents you will need</h2>
<ul>
<li>Marriage certificate or other proof of marriage</li>
<li>Address proofs and identity documents of both spouses</li>
<li>Passport-size photographs</li>
<li>Details of children, if any</li>
<li>Evidence of the period of separation</li>
<li>Financial documents underlying the settlement — salary slips, account and property details</li>
</ul>

<h2>How long does it take?</h2>
<p>Realistically, between <strong>six and eighteen months</strong>, depending on the court's calendar and whether the cooling-off period is waived. Matters where the settlement is complete and the separation long tend to conclude at the faster end of that range.</p>

<h2>In conclusion</h2>
<p>Mutual consent divorce rewards preparation: a complete settlement, clean documentation and the right forum. You can read more on our <a href="/mutual-consent-divorce-lawyer">Mutual Consent Divorce Lawyer</a> page, or about the contested route on our <a href="/divorce-lawyer">Divorce Lawyer</a> page. To discuss your situation, <a href="/contact">book a consultation</a>.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice. Please consult an advocate about the facts of your specific matter.</em></p>
""",
    },
    {
        "title": "What to Do After Receiving a Cheque Bounce Notice",
        "slug": "what-to-do-after-cheque-bounce-notice",
        "excerpt": "A cheque bounce notice starts a strict legal clock — fifteen days to respond before a criminal complaint can be filed. Here is exactly what to do, whether you received the notice or need to send one.",
        "meta_description": "Received a cheque bounce notice under Section 138 NI Act? Understand the 15-day window, how to reply, when to pay, available defences, and the complete legal timeline.",
        "status": "published",
        "content": """
<p>A cheque dishonour notice is not an ordinary letter. It is the statutory first step towards a <strong>criminal complaint under Section 138 of the Negotiable Instruments Act, 1881</strong> — an offence punishable with imprisonment of up to two years, a fine of up to twice the cheque amount, or both. What you do in the days after receiving it shapes everything that follows.</p>

<h2>First, understand the timeline</h2>
<p>Section 138 runs on strict, jurisdictional deadlines:</p>
<ul>
<li>The cheque must be presented to the bank within its validity period (three months)</li>
<li>After dishonour, the payee must send a written <strong>demand notice within 30 days</strong> of receiving the bank's return memo</li>
<li>On receiving the notice, the drawer has <strong>15 days to pay</strong></li>
<li>If payment is not made, the payee may file a criminal complaint within <strong>one month</strong> of the cause of action arising</li>
</ul>
<p>Each window matters. A complainant who misses a deadline can lose an otherwise strong case — and a drawer who ignores the notice loses the cleanest exit available.</p>

<h2>If you have received a cheque bounce notice</h2>
<ol>
<li><strong>Do not ignore it.</strong> The 15-day payment window is running from the date you receive it.</li>
<li><strong>Read it carefully.</strong> Check the cheque number, amount, date of dishonour, and the debt described. Errors in the notice can matter later.</li>
<li><strong>Gather your record.</strong> The transaction documents — agreement, invoices, ledger, repayment proofs, messages — anything that shows the true state of the account between the parties.</li>
<li><strong>Reply through an advocate.</strong> Your reply frames your defence. If the claim is genuine, paying within the window ends the matter then and there. If it is not, a well-drafted reply puts your version on record before any complaint is filed.</li>
</ol>

<h2>Common defences in a Section 138 case</h2>
<p>At trial, once the signature and dishonour are proved, the law presumes the cheque was issued for a legally enforceable debt. But that presumption is <strong>rebuttable</strong>. Recognised lines of defence include:</p>
<ul>
<li>The cheque was given only as <strong>security</strong>, not against an existing, legally enforceable debt</li>
<li>The amount claimed was already repaid, in whole or in part</li>
<li>The cheque was obtained by coercion or misused</li>
<li>In company matters, the liability of the company versus the liability of individual signatories</li>
</ul>
<p>None of these succeeds on assertion alone — each is built on documents and the cross-examination of the complainant.</p>

<h2>If you need to send a notice</h2>
<p>For the payee, precision is everything: the correct amount, the correct address, dispatch within thirty days of the return memo, with proof of delivery preserved. The original cheque, the bank memo and the underlying transaction record form the spine of the complaint. A well-documented complaint presses the drawer towards settlement; a sloppy one invites acquittal. Note also that the offence is <strong>compoundable</strong> — courts actively encourage settlement at every stage.</p>

<h2>In conclusion</h2>
<p>Whether you hold a bounced cheque or a notice in your hand, the clock is already running. You can read more on our <a href="/cheque-bounce-lawyer">Cheque Bounce Lawyer</a> page, or about related remedies on our <a href="/debt-recovery-lawyer">Debt Recovery Lawyer</a> page. For advice on your specific notice, <a href="/contact">book a consultation</a> — and carry the notice and the bank memo with you.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice. Please consult an advocate about the facts of your specific matter.</em></p>
""",
    },
]

for a in ARTICLES:
    try:
        res = call("POST", "/admin/articles", a)
        print("PUBLISHED:", res["slug"])
    except urllib.error.HTTPError as e:
        print("FAILED:", a["slug"], e.code, e.read()[:200])
