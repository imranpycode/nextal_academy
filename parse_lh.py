import json
import sys

try:
    with open('scratch_user_input.txt', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    if not lines:
        print("Empty file")
        sys.exit(0)
    
    last_line = lines[-1]
    # format of transcript line: json object with 'content' string
    data = json.loads(last_line)
    content_str = data.get('content', '{}')
    
    # Try to parse the content string which might be a JSON itself or have a prefix
    # The prompt might look like "7. { ... }"
    start_idx = content_str.find('{')
    if start_idx == -1:
        print("No JSON found in content.")
        sys.exit(0)
    
    lh_json = json.loads(content_str[start_idx:])
    
    audits = lh_json.get('audits', {})
    perf = lh_json.get('categories', {}).get('performance', {}).get('score', 'N/A')
    print(f"Performance Score: {perf}")
    
    metrics = [
        'first-contentful-paint',
        'largest-contentful-paint',
        'total-blocking-time',
        'cumulative-layout-shift',
        'speed-index',
        'bootup-time',
        'mainthread-work-breakdown',
        'network-requests',
        'network-payloads',
        'resource-summary',
        'third-party-summary'
    ]
    
    for m in metrics:
        audit = audits.get(m, {})
        val = audit.get('displayValue', 'N/A')
        print(f"{m}: {val}")
        
    print("\nDiagnostics:")
    diagnostics = lh_json.get('audits', {}).get('diagnostics', {}).get('details', {}).get('items', [])
    if diagnostics:
        print(json.dumps(diagnostics[0], indent=2))
        
except Exception as e:
    print(f"Error: {e}")
