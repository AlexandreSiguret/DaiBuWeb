<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8 text-white">
    <div class="md:pl-24 max-md:text-center">
      <h1 class="text-4xl lg:text-6xl xl:text-7xl font-extrabold lg:tracking-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#DFF6EC]">
          Un budget pour chaque jour
        </span>
      </h1>
      <p class="text-lg mt-4 text-white/80 max-w-xl">
        La seule application qui te permet de gérer ton budget de façon journalière.
      </p>
      <div class="mt-6 flex">
        <CTA size="xl" class="max-md:m-auto"/>
      </div>
    </div>
    <div class="p-12 md:p-24 relative flex items-center">
      <!-- halo doux derrière le smartphone -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute left-1/4 top-1/4 w-72 h-72 rounded-full bg-daiblue/20 blur-3xl animate-glow"></div>
        <div class="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-glow"></div>
      </div>
      <img
        class="absolute left-0 md:block hidden opacity-60"
        src="/img/hero_shape.svg"
        alt="hero shape"
        width="217.5"
        height="238"
      />
      <img
        class="drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] animate-float"
        src="/img/hero_smartphone.png" 
        alt="hero smartphone"
        width="304"
        height="673"
      />
    </div>
  </main>
</template>
