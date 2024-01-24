<script lang="ts" setup>
import { data as products }from "../../products.data.ts";
</script>

<template>
    <div class="home-products-container container">
        <h3 class="product-title inner">
            <a href="/products">Products</a>
        </h3>

        <section class="home-products inner">
            <a v-for="product of products.reverse()" :href="product.url">
                <p v-if="product.frontmatter.emoji" class="emoji">
                    {{  product.frontmatter.emoji }}
                </p>
                <p class="article-title">{{  product.frontmatter.title }}</p>
                <p v-if="product.frontmatter.date" class="date">
                    {{ product.frontomatter.date }}
                </p>
            </a>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.container {
  padding-left: 24px;
  padding-right: 24px;

  .inner {
    margin: 0 auto;
    max-width: 1152px;
  }
}
.home-products-container {
  h3.products-title {
    font-size: 1.4rem;
    font-weight: bolder;
    margin-bottom: 0.5rem;
  }

  .home-products {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    a {
      display: flex;
      flex-direction: column;
      background-color: var(--vp-c-bg-soft);
      border: 1px solid var(--vp-c-border);
      padding: 24px;
      height: 100%;
      border-radius: 4px;

      &:hover {
        background-color: var(--vp-c-bg-soft-up);
      }

      .article-title {
        flex: 1;
      }

      .emoji {
        font-size: 64px;
        line-height: 64px;
        text-align: center;
        height: 100px;
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

@media (min-width: 640px) {
  .container {
    padding-left: 48px;
    padding-right: 48px;
  }
  .home-products-container {
    h3.product-title {
      grid-template-columns: 1fr 1fr;
    }

    .home-products {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (min-width: 960px) {
  .container {
    padding-left: 64px;
    padding-right: 64px;
  }
  .home-products-container {
    h3.products-title {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .home-products {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>