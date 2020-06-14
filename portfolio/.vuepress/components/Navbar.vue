<template>
  <header class="header" id="header">
    
    <div class="top-bar top-bar--desktop">

      <div class="top-bar__inner">
        
        <span class="top-bar__item">
        <!--<span class="top-bar__item  top-bar--highlight">-->
          <span v-for="(schedule, index) in schedulesLong">
            <span class="top-bar__subitem">{{ schedule.item }}</span>
            <span v-if="index + 1 < schedules.length"> — </span>
          </span>
        </span>

        <span>
          <span class="top-bar__item">
            <span v-for="(phone, index) in contact.phones">
              <a class="top-bar__link" v-bind:href="'tel:' + phone.link">{{ phone.visible }}</a>
              <span v-if="index + 1 < contact.phones.length"> | </span>
            </span>
          </span>
          <span class="top-bar__item">
            <a class="top-bar__link" v-bind:href="'mailto:' + contact.email">
              {{ contact.email }}
            </a>
          </span>
        </span>

      </div>

    </div>

    <div class="top-bar top-bar--mobile">

      <div class="top-bar__inner">

        <span class="top-bar__item">
          <span v-for="(schedule, index) in schedules">
            <span class="top-bar__subitem">{{ schedule.item }}</span>
            <span v-if="index + 1 < schedules.length"> — </span>
          </span>
        </span>

        <span class="top-bar__item">
          <a href="/#contacto" scrollbehavior="smooth">contactar</a>
        </span>

      </div>
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
        <ul class="nav-list">
          <li class="nav__item" v-for="nav in navLinks">
            <router-link
              class="nav__item-link"
              :key="nav.text"
              :to="nav.link"
              v-on:click.native="removeHash()"
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
          <ul class="nav-list" @click="toggleMobileNav">
            <li class="mobile-nav__item" v-for="nav in navLinks">
              <router-link
                class="mobile-nav__link"
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
        // let _ = this;
        // _.$site.themeConfig.nav.forEach(function (item, index) {
        //   _.$site.themeConfig.nav[index].isHash = item.link.includes('#') ? true : false;
        // });
        return this.$site.themeConfig.nav
      },
      schedules() {
        return this.$site.themeConfig.schedule.schedule_short
      },
      schedulesLong() {
        return this.$site.themeConfig.schedule.schedule_long
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
      },
      removeHash() {
        // Remove the # from the hash, as different browsers may or may not include it
        var hash = location.hash.replace('#','');
        console.log(location);
        if(hash != ''){
            setTimeout(function(){
              // dummy hash so scroll position is not changed when setting it
              location.hash = '#/';
              console.log(location);
            }, 2000);
        }
      }
    }
  }
</script>

<style scoped>

  .header {
    position: relative;
    z-index: 10;
    background-color: var(--color-grey-lighter);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }

  .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    max-width: var(--max-wrapper-width);
    margin: auto;
  }
   
  .top-bar {
    width: 100%;
    height: 25px;
    background: var(--color-blue);
    color: white;
    text-transform: uppercase;
    font-size: 13px; 
    font-weight: 500;
  }

  .top-bar__inner {
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-wrapper-width);
    margin: auto;
  }

  .top-bar--desktop {
    display: none;
  }

  .top-bar--highlight {
    color: #e6e031;
  }

  .top-bar__item {
    padding: 0 10px;
  }

  .top-bar__link {
    color: white;
  }

  .site-name {
    font-size: 32px;
    font-family: var(--headings-font-family);
    font-weight: bold;
    color: var(--color-blue);
    line-height: 0.95;
    padding: 0 10px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 50px;
  }

  .mobile-nav__item {
    list-style: none;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  .mobile-nav__link {
    font-family: var(--headings-font-family);
    font-weight: bold;
    color: var(--color-blue);
    font-size: 32px;
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

  .nav-list {
    margin: 0;
  }

  @media screen and (min-width: 768px) {

    .header__inner {
      align-items: flex-end;
      padding: 23px 29px 14px;
    }

    .top-bar__inner {
      padding: 0px 20px;
    }

    .top-bar--mobile {
      display: none;
    }

    .top-bar--desktop {
      display: flex;
    }

    .site-name {
      font-size: 42px;
    }

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
