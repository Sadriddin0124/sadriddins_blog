<template>
    <section id="portfolio" class="w-[100%] flex justify-center px-[16px]">
        <div class="max-w-[900px] w-full pb-[100px] flex flex-col items-center gap-2 mt-[100px]">
            <div class="grid grid-cols-2 gap-4 w-[100%]">
                <div v-for="(item,index) in data" :key="index" :class="item?.span">
                    <img src="../assets/portfolio.jpg" alt="Portfolio" class="w-[100%] h-[100%] brightness-90 object-cover rounded-lg">
                    <h4 class=" absolute text-white bottom-4 left-4 text-[18px] font-[500]">{{ item?.title }}</h4>
                    <a :href="item?.link" target="_blank" class="absolute w-[100%] h-[100%]"></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useBlogStore } from "@/stores/counter";
import { ref } from "vue"
    const data = [
        {
            id: 1,
            span: "w-[100%] max-h-[350px] relative rounded-md overflow-hidden shadow-lg flex flex-col gap-3 col-span-2 sm:col-span-2",
            title: "AutoZoom Rental",
            desc: "This project is created by IT Team. I participated in this project as a Team Leader. This project is created using ReactJS. And this project works in two languages: English, Russian. I used i18n to switch languages. I created structure and did Car filters section.",
            link: "https://autozoomrental.com/"
        },
        {
            id: 2,
            span: "w-[100%] max-h-[350px] relative rounded-md overflow-hidden shadow-lg flex flex-col gap-3 col-span-2 sm:col-span-1",
            title: "Phoenix Puzzle",
            desc: "This is puzzle game. I created this game using NextJS. And Tailwind CSS is used for styling. Despite this, This game is built in tsx structure. That means this project is created using Typescript.",
            link: "https://game-sable-five.vercel.app/"
        },
        {
            id: 3,
            span: "w-[100%] max-h-[350px] relative rounded-md overflow-hidden shadow-lg flex flex-col gap-3 col-span-2 sm:col-span-1",
            title: "Unsplash.com clone",
            desc: "This website is clone of Unsplash.com, but It is not same as real one. Because, I have no permission for auth. This project is built using React + Vite. In this website you can search image and download it.",
            link: "https://un-splash.vercel.app/"
        },
        {
            id: 4,
            span: "w-[100%] max-h-[350px] relative rounded-md overflow-hidden shadow-lg flex flex-col gap-3 col-span-2 sm:col-span-2",
            title: "Online Shop",
            desc: "This is online shop that created using React + Vite. There is only 100 products in this shop, because I used prepared free API for this shop.",
            link: "https://shop-beta-navy.vercel.app/"
        },
        {
            id: 5,
            span: "w-[100%] max-h-[350px] relative rounded-md overflow-hidden shadow-lg flex flex-col gap-3 col-span-2 sm:col-span-1",
            title: "Ataev Bahodir Build",
            desc: "This project is created for Builder Companies. I used aos.js library to animate components. It gives beautiful transitions for components.",
            link: "https://building1.vercel.app/"
        },
        {
            id: 6,
            span: "w-[100%] max-h-[350px] relative rounded-md overflow-hidden shadow-lg flex flex-col gap-3 col-span-2 sm:col-span-1",
            title: "Kukdala Furniture",
            desc: "This project is created for furniture seller company. It has many sofa armchair and other furniture. I finished difficult algorithm for filter products and you can send your appeal to my telegram bot.",
            link: "https://kukdalafurniture.vercel.app/"
        },
        {
            id: 7,
            span: "w-[100%] max-h-[350px] relative rounded-md overflow-hidden shadow-lg flex flex-col gap-3 col-span-2 sm:col-span-2",
            title: "Phoenix Tour",
            desc: "This is travel Project and you can get information about some cities. You can buy tickets for flight. To purchase ticket you should fill the form and send your message to my telegram bot.",
            link: "https://tour-rho.vercel.app/uz"
        },
        {
            id: 8,
            span: "w-[100%] max-h-[350px] relative rounded-md overflow-hidden shadow-lg flex flex-col gap-3 col-span-2 sm:col-span-1",
            title: "My Portfolio",
            desc: "This is my Portfolio Project. In this project I used VueJS first time.",
            link: "https://myportfolio-flax-alpha.vercel.app/"
        },
        {
            id: 9,
            span: "w-[100%] max-h-[350px] relative rounded-md overflow-hidden shadow-lg flex flex-col gap-3 col-span-2 sm:col-span-1",
            title: "Urban Builders",
            desc: "This project is created for Builder Companies. I used AOS.js library to add beautiful transition to components. This website works in 3 languages using i18n. And you can send your messages to my telegram bot.",
            link: "https://urbanbuildings-git-main-sadriddins-projects-fbc4325a.vercel.app/"
        },
        {
            id: 10,
            span: "w-[100%] max-h-[350px] relative rounded-md overflow-hidden shadow-lg flex flex-col gap-3 col-span-2 sm:col-span-2",
            title: "SRPics",
            desc: "This project is created for Picture Lovers. It has Auth section. And you can search any kind of images that you wanted. Just search and relax!",
            link: "https://sr-pics.vercel.app/"
        }
    ]
    const store = useBlogStore()
</script>

<style lang="scss" scoped>

</style>