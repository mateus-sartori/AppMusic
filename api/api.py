from flask import Flask
import requests

app = Flask(__name__)


@app.route('/api', methods=['GET'])
def api():  
    headers = {
        'authority': 'www.youtube.com',
        'cache-control': 'max-age=0',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'x-client-data': 'CJS2yQEIo7bJAQipncoBCOu4ygEIisLKAQisx8oBCPbHygEI3NXKAQjNmssBGIrBygE=',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'cookie': 'SID=4Qes86rBPoxLKN316S_r8cN_Xg_pd86jWtRJA3-uiKizaLtYRTQpIYtNfEuF7HZwcyt-JQ.; __Secure-3PSID=4Qes86rBPoxLKN316S_r8cN_Xg_pd86jWtRJA3-uiKizaLtYA9JlJlSZDmIq3Pl6JTYyCA.; HSID=A5OIGvCK4gXrWsrVa; SSID=AMmHwm6hyvvSp7kJ3; APISID=v6Ee7l0qLaJG3jXc/A2uipkup58RgdVrw0; SAPISID=HKFR1FjfM6uvRPAU/ARaWE78Qxnctvqr3s; __Secure-3PAPISID=HKFR1FjfM6uvRPAU/ARaWE78Qxnctvqr3s; VISITOR_INFO1_LIVE=Q-NR5M_ZJrs; LOGIN_INFO=AFmmF2swRQIhALyppwEHjNZjZzn4I2Ohs5dnXNWdA0wLXX2MpoClqRzsAiA05JbjEVvn9U3hdVqZVm_-BhvcuXa4Tgg78XxaxSGlkA:QUQ3MjNmeXhpWVAyblpUTXpXV0tpa2N1UzJERU5kUUI4Nm9KbjUzX0lJQ1RBaFpULXoyWXltU2lNVDI4NTMyUVNsbk5ta3Q1SWdXQ1BxZDZrbHdkelJqOEdSTmp4V3dfcVg4QTM2bGc4VEtzamxQVUxVdnliaVF3OGNMRFNuMlBkY2x5NWJyYkpLcllmMXIzMl9pZHFCMXFFNTRUWkN0TkdNUnhoQVF1Sk1iaDJLNVF5b1lxYlRKVFRYNFduZWhLVnhmdExXdy1FQjZPa2RwTjA2VGNUd0E0amlFUWFUd3pDV24wRFU5N0h3Q2pOY3ZwMUlZUkRjYV9YWWxIZzcwYmE3TXRjZVhJQzVwTg==; YSC=80lUVWYNSLU; SIDCC=AJi4QfFdEZhaX962RrtdQRujyEPZ-ohy90uexwUyHzJQL7GL4DG5W-S5M4Hou6YT9khtO6H-hQ; __Secure-3PSIDCC=AJi4QfEwJ8fhiNLNlRjUdn12fZ999IIPrphtM15SOMMLBZYTXGTNKE5Npgj1RAkE3rdKDhdDxg',
    }

    response = requests.get('https://www.youtube.com/', headers=headers)

    return response.content
