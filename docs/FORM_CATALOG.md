# MrForm form catalog and target priorities

Research snapshot: 2026-10-20. Official source links should be rechecked before every release; forms and funding rules change.

## Governance / jurisdiction model

Store three separate fields for every procedure:
- `legal_level`: federal / state / municipal / insurer / institution
- `form_owner`: authority or institution publishing the actual form/portal
- `processing_authority`: body that receives/decides the case

Do not force every form into one jurisdiction bucket. A federal legal entitlement can use a state-standardized form and be processed by a municipality. KfW funding is a federal programme administered by KfW, not a municipal form. Health-insurance care applications are made to the applicant's Pflegekasse, not a municipal authority.

## First validation set

| ID | Procedure | Legal / programme level | Form owner / processing body | Priority | Test status |
|---|---|---|---|---|---|
| NRW-WOHNGELD-MIET | Wohngeld — Mietzuschuss | Federal law (WoGG); NRW form / local administration | NRW MHKBD publishes state form; local Wohngeldbehörde decides | P0 | Download official PDF, build checklist, test synthetic case |
| FED-KIZ | Kinderzuschlag (KiZ 1 + Anlagen) | Federal | Bundesagentur für Arbeit / Familienkasse | P1 | Multi-form bundle; high document burden |
| FED-GS-HA | Grundsicherungsgeld / legacy SGB II main application | Federal law and national BA forms; local Jobcenter administers | Bundesagentur für Arbeit / Jobcenter | P1 | Form bundle and current terminology must be versioned |
| FED-DRV-V0100 | Rentenversicherung Kontenklärung | Federal social insurance | Deutsche Rentenversicherung | P1 | High document cross-referencing, but official eAntrag already exists |
| FED-PFLEGE | Pflegegrad / Pflegeleistungen initial request | Federal social insurance rules; insurer-operated form/process | Applicant's Pflegekasse | P1 research | No single national form; insurer-specific intake |
| FED-ELTERNGELD | Elterngeld | Federal law; state-specific forms/authorities | Relevant state authority / state portal | P2 | State variants required |
| FED-BAFOEG | BAföG | Federal law; Länder administer | BAföG office / BAföG Digital | P2 | Existing official digital route; assess gaps first |
| FED-KFW-458 | KfW 458 heating subsidy | Federal programme, KfW delivery | KfW portal; eligibility and submission rules vary by applicant/WEG case | P2 high-value, high-risk | Portal rather than a static general PDF; do not automate submission initially |
| FED-KFW-270 | Renewable energy financing incl. PV | Federal KfW financing product | KfW via financing partners | P3 | Loan product, not a universal solar grant |
| STATE-MUNI-PV | Regional / municipal solar and retrofit grants | State or municipal programme-specific | Varies by current programme | Discovery only | Registry must track geography, budget status, dates and current official source |

### Official sources

- NRW Wohngeld Mietzuschuss PDF: https://www.mhkbd.nrw/system/files/media/document/file/mietzuschuss-nach-dem-wohngeldgesetz-bund-bf-v2.3.pdf
- BA downloads (Grundsicherungsgeld, legacy Bürgergeld materials, family forms): https://www.arbeitsagentur.de/downloads
- Kinderzuschlag forms and annexes: https://www.arbeitsagentur.de/familie-und-kinder/downloads-familie-und-kinder/formulare-kinderzuschlag
- DRV V0100 Kontenklärung: https://www.deutsche-rentenversicherung.de/SharedDocs/Formulare/DE/_pdf/V0100.html?https=1
- DRV A0111 questionnaire: https://www.deutsche-rentenversicherung.de/SharedDocs/Formulare/DE/_pdf/A0111
- Federal family forms overview (Elterngeld by Land, KiZ, BAföG, other): https://familienportal.de/familienportal/rechner-antraege/antragsformulare
- BAföG Digital: https://bafoeg-digital.de/
- KfW heating subsidy: https://www.kfw.de/inlandsfoerderung/Heizungsfoerderung/
- KfW 458 private owners: https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Heizungsf%C3%B6rderung-f%C3%BCr-Privatpersonen-Wohngeb%C3%A4ude-%28458%29/
- Federal funding database (programme and geography search): https://www.foerderdatenbank.de/

## Product thesis

MrForm should target high-value, high-stress, document-heavy forms where:
1. The user must reconcile multiple documents and periods.
2. Missing or inconsistent evidence causes delay or financial loss.
3. The form or online workflow is long and difficult to understand.
4. A user can provide documents and verify extracted facts.
5. The form owner and rules can be versioned and checked.
6. A human can review before filing; the product does not decide entitlement.

Do not prioritize a form solely because its payout is large. Check whether third-party assistance is legally permitted, whether official portals already solve the problem well, whether submissions can be prepared without credential sharing, and the liability/maintenance cost.

## Candidate expansion categories

- Means-tested household benefits: Wohngeld, Kinderzuschlag, Grundsicherungsgeld, BAföG.
- Pension record correction and pension claims: Kontenklärung, retirement pension, survivor's pension.
- Care / disability: Pflegegrad and care benefits, Schwerbehindertenausweis / GdB determination, disability-related tax relief. Insurer and Land variants must be represented.
- Family: Elterngeld, child-benefit special cases, Unterhaltsvorschuss, education-and-participation benefits.
- Housing / energy grants: KfW heating grant 458, KfW renewable-energy financing, state/municipal PV and retrofit programmes. Keep programme discovery separate from form completion because programmes change and can exhaust budgets.
- Business / nonprofit funding: selected BAFA/KfW and state investment grant applications; later, after a distinct B2B workflow and liability review.

## Explicit exclusions for initial release

- Anmeldung / residence registration (low-stress, low-value for this thesis).
- Automated eligibility or legal entitlement decisions.
- Automatic filing, signatures, or submission using a user's portal credentials.
- Any live processing of real personal data in the current prototype.
- Treating all funding programmes as a stable nationwide form catalogue.
