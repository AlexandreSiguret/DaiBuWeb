<script setup lang="ts">
import { ref } from 'vue'
import CTAIOS from '~/components/CTAIOS.vue'
import CTAANDROID from '~/components/CTAANDROID.vue'

interface Props {
  size?: 'md' | 'xl';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});

// Variable réactive pour contrôler l'affichage de la modal
const showModal = ref(false);

// Fonction pour ouvrir la modal
function openModal() {
  showModal.value = true;
}

// Fonction pour fermer la modal
function closeModal() {
  showModal.value = false;
}
</script>

<template>
  <div>
    <!-- Bouton qui ouvre la modal -->
    <button
      :class="[
        'rounded font-bold text-center text-white bg-[#95E3B7] rounded-lg px-4 py-2 hover:bg-[#8ad4aa]',
        { 'lg:text-3xl lg:px-10 lg:py-4': props.size === 'xl' }
      ]"
      @click="openModal"
    >
      Télécharger l’App
    </button>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <!-- Logo centré -->
        <img src="/img/logo.svg" alt="Logo" class="logo" />
        <!-- Conteneur des CTA centrés -->
        <div class="cta-container">
          <div class="cta-item">
            <CTAIOS />
          </div>
          <div class="cta-item">
            <CTAANDROID />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Style pour l'overlay de la modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Style pour le contenu de la modal */
.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  max-width: 90%;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Style pour le logo */
.logo {
  max-width: 150px;
  margin-bottom: 1.5rem;
}

/* Mise en forme pour que chaque CTA soit sur une ligne différente et centrée */
.cta-container {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espace entre les CTA */
  width: 100%;
  align-items: center;
}

.cta-item {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
