from flask import Flask, jsonify, request
import pymysql
app = Flask(__name__)
def get_conn():
    return pymysql.connect(
        host="127.0.0.1",
        user="root",
        password="1111",
        database="clientdb",
        port=3306
    )
@app.route("/clients",methods=["GET"])
def clients():
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT * FROM clients")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(rows)

@app.route("/clients/<int:client_id>")
def client(client_id):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT * FROM clients WHERE id = %s", (client_id,))
    row = cur.fetchone()
    cur.close()
    conn.close()
    if row:
        return jsonify(row)
    else:
        return jsonify({"error": "Client not found"}), 404

@app.route("/clients", methods=["POST"])
def add_client():
        conn = get_conn()
        cur = conn.cursor()
        data =request.get_json()
        nom=data.get("nom")
        email=data.get("email")
        telephone=data.get("telephone")
        cur.execute("INSERT INTO clients (nom, email, telephone) VALUES (%s, %s, %s)", (nom, email, telephone))
        conn.commit()
        cur.close()
        conn.close()
        return jsonify({"message": "Client added successfully"})
    
    
    
@app.route('/clients/<int:client_id>', methods=['DELETE'])
def delete_client(client_id):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("DELETE FROM clients WHERE id = %s", (client_id,))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"message": "Client deleted successfully"})


app.run(debug=True)