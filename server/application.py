from flask import Flask, jsonify
import time
from stats_helper import StatsHelper
import json
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
stats_helper = StatsHelper()

@app.route('/')
def homepage():
    return json.dumps(stats_helper.select_all())


@app.route('/employee')
def employee():
    return json.dumps(stats_helper.select_all_employee())


@app.route('/alldata')
def alldata():
    return json.dumps(stats_helper.join_all())

def convert_float(dictionary):
    dictionary['workavg'] = float(dictionary['workavg'])
    return dictionary

@app.route('/avgwork')
def avgwork():
    avg_work = stats_helper.calculate_work_avg()
    averages = list(map(convert_float, avg_work))
    return json.dumps(averages)


print("### Application started...")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
