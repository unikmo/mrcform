# Test checklist — NRW Wohngeld Mietzuschuss

**Source form:** NRW MHKBD, “Wohngeldantrag für den Mietzuschuss” (11 pages).
Official PDF: https://www.mhkbd.nrw/system/files/media/document/file/mietzuschuss-nach-dem-wohngeldgesetz-bund-bf-v2.3.pdf

**Jurisdiction:** Federal statutory framework (Wohngeldgesetz); this is the NRW published form; the responsible local Wohngeldbehörde processes the case. Store these as separate metadata fields.

**Test rule:** Use clearly synthetic identities and addresses reserved for testing. Do not use a real person's tax ID, bank details, insurance number, or actual document. Mark all test output “TESTDATEN — NICHT EINREICHEN”.

## Fixture set
- [ ] F01 straightforward employed tenant, one-person household
- [ ] F02 two-adult household with one child and two incomes
- [ ] F03 pensioner with pension and bank interest
- [ ] F04 self-employed applicant with variable income
- [ ] F05 non-EU applicant with residence permit evidence
- [ ] F06 rent includes heating/utilities; split costs must be handled correctly
- [ ] F07 missing rent proof and one missing income month
- [ ] F08 inconsistent household member / address across documents
- [ ] F09 zero or negative / malformed numeric input
- [ ] F10 repeat application / increase request rather than initial application

## Intake checklist
- [ ] Identify exact form title, version/date, state and competent local authority.
- [ ] Determine initial / continued-payment / increase request; capture period.
- [ ] Applicant identity and contact fields complete.
- [ ] Address, tenancy and move-in details consistent.
- [ ] Household members and relationship/status recorded consistently.
- [ ] Rent, ancillary charges and heating components separated according to form instructions.
- [ ] Income source and relevant time period identified for each household member.
- [ ] Evidence mapped to each material fact, including document name and page.
- [ ] Other benefits / transfer payments answered as requested.
- [ ] Required supporting documents listed; missing items are explicit, not inferred.
- [ ] Applicant understands uncertain values and confirms them.

## Extraction / mapping checklist
- [ ] Every extracted value retains source document, page and evidence span where feasible.
- [ ] Dates, currency, monthly/annual periods and gross/net amounts are normalized without losing original value.
- [ ] No unsupported value is silently filled.
- [ ] Conflicting evidence is surfaced for human resolution.
- [ ] Calculations are deterministic and tested separately from language-model extraction.
- [ ] Conditional fields are shown only when applicable, with reason.
- [ ] Unknown / not applicable / zero remain distinct states.
- [ ] Each field maps to a specific official-form field or is marked “not mapped”.
- [ ] Form version and checklist version are recorded.

## Output / human QA checklist
- [ ] All required fields present or explicitly flagged.
- [ ] Cross-field consistency checks pass (household, address, rent period, income period).
- [ ] Amounts and date formats match official form conventions.
- [ ] No invented names, amounts, dates, eligibility assertions or missing documents.
- [ ] Every high-impact field reviewed by a human.
- [ ] Applicant/adviser can correct values and trace them back to source.
- [ ] Signature and consent fields remain unsigned in test output.
- [ ] Output visibly marked “TESTDATEN — NICHT EINREICHEN”.
- [ ] No submission or external transmission occurs.
- [ ] Test result records pass/fail, severity, expected/actual result and evidence.

## Acceptance gates
- 100% correct form/version identification.
- 100% of seeded contradictions and missing required evidence surfaced.
- 0 fabricated values.
- 100% source traceability for extracted material facts.
- All arithmetic verified against independent expected values.
- Human reviewer can identify and correct an error without re-reading every source document.
- Any critical error blocks package generation.
