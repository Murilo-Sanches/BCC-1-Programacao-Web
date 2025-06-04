# 🩸 DoaSangue Conecta

Projeto desenvolvido para a disciplina **Programação Web** do curso de **Bacharelado em Ciência da Computação** — **Centro Universitário Senac - Campus Santo Amaro**.

---

## 📌 Sobre o Projeto

**Doa Sangue Conecta** é uma landing page interativa e moderna, com o objetivo de **conscientizar, informar e incentivar a doação de sangue**. A interface foi construída com foco na **experiência do usuário**, incluindo elementos visuais dinâmicos e animações atrativas.

---

## 🧪 Tecnologias Utilizadas

- **HTML5 / CSS3 / Sass**
- **JavaScript**
- **PostCSS + Autoprefixer**
- **Concat / Minify / Source Maps**

---

## 🛠️ Estrutura de Build

O projeto utiliza um processo de build para compilar, concatenar, prefixar e minificar os estilos:

```bash
npm run build:css

`style.comp.css`   <-- `compile:sass` | Compilado do SCSS (`index.scss`) para CSS crú. Sem otimização.
`style.concat.css` <-- `concat:sass`  | Junta o CSS compilado com outros (ex: ícones, resets). Atualmente só tem `style.comp.css`.
`style.prefix.css` <-- `prefix:css`   | Adiciona *vendor prefixes* (`-webkit-`, `-moz-`, etc) para compatibilidade entre navegadores.
`style.min.css`    <-- `compress:css` | Minifica o CSS final para reduzir o tamanho do arquivo e acelerar o carregamento.
```
