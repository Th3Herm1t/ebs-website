# Homepage Orientation Quiz

**Purpose:** Simple review document for the EBS team
**Current location:** Homepage, in the “Orientation” section
**Current experience:** Five questions followed by a ranked list of up to three programme matches
**Implementation files:** `ebs-website/src/components/sections/OrientationSection.tsx` and `ebs-website/src/components/sections/ProgrammeFinder.tsx`

## 1. What Visitors See

The homepage gives visitors two choices:

- **Quiz:** Answer five quick questions and receive a primary recommendation plus alternatives.
- **Comparer:** Select two or three programmes and compare them.

The quiz is presented as:

> Répondez à cinq questions pour identifier le parcours EBS le plus cohérent avec votre profil, vos ambitions et le domaine qui vous attire.

It is described as taking **one minute**.

## 2. The Five Questions

### 1. Preferred subject

**Quel domaine t'attire le plus ?**

- Technologie & Code
- Business & Stratégie
- Marketing & Communication
- Finance & Chiffres

### 2. Current education level

**Quel est ton niveau actuel ?**

- Bac / Bac en cours
- Bac+3 / Licence

### 3. Main priority

**Qu'est-ce qui compte le plus pour toi ?**

- Les compétences professionnelles
- L'international
- L'employabilité rapide
- Le salaire élevé

### 4. Preferred type of work

**Tu préfères travailler avec...**

- Des données et des chiffres
- Des clients et des équipes
- Des contenus et de la créativité
- Des systèmes et des algorithmes

### 5. Career ambition

**Où te vois-tu dans 5 ans ?**

- Développeur / Ingénieur
- Manager / Chef de projet
- Marketer / Growth
- Analyste / Auditeur

## 3. Current Recommendations

The quiz currently recommends one of these nine programmes:

- Licence en Management
- Licence en Marketing
- Licence en Finance
- Licence en Informatique & Intelligence Artificielle
- Licence en Cybersécurité
- Master en CRM & Revenue Operations
- Master en Marketing Digital & Intelligence Artificielle
- Master en Startups & Entrepreneuriat
- Master en Ingénierie Financière

### How the current recommendation works

All five answers now contribute to the result. The quiz compares the visitor's interests, education level, priorities, preferred work environment, and career ambition with each programme.

The programmes are ranked by match. Education level is used to favour Licences for Bac-level visitors and Masters for Bac+3 visitors.

The result shows the best match first, followed by up to two alternatives.

The exact recommendation is intentionally a ranking rather than a rigid decision tree. This avoids forcing every mixed profile into one programme.

### What the result explains

The result shows up to three reasons connected to the visitor's answers, such as:

- Area of interest
- Education level
- Main priority
- Preferred work environment
- Career ambition

## 4. What Happens After The Questions

The visitor sees a result card containing:

- **Ton programme idéal** / **Your best match**
- The recommended programme name
- Duration
- Number of included opportunities or resources
- Degree level
- A short programme description
- A short explanation of why the programme matches the visitor
- Up to two alternative programmes to explore
- **Voir le programme** button
- **Recommencer** button

The visitor can return to the previous question while completing the quiz.

## 5. Programme Comparison

Visitors can switch from Quiz to **Comparer**.

They can select up to three programmes. The comparison appears after selecting at least two.

The table currently compares:

- Degree level
- Duration
- Entry requirement
- Included resources
- International partners
- Employment claim
- Career opportunities

## 6. What Has Been Improved

The homepage quiz now:

1. Uses the visitor’s priority as part of the match.
2. Ranks up to three programmes instead of forcing one result.
3. Shows why the primary programme matches the visitor.
4. Shows alternative programmes for mixed profiles.
5. Supports French and English question, interface, and programme names.
6. Removes the unconfirmed shared `90%+` employment claim from the quiz comparison.
7. Keeps the visitor in control by linking every result to the relevant programme page.

## 7. Questions For The EBS Team

### About the goal

- Should the quiz mainly help students choose a programme?
- Should it mainly generate admission leads?
- Should it encourage visitors to contact EBS?

### About the recommendation

- Should the quiz recommend one programme or the three best matches?
- Should every question influence the result?
- Should education level block or limit certain recommendations?
- Should international interest change the recommendation?

### About the content

- Are the five questions easy for prospective students to understand?
- Are the answer choices complete and balanced?
- Are the official programme names correct?
- Which employment and career claims are approved for public use?

### About the next action

- Should the result include a contact or pre-registration form?
- Should the visitor be invited to book an orientation call?
- Should the quiz offer a downloadable recommendation summary?

## 8. Suggested Workshop Decision

The EBS team should agree on:

- The main purpose of the quiz
- The final questions and answer choices
- The recommendation rules
- Whether to show alternatives
- The official facts shown in each result
- The action visitors should take after receiving a recommendation
