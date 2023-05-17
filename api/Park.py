import requests
import json
from keys import NPS_KEY

def get_park_data():
    payload = {'limit': '5', 'api_key': NPS_KEY}
    r = requests.get('https://developer.nps.gov/api/v1/parks', params=payload)
    data = json.loads(r.text)
    print(data)
    park_data = {
        "full_name": r.data.fullName,
        "city": r.data.address[0]["city"],
        "state": r.data.address[0]["stateCode"],
        "activities": r.data.activities,
        "description": r.data.description,
        "park_url": r.data.url,
        "park_id": r.data.id,
        "park_code": r.data.parCode
    }
    for park in r.data:
        url = park.images.url
        park_data["images"]+=url
get_park_data()
