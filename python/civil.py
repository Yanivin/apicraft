from numpy import append
import pandas as pd
from bs4 import BeautifulSoup
import requests
import json
import re
import urllib
import time

urls = ["https://en.wikipedia.org/wiki/List_of_civil_aircraft"]
name = []
aircraft = []
number = -1

for url in urls:
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html.parser')

    for div in soup.find_all('div', {'class': 'mw-parser-output'}):
        for hthree in div.find_all('h3'):
            for span in hthree.find_all('span', {'class': 'mw-headline'}):
                name.append(span.text)
            if hthree.find_next_sibling('ul'):
                number += 1
                aircraft.append([])
                for li in hthree.find_next_sibling('ul').find_all('li'):
                    for a in li.find_all('a'):
                        aircraft[number].append(a.text)

del name[len(name)-2:]
del aircraft[len(aircraft)-2:]
print(len(name))
print(len(aircraft))

df = pd.DataFrame(
    {
        'name': name,
        'aircraft': aircraft
    }
)

df.to_json('json/civil.json', orient='records')
# 6 : 24
