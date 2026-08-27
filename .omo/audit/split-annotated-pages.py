from pathlib import Path
import re

ROOT = Path('/root/ebs-website/.omo/audit')
ANNOTATED = ROOT / 'annotated' / 'site-correction-annotated.txt'
FLAT = ROOT / 'inputs' / 'corrections' / 'Correction Texte site EBS.TN.txt'
OUTDIR = ROOT / 'annotated-pages'


def slugify(route: str) -> str:
    if route == '/':
        return 'home'
    return route.strip('/').replace('/', '__').replace('[', '').replace(']', '')


flat_routes = []
for line in FLAT.read_text().splitlines():
    if line.startswith('PAGE :') and '/fr' in line:
        route = line.split('/fr', 1)[1] or '/'
        flat_routes.append(route)

annotated_lines = ANNOTATED.read_text().splitlines()
marker_re = re.compile(r'\bPAGE[\s\u00A0]*:')
marker_indexes = [i for i, line in enumerate(annotated_lines) if marker_re.search(line)]

if len(marker_indexes) != len(flat_routes):
    raise SystemExit(f'marker/route mismatch: {len(marker_indexes)} markers vs {len(flat_routes)} routes')

OUTDIR.mkdir(parents=True, exist_ok=True)
index_lines = []

for idx, route in enumerate(flat_routes):
    start = marker_indexes[idx] + 1
    end = marker_indexes[idx + 1] if idx + 1 < len(marker_indexes) else len(annotated_lines)
    section_lines = annotated_lines[start:end]
    path = OUTDIR / f'{slugify(route)}.txt'
    path.write_text('\n'.join(section_lines) + '\n')
    index_lines.append(f'{route}\t{path.name}')

(OUTDIR / 'INDEX.tsv').write_text('\n'.join(index_lines) + '\n')
print(f'wrote {len(flat_routes)} page sections to {OUTDIR}')
