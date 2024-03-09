from flask import Flask,render_template,redirect,request,jsonify
from flask_wtf import FlaskForm
from wtforms import StringField,SubmitField,validators
from wtforms.validators import DataRequired
import psycopg2
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Medical'

class MyForm(FlaskForm):
    name = StringField('Name', validators=[validators.DataRequired()])
    email = StringField('Email', validators=[validators.DataRequired()])
    message = StringField('Message', validators=[validators.DataRequired()])
    submit = SubmitField('Submit')

class User( db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))
    phoneNumber = db.Column(db.String(10))
    score = db.Column(db.Integer)

@app.route('/')
def home():

    return {"status":1}


@app.route('/register', methods=["POST"])
def register():

    if request.method == "POST":
        if User.query.filter_by(email = request.args.get('email')).first():

            return {"status":0,"message":"account already exists"}
        new_user = User(
            email=request.args.get('email'),
            name=request.args.get('name'),
            password=request.args.get('password'),
            phoneNumber =request.args.get('phoneNumber'),
            score = 0,)
        new_user.password = generate_password_hash(new_user.password, method='pbkdf2:sha256', salt_length=8)
        db.session.add(new_user)
        db.session.commit()

    return {"status":1}


@app.route('/login', methods=['POST'])
def login():

    if request.method == 'POST':
        email = request.args.get('email')
        password = request.args.get('password')

        user = User.query.filter_by(email=email).first()

        if not user:

            return {"status":0,"message":"User not found,Please register"}

        elif not check_password_hash(user.password,password):

            return {"status":0,"message":"Password is not matching"}

        else:
            # login_user(user)
            # id = str(id)
            uid = str(user.id)
            additionals_claims = {
                "name": user.name,
                "phoneNumber" :user.phoneNumber,
                "email":user.email
                   
            }
            custom_token = auth.create_custom_token(uid,additionals_claims).decode()
            # custom_token = get_id_token(uid,additionals_claims)
            # custom_token = custom_token.replace('"', "'")
            response =  {"status":1,"score":user.score,"id":user.id,"name":user.name,"email":user.email,"phone_Number":user.phoneNumber,"authToken":custom_token}
            return jsonify(response)



@app.route('/sample', methods=['GET', 'POST'])
def new():
    form = MyForm()
    if form.validate_on_submit():
        name = form.name.data
        email = form.email.data
        message = form.message.data
        # Process data here (e.g., save to database, send email)

        return jsonify({'success': True, 'name': name})
    return render_template('index.html', form=form)

if __name__ == '__main__':
  app.run(host='0.0.0.0',debug=True)