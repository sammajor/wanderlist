import requests
import json
import os
from queries.pool import pool


def get_park_data():

    payload = {'limit': '500', 'api_key': os.environ["NPS_KEY"]}
    r = requests.get('https://developer.nps.gov/api/v1/parks', params=payload)
    data = json.loads(r.text)
    park_data = data["data"]
    for park in park_data:
        if park["activities"] != []:
            activities = json.dumps(park["activities"])
        elif activities == []:
            activities = [{"activities": "none"}]
        if park["images"][0]["url"]:
            park_image = park["images"][0]["url"]
        elif not park["images"][0]["url"]:
            park_image = "https://www.glenmoorbythesea.com/images/56a0dad6-2f38-4f05-8a18-e815d44e6e7c.webp"
        try:
            park_info = {
                "full_name": park["fullName"],
                "city": park["addresses"][0]["city"],
                "state": park["addresses"][0]["stateCode"],
                "description": park["description"],
                "park_url": park["url"],
                "park_id": park["id"],
                "park_code": park["parkCode"],
                "activities": activities,
                "park_image": park_image,
            }
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                    """
                    INSERT INTO parks
                        (
                            full_name,
                            city,
                            state,
                            description,
                            park_url,
                            park_id,
                            park_code,
                            activities,
                            park_image
                        )
                    VALUES
                        (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """,
                        [
                            park_info["full_name"],
                            park_info["city"],
                            park_info["state"],
                            park_info["description"],
                            park_info["park_url"],
                            park_info["park_id"],
                            park_info["park_code"],
                            park_info["activities"],
                            park_info["park_image"],
                        ],
                    )
                    print("data is imported successfully")
        except IOError:
            print("Input Error")

get_park_data()
