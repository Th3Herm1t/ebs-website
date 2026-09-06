import zipfile
import xml.etree.ElementTree as ET
import sys

sys.stdout.reconfigure(encoding='utf-8')

with zipfile.ZipFile('Correction Texte site EBS.TN.docx') as z:
    xml_content = z.read('word/document.xml')

root = ET.fromstring(xml_content)
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

paragraphs = root.findall('.//w:p', ns)

current_page = 'START'

for p in paragraphs:
    p_text = ''.join(p.itertext()).strip()
    if 'PAGE' in p_text.upper():
        current_page = p_text[:80]
    
    is_master = any(k in current_page.upper() for k in ['MASTER', 'CRM', 'STARTUP', 'FINANCI'])
    if not is_master:
        continue

    # Inspect runs for highlight or strike
    has_hl = False
    run_details = []
    for r in p.findall('.//w:r', ns):
        r_text = ''.join(r.itertext())
        if not r_text.strip():
            continue
        rPr = r.find('w:rPr', ns)
        if rPr is not None:
            hl = rPr.find('w:highlight', ns)
            strike = rPr.find('w:strike', ns)
            dstrike = rPr.find('w:dstrike', ns)
            
            hl_val = hl.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val') if hl is not None else None
            is_strike = (strike is not None) or (dstrike is not None)
            
            if hl_val or is_strike:
                has_hl = True
                run_details.append((r_text, hl_val, is_strike))
                
    if has_hl:
        print(f'[{current_page}]')
        print(f'Full paragraph: {p_text}')
        for txt, hl, stk in run_details:
            print(f'   HIGHLIGHT/STRIKE: "{txt}" (hl={hl}, strike={stk})')
        print('-'*50)
