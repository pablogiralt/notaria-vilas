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
        <span class="top-bar__phone" v-html="contact.phones"></span>
        <span class="top-bar__email" v-html="contact.email"></span>
    </div>

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

    <nav v-if="navLinks" class="navigation right desktop-nav">
      <ul>
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
        let phoneLinks = [];
        this.$site.themeConfig.phones.forEach(function(phone) {
          phoneLinks.push('<a href="tel:' + phone.link + '">' + phone.visible + '</a>');
        });
        return {
          "phones": phoneLinks.join(' – '),
          "email": '<a href="mailto:'+ this.$site.themeConfig.email +'">' + this.$site.themeConfig.email + '</a>',
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
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 10;
    background-color: white;
  }

  .top-bar {
    width: 100%;
    background: var(--color-blue);
    color: white;
  }

  .logo {
  }

  .site-name {
    font-size: 40px;
    font-family: var(--headings-font-family);
    color: var(--color-blue);
  }

  .navigation li {
    display: inline-block;
    list-style: none;
    margin-right: 1rem;
    user-select: none;
    cursor: pointer;
    border-bottom: 1px solid transparent;
  }

  .navigation li:last-of-type {
    margin: 0;
  }

  .navigation li:hover {
    border-bottom: 1px solid #000;
  }

  .active {
    border-bottom: 1px solid #000;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:active { color: inherit; }
  a:visited { color: inherit; }

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
