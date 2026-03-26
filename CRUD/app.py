from flask import Flask, jsonify, request
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_conn():
    return pymysql.connect(
        host="127.0.0.1",
        user="root",
        password="1111",
        database="pfa",
        port=3306
    )
@app.route("/users",methods=["GET"])
def users():
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT * FROM users")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(rows)

@app.route("/users/<string:username>", methods=["GET"])
def user(username):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE username = %s", (username,))
    row = cur.fetchone()
    cur.close()
    conn.close()
    if row:
        return jsonify(row)
    else:
        return jsonify({"error": "User not found"}), 404

@app.route("/users", methods=["POST"])
def add_user():
        conn = get_conn()
        cur = conn.cursor()
        data =request.get_json()
        username=data.get("username")
        password=data.get("password")
        firstname=data.get("firstname")
        lastname=data.get("lastname")
        cur.execute("INSERT INTO users (username, password, firstname, lastname) VALUES (%s, %s, %s, %s)", (username, password, firstname, lastname))
        conn.commit()
        cur.close()
        conn.close()
        return jsonify({"message": "User added successfully"})



@app.route('/users/<string:username>', methods=['DELETE'])
def delete_user(username):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("DELETE FROM users WHERE username = %s", (username,))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "User deleted successfully"})


app.run(debug=True)