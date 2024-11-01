<template>
    <nav class="w-[100%] flex justify-center top-0 bg-white fixed z-50 px-[16px]">
        <div class="max-w-[1200px] w-[100%] flex items-center justify-between py-5">
            <button @click="store.changePath('')">
                <RouterLink to="/" class="text-2xl font-bold">Sadriddin</RouterLink>
            </button>
            <div class="relative flex flex-col items-center">
                <button class="px-4 sm:px-8 relative bg-white z-20 border-2 sm:w-[140px] h-[40px] rounded-full flex items-center gap-2" @click="changeActive">
                    <div class="grid grid-cols-2 gap-[2px] rotate_minus" v-if="active">
                        <span class="w-[8px] h-[8px] border border-black rounded-full"></span>
                        <span class="w-[8px] h-[8px] border border-black rounded-full"></span>
                        <span class="w-[8px] h-[8px] border border-black rounded-full"></span>
                        <span class="w-[8px] h-[8px] border border-black rounded-full"></span>
                    </div>
                    <span class="text-[24px] rotate_plus" v-else>
                        <font-awesome-icon :icon="['fas', 'xmark']" />
                    </span>
                    <span class="text-[18px]">Menu</span>
                </button>
                <ul class="absolute flex flex-col sm:flex-row w-[100%] sm:w-auto gap-4 py-2 px-5 shadow rounded-2xl sm:rounded-full bg-white fall" v-if="!active">
                    <li v-for="(item,index) in links" :key="index" class="hover:text-[17px] ease-linear duration-300" @click="store.changePath(item.path)">
                        <router-link :to="item?.path" :class="item?.path === store.pathname ? 'text-violet-600' : ''">{{ item?.text }}</router-link>
                    </li>
                    <li class="hover:text-[17px] ease-linear duration-300" @click="store.changePath(item.path)">
                        <a href="https://t.me/rfs_dev" :class="item?.path === store.pathname ? 'text-violet-600' : ''">Blog</a>
                    </li>
                </ul>
                <ul class="absolute flex flex-col sm:flex-row w-[100%] sm:w-auto gap-4 py-2 px-5 shadow rounded-2xl sm:rounded-full bg-white fly" v-else>
                    <li v-for="(item,index) in links" :key="index">
                        <router-link :to="item?.path">{{ item?.text }}</router-link>
                    </li>
                </ul>
            </div>
            <a href="https://t.me/farkhodo_v1ch" class="px-3 py-2 bg-black rounded-full text-white sm:block hidden">Get in touch</a>
        </div>
    </nav>
</template>

<script setup>
import { useBlogStore } from '@/stores/counter';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
    const links = [
        {text: "Portfolio", path: "/portfolio"},
        {text: "About", path: "/about"},
    ]
    const active = ref(true)
    const changeActive = () => {
        active.value = !active.value
    }
    const store = useBlogStore()
</script>

<style scoped>
    .rotate_plus {
        animation: rotate_plus .3s linear forwards;
    }
    @keyframes rotate_plus {
        from {
            transform: rotate(0deg);
        }to {
            transform: rotate(90deg);
        }
    }
    .rotate_minus {
        animation: rotate_minus .3s linear forwards;
    }
    @keyframes rotate_minus {
        from {
            transform: rotate(0deg);
        }to {
            transform: rotate(-90deg);
        }
    }
    .fall {
        animation: fall .5s linear forwards;
    }
    @keyframes fall {
        from {
            top: 0;
            opacity: 0;
            display: none;
        }to {
            top: 50px;
            opacity: 1;
        }
    }
    .fly {
        animation: fly .5s linear forwards;
    }
    @keyframes fly {
        from {
            top: 50px;
            opacity: 1;
        }to {
            top: 0;
            opacity: 0;
            display: none;
        }
    }
</style>