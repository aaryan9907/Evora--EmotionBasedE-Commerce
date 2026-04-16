from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = {
    "happy": [
        {"name": "Chocolate Box", "image": "/static/images/chocolate.png", "price": "₹499", "rating": "4.5⭐"},
        {"name": "Flowers Bouquet", "image": "/static/images/flowers.png", "price": "₹799", "rating": "4.7⭐"},
        {"name": "Gift Hamper", "image": "/static/images/gift.png", "price": "₹4150", "rating": "4.6⭐"}
    ],
    "sad": [
        {"name": "Ice Cream", "image": "/static/images/icecream.png", "price": "₹499", "rating": "4.8⭐"},
        {"name": "Comfort Hoodie", "image": "/static/images/hoodie.png", "price": "₹499", "rating": "4.2⭐"},
        {"name": "Motivational Book", "image": "/static/images/book.png", "price": "₹499", "rating": "4.5⭐"}
    ],
    "angry": [
        {"name": "Stress Ball", "image": "/static/images/ball.png", "price": "₹499", "rating": "4.1⭐"},
        {"name": "Punching Bag", "image": "/static/images/punchingBag.png", "price": "₹1899", "rating": "4.0⭐"},
        {"name": "Gaming Console", "image": "/static/images/console.png", "price": "₹49990", "rating": "4.7⭐"}
    ],
    "relaxed": [
        {"name": "Scented Candles", "image": "/static/images/candles.png", "price": "₹399", "rating": "4.2⭐"},
        {"name": "Soft Music Playlist", "image": "/static/images/music.png", "price": "₹499", "rating": "4.5⭐"},
        {"name": "Tea Set", "image": "/static/images/teaSet.png", "price": "₹9599", "rating": "4.5⭐"}
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