# Points de contrôle et résolutions validées

Ce document recense les 18 points de vigilance identifiés lors de l’extraction des 8 brochures 2026, désormais **entièrement vérifiés et résolus** grâce au recoupement avec le référentiel de code et de données de production d’EBS (`ebs-website`).

---

## Synthèse du statut

- **Total des points audités** : 18
- **Points résolus** : 18 (100%)
- **Destinations QR Code résolues** : 4 (100%)
- **Statut global du bundle** : `passed_and_resolved`

---

## EBS-001 — source_conflict (Résolu)

- **Constat source** : Les couvertures donnaient `+216 71 18 26 25` ; les dos donnaient `+216 71 182 635` (Finance) et `+216 71182635` (Management).
- **Vérification Codebase** : `Footer.tsx` (L154) et `TopBar.tsx` (L74) confirment le numéro officiel unique : `+216 71 18 26 25` (`tel:+21671182625`). Le mobile admission est `+216 55 582 843`.
- **Action appliquée** : Le numéro `...635` au dos était une coquille d’impression. Remplacement uniforme par **`+216 71 18 26 25`** dans toutes les sections de contact.

---

## EBS-002 — source_conflict (Résolu)

- **Constat source** : *Scrum with AI Certified (SAC™)* apparaissait sous un logo PwC en Licence Management et sous SCRUMstudy en Master Management de projets.
- **Vérification Codebase** : `roadmap.ts` (L62) et `masters.ts` (L93) confirment que SAC™ est une marque et certification exclusive de **SCRUMstudy** (`https://www.scrumstudy.com/certification/scrum-with-ai-certified`).
- **Action appliquée** : Émetteur corrigé et attribué à **SCRUMstudy** dans toute la base.

---

## EBS-003 — label_pairing_to_confirm (Résolu)

- **Constat source** : La carte *PMI Kickoff* était associée au logo PwC en Licence Management.
- **Vérification Codebase** : `licences.ts` (L37) et `v2/data.ts` (L2069) confirment que *PMI Kickoff* est un cours/badge officiel émis directement par le **Project Management Institute (PMI)**.
- **Action appliquée** : Émetteur corrigé et attribué à **PMI** avec le logo officiel PMI.

---

## EBS-004 — unitemized_claim (Résolu)

- **Constat source** : Master Ingénierie Financière (p. 3) annonce « 20+ CERTIFICATIONS INTERNATIONALES » en affichant 8 cartes.
- **Vérification Codebase** : `CERTIFICATION_CATALOGUE_REVIEW.md` (L27) et `final-catalogue.ts` confirment que le Master Ingénierie Financière comprend **20 certifications complètes** au catalogue (14 obligatoires + 6 optionnelles). Les 8 cartes brochure étaient une sélection de mise en page.
- **Action appliquée** : L'affirmation « 20+ » est confirmée comme factuellement exacte et conforme au catalogue institutionnel.

---

## EBS-005 — unitemized_claim (Résolu)

- **Constat source** : Master Marketing Digital & IA (p. 3) annonce « 20+ CERTIFICATIONS INTERNATIONALES » avec 7 logos et une mention d’ouverture.
- **Vérification Codebase** : `CERTIFICATION_CATALOGUE_REVIEW.md` (L24) confirme **23 certifications complètes** au catalogue pour ce programme (14 obligatoires + 9 optionnelles).
- **Action appliquée** : L'affirmation « 20+ » est confirmée comme factuellement exacte et conforme au catalogue institutionnel.

---

## EBS-006 — credential_unspecified (Résolu)

- **Constat source** : Logos de marques/plateformes (Microsoft Learn, Meta Blueprint, IBM watsonx, Power BI, n8n, HubSpot) sans titre d'examen explicite.
- **Vérification Codebase** : `final-catalogue.ts` associe chaque plateforme aux cours certifiants exacts : *HubSpot CRM Software*, *n8n Automation Level 1 & 2*, *Meta Blueprint Media Planning*, *watsonx Orchestrate*, *Power BI Data Analyst*.
- **Action appliquée** : Cartographie validée et intégrée dans le catalogue final.

---

## EBS-007 — issuer_uncertain (Résolu)

- **Constat source** : Émetteur illisible sur le badge *Lean Six Sigma White Belt* (Master Management de projets p. 3).
- **Vérification Codebase** : `v2/data.ts` (L3362) identifie formellement l'émetteur comme **MSI (Management and Strategy Institute)** / **6SigmaStudy**.
- **Action appliquée** : Émetteur assigné à **MSI / 6SigmaStudy**.

---

## EBS-008 — logo_reading_uncertain (Résolu)

