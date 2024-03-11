from flask import Flask,render_template,redirect,request,jsonify
from flask_wtf import FlaskForm
from wtforms import StringField,SubmitField,validators
from wtforms.validators import DataRequired
import psycopg2
from werkzeug.security import generate_password_hash, check_password_hash

import os
import psycopg2

conn = psycopg2.connect(
        host='localhost',
    port=5432,
    database="medical_mitra",
    user="postgres",
    password="cks004"
)


app = Flask(_name_)
app.config['SECRET_KEY'] = 'Medical'

class MyForm(FlaskForm):
    name = StringField('Name', validators=[validators.DataRequired()])
    email = StringField('Email', validators=[validators.DataRequired()])
    message = StringField('Message', validators=[validators.DataRequired()])
    submit = SubmitField('Submit')



@app.route('/')
def home():

    return {"status":1}


@app.route('/register', methods=["POST"])
def register():

    if request.method == "POST":
       
        cursor = conn.cursor()
        email = request.args.get('email')
        name=request.args.get('name')
        password=request.args.get('password')
        password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=8)
        phonenumber =request.args.get('phoneNumber')
        query = f"SELECT * FROM users WHERE email='{email}';"
        cursor.execute(query)

        if cursor.rowcount > 0:
            return {"status": 0, "message": "account already exists"}
        else :
            email=request.args.get('email')
            
            

            cur = conn.cursor()

            sql = '''INSERT INTO Users
                    (name,email,passwords,phone_number)
                    VALUES (%s,%s,%s,%s);'''
            cur.execute(sql,(name,email,password,phonenumber))
            conn.commit()
            cur.close()
            return {"status":1}


@app.route('/login', methods=['POST'])
def login():

    if request.method == 'POST':
        email = request.args.get('email')
        password = request.args.get('password')
        cursor = conn.cursor()
        query = f"SELECT * FROM users WHERE email='{email}';"
        cursor.execute(query)

        user = cursor.fetchone()

        querypass = f"SELECT * FROM users WHERE passwords='{password}';"
        cursor.execute(querypass)

        userpass = cursor.fetchone()
        if not user:

            return {"status":0,"message":"User not found,Please register"}
        
        elif password!=userpass:

            return {"status":0,"message":"Password is not matching",}

        # elif not check_password_hash(userpass,password):

        #     return {"status":0,"message":"Password is not matching"}

        else:
            # # login_user(user)
            # # id = str(id)
            # uid = str(user.id)
            # additionals_claims = {
            #     "name": user.name,
            #     "phoneNumber" :user.phoneNumber,
            #     "email":user.email
                   
            # }
            
            response =  {"status":1,"email":email}
            return jsonify(response)



if _name_ == '_main_':
  app.run(host='0.0.0.0',debug=True)