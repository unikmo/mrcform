# MrForm — Checklists for federal workflow candidates

Version: 20 October 2026. These are preflight checklists for synthetic QA, not official eligibility advice. The current official form and instructions always take precedence.

## A. Kinderzuschlag (KiZ) — federal form family

Official form hub: https://www.arbeitsagentur.de/familie-und-kinder/downloads-familie-und-kinder/formulare-kinderzuschlag

Core documents:
- KiZ 1 — main application.
- KiZ 1-AnA — applicant and partner annex (required).
- KiZ 1-AnK — one annex for each child in the household.
- Conditional annexes: KiZ 5 employer earnings certificate, KiZ 5a self-employment income, KiZ 5c maintenance/maintenance advance, KiZ 6 significant assets, KiZ 7 special dietary needs, and KiZ 1-K short application only where unchanged circumstances qualify.

### Intake checklist
- [ ] Confirm current version and application route; record date downloaded.
- [ ] Identify kindergeld-recipient/applicant and partner; match household facts to official form.
- [ ] Establish every child included and complete one KiZ 1-AnK per child.
- [ ] Gather current identity, household and bank details from applicant confirmation (never infer a usable IBAN).
- [ ] Determine whether renting or owning; collect the evidence requested for the application month/period.
- [ ] Gather income for applicant and partner for the relevant six-month period, including wage slips or employer form, self-employment evidence, pensions, benefits, maintenance and other income as applicable.
- [ ] Gather child income and expenditure evidence for each child as required by KiZ 1-AnK.
- [ ] Check conditional annex triggers: self-employment, maintenance, significant assets, special dietary needs, or changed/unchanged circumstances.
- [ ] Where the applicant is separated from the other parent, evaluate whether KiZ 5c is triggered; do not infer from relationship status alone.
- [ ] Confirm every required annex is present; do not treat the main form alone as a complete application.
- [ ] Link extracted amounts to source documents and relevant months; flag missing months and conflicts.
- [ ] Applicant/adviser reviews declarations, dates, bank details and annexes before submission.
- [ ] Submission status is recorded only after the official service confirms it.

### Synthetic QA scenarios
1. One child, employee household, all six months of payslips provided.
2. Missing one wage month; expected status: evidence incomplete.
3. Applicant/partner payslips conflict with bank deposits; expected status: flag, not auto-resolve.
4. Child lives between households and maintenance evidence is absent; expected status: ask targeted follow-up and assess KiZ 5c trigger against current official instructions.
5. Assets appear above the current KiZ 6 threshold; expected status: flag conditional annex using the current form threshold, not a hardcoded stale threshold.
6. Two children; expected output must include two child annexes.

## B. Altersrente — R0100 federal pension application

Official source: https://www.deutsche-rentenversicherung.de/SharedDocs/Formulare/DE/_pdf/R0100.html?groupName_str=formulare

The official DRV page currently reports version 35, dated 1 July 2026, and offers both guided online entry and downloadable PDF. The guided official online service may be easier than recreating its workflow; MrForm should initially prepare and verify information rather than claim to replace the DRV service.

### Intake checklist
- [ ] Confirm correct pension type and intended start date; do not choose pension type based only on age.
- [ ] Identify responsible Deutsche Rentenversicherung carrier from the applicant’s insurance record/contact.
- [ ] Collect the current R0100 version and all annexes required by the applicant’s answers.
- [ ] Verify identity and pension insurance number with the applicant; never invent identifiers.
- [ ] Collect bank/tax/health-insurance details only as requested and explicitly confirmed.
- [ ] Review insurance history and identify missing periods (employment, self-employment, education, childcare, care, unemployment, foreign periods) without inventing dates.
- [ ] Obtain employer, benefit, education, childcare/care or foreign insurance evidence only where relevant.
- [ ] Check marital/survivor/other status questions and conditional annexes against the official instructions.
- [ ] Distinguish known facts from assumptions; leave unknown dates unresolved and request evidence.
- [ ] Check application date, requested pension start and any deadline implications with the applicant/adviser.
- [ ] Map each answer to a source document or applicant confirmation.
- [ ] Applicant/adviser validates all declarations and annexes before the application is sent.
- [ ] Record transmission only after official DRV confirmation.

### Synthetic QA scenarios
1. Complete ordinary work history with supporting records.
2. Gap in insurance history; expected status: missing-period warning, not fabricated employer.
3. Foreign employment period; expected status: ask jurisdiction/dates and flag for DRV clarification.
4. Start date inconsistent with requested pension type; expected status: review alert, not eligibility determination.
5. Version mismatch; expected status: stop generation and require current R0100/annex versions.

## C. KfW 458 — heating subsidy workflow, not a single PDF application

Official program: https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/Foerderprodukte/Heizungsfoerderung-fuer-Privatpersonen-Wohngebaeude-%28458%29/

### Before application
- [ ] Confirm eligible applicant/property type and ownership basis.
- [ ] Confirm current program terms, available funding and applicable version date.
- [ ] Obtain BzA from qualified energy-efficiency expert or eligible contractor.
- [ ] Verify qualifying supply/service contract and required suspensive/resolutory condition.
- [ ] Confirm project and cost breakdown match the BzA; flag inconsistencies.
- [ ] Identify whether a base application and any separate bonus/additional application are required.
- [ ] Applicant logs into the official KfW portal and reviews all material entries before submission.

### After project completion (separate stage)
- [ ] Obtain BnD from the qualified expert/contractor.
- [ ] Confirm deadline in the individual grant approval; do not assume a universal deadline.
- [ ] Collect final invoices with required applicant/property/date/amount details.
- [ ] Collect only the additional evidence required for any claimed bonus under the current rules.
- [ ] Check file format/size and ensure documents are legible and complete.
- [ ] Review before final upload; official KfW guidance warns that submitted evidence cannot necessarily be changed.
- [ ] Do not calculate or promise funding without applying current official conditions and human review.

## Universal acceptance criteria

- Every field has source provenance or is explicitly labelled applicant-confirmed.
- Conditional annexes are triggered by current official rules, not model guesswork.
- Missing and contradictory evidence block “ready for review” or “ready to submit” as appropriate.
- No synthetic fixture uses real personal identifiers, real bank details or real addresses.
- No model output claims entitlement, approval or submission.
