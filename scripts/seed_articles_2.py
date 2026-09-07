import json, urllib.request, http.cookiejar

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
        "title": "Difference Between Bail and Anticipatory Bail",
        "slug": "difference-between-bail-and-anticipatory-bail",
        "excerpt": "Both protect liberty, but they operate at different stages of a criminal case — before arrest and after it. Understanding the difference decides which remedy to seek, and when.",
        "meta_description": "Bail vs anticipatory bail in India — the difference between pre-arrest and post-arrest bail, which court to approach, conditions imposed, and which remedy fits your situation.",
        "status": "published",
        "content": """
<p>"Bail" and "anticipatory bail" are often spoken of interchangeably. They are not the same remedy, and choosing the wrong one — or seeking it at the wrong time — can cost precious weeks. The distinction is simple in principle: <strong>anticipatory bail protects you before arrest; regular bail releases you after arrest.</strong></p>

<h2>What is regular bail?</h2>
<p>Regular bail is sought when a person has already been arrested and is in custody. The application is moved before the court having jurisdiction over the case — typically the Magistrate or the Sessions Court, and thereafter the High Court if bail is declined. In bailable offences, bail is a matter of right; in non-bailable offences, it is discretionary. Courts consider the gravity of the accusation, the role attributed to the accused, antecedents, the possibility of flight, and the likelihood of tampering with evidence or influencing witnesses.</p>

<h2>What is anticipatory bail?</h2>
<p>Anticipatory bail — earlier Section 438 CrPC, now <strong>Section 482 of the BNSS, 2023</strong> — is sought by a person who <em>apprehends</em> arrest in a cognizable, non-bailable offence. If granted, the court directs that in the event of arrest, the person shall be released on bail, usually on conditions such as joining the investigation and not leaving the country without permission. It is a shield taken out before the blow falls.</p>

<h2>The practical differences</h2>
<ul>
<li><strong>Timing:</strong> anticipatory bail operates before arrest; regular bail after it.</li>
<li><strong>Trigger:</strong> apprehension of arrest versus actual custody.</li>
<li><strong>Effect:</strong> anticipatory bail prevents detention; regular bail ends it.</li>
<li><strong>Strategy:</strong> anticipatory bail applications lean heavily on the FIR and the falsity or exaggeration of allegations; bail applications engage with the stage of investigation, custody period and charge-sheet status.</li>
</ul>

<h2>Which remedy fits your situation?</h2>
<p>If an FIR has been lodged or threatened but no arrest has taken place, anticipatory bail is evaluated first. If arrest has already happened, the remedy is regular bail before the appropriate court. Where a High Court refuses either, the matter travels to the Supreme Court by way of a Special Leave Petition. The correct sequencing of these remedies is a strategic decision — taken on the record, not on panic.</p>
<p>Read more on our <a href="/bail-lawyer">Bail Lawyer</a> and <a href="/anticipatory-bail-lawyer">Anticipatory Bail Lawyer</a> pages, or <a href="/contact">book a consultation</a> for advice on your specific matter.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice.</em></p>
""",
    },
    {
        "title": "What Is FIR Quashing? Inherent Powers of the High Court Explained",
        "slug": "what-is-fir-quashing",
        "excerpt": "Some criminal proceedings should never have been set in motion. FIR quashing is the High Court's power to stop them — when it applies, and how the petition works.",
        "meta_description": "What is FIR quashing in India? The High Court's inherent powers under Section 482 CrPC / Section 528 BNSS, grounds for quashing, settlement-based quashing, and the process explained.",
        "status": "published",
        "content": """
<p>An FIR sets the criminal machinery in motion — investigation, summons, arrest, trial. But not every FIR discloses a genuine offence. Some clothe a civil dispute in criminal colours; some are filed to settle scores; some fail to make out any offence even if every allegation is accepted as true. For these, the law provides a remedy: <strong>quashing by the High Court</strong>.</p>

<h2>The legal basis</h2>
<p>High Courts exercise <strong>inherent powers</strong> — earlier under Section 482 of the CrPC, now under the corresponding provision of the BNSS — to prevent abuse of the process of the court and to secure the ends of justice. A quashing petition asks the High Court to cancel the FIR or complaint itself, without waiting for a full trial.</p>

<h2>On what grounds can an FIR be quashed?</h2>
<ul>
<li>The allegations, taken at face value, disclose <strong>no cognizable offence</strong></li>
<li>The allegations are so absurd or inherently improbable that no prudent person would act on them</li>
<li>The proceeding is manifestly malicious or instituted with an ulterior motive</li>
<li>The dispute is <strong>essentially civil</strong> — a property, money or contractual disagreement given a criminal colour</li>
<li>Continuation of the proceedings would amount to abuse of the process of law</li>
</ul>
<p>The threshold is deliberately high. The High Court does not conduct a mini-trial or weigh evidence; it asks whether allowing the prosecution to continue would be an abuse of process. The petition therefore succeeds on the strength of the record, not on rhetoric.</p>

<h2>Quashing on the basis of settlement</h2>
<p>In offences that are personal or private in nature — many matrimonial disputes, and certain commercial and property-linked prosecutions — the High Court may quash proceedings where the parties have genuinely settled, applying the principles laid down by the Supreme Court in <em>Gian Singh v. State of Punjab</em> and the cases that follow it. Serious offences against society, economic offences of a public character and offences under special statutes stand on a different footing and are generally not quashed merely because the parties have compromised.</p>

<h2>Timing and forum</h2>
<p>The petition lies before the High Court having jurisdiction over the place where the FIR was registered — for Faridabad matters, the Punjab &amp; Haryana High Court; for Delhi, the Delhi High Court. It can be moved soon after the FIR or at a later stage, and interim protection against arrest can be sought while it is pending. Read more on our <a href="/fir-quashing-lawyer">FIR Quashing Lawyer</a> page, or <a href="/contact">book a consultation</a>.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice.</em></p>
""",
    },
    {
        "title": "Section 138 NI Act Explained — The Law of Cheque Dishonour",
        "slug": "section-138-ni-act-explained",
        "excerpt": "Section 138 of the Negotiable Instruments Act makes a bounced cheque a criminal offence. The provision, the presumptions, the timelines and the punishments — explained plainly.",
        "meta_description": "Section 138 of the Negotiable Instruments Act explained — cheque dishonour as a criminal offence, statutory timelines, presumptions, punishment, compounding and defences.",
        "status": "published",
        "content": """
<p>When a cheque bounces for insufficiency of funds, Indian law treats it as more than a broken promise. <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> makes it a criminal offence — punishable with imprisonment of up to two years, a fine of up to twice the cheque amount, or both. The provision exists to protect the credibility of cheques as instruments of payment, and it is one of the most litigated sections in Indian criminal courts.</p>

<h2>When does Section 138 apply?</h2>
<p>Five conditions must align:</p>
<ol>
<li>A cheque is issued towards a <strong>legally enforceable debt or liability</strong></li>
<li>The cheque is presented within its validity period (three months)</li>
<li>It is returned unpaid — for insufficient funds or a reason of that nature</li>
<li>The payee sends a written <strong>demand notice within 30 days</strong> of the bank's return memo</li>
<li>The drawer <strong>fails to pay within 15 days</strong> of receiving the notice</li>
</ol>
<p>Only then does the offence complete, and a complaint may be filed before the Magistrate within one month of the cause of action arising. Each of these windows is jurisdictional — a late notice or a late complaint can end an otherwise strong case.</p>

<h2>The presumptions that power the provision</h2>
<p>Section 138 is formidable because of its companions: Sections 118 and 139 create <strong>statutory presumptions</strong> that the cheque was issued for consideration and towards a legally enforceable liability. Once the signature and the dishonour are shown, the burden shifts to the accused to rebut the presumption — a reversal of the usual criminal rule, and the reason documentation decides these cases.</p>

<h2>Company cheques and signatories</h2>
<p>Where the drawer is a company, the company is prosecuted along with the persons in charge of its business — typically the signatory and directors responsible for the conduct of the business. Vicarious liability is not automatic: the complaint must make specific allegations of role, which is a frequent battleground in defence.</p>

<h2>Compounding — the settlement route</h2>
<p>The offence is <strong>compoundable</strong>, and courts actively encourage settlement, including through referral to mediation and Lok Adalats. For complainants, settlement often delivers payment faster than trial; for the accused, compounding closes the prosecution on agreed terms. Both sides are usually served by an early, realistic conversation about the number.</p>
<p>Read more on our <a href="/cheque-bounce-lawyer">Cheque Bounce Lawyer</a> page, or <a href="/contact">book a consultation</a> about your matter.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice.</em></p>
""",
    },
    {
        "title": "Property Dispute Legal Remedies in India",
        "slug": "property-dispute-legal-remedies-india",
        "excerpt": "Possession, partition, declaration, injunction, cancellation of documents — Indian civil law offers a specific remedy for every kind of property dispute. The key is matching the remedy to the record.",
        "meta_description": "Property dispute legal remedies in India — suits for possession, partition, declaration, injunctions and cancellation of documents, explained with limitation periods and interim protection.",
        "status": "published",
        "content": """
<p>Property disputes in Delhi NCR arrive in familiar shapes: a relative who will not vacate, a sibling who claims more than a share, a seller who sold the same plot twice, a document nobody signed. The law has a remedy for each — but the remedy must match the record, and it must be sought in time.</p>

<h2>The principal remedies</h2>
<h3>Suit for possession</h3>
<p>Where someone has taken or kept possession of your property, a suit for recovery of possession restores it. Where the property is immovable and title is yours, limitation is generous — but delay breeds encroachment, construction and third-party interests, so it should not be tolerated.</p>
<h3>Suit for partition</h3>
<p>The classic remedy for co-ownership deadlocks, including ancestral property disputes. The court divides the property by metes and bounds, or orders its sale and distribution of proceeds. Since the 2005 amendment to the Hindu Succession Act, daughters are coparceners by birth with the same rights as sons in joint family property.</p>
<h3>Suit for declaration and cancellation</h3>
<p>Where a document is the problem — a disputed will, a challenged gift deed, a sale deed said to be forged — the remedy is a suit for declaration of your rights and cancellation of the offending document.</p>
<h3>Injunctions</h3>
<p>A suit for permanent injunction restrains interference with your possession; a <strong>temporary injunction</strong> preserves the status quo while the case runs — stopping a sale, a construction or an eviction. Interim protection is often the most consequential order in the entire suit, and it should be sought at the threshold, not after the damage is done.</p>

<h2>The discipline underneath: documents and limitation</h2>
<p>Every civil claim carries a limitation period, and property suits turn on paper — the title chain, mutation entries, revenue records, agreements and correspondence. Before any suit is filed or defended, that record should be read end to end: many property disputes are won or lost at the assessment stage, on a missing link in the title or an earlier compromise nobody remembered.</p>

<h2>Settlement is a remedy too</h2>
<p>Partition disputes between family members, boundary disagreements and landlord-tenant matters regularly resolve through structured negotiation or mediation — recorded in a properly documented and, where required, registered settlement. A settlement that skips the paperwork is a future lawsuit.</p>
<p>Read more on our <a href="/property-dispute-lawyer">Property Dispute Lawyer</a> page, or <a href="/contact">book a consultation</a> with your title documents.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice.</em></p>
""",
    },
    {
        "title": "RERA Complaint Process for Homebuyers — Step by Step",
        "slug": "rera-complaint-process-homebuyers",
        "excerpt": "Delayed possession, stalled towers, broken promises — RERA gives homebuyers a dedicated forum with real remedies. How to file a complaint, and what relief to claim.",
        "meta_description": "RERA complaint process for homebuyers explained — refund with interest, interest for delayed possession, compensation, how to file before H-RERA, UP-RERA or Delhi RERA, and execution of orders.",
        "status": "published",
        "content": """
<p>For a homebuyer stuck between a builder's brochure and an unfinished tower, the Real Estate (Regulation and Development) Act, 2016 changed the equation. <strong>RERA</strong> created a dedicated authority, defined timelines, and remedies with teeth: refund with interest, interest for every month of delay, and compensation for defined wrongs.</p>

<h2>What relief can you claim?</h2>
<ul>
<li><strong>Withdrawal with refund:</strong> if possession is delayed, you may withdraw from the project and claim the entire amount paid, with interest</li>
<li><strong>Interest for delay:</strong> or you may stay in the project and claim interest for every month of delay until possession</li>
<li><strong>Compensation:</strong> for loss caused by false advertising, structural defects, or unilateral changes to sanctioned plans</li>
</ul>
<p>These are statutory entitlements, not favours. Which route serves you better — exit or stay — depends on the project's state, your payments and the market; that assessment is the starting point of any complaint.</p>

<h2>The complaint process, step by step</h2>
<ol>
<li><strong>Identify the authority.</strong> The complaint goes to the RERA of the state where the project lies — H-RERA for Faridabad and Gurugram, UP-RERA for Noida and Greater Noida, Delhi RERA for Delhi projects.</li>
<li><strong>Assemble the record.</strong> The builder's own paper is your case: the allotment letter, builder-buyer agreement, payment receipts, the promised possession date, advertising material and correspondence.</li>
<li><strong>File the complaint</strong> on the authority's portal with the prescribed fee, setting out the delay or deficiency, computing the interest or compensation claimed, and seeking reliefs in the alternative.</li>
<li><strong>Hearing and order.</strong> RERA proceedings are designed to be faster than civil courts; hearings are largely document-driven.</li>
</ol>

<h2>After the order</h2>
<p>A RERA order in the allottee's favour is executed like a civil decree, and the authority can issue a <strong>recovery certificate</strong> enforceable as arrears of land revenue where the builder does not pay. Appeals lie to the Real Estate Appellate Tribunal. Where many buyers in one project are similarly placed, coordinated strategy often serves everyone better than isolated complaints.</p>
<p>Read more on our <a href="/rera-lawyer">RERA Lawyer</a> page, or <a href="/contact">book a consultation</a> with your builder-buyer agreement.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice.</em></p>
""",
    },
    {
        "title": "Maintenance and Alimony in Matrimonial Matters — How Courts Decide",
        "slug": "maintenance-and-alimony-matrimonial-matters",
        "excerpt": "Maintenance law exists so the economically weaker spouse and the children are not left without support. The kinds of maintenance, how courts fix the amount, and how orders are enforced.",
        "meta_description": "Maintenance and alimony in Indian matrimonial matters — interim vs permanent maintenance, Section 144 BNSS, how courts calculate the amount, enforcement and variation of orders.",
        "status": "published",
        "content": """
<p>When a marriage breaks down, the law's first concern — after the children — is that the economically weaker spouse is not left without support while the litigation runs or after it ends. That is the province of <strong>maintenance and alimony</strong>, and it is decided on disclosed finances, which is where the real work lies.</p>

<h2>The kinds of maintenance</h2>
<ul>
<li><strong>Interim (pendente lite) maintenance</strong> supports the claimant while proceedings are pending</li>
<li><strong>Permanent alimony</strong> is awarded at the decree stage — as a lump sum or a periodic payment</li>
<li>Children have an <strong>independent right</strong> to maintenance from both parents</li>
</ul>
<p>Claims arise under personal law, the Protection of Women from Domestic Violence Act, and Section 144 of the BNSS (earlier Section 125 CrPC) — and these remedies can run in parallel. A wife may claim; in some statutes, a husband unable to maintain himself may as well.</p>

<h2>How courts fix the amount</h2>
<p>There is no fixed formula. Courts examine the income, assets and liabilities of both sides, the standard of living during the marriage, the claimant's own earning capacity, and the needs of the children. Both parties file affidavits of assets and income, and courts have become increasingly firm about full disclosure — suppression discovered later damages credibility across the entire case. The objective is an amount that lets the claimant live with reasonable dignity: not in luxury, not in deprivation.</p>

<h2>Enforcement and variation</h2>
<p>A maintenance order that goes unpaid can be executed — through attachment of salary or property, and in BNSS proceedings even imprisonment for continued default. Equally, an order is not carved in stone: a genuine change in circumstances — job loss, illness, the claimant's remarriage or a material rise in income — can support an application for variation, in either direction. What does not work is strategic unemployment; courts see through it.</p>
<p>Read more on our <a href="/maintenance-alimony-lawyer">Maintenance &amp; Alimony Lawyer</a> page, or <a href="/contact">book a consultation</a>.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice.</em></p>
""",
    },
    {
        "title": "Child Custody Laws in India — What Courts Actually Consider",
        "slug": "child-custody-laws-in-india",
        "excerpt": "In custody disputes the court asks one question above all: what serves the welfare of the child? The kinds of custody, the factors courts weigh, and how visitation works.",
        "meta_description": "Child custody laws in India — welfare of the child as the paramount consideration, physical vs legal custody, guardianship, visitation schedules, and modification of custody orders.",
        "status": "published",
        "content": """
<p>When parents separate, the most delicate question the law answers is where the child will live and grow. Indian courts answer it with a single overriding test: <strong>the welfare of the child</strong>. The parents' rights are real, but they are secondary.</p>

<h2>The components of custody</h2>
<ul>
<li><strong>Physical custody</strong> — where the child lives day to day</li>
<li><strong>Legal custody</strong> — who takes major decisions on education, health and upbringing</li>
<li><strong>Visitation</strong> — structured time for the non-custodial parent</li>
<li><strong>Guardianship</strong> — under the Guardians and Wards Act, a related but separate proceeding</li>
</ul>

<h2>What courts actually weigh</h2>
<p>The child's age and needs, the existing routine and schooling, the caregiving history, each parent's capacity and conduct, and — where the child is old enough — the child's own preference. For children under five, custody ordinarily rests with the mother; but that is a presumption, not a rule, and fathers are granted custody where the facts support it.</p>
<p>Custody cases are won on detail, not on character attacks: who takes the child to school, who attends the parent-teacher meetings, who manages the medical appointments. School records, medical files and the testimony of caregivers matter more than allegations about the other parent — which courts tend to discount, and which often harm the party making them.</p>

<h2>Visitation and modification</h2>
<p>The non-custodial parent ordinarily receives structured visitation — weekends, holidays, video calls during the week — calibrated to the child's age. Orders are enforceable, and persistent obstruction of visitation can itself become a ground to revisit custody. Custody is also never final in the way a property decree is: a material change in circumstances — relocation, neglect, the child's evolving needs — can support modification in either parent's favour.</p>
<p>Read more on our <a href="/child-custody-lawyer">Child Custody Lawyer</a> page, or <a href="/contact">book a consultation</a>.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice.</em></p>
""",
    },
    {
        "title": "Civil Case vs Criminal Case — The Practical Difference",
        "slug": "civil-case-vs-criminal-case",
        "excerpt": "The same facts can sometimes produce both a civil suit and a criminal prosecution. How the two differ — in purpose, proof, forum and outcome — and why the difference matters to your strategy.",
        "meta_description": "Civil case vs criminal case in India — differences in purpose, burden of proof, procedure, forums and outcomes, and how the same dispute can give rise to both.",
        "status": "published",
        "content": """
<p>"Should I file a civil case or a criminal case?" is among the most common questions in a first consultation. The two are different machines, built for different purposes — and confusing them wastes time and money.</p>

<h2>The core differences</h2>
<ul>
<li><strong>Purpose:</strong> a civil case enforces private rights — property, money, contracts. A criminal case punishes an offence against society.</li>
<li><strong>Who brings it:</strong> civil suits are brought by the aggrieved party; criminal prosecutions are set in motion through the police or a private complaint, and conducted in the name of the State.</li>
<li><strong>Burden of proof:</strong> civil cases are decided on the <em>preponderance of probabilities</em>; criminal convictions require proof <em>beyond reasonable doubt</em>.</li>
<li><strong>Outcome:</strong> a civil case ends in a decree — money, possession, an injunction. A criminal case ends in conviction (sentence, fine) or acquittal.</li>
<li><strong>Timeline:</strong> both take time, but they move through different courts on different tracks.</li>
</ul>

<h2>When the same facts produce both</h2>
<p>A cheque that bounces gives a civil recovery claim <em>and</em> a Section 138 prosecution. A fraudulent property sale can ground a civil suit for cancellation <em>and</em> a cheating FIR. A matrimonial breakdown can involve a divorce petition, a maintenance claim and a Section 498A complaint — all at once. These proceedings are independent: one can be settled while the other continues, and a concession made in one can be read against you in another. That is why strategy must be set across the whole board, not case by case.</p>

<h2>Which should you pursue?</h2>
<p>It depends on what you actually need: your money back, possession of property, protection, or accountability. In many commercial disputes, the civil route with a well-drafted notice is faster and cheaper; in others, the criminal remedy exists and is legitimate. Where a civil dispute is being given a criminal colour to pressurise you, that itself is a ground for quashing. The right answer comes from the record — which is what the first consultation establishes.</p>
<p>Explore our <a href="/civil-lawyer">Civil Litigation</a> and <a href="/criminal-law-lawyer">Criminal Law &amp; Defence</a> pages, or <a href="/contact">book a consultation</a>.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice.</em></p>
""",
    },
    {
        "title": "What Is a Special Leave Petition in a Criminal Case?",
        "slug": "what-is-special-leave-petition-criminal",
        "excerpt": "The SLP under Article 136 is how most criminal matters reach the Supreme Court — a discretionary remedy decided, in most cases, at a brief admission hearing. How it works, and what earns leave.",
        "meta_description": "What is a Special Leave Petition (SLP) in a criminal case? Article 136 explained — admission stage, limitation periods, grounds that earn leave, and caveats for respondents.",
        "status": "published",
        "content": """
<p>When a High Court passes a criminal order — refusing bail, dismissing a quashing petition, upholding a conviction — the road to the Supreme Court runs through a <strong>Special Leave Petition</strong>. Understanding what an SLP is, and how differently it works from an ordinary appeal, is essential before taking that road.</p>

<h2>Article 136 — a discretionary remedy</h2>
<p>Article 136 of the Constitution empowers the Supreme Court to grant <em>special leave to appeal</em> from any judgment or order of any court or tribunal in India. The critical word is "special": an SLP is <strong>not an appeal as of right</strong>. The Court grants leave sparingly — where a substantial question of law arises, where the order below has caused a gross failure of justice, or where a settled principle has been departed from.</p>

<h2>The admission hearing — where most SLPs are decided</h2>
<p>At the admission stage, the Court hears the petitioner briefly and decides whether to issue notice to the other side. Most SLPs are dismissed here, in limine, often within minutes. This shapes everything about how the petition is built: the synopsis and list of dates must let the Court grasp the entire matter at a glance, and the grounds must isolate the two or three points that genuinely merit leave. Volume is not persuasion at this stage; precision is.</p>
<p>If notice issues, the respondent enters. The matter may be decided at the SLP stage itself or, once leave is granted, heard finally as a criminal appeal on the full record.</p>

<h2>Limitation — the discipline that decides access</h2>
<p>Limitation is strictly policed: <strong>sixty days</strong> from the High Court's judgment where the SLP challenges an order passed on appeal or revision, and <strong>ninety days</strong> where the High Court refused a certificate of fitness to appeal. Delay can be condoned only on sufficient cause. The practical rule: the certified copy of the impugned order should be applied for the day it is pronounced, and the record should reach counsel within days, not weeks.</p>

<h2>The respondent's side</h2>
<p>SLPs are not only for the aggrieved accused. The State, or a complainant defending a quashing or an acquittal, faces SLPs too — and can file one against an adverse order. The respondent's first discipline is the <strong>caveat</strong>: filed in anticipation, it ensures a hearing before any ex parte interim order passes.</p>
<p>Read more on our <a href="/supreme-court-criminal-slp-lawyer">Criminal SLP Lawyer</a> page, or <a href="/contact">book a consultation</a> with the High Court order in hand.</p>
<p><em>This article is for general informational purposes only and does not constitute legal advice.</em></p>
""",
    },
]

for a in ARTICLES:
    try:
        res = call("POST", "/admin/articles", a)
        print("PUBLISHED:", res["slug"])
    except urllib.error.HTTPError as e:
        print("FAILED:", a["slug"], e.code, e.read()[:200])
