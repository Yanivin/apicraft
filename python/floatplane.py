from numpy import append
import pandas as pd
from bs4 import BeautifulSoup
import requests
import json
import re
import urllib
import time

urls = ["https://en.wikipedia.org/wiki/List_of_flying_boats_and_floatplanes"]
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

    for table in soup.find_all('table', {'class': 'wikitable'}):
        for tr in table.find_all('tr'):
            if tr.find_all('td'):
                td = tr.find_all('td')
                print(td)
                name.append(td[0].text)
                country.append(td[1].text)
                classes.append(td[2].text)
                role.append(td[3].text)
                date.append(td[4].text)
                status.append(td[5].text)
                number.append(td[6].text)

print(len(name))
print(len(country))
print(len(classes))
print(len(date))
print(len(status))
print(len(number))

df = pd.DataFrame(
    {
        'name': name,
        'country': country,
        'class': classes,
        'role': role,
        'date': date,
        'status': status,
        'amount': number
    }
)

df.to_json('json/floatplane.json', orient='records')
# 6 : 24
