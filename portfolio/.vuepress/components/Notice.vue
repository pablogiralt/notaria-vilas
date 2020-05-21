<template>
    <div v-if="notice" class="notice wrapper__inner">
      <div class="wrapper__inner notice__inner">
        <div class="notice-info">
          <p class="notice__title">
            {{ notice.notice_title }}
          </p>
          <p 
            class="notice__text" 
            v-html="notice.notice_text">
          </p>
        </div>
        <a 
          class="notice_btn btn"
          :title="'Información sobre el Coronavirus (Covid-19)'"
          v-if="notice.notice_btn_text" 
          v-bind:href="notice.notice_btn_link">
            {{ notice.notice_btn_text }}
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    computed: {
      notice() {
          if (this.$page.frontmatter.hide_notice) {
            return false;
          }
          return this.$site.themeConfig.notice
      }
    }
  }
</script>

<style scoped>
  .notice {
    padding: 15px 16px 23px;
    background-color: #EDF3FD;
    color: var(--color-blue);
  }

  .notice__title {
    font-weight: bolder;
  }

  @media screen and (min-width: 768px) {
    .notice {
      padding: 15px 30px 23px;  
    }
  }

  @media screen and (min-width: 992px) {
    .notice__inner {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }

    .notice_btn {
      min-width: 200px;
      position: relative;
      top: -7px;
    }

    .notice-info {
      padding-right: 40px;
      max-width: 1000px;
    }

    .notice__text {
      margin-bottom: 0;
    }
  }
</style>