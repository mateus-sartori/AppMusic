from flask import Flask
import requests
from pytube import YouTube
import os

app = Flask(__name__)


@app.route('/api', methods=['GET'])
def api():  
    musica_name = 'seya_pao_duro.mp3'
    yt = YouTube('https://www.youtube.com/watch?v=xOrT5ZwIVC4')
    output_file = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download()
    os.rename(output_file, '../sounds/' + musica_name)
    return {
        'Name': output_file
    }