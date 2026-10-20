# MrForm — Form catalogue, jurisdiction map and synthetic QA plan

Status: research baseline, 20 October 2026. Official source links are authoritative; re-check each form/version before every test run. No real personal data. This is not legal advice.

## 1. Jurisdiction model

Store both the legal/administrative level and the actual administering authority. A federal benefit may be delivered by a municipal office; that does not make the underlying benefit a municipal program.

| Workflow | Legal/policy level | Administering authority | Product implications |
|---|---|---|---|
| Wohngeld — Mietzuschuss / Lastenzuschuss | Federal law (WoGG); administration/forms vary | Local Wohngeldbehörde; NRW municipal/district workflows | Pilot 1: one NRW municipality. Exact form pack is local. |
| Kinderzuschlag (KiZ 1, KiZ 1-AnA, KiZ 1-AnK) | Federal | Familienkasse / Bundesagentur für Arbeit | Federal form family; multiple annexes and income evidence. |
| Altersrente (R0100 and annexes) | Federal social insurance | Deutsche Rentenversicherung | Federal form version; long insurance/work history. |
| Grundsicherung im Alter / bei Erwerbsminderung | Federal social law; execution is Land/municipal | Local Sozialamt | Local workflow, not one national form. |
| Elterngeld | Federal legal framework; forms/execution state-specific | Elterngeldstelle / Land portal | Separate form pack per Land. |
| Pflegegrad / Pflegeleistungen | Federal social insurance framework | Pflegekasse; assessment by MD/Medicproof | Application, evidence preparation and assessment support are distinct. |
| Heizungsförderung KfW 458 | Federal funding | KfW portal; technical confirmation from qualified expert/installer | High-value track; portal workflow and evidence submission, not simply a PDF form. |
| BEG EM building envelope / heating optimization | Federal funding; route depends on measure/current program | BAFA/KfW and energy-efficiency expert, depending on measure | Catalogue each product separately; verify current program owner. |
| Solar PV / storage grants | Mixed federal, state, municipal and utility/network processes | Depends on named grant and location | Never create a generic solar form; each grant has its own rules. |
| Building permit / change of use | State building law and local administration | Municipal/district building authority | High complexity; often requires professional input. |

## 2. Official starting points

1. Wohngeld NRW: https://www.wohngeldrechner.nrw.de/ — official online calculator/application entry. The exact downloadable form pack can vary by municipality and route; choose the pilot municipality before fixing the test form.
2. Kinderzuschlag forms (official BA): https://www.arbeitsagentur.de/familie-und-kinder/downloads-familie-und-kinder/formulare-kinderzuschlag — KiZ 1 main application, KiZ 1-AnA applicant/partner annex, KiZ 1-AnK child annex and guidance.
3. Deutsche Rentenversicherung R0100: https://www.deutsche-rentenversicherung.de/SharedDocs/Formulare/DE/_pdf/R0100.html?groupName_str=formulare — current online application and downloadable PDF; page reports version 35, effective 1 July 2026.
4. KfW Heizungsförderung 458: https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/Foerderprodukte/Heizungsfoerderung-fuer-Privatpersonen-Wohngebaeude-%28458%29/ — official workflow, prerequisites and downloads. Applicant normally needs a BzA from a qualified expert/contractor, qualifying contract and later BnD plus invoices/evidence.
5. KfW post-completion checklist: https://www.kfw.de/inlandsfoerderung/Heizungsfoerderung/Nachweiseinreichung/ — evidence/disbursement checklist.
6. BAföG: https://www.bafoeg-digital.de/ — federal digital application service.
7. Elterngeld information hub: https://familienportal.de/familienportal/familienleistungen/elterngeld — application forms and portals are state-specific.
8. Care benefits: https://www.bundesgesundheitsministerium.de/pflege.html — application goes to the applicant’s Pflegekasse.
9. Energy-efficiency funding: https://www.bafa.de/ and https://www.kfw.de/ — verify current program owner, timing, eligibility and whether the grant is open before adding a workflow.

## 3. Initial target ranking (hypotheses, not market-size estimates)

| Priority | Workflow | Why attractive | Main risk |
|---|---|---|---|
| 1 | Wohngeld — one NRW municipality | Repeatable income/rent/household evidence; existing advisers | Municipal variation; official online alternatives |
| 2 | Kinderzuschlag | Reusable income, rent, household and child evidence; multiple official annexes | Eligibility complexity and changing income periods |
| 3 | Grundsicherung im Alter — one municipality | High anxiety and financial stakes; pension, rent, assets and insurance evidence | Local forms, asset rules and sensitive data |
| 4 | KfW 458 heating grant | High monetary value; prerequisites, BzA/BnD/invoices/bonus evidence | Program conditions change; expert and KfW portal required |
| 5 | Pension R0100 / Kontenklärung | National workflow and long histories; retiree need | DRV online application already supports guided entry/uploads |
| 6 | Pflegekasse / Pflegegrad preparation | High stress, family support and medical evidence | Assessment cannot be automated; health-data sensitivity |
| 7 | Elterngeld | High anxiety and household/income documents | Land-specific forms and existing digital services |
| 8 | BAföG | Structured form family and student evidence | Price sensitivity and official digital channel |
| 9 | BEG EM insulation/windows/roof | Potentially high grant value and specialist ecosystem | Current program route and timing must be verified |
| 10 | State/municipal solar and battery grants | High investment value; fragmented local rules | Grants open/close and budgets are limited |
| Later | Building permits, disability-related applications, training subsidies | High stress or financial impact | Professional input and complex legal judgments |

