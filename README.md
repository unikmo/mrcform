# MrForm

Document-assisted German application preparation for advisory organizations, with source-linked extraction, evidence checklists and human verification.

**Launch pricing:** €120 per adviser/year + €3 per completed application package. Applicant access and administrative accounts are free.

**Initial workflow:** Wohngeld in one selected NRW municipality. The entitlement framework is federal, but the responsible authority and exact form pack are local and must be mapped to the chosen municipality. Additional workflows are catalogued in [the form research and QA plan](docs/form-catalogue-and-test-plan.md).

## Non-production status

Do not enter real applicant data. The fixture in tests/fixtures/wohngeld-nrw-synthetic.json contains invented data only. The app must not claim eligibility or submission, and material fields require human verification.

## Governance

- Download and version official forms and instructions before mapping fields.
- Record legal level separately from administering authority.
- Test missing evidence, conflicting documents, wrong jurisdiction and stale versions.
- Keep production deployment and live submission separate from QA approval.
