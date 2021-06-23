# lffloyd.github.io

## Ambiente

* [hugo](https://gohugo.io/getting-started/installing/) - para build do site.

## Testando localmente

Execute ```./start_server.sh``` na pasta ```src``` para testar localmente suas mudanças no website. Acesse a página http://localhost:1313/ em seu navegador de preferência para testar a página ao vivo, conforme altera os arquivos markdown do projeto.

## Construindo website estático

Realizadas as alterações, construa o HTML estático do site usando ```./build.sh``` na pasta ```src```. Note que os arquivos estáticos serão gerados na pasta ```docs``` do projeto. Dessa forma, o site está pronto para publicação: basta fazer o push das modificações.
