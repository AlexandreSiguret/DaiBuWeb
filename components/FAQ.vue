<script setup lang="ts">
const questions = [
  {
    question: 'Comment ajouter une nouvelle dépense ?',
    answer: "Depuis l’écran principal, cliquez sur le bouton "+" et saisissez les détails de votre dépense.",
    greenBox: true 
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer: "Toutes vos données sont chiffrées et stockées de manière sécurisée.",
    greenBox: false 
  },
  {
    question: 'Cette application est gratuite ?',
    answer: "Oui, l’application est téléchargeable gratuitement avec des fonctionnalités premium optionnelles.",
    greenBox: false 
  },
  {
    question: 'Puis-je personnaliser les catégories ?',
    answer: "Oui, accédez aux paramètres pour ajouter, modifier ou supprimer des catégories.",
    greenBox: true 
  },
  {
    question: 'Y a-t-il un support client en cas de problème ?',
    answer: `Oui, notre équipe est joignable via l’option "Support" dans les paramètres.`,
    greenBox: true 
  },
  {
    question: 'L’application est-elle disponible hors ligne ?',
    answer: "Oui, la plupart des fonctionnalités sont accessibles sans connexion Internet.",
    greenBox: false
  },
];

function getColorClasses(index: number) {
  const column = index % 2;
  return column % 2 === 0 ? "bg-[#3A473F] text-white" : "bg-white text-black border-2 border-black";
}
</script>

<template>
  <section id="faq" class="max-w-screen-xl mx-auto px-5 grid gap-20 py-20">
    <SectionTitle>
      <template #name>
        Faq
      </template>
      Foire aux questions
    </SectionTitle>
    <div class="grid grid-flow-col grid-rows-6 lg:grid-rows-3 gap-4">
      <div
        v-for="(item, index) of questions"
        class="p-4 lg:p-8 rounded-lg grid gap-2 text-center lg:text-left"
        :class="getColorClasses(index)"
      >
        <h3 class="font-semibold text-2xl lg:text-3xl">{{ item.question }}</h3>
        <p class="text-md lg:text-lg opacity-50 leading-relaxed">
          {{ item.answer }}
        </p>
      </div>
    </div>
  </section>
</template>
