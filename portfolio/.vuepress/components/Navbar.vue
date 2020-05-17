<template>
  <header
    class="header"
    :style="sticky && {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
    }"
  >
    
    <div class="top-bar">
        <span class="top-bar__item">
          <span v-for="(phone, index) in contact.phones">
            <a class="top-bar__link" v-bind:href="'tel:' + phone.link">{{ phone.visible }}</a>
            <span v-if="index + 1 < contact.phones.length"> | </span>
          </span>
        </span>
        <span class="top-bar__item" v-html="contact.email">
          <a class="top-bar__link" v-bind:href="'mailto:' + contact.email">
            {{ contact.email }}
          </a>
        </span>
    </div>

    <div class="header__inner">

      <div class="brand">
        <router-link to="/">
          <img 
            class="logo" 
            v-if="logo" 
            v-bind:src="logo" 
            v-bind:alt="$site.title">
          <span v-else class="site-name">{{ $site.title }}</span>
        </router-link>
      </div>

      <nav v-if="navLinks" class="nav desktop-nav">
        <ul>
          <li class="nav__item" v-for="nav in navLinks">
            <router-link
              class="nav__item-link"
              :key="nav.text"
              :to="nav.link"
              exact-active-class="nav__item-link-exact-active"
              active-class="nav__item-link-active"
              v-text="nav.text"
              exact
            />
          </li>
        </ul>
      </nav>

      <div class="mobile-nav-toggle" @click="toggleMobileNav" />
      <div class="mobile-nav" :class="{'mobile-nav--active': mobileNavActive}">
        <nav>
          <ul @click="toggleMobileNav">
            <li v-for="nav in navLinks">
              <router-link
                :key="nav.text"
                :to="nav.link"
                active-class="active"
                v-text="nav.text"
                exact
              />
            </li>
          </ul>
          <div class="mobile-nav-close" @click="toggleMobileNav" />
        </nav>
      </div>

    </div>

  </header>
</template>

<script>
  export default {
    props: {
      logo: {
        type: String,
        required: false,
      },
      sticky: {
        type: Boolean,
        required: false,
      }
    },
    data() {
      return {
        mobileNavActive: false
      }
    },
    computed: {
      navLinks() {
        return this.$site.themeConfig.nav
      },
      contact() {
        return {
          "phones": this.$site.themeConfig.phones,
          "email": this.$site.themeConfig.email,
          "socialMedia": this.$site.themeConfig.socialMedia
        }
      },
    },
    methods: {
      toggleMobileNav() {
        this.mobileNavActive = !this.mobileNavActive
      }
    }
  }
</script>

<style scoped>

  .header {
    position: relative;
    z-index: 10;
    background-color: white;
  }

  .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 23px 29px 14px;
  }

  .top-bar {
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: center;
    background: var(--color-blue);
    color: white;
    font-weight: 300;
    align-items: center;
    text-transform: uppercase;
    font-size: 13px;
  }

  .top-bar__item {
    padding: 0 16px;
  }

  .top-bar__link {
    color: white;
  }

  .site-name {
    font-size: 42px;
    font-family: var(--headings-font-family);
    color: var(--color-blue);
    line-height: 0.95;
  }

  .nav__item {
    display: inline-block;
    list-style: none;
    padding: 0 10px;
    text-transform: uppercase;
    user-select: none;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    font-size: 15px;
    color: var(--color-blue);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .nav__item-link:hover,
  .nav__item-link-active {
    color: var(--color-grey-light);
  }

  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: block;
    position: absolute;
    background: #ffffff;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    transform: translateY(-100%);
    transition: transform 0.35s ease-in-out;
    text-align: center;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2;
  }

  .mobile-nav li {
    list-style: none;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  .mobile-nav li:hover {
    opacity: 0.6;
  }

  .mobile-nav--active {
    transform: translateY(0);
  }

  .mobile-nav-close {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    padding: 3rem;
    background-image: url('/close.svg');
    background-position: center;
    background-size: 1.5rem;
    background-repeat: no-repeat;
    transition: opacity 0.15s;
    cursor: pointer;
  }

  .mobile-nav-toggle {
    display: block;
    width: 3rem;
    height: 3rem;
    background-image: url('/burger.svg');
    background-position: center;
    background-size: 1.5rem;
    background-repeat: no-repeat;
    transition: opacity 0.15s;
    cursor: pointer;
  }

  .mobile-nav-toggle:hover,
  .mobile-nav-close:hover {
    opacity: 0.6;
  }

  @media screen and (min-width: 600px) {
    .desktop-nav {
      display: block;
    }
    .mobile-nav-toggle {
      display: none;
    }
    .mobile-nav {
      display: none;
    }
  }

</style>
