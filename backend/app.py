from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = {
    "happy": [
    {"name": "Chocolate Box", "image": "https://via.placeholder.com/150", "price": "₹499", "rating": "4.5⭐"},
    {"name": "Flowers Bouquet", "image": "https://via.placeholder.com/150", "price": "₹799", "rating": "4.7⭐"},
    {"name": "Gift Hamper", "image": "https://via.placeholder.com/150", "price": "₹999", "rating": "4.6⭐"}
    ],
    "sad": [
        {"name": "Ice Cream", "image": "https://via.placeholder.com/150"},
        {"name": "Comfort Hoodie", "image": "https://via.placeholder.com/150"},
        {"name": "Motivational Book", "image": "https://via.placeholder.com/150"}
    ],
    "angry": [
        {"name": "Stress Ball", "image": "https://via.placeholder.com/150"},
        {"name": "Punching Bag", "image": "https://via.placeholder.com/150"},
        {"name": "Gaming Console", "image": "https://via.placeholder.com/150"}
    ],
    "relaxed": [
        {"name": "Scented Candles", "image": "https://via.placeholder.com/150"},
        {"name": "Soft Music Playlist", "image": "https://via.placeholder.com/150"},
        {"name": "Tea Set", "image": "https://via.placeholder.com/150"}
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