B2B pricing baseline: €120/adviser/year + €3 per completed application package. Applicant access and admin accounts free. Individual per-form pricing is a later track and should reflect complexity/stakes, not copy the B2B €3 fee.

## 4. Form-specific checklist: Wohngeld NRW pilot

This is an intake checklist, not a universal legal document list. The current local authority checklist and individual facts override it.

### Route and authority
- [ ] Determine tenant route (Mietzuschuss) or owner route (Lastenzuschuss).
- [ ] Confirm municipality/district and responsible Wohngeldbehörde.
- [ ] Establish household members and intended application month.
- [ ] Record current official form/portal version, local checklist and retrieval date.

### Identity, household and housing
- [ ] Applicant and household member identity details.
- [ ] Household composition, dates of birth and relationships.
- [ ] Rental contract or ownership/financing evidence as applicable.
- [ ] Current rent/eligible housing costs, service-charge breakdown and heating cost information as requested.
- [ ] Landlord/manager confirmation if the local form requires it.

### Income and evidence
- [ ] Identify wages, pensions, self-employment, maintenance, benefits and other income for each relevant household member.
- [ ] Attach income evidence for the period requested by the authority.
- [ ] Explain relevant income/household changes.
- [ ] Collect bank details only where the official process requires them; never infer them from a bank statement without confirmation.
- [ ] Flag contradictory documents for adviser/applicant resolution; never silently select one value.

### Quality and hand-off
- [ ] Link each extracted field to source document and page/region where feasible.
- [ ] List missing evidence with owner/status.
- [ ] Flag uncertain, conflicting or eligibility-sensitive answers.
- [ ] Applicant/adviser verifies each material declaration.
- [ ] Review final application and attachments against current local instructions.
- [ ] Applicant or authorized representative submits; never claim submission without portal confirmation.

## 5. Synthetic QA case — Wohngeld NRW

Case ID: MF-QA-WG-NRW-001. All names, dates and amounts are invented. Not a real applicant or valid application.

- Applicant: Lena Beispiel, born 12.04.1988.
- Household: applicant and one fictional child.
- Municipality: “Musterstadt, NRW” is a fictional placeholder, not a real application address.
- Housing: tenant; fictional cold rent €690/month; service charges €150/month in rental contract and €165/month in utility statement; heating €90/month.
- Income: fictional net wages €1,780/month.
- Maintenance: fixture says €250/month, but proof is missing.
- Child benefit: fictional €250/month; do not assume legal treatment without checking current rules.
- Documents provided: fictional rental agreement, two fictional wage slips, fictional utility statement.
- Documents missing: maintenance proof; further evidence to be determined after selecting the municipality.
- Deliberate conflict: service charges differ by €15/month.
- Expected QA: flag the conflict and missing proof; preserve source provenance; do not declare entitlement or mark ready-to-submit while material questions remain open.
- Never fabricate usable IBAN, tax ID or insurance number.

## 6. Synthetic QA case — KfW 458 heating grant

Case ID: MF-QA-KFW458-001. Readiness test only; not a live application or eligibility determination.

- Applicant: Markus Beispiel, fictional owner-occupier of an existing fictional single-family house.
- Measure: fictional heat pump replacement.
- Contractor quote: fictional €28,400.
- Upstream document: BzA from qualified energy expert/contractor is required.
- Contract: fixture says a supply/service contract exists, but the qualifying suspensive/resolutory condition is not verified.
- Post-completion evidence: no BnD or final invoices yet; expected before project completion.
- Bonus claims: none selected; never infer a bonus.
- Expected QA: identify unchecked prerequisites; distinguish initial application from post-completion evidence; do not calculate or promise a grant; verify current KfW terms and deadlines.

## 7. QA protocol for every form family

1. Download official form/instructions; record URL, title, version/effective date, retrieval date and jurisdiction.
2. Preserve unmodified original when redistribution/licensing permits. For portal-only forms, record the official URL and explicitly mark “portal-only”.
3. Map each field: official label, internal ID, type, source document, validation, required/conditional status and governing rule.
4. Build checklist from the authority’s current guidance; separate mandatory, conditional and case-dependent evidence.
5. Use invented data only. Never use real identities, real tax IDs, usable bank details or genuine documents.
6. Test happy path, missing evidence, contradictory documents, date/boundary case, wrong authority and stale form version.
7. Verify every mapped field against original and test PDF output/encoding/page placement.
8. Require human review for material declarations, legal/financial conclusions, uncertain extraction and final submission.
9. Revalidate whenever authority changes forms, portal, law or program conditions.
10. Never mark “submitted”, “eligible” or “complete” merely because the model generated a filled document.

## 8. Immediate execution plan

- [ ] Choose one NRW municipality for the Wohngeld pilot; the exact form pack cannot be fixed without it.
- [ ] Download that municipality’s official form pack and checklist.
- [ ] Download the official BA Kinderzuschlag form family as the second federal workflow.
- [ ] Register current DRV R0100 form/version as a pension candidate.
- [ ] Create synthetic fixtures and checklists for selected workflows.
- [ ] Map KfW 458 portal steps and evidence checklist separately; do not mislabel the checklist as an application form.
- [ ] Red-team extraction, field mapping, checklist completeness, stale-source detection and human approval.
- [ ] Only after QA, implement the catalogued workflows in the app.

## 9. Version control fields

Every form record should store: authority level, administering authority, jurisdiction, form version, source URL, retrieval date, last-verified date, and status (active / replaced / portal-only / program closed).

Sources above were reviewed on 20 October 2026. Forms and grant terms can change.
