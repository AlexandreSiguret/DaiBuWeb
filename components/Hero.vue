<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="md:pl-24 max-md:text-center">
      <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Un budget pour Chaque jour.
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        La seule application qui te permet de gérer ton budget de façon journalière.
      </p>
      <div class="mt-6 flex">
        <CTA size="xl" class="max-md:m-auto"/>
      </div>
    </div>
    <div class="p-12 md:p-24 relative flex items-center">
      <img
        class="absolute left-0 md:block hidden"
        src="/img/hero_shape.svg"
        alt="hero shape"
        width="217.5"
        height="238"
      />
      <img
        class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
        src="/img/hero_smartphone.png"
        alt="hero smartphone"
        width="304"
        height="673"
      />
    </div>
  </main>
</template>
