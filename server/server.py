from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api')
def api():
    response = {'message': 'Hello, World!'}
    return jsonify(response)

@app.route('/fet')
def gg():
    response = {'message': 'Hello, chcf!'}
    return jsonify(response)

if __name__ == '__main__':
  app.run()