Por questões práticas, não foi realizado o Deploy do banco de dados em um servidor externo. Portanto,
a aplicação utiliza um banco de dados MySQL da máquina local.

Para que o programa funcione corretamente:

    No arquivo "challenge-full-stack-web\APIalunos\database\database.js" altere as configurações
    'basededados', 'root', 'victor1999' para as da máquina local.

    No diretório "challenge-full-stack-web\challenge":
        Execute:
            npm run serve
    
    No diretório "challenge-full-stack-web\APIalunos":
        Execute:
            node index.js


Bibliotecas utilizadas:
    API:
        Express
        Body Parser
        Sequelize
        MySQL2
        CORS

    Vue Application:
        Vue
        Vou Router
        Vuetify
        Axios

Melhorias se tivesse mais tempo:
    Conexão com API para consulta de CPF, com fins de fazer uma melhor validação
    Melhorias gráficas no front-end
    Melhorias na arquitetura da API
    Correção de bugs

Requisitos obrigatórios não concluidos:
