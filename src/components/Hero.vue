<template>
    <section id="home" class="w-[100%] py-6 mt-[90px] flex justify-center px-[16px] items-center">
        <div class="max-w-[1000px] bg-zinc-100 w-[100%] px-8 py-10 rounded-3xl flex justify-between items-center flex-col">
            <div class="max-w-[150px] sm:max-w-[200px] max-h-[150px] sm:max-h-[200px] rounded-full bg-green-300">
                <img src="../assets/hero.jpg" alt="Hero" class="block w-[100%] mix-blend-multiply">
            </div>
            <div class="flex flex-col gap-3 items-center">
                <h1 class="text-[20px] sm:text-[24px] font-bold mt-2">Sadriddin Ravshanov</h1>
                <div class="flex gap-3 text-black">
                    <a href="https://t.me/farkhodo_v1ch" class="ease-linear duration-200 hover:mt-[-5px]">
                        <font-awesome-icon :icon="['fab', 'telegram']" size="2x"/>
                    </a>
                    <a href="https://instagram.com/rfs.dev" class="ease-linear duration-200 hover:mt-[-5px]">
                        <font-awesome-icon :icon="['fab', 'instagram']" size="2x"/>
                    </a>
                    <a href="https://github.com/Sadriddin0124" class="ease-linear duration-200 hover:mt-[-5px]">
                        <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
                    </a>
                    <a href="https://linkedin.com/in/sadriddin-ravshanov24" class="ease-linear duration-200 hover:mt-[-5px]">
                        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
                    </a>
                </div>
                <div class="flex items-center flex-col sm:flex-row gap-2">
                    <a href="/about" class="py-2 px-5 ease-linear duration-200 text-white hover:shadow-gray-500 hover:shadow-md rounded-full bg-black">About me</a>
                    <a href="https://t.me/rfs_dev" class="py-2 px-5 ease-linear duration-200 bg-white rounded-full hover:shadow-md">Read blog</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>
<style lang="scss" scoped>

</style>