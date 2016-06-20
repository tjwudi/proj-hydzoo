import json
import io

with io.open('titles.json', encoding='utf8') as f:
  titles = json.load(f)
  titles = [{'id': id, 'title': title} for id, title in enumerate(titles)]

with io.open('titles-transformed.json', 'w', encoding='utf8') as f:
  r = json.dumps(titles, ensure_ascii=False)
  f.write(unicode(r))

