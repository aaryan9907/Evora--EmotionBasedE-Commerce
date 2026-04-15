from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = {
    "happy": [
        "Chocolate Box 🍫",
        "Flowers Bouquet 🌸",
        "Gift Hamper 🎁"
    ],
    "sad": [
        "Ice Cream 🍦",
        "Comfort Hoodie 🧥",
        "Motivational Book 📘"
    ],
    "angry": [
        "Stress Ball 🔴",
        "Punching Bag 🥊",
        "Gaming Console 🎮"
    ],
    "relaxed": [
        "Scented Candles 🕯️",
        "Soft Music Playlist 🎵",
        "Tea Set 🍵"
    ]
}

@app.route("/")
def home():
    return "Evora Backend is Running 🚀"

@app.route("/products", methods=["GET"])
def get_products():
    emotion = request.args.get("emotion")

    if emotion:
        return jsonify(products.get(emotion, []))

    return jsonify(products)

if __name__ == "__main__":
    app.run(debug=True)