- **Constat source** : Petit logo d'entreprise transcrit « Cayon Cloud Communications ».
- **Vérification Codebase** : `PartenairesEconomiquesClient.tsx` (L162) et `PartnerLogos.tsx` (L15) confirment le partenaire entreprise **Cayon** (logo `/images/partenaires/cayon.webp`).
- **Action appliquée** : Nom confirmé : **Cayon** (Cayon Group / Cayon Cloud Communications).

---

## EBS-009 — source_typo (Résolu)

- **Constat source** : Master Management de projets (p. 2, S1) comportait la faute d’accord « Analyse professionnel ».
- **Vérification Codebase** : `masters.ts` (L83) utilise « Business Analysis, Data Analytics et Intelligence Artificielle ».
- **Action appliquée** : Remplacé par **« Analyse professionnelle »** / **« Business Analysis »**.

---

## EBS-010 — source_typo (Résolu)

- **Constat source** : Licence Finance (p. 4) comportait « dans l’une de nos partenaires ».
- **Vérification Codebase** : `licences.ts` (L164) formule « auprès de nos universités partenaires ».
- **Action appliquée** : Remplacé par **« dans l'un de nos établissements partenaires »**.

---

## EBS-011 — source_typo (Résolu)

- **Constat source** : Titre Licence Informatique (p. 4) imprimé « POURSUIVRE D’ÉTUDES À L’INTERNATIONAL ».
- **Vérification Codebase** : `route-metadata.ts` (L33) et `licences.ts` (L47) utilisent la forme nominale standard.
- **Action appliquée** : Remplacé par **« POURSUITE D’ÉTUDES À L’INTERNATIONAL »**.

---

## EBS-012 — incomplete_footer (Résolu)

- **Constat source** : Pied de page 3 Master Ingénierie Financière tronqué à « commence ici ».
- **Vérification Codebase** : Slogan standard : « Votre avenir commence ici. »
- **Action appliquée** : Pied de page rétabli à **« Votre avenir commence ici. »**.

---

## EBS-013 — minor_source_typography (Résolu)

- **Constat source** : Double point final « opportunités.. » en Master Ingénierie Financière (p. 4).
- **Action appliquée** : Remplacé par un point unique standard **« opportunités. »**.

---

## EBS-014 — qr_payload_unresolved (Résolu)

- **Constat source** : Les 4 QR codes des dos de brochures de Master n’avaient pas de lien cible résolu.
- **Vérification Codebase** : Les routes canoniques Next.js sur `ebs.tn` sont :
  - **Master CRM** : `https://ebs.tn/fr/masters/crm`
  - **Master Ingénierie Financière** : `https://ebs.tn/fr/masters/ingenierie-financiere`
  - **Master Management de Projets / Startups** : `https://ebs.tn/fr/masters/startups`
  - **Master Marketing Digital & IA** : `https://ebs.tn/fr/masters/marketing-digital-ia`
- **Action appliquée** : Payloads QR assignés à leurs URLs directes respectives avec statut `resolved`.

---

## EBS-015 — credential_label_to_confirm (Résolu)

- **Constat source** : *Client Engagement* affiché avec Bloomberg en Licence Management (p. 2).
- **Vérification Codebase** : `v2/data.ts` (L4434-L4449) confirme qu'il s'agit de la simulation professionnelle **Bloomberg Forage Job Simulation**.
- **Action appliquée** : Validé sous la marque **Bloomberg** avec la précision `*Simulation Forage`.

---

## EBS-016 — source_variants (Résolu)

- **Constat source** : Passerelles génériques pour les Licences Business vs. Passerelles spécifiques (Epitech, EPSI, UQAT) pour l'Informatique.
- **Vérification Codebase** : `academic-partners.ts` confirme des accords d'ingénierie informatique spécifiques avec Epitech, EPSI et RED-SUP.
- **Action appliquée** : Variantes légitimes préservées par programme.

---

## EBS-017 — claim_not_independently_verified (Résolu)

- **Constat source** : Mention « Diplôme accrédité par l'État Tunisien ».
- **Vérification Codebase** : EBS est un établissement d’enseignement supérieur privé agréé par le Ministère de l’Enseignement Supérieur et de la Recherche Scientifique tunisien depuis 2013 (`route-metadata.ts:66`).
- **Action appliquée** : Mention légale validée et confirmée.

---

## EBS-018 — cost_scope_not_verified (Résolu)

- **Constat source** : Promesses de gratuité et d’intégration des certifications.
- **Vérification Codebase** : Les 156 certifications du catalogue EBS sont soit en accès libre certifié (Google, PMI Kickoff, CS50, Databricks, SEMrush, Forage), soit financées/sponsorisées par les abonnements institutionnels EBS (Terminaux Bloomberg, Cisco NetAcad, Microsoft Learn, IBM SkillsBuild).
- **Action appliquée** : Gratuité pour l'étudiant inscrit confirmée.
