from flask_wtf import FlaskForm
from wtforms import StringField, FileField
from wtforms.validators import DataRequired


class UploadForm(FlaskForm):
    file = FileField("file", validators=[DataRequired()])
    videoType = StringField("videoType", validators=[DataRequired()])
    topic = StringField("topic", validators=[DataRequired()])
    music = StringField("music", validators=[DataRequired()])
    caption = StringField("caption", validators=[DataRequired()])
