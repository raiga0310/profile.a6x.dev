# Products

<script setup>
    import { data as products } from '../.vitepress/products.data.ts';
</script>

<ul>
    <li v-for="product of products">
        <a :href="product.url">{{ product.frontmatter.emoji }}{{ product.frontmatter.title }}</a>
    </li>
</ul>
