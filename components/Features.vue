<script setup>
const features = [
  {
    name: 'analyse',
    title: "Analysez vos dépenses",
    description:
      "Visualisez vos habitudes de consommation grâce à des graphiques clairs et des catégories personnalisées. Identifiez les postes de dépenses importants pour mieux ajuster votre budget et atteindre vos objectifs financiers.",
    icon: "bx:bxs-analyse",
  },
  {
    name: 'budget',
    title: "Une expérience sur mesure",
    description:
      "Personnalisez votre application selon vos habitudes et vos priorités. Ajustez les catégories, les notifications et les paramètres pour une gestion de budget parfaitement adaptée à votre style de vie.",
    icon: "fa-solid:star-of-life",
  },
];
</script>

<template>
  <section id="features" class="bg-[#3A473F] text-white py-20">
    <div class="max-w-screen-xl mx-auto px-5 grid gap-20">
      <SectionTitle dark>
        <template #name>
          Fonctionnalités
        </template>
        Pourquoi choisir Daibu?
      </SectionTitle>
      <div v-for="(item, index) of features" class="flex flex-col lg:flex-row w-full justify-between xl:justify-around items-center gap-6 lg:gap-12">
        <div :class="['relative flex justify-around items-center', {'lg:order-1': index % 2 === 0 }]">
          <img
            :class="['absolute md:block hidden top-[20%]', index % 2 ? 'left-[50%]' : 'right-[50%]']"
            :src="`/_nuxt/assets/img/feature_${item.name}_shape.svg`"
            alt="feature shape"
            width="246"
            height="246"
          />
          <img
            class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
            :src="`/_nuxt/assets/img/feature_${item.name}_smartphone.png`"
            alt="feature smartphone"
            width="232"
            height="503"
          />
        </div>
        <div class="h-fit grid gap-6 max-w-xl ">
          <div class="flex justify-center lg:justify-start items-center gap-4">
            <div class="bg-[#95E3B7] rounded-full p-3 shrink-0">
              <Icon class="text-white text-2xl" :name="item.icon" />
            </div>
            <h3 class="font-medium text-3xl">{{ item.title }}</h3>
          </div>
          <p class="text-white text-md lg:text-lg text-center lg:text-left opacity-50 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
