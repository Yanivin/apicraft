from numpy import append
import pandas as pd
from bs4 import BeautifulSoup
import requests
import json
import re
import urllib
import time

# NEEDS TO BE FIXED LOL

urls = ["https://en.wikipedia.org/wiki/Electronic-warfare_aircraft"]
name = []
country = []
classes = []
role = []
date = []
status = []
number = []

for url in urls:
    r = requests.get(url)
    soup = BeautifulSoup(r.text, 'html.parser')

    for div in soup.find_all('div', {'class': 'mw-parser-output'}):
        for li in div.find_all('li'):
            brackets = re.findall(r'\(.*?\)', li.text)
            patn = re.sub(r"[\([{})\]]", "", li.text)
            if brackets:
                country.append(brackets)
            name.append(patn)

del name[32:]
del name[len(name)-5:]
del country[len(country)-5:]

print(len(name))
print(len(country))

df = pd.DataFrame(
    {
        'name': name,
        'country': country,
    }
)

df.to_json('json/electronic.json', orient='records')
# 6 : 24
