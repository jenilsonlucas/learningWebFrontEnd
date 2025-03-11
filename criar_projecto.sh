#!/bin/bash

# Verifica se um argumento foi passado
if [ -z "$1" ]; then
    echo "Uso: $0 <nome-da-pasta>"
    exit 1
fi

# Define o nome da pasta
PROJECT_NAME="$1"

# Cria a pasta principal
mkdir -p "$PROJECT_NAME"

# Cria a pasta 'assets' dentro da pasta principal
mkdir -p "$PROJECT_NAME/assets"

# Cria o arquivo index.html dentro da pasta principal
touch "$PROJECT_NAME/index.html"

# Cria as subpastas dentro de 'assets'
mkdir -p "$PROJECT_NAME/assets/js"
mkdir -p "$PROJECT_NAME/assets/styles"
mkdir -p "$PROJECT_NAME/assets/images"

# Cria o arquivo script.js dentro da pasta 'js'
touch "$PROJECT_NAME/assets/js/script.js"

# Cria o arquivo style.css dentro da pasta 'styles'
touch "$PROJECT_NAME/assets/styles/style.css"

# Exibe uma mensagem de sucesso
echo "Estrutura do projeto '$PROJECT_NAME' criada com sucesso!"
