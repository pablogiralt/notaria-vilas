<template>
  <div class="footer">
    <p class="footer__frase" v-html="$site.themeConfig.footer_frase"></p>

    <nav v-if="navLinks" class="nav footer_nav">
      <ul>
        <li class="footer_nav__item" v-for="nav in navLinks">
          <router-link
            class="footer_nav__item-link"
            :key="nav.text"
            :to="nav.link"
            v-on:click.native="removeHash()"
            exact-active-class="footer_nav__item-link-exact-active"
            active-class="footer_nav__item-link-active"
            v-text="nav.text"
            exact
          />
        </li>
      </ul>
    </nav>

    <span class="footer__copy">
      {{ $site.themeConfig.copy }}
    </span>
  </div>
</template>

<script>
  export default {
    computed: {
      navLinks() {
        return this.$site.themeConfig.footer_nav
      }
    }
  }
</script>

<style scoped>

  .footer {
    background-color: white;
    text-align: center;
    padding: 44px 18px 30px;
  }

  .footer__frase {
    color: var(--color-blue);
    font-family: var(--headings-font-family);
    font-weight: bold;
    font-size: 25px;
    line-height: 27px;
    max-width: 340px;
  }

  .footer_nav__item-link {
    padding: 15px 10px;
    display: inline-block;
    text-decoration: none;
    color: var(--color-black);
  }

  .footer_nav__item-link:hover {
    text-decoration: underline;
  }

  .footer_nav {
    margin-bottom: 21px;
  }

  .footer_nav ul {
    list-style: none;
  }
</style>
