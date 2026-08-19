import json

transcript_path = r'C:\Users\mohamed imran\.gemini\antigravity-ide\brain\1bfb62c0-6638-40de-8491-e222a3abbd62\.system_generated\logs\transcript_full.jsonl'

last_user_input = None
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'USER_INPUT' and data.get('source') == 'USER_EXPLICIT':
                last_user_input = data
        except:
            pass

if not last_user_input:
    print("No user input found.")
    exit(1)

content_str = last_user_input.get('content', '')
start_idx = content_str.find('{')
if start_idx == -1:
    print("No JSON in last user input.")
    print("Content preview:", content_str[:200])
    exit(1)

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
    'network-payloads'
]

for m in metrics:
    audit = audits.get(m, {})
    val = audit.get('displayValue', 'N/A')
    score = audit.get('score', 'N/A')
    print(f"{m}: {val} (Score: {score})")
