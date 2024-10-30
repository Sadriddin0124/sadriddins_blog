<template>
  <div class="mt-[120px] flex flex-col items-center">
    <div class="max-w-[1200px] flex flex-col items-center gap-2 px-[16px]">
      <h2 class="text-[24px] font-bold">About me</h2>
      <p class="max-w-[600px] text-center">I am Sadriddin Ravshanov, a 18-year old <span class="font-bold">Software Engineer</span> from Uzbekistan, currently living in Tashkent.</p>
    </div>
    <Resume/>
    <FooterSection/>
  </div>
</template>

<script setup>
import FooterSection from '@/components/FooterSection.vue';
import Resume from '@/components/Resume.vue';


</script>

<style lang="scss" scoped>

</style>