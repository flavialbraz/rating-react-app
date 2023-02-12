<h1 align="center">
 Avalição - REACT 
</h1>

> Online:

# 📁 O projeto

A ideia da aplicação é ser uma página de avalição simples.

- Criado com npm create vite@latest
- CSS puro

## Passos a passo da lógica

- Array criado utilizando o usestate. Cada estrela tem um número e um bolenao (verdadeiro ou falso), dizendo que ela foi selecionada ou não
- Quando o usuário clica em uma estrela, a função handleSelected é chamada.
- Dentro da função handleSelected, pegamos a lista de estrelas atual e a armazenamos na variável prevStarItem.
- Depois é utilizado o método map para percorrer cada estrela da lista e verificar se o número da estrela é igual ao número da estrela clicada. Se o número da estrela clicada for igual ao número de uma das estrelas da lista, a selecionada é alterada de false (estado inicial) para true.
- Após isso, setStarItem é usado para atualizar o array de acordo com a ação do usuário e componente é renderizado novamente mostrando as estrelas com a informação de selecionado correta.

# 🛠️ Abrir e rodar o projeto

Clone o respositório com:

```
git clone https://github.com/flavialbraz/rating-react-app.git
```

Para a aplicação funcionar utilize o comando abaixo para instalar as dependencias

```
npm install
```

Após isso rode a aplicação com o comando:

```
npm run dev
```

# 👩‍💻 Dev

<table align="center">
  <tr>
    <td align="center">
      <a>
        <img src="https://avatars.githubusercontent.com/u/78583429?v=4" width="120px;" alt="Foto de Flavia no GitHub"/><br>
          <b>Flavia Braz </b><br>
            <a href="https://www.linkedin.com/in/flavialbraz/" alt="Linkedin">
             <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/ height="20"></a>
 
  <a href="https://www.instagram.com/alessadev/" alt="Instagram">
  <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"  height="20"/></a>
 
 <a href="https://www.behance.net/flavialbraz" alt="flavialbraz">
  <img src="https://img.shields.io/badge/-Behance-blue?style=for-the-badge&logo=behance&logoColor=white"  height="20" /></a>
      </a>
    </td>
  </tr>
</table>
