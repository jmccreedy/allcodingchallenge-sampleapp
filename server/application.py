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
    dictionary['sleepavg'] = float(dictionary['sleepavg'])
    dictionary['exerciseavg'] = float(dictionary['exerciseavg'])
    dictionary['socialavg'] = float(dictionary['socialavg'])
    dictionary['employeeid'] = float(dictionary['employeeid'])
    return dictionary

@app.route('/avgwork')
def avg():
    averages = stats_helper.calculate_avg()
    averages = list(map(convert_float, averages))
    return json.dumps(averages)


print("### Application started...")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
