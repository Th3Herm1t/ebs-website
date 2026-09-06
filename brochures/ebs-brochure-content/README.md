# EBS — Contenus des brochures 2026 (Édition Validée & Résolue)

Référentiel de données complet pour les huit brochures 2026 d’EBS (Espima Business School). Les 32 pages ont été inspectées visuellement, transcrites avec une fidélité totale et **entièrement vérifiées et résolues** par recoupement avec le référentiel de code et de données de production d'EBS (`ebs-website`).

## Statut du Bundle

- **Couverture** : 8 programmes (4 Licences, 4 Masters) — 32 pages sources vérifiées (100%).
- **Contrôles d'intégrité** : Égalité stricte YAML ⟷ JSON, SHA-256 des PDF sources validés.
- **Résolution éditoriale** : **18/18 points d'audit résolus** (voir `REVIEW.md` et `content/review-issues.yaml`).
- **QR Codes** : 4/4 destinations résolues vers les URLs canoniques Next.js sur `ebs.tn`.
- **Statut global** : `passed_and_resolved`.

## Utilisation

1. Consulter `REVIEW.md` pour l'historique et la justification des 18 points résolus (téléphones, associations d'émetteurs SAC™/PMI, corrections de coquilles, validation du catalogue 20+ certs).
2. Charger un fichier `content/<programme>.yaml` ou son équivalent `json/<programme>.json`.
3. Utiliser `programme` pour l’identité et `sections` pour les contenus.
4. Les images dans `evidence/` servent de preuve visuelle de transcription. Pour la production graphique, utiliser les assets vectoriels originaux.


## Structure des Dossiers

- `content/` : huit programmes, `shared-ebs.yaml`, `review-issues.yaml` (YAML propre et résolu).
- `json/` : équivalents JSON stricts des dix fichiers YAML.
- `transcripts/` : huit transcriptions Markdown propres, organisées page par page.
- `evidence/` : 32 vues des pages sources, zooms de contrôle et couches texte.
- `manifest.json` : manifeste des 8 PDF sources, empreintes SHA-256 et statut de résolution.
- `REVIEW.md` : rapport complet de résolution des 18 points de vigilance.
- `validation.json` : rapport de validation automatisé (`open_review_items: 0`, `resolved: 18`).
- `AGENTS.md` : consignes de consommation pour les agents d'intégration et de design.

## Organisation pédagogique confirmée

| Programme | Structure pédagogique | Spécificités clés |
|---|---|---|
| Licence Finance | 10 modules répartis sur 6 semestres | 11 certifications, 8 débouchés, passerelles Link / FR / CA |
| Licence Informatique | 9 domaines communs + 2 options (IA & Cybersécurité) dès S3 | 10 certifications, accords EPITECH, EPSI, RED-SUP, UQAT |
| Licence Management | 10 domaines clés sur 6 semestres | 9 certifications (SAC™ SCRUMstudy, PMI Kickoff, Google), 7 débouchés |
| Licence Marketing | 10 domaines clés sur 6 semestres | 9 certifications, 7 débouchés, marketing digital & data |
| Master CRM & Transformation Digitale | 5 blocs de compétences sur 2 ans | 10 débouchés, QR code résolu (`/masters/crm`), réseau entreprises |
| Master Ingénierie Financière | 5 blocs de compétences sur 2 ans (4 semestres) | 20 certifications au catalogue, QR résolu (`/masters/ingenierie-financiere`) |
| Master Management de Projets & Startups | 4 semestres explicites (S1 à S4) | Modules détaillés par semestre, QR résolu (`/masters/startups`) |
| Master Marketing Digital & IA | 5 blocs de compétences sur 2 ans (4 semestres) | 23 certifications au catalogue, QR résolu (`/masters/marketing-digital-ia`) |
