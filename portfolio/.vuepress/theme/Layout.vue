<template>
  <div class="wrapper">

    <Navbar :logo="$site.themeConfig.logo" />

    <div :class="'template-' + $page.frontmatter.template">

      <div class="template__inner">

        <Notice />

        <div v-if="isSingleProject">
          <SingleProjectHeader
            :title="$page.frontmatter.title"
            :year="$page.frontmatter.year.toString()"
            :categories="$page.frontmatter.categories"
          />
        </div>

        <Content/>

      </div>

    </div>

    <Footer />

  </div>
</template>

<script>
  export default {
    computed: {
      isSingleProject() {
        const worksRoute = '/works/'
        const path = this.$route.path
        if (path.includes('works') && path.length >= (worksRoute.length + 1)) {
          return true
        }
      }
    },
    updated() {
        // unwrap all images from paragraph tags so we can have
        // different widths inside the content.

        document.querySelectorAll('p img').forEach(image => {
          var wrapper = image.parentNode
          let children = wrapper.children
          let fragment = document.createDocumentFragment()

          Array.from(children).forEach(child => {
            fragment.appendChild(child)
          })

          wrapper.parentNode.replaceChild(fragment, wrapper)

        })
    },
  }
</script>

<style>
  
  :root {
    --color-black: #4A4A4A;
    --color-blue: #1B0A47;
    --color-red: #e84646;
    --color-grey-light: #9B9B9B;
    --color-grey-lighter: #F5F5F5;
    --headings-font-family: 'EB Garamond', serif;
    --color-highlight: rgba(249, 233, 172, 0.99);
    --max-wrapper-width: 1366px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-moz-selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  *::-webkit-selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  *::selection {
    background: var(--color-highlight);
    color: var(--color-black);
  }

  html {
    scroll-behavior: initial !important;
  }

  body {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    background: #fff;
    color: var(--color-black);
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    background-color: var(--color-grey-lighter);
  }

  img {
    width: 100%;
    max-width: 100%;
    line-height: 0;
  }

  .wrapper {
    padding-top: 73px;   
  }

  .wrapper__inner { 
    margin: auto;
    max-width: var(--max-wrapper-width);
  }

  .container {
    max-width: 1300px;
    padding: 0 16px;
    margin: auto;
  }

  .content__default {
    min-height: calc(100vh - 73px - 282px);
  }

  .journal-list, .single-journal {
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 100%;
    color: var(--color-blue);
    font-weight: 400;
    margin: 0 auto 1rem auto;
  }

  h1 {
    margin-top: 20px;
    font-size: 30px;
    font-family: var(--headings-font-family);
    line-height: 1.15;
  }

  h1:before {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    background-color: var(--color-blue);
    margin-bottom: 20px;
  }

  h2 {
    font-size: 16px;
    font-weight: bolder;
  }

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0 auto 1rem auto;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 40px;
  }

  button,
  .btn {
    background-color: var(--color-blue);
    color: white;
    border: none;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    font-weight: bolder;
    padding: 0 17px;
    display: inline-block;
    text-decoration: none;
    text-align: center;
  }
  
  [type="checkbox"] + label {
    font-size: 13px;
    padding-left: 10px;
  }

  .subtitle {
    font-size: 16px;
    letter-spacing: 0.18px;
    line-height: 19px;
  }

  .subtitle-strong {
    font-size: 16px;
    letter-spacing: 0.18px;
    line-height: 19px;
    font-weight: 900;
  }

  .hidden {
    display: none;
  }

  .hidden-mobile,
  .image-desktop {
    display: none;
  }

  .template-text {
    padding: 0 16px;
    margin: auto;
  }

  @media screen and (min-width: 768px) {

    .container {
      padding: 0 28px;
    }

    .template-text {
      padding-left: 42px;
      max-width: var(--max-wrapper-width);
    }
    
    .template-text .template__inner {
      max-width: 800px;
    }

    .hidden-mobile {
      display: initial;
    }

    .hidden-desktop {
      display: none;
    }

    .wrapper {
      padding-top: 101px;
    }

  }

  @media screen and (min-width: 992px) {
    .image-desktop {
      display: initial;
    }

    .image-mobile {
      display: none;
    }   
  }


  .has-float-label {
    display: block;
    position: relative;
    margin-bottom: 10px;
  }
  .has-float-label label, .has-float-label > span {
    position: absolute;
    left: 18px;
    top: 3px;
    cursor: text;
    font-size: 75%;
    opacity: 1;
    -webkit-transition: all .2s;
            transition: all .2s;
  }
  .has-float-label select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .has-float-label textarea {
    width: 100%;
  }
  .has-float-label input, 
  .has-float-label select, 
  .has-float-label textarea {
    width: 100%;
    height: 40px;
    max-width: 554px;
    font-size: inherit;
    padding: 14px 18px 0 18px;
    margin-bottom: 2px;
    border: none;
    font-size: 14px;
  }

  .has-float-label textarea {
    height: 156px;
    padding-top: 20px;
  }

  .has-float-label input::-webkit-input-placeholder, 
  .has-float-label select::-webkit-input-placeholder, 
  .has-float-label textarea::-webkit-input-placeholder {
    opacity: 1;
    -webkit-transition: all .2s;
            transition: all .2s;
  }
  .has-float-label input::-moz-placeholder, 
  .has-float-label select::-moz-placeholder, 
  .has-float-label textarea::-moz-placeholder {
    opacity: 1;
    transition: all .2s;
  }
  .has-float-label input:-ms-input-placeholder, 
  .has-float-label select:-ms-input-placeholder, 
  .has-float-label textarea:-ms-input-placeholder {
    opacity: 1;
    transition: all .2s;
  }
  .has-float-label input::placeholder, 
  .has-float-label select::placeholder, 
  .has-float-label textarea::placeholder {
    opacity: 1;
    -webkit-transition: all .2s;
            transition: all .2s;
  }
  .has-float-label input:placeholder-shown:not(:focus)::-webkit-input-placeholder, 
  .has-float-label select:placeholder-shown:not(:focus)::-webkit-input-placeholder, 
  .has-float-label textarea:placeholder-shown:not(:focus)::-webkit-input-placeholder {
    opacity: 0;
  }
  .has-float-label input:placeholder-shown:not(:focus)::-moz-placeholder, 
  .has-float-label select:placeholder-shown:not(:focus)::-moz-placeholder, 
  .has-float-label textarea:placeholder-shown:not(:focus)::-moz-placeholder {
    opacity: 0;
  }
  .has-float-label input:placeholder-shown:not(:focus):-ms-input-placeholder, 
  .has-float-label select:placeholder-shown:not(:focus):-ms-input-placeholder, 
  .has-float-label textarea:placeholder-shown:not(:focus):-ms-input-placeholder {
    opacity: 0;
  }
  .has-float-label input:placeholder-shown:not(:focus)::placeholder, 
  .has-float-label select:placeholder-shown:not(:focus)::placeholder, 
  .has-float-label textarea:placeholder-shown:not(:focus)::placeholder {
    opacity: 0;
  }
  .has-float-label input:placeholder-shown:not(:focus) + *, 
  .has-float-label select:placeholder-shown:not(:focus) + *, 
  .has-float-label textarea:placeholder-shown:not(:focus) + * {
    font-size: 14px;
    top: 10px;
  }
  .has-float-label input:focus, 
  .has-float-label select:focus, 
  .has-float-label textarea:focus {
    outline: none;
    border-color: rgba(0, 0, 0, 0.5);
  }
  .has-float-label select {
    padding-right: 1em;
    background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.5em bottom 0.25em;
    background-size: 8px 10px;
  }
  
</style>
