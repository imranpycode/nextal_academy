import json
import re

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

# search for "metrics" with regex
def find_metric(content, metric_name):
    # look for '"id": "bootup-time",\s*"title": "...",\s*"description": "...",\s*"score": ([\d.]+),\s*"scoreDisplayMode": "...",\s*(?:"numericValue": ([\d.]+),\s*"numericUnit": "...",\s*)?"displayValue": "(.*?)"'
    # Actually just search for the specific metrics
    # A simple way is to find '"id": "metric-name"' and then find the next 'displayValue' and 'numericValue'
    
    idx = content.find(f'"id": "{metric_name}"')
    if idx == -1:
        return "N/A"
    
    sub = content[idx:idx+1000]
    m = re.search(r'"displayValue":\s*"([^"]+)"', sub)
    if m:
        return m.group(1)
    return "Found but no displayValue"

metrics = [
    'first-contentful-paint',
    'largest-contentful-paint',
    'total-blocking-time',
    'cumulative-layout-shift',
    'speed-index',
    'bootup-time',
    'mainthread-work-breakdown',
]

print("Metrics in latest lighthouse report:")
for m in metrics:
    print(f"{m}: {find_metric(content_str, m)}")

# Performance score
m_score = re.search(r'"categories":\s*\{[^{]*"performance":\s*\{[^}]*"score":\s*([0-9.]+)', content_str)
if m_score:
    print(f"Performance Score: {float(m_score.group(1))*100}")
else:
    print("Performance Score: N/A")
