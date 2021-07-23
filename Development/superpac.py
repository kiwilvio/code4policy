import requests
import json
import os

# base url for specific api
base_url = 'https://api.open.fec.gov/v1/'

# operation to execute for the api
operation = 'reports/pac-party'

# get key from environment variable
key = os.environ.get('FECKEY')
num_pages = 420

for page in range(2, num_pages+1):
    api_parameters = {'api_key': key, 'cycle':2016, 'type':'O', 'page': page}

    response = requests.get(base_url + operation, params = api_parameters)

    # print status code and load returned data into json
    print('Response Code: {0}\n'.format(response.status_code))
    data = json.loads(response.text)

    # save raw data
    with open('superpac_results.json', 'a') as outfile:
        json.dump(data, outfile)

    # loop through results and print name
    for report in data['results']:
        print(report['committee_name'])