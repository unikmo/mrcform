import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const source=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
test('MrForm brand is used throughout public shell',()=>{
  assert.match(source,/Mr<span>Form/);
  assert.doesNotMatch(source,/GovStream/i);
  assert.match(html,/<title>MrForm/);
});
test('correct pricing is displayed',()=>{
  assert.match(source,/€120/);
  assert.match(source,/€3/);
});
test('core adviser and applicant flows are present',()=>{
  for(const route of ['/app/dashboard','/app/cases','/app/team','/app/billing','/portal/'])assert.ok(source.includes(route),route);
});
test('demo clearly excludes live document and government processing',()=>{
  assert.match(source,/keine Antragsübermittlung/i);
  assert.match(source,/Keine tatsächliche OCR/i);
});
test('website has a landmark and language',()=>{
  assert.match(html,/<html lang="de">/);
  assert.match(html,/id="root"/);
});
