<template>
  <div class="wrapper">

    <Navbar :logo="$site.themeConfig.logo" :sticky="true" />
    
    <div>
      <div v-if="isSingleProject">
        <SingleProjectHeader
          :title="$page.frontmatter.title"
          :year="$page.frontmatter.year.toString()"
          :categories="$page.frontmatter.categories"
        />
      </div>
      <Content/>
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
    --color-grey-light: #9B9B9B;
    --headings-font-family: 'EB Garamond', serif;
    --color-highlight: rgba(249, 233, 172, 0.99);
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

  body {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    background: #fff;
    color: var(--color-black);
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
  }

  img {
    width: 100%;
    max-width: 100%;
    line-height: 0;
    margin: 2rem 0;
  }

  .wrapper {
    max-width: 2000px;
    margin: auto;
  }

  .container {
    max-width: 1300px;
    padding: 0 16px;
    margin: auto;
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
    font-size: 3rem;
    line-height: 1.15;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0 auto 1rem auto;
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

  @media screen and (min-width: 768px) {
    .container {
      padding: 0 28px;
    }
  }
  
</style>
