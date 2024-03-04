from flask import Flask,render_template,redirect,request,jsonify
from flask_wtf import FlaskForm
from wtforms import StringField,SubmitField,validators
from wtforms.validators import DataRequired

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Medical'

class MyForm(FlaskForm):
    name = StringField('Name', validators=[validators.DataRequired()])
    email = StringField('Email', validators=[validators.DataRequired()])
    message = StringField('Message', validators=[validators.DataRequired()])
    submit = SubmitField('Submit')

@app.route('/', methods=['GET', 'POST'])
def index():
    form = MyForm()
    if form.validate_on_submit():
        name = form.name.data
        email = form.email.data
        message = form.message.data
        # Process data here (e.g., save to database, send email)

        return jsonify({'success': True, 'name': name})
    return render_template('index.html', form=form)

if __name__ == '__main__':
  app.run()