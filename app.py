import flask

app = flask.Flask(__name__)


@app.route("/")
def app_route():
    return "<h1>This is route </h1>"


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=3000)
