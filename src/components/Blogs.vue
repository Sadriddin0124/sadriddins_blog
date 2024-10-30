<template>
    <div class="mt-[100px] flex justify-center flex-col items-center gap-3 px-[16px]">
        <h2 class="text-[24px] font-bold">Blogs</h2>
        <!-- <div class="max-w-[1000px] w-full flex flex-col ">
            <router-link :to="`/blog/${item?.id}`" v-for="(item,index) in data" :key="index" class="flex w-full justify-between py-3 border-b cursor-pointer group">
                <h4 class="group-hover:ml-3 transition-all">{{ item?.title }}</h4>
                <span>{{ item?.date }}</span>
            </router-link>
        </div> -->
        <h2 class=" text-red-500">Unfinished</h2>
    </div>
</template>

<script setup>
    const data = [
        {
            id: 1,
            title: "JSda asinxron operatsiyalar",
            date: "30-okt"
        },
        
    ]
</script>

<style lang="scss" scoped>

</style>