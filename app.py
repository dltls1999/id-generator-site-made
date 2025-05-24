from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

# 예시 단어 리스트
adjectives = ['happy', 'brave', 'shiny', 'quick', 'cool']
nouns = ['panda', 'rocket', 'ninja', 'cloud', 'robot']

def generate_id():
    adj = random.choice(adjectives)
    noun = random.choice(nouns)
    number = random.randint(10, 99)
    return f"{adj}-{noun}-{number}"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate')
def generate():
    user_id = generate_id()
    return jsonify({'id': user_id})

if __name__ == '__main__':
    app.run(debug=True)
