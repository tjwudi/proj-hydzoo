#!/usr/bin/env python
import sys
import requests
import json
import io

from openpyxl import load_workbook

geolocation_cache = {}

def get_geolocation(cityname):
  if cityname in geolocation_cache:
    return geolocation_cache[cityname]
  gdurl = u'http://restapi.amap.com/v3/place/text?key=54b332cf25cc8180aab6e5dff7e787bb&keywords={0}'.format(cityname)
  res = requests.get(gdurl)
  json_res = res.json()
  assert json_res['status'] == '1'
  if len(json_res['pois']) == 0:
    print(u"Geolocation not found for {0}".format(cityname))
    return None
  poi = json_res['pois'][0]
  location = map(lambda x: float(x), poi['location'].split(','))
  geolocation_cache[cityname] = location
  return location

xls_path = sys.argv[1]

book = load_workbook(xls_path)
print("Number of worksheet: {0}".format(len(book.get_sheet_names())))

# active worksheet
ws = book.active

# save column titles
first_col = ws.rows[0]
titles = [first_col[i].value for i in xrange(3, 37)]
with io.open('titles.json', 'w', encoding='utf8') as f:
  result = json.dumps(titles, ensure_ascii=False)
  f.write(unicode(result))

# iterate through all rows
data = []
count = 0
for row in ws.rows:
  count += 1
  if count == 1:
    # ignore first row
    continue
  cityname = row[0].value
  geolocation = get_geolocation(cityname)
  if geolocation is None:
    continue
  print(u'Geolocation {0}: {1}, {2}'.format(cityname, geolocation[0], geolocation[1]))

  dataitem = {
      'lng': geolocation[0],
      'lat': geolocation[1],
      'year': row[1].value,
      'd': [] }
  # push data
  for i in xrange(3, 37):
    dataitem['d'].append(row[i].value if row[i].value is not None else 0)
  data.append(dataitem)

f = open('result.json', 'wb')
json.dump(data, f, ensure_ascii=False)
