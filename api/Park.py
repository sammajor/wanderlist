import requests
import json
from keys import NPS_KEY
from queries.pool import pool


def get_park_data():

    payload = {'limit': '5', 'api_key': NPS_KEY}
    r = requests.get('https://developer.nps.gov/api/v1/parks', params=payload)
    data = json.loads(r.text)
    images = []
    park_data = data["data"]
    for park in park_data:
        try:
            park_info = {
                "full_name": park["fullName"],
                "city": park["addresses"][0]["city"],
                "state": park["addresses"][0]["stateCode"],
                "description": park["description"],
                "park_url": park["url"],
                "park_id": park["id"],
                "park_code": park["parkCode"]
            }
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                    """
                    INSERT INTO parks
                        (full_name, city, state, description, park_url, park_id, park_code)
                    VALUES
                        (%s, %s, %s, %s, %s, %s, %s)
                    """,
                    [
                        park_info["full_name"],
                        park_info["city"],
                        park_info["state"],
                        park_info["description"],
                        park_info["park_url"],
                        park_info["park_id"],
                        park_info["park_code"],
                    ],
                )
                    print("data is imported successfully")
        except IOError:
            print("Input Error")

    try:
        for image in park["images"]:
            url = image["url"]
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                    """
                    INSERT INTO park_images
                        (image_url, park_code)
                    VALUES
                        (%s, %s)
                    """,
                    [
                        url,
                        park_info["park_code"],
                    ],
                )
                    print("data is imported successfully")
    except IOError:
            print("Input Error")
get_park_data()
