<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('admin@biosample.test')
const password = ref('')
const error = ref('')
const router = useRouter()
const auth = useAuthStore()

async function submit() {
  error.value = ''
  try {
    await auth.login(email.value, password.value)
    router.push('/')
  } catch (e) {
    error.value = e.response?.data?.errors?.email?.[0] ?? 'Erreur de connexion'
  }
}
</script>

<template>
  <div style="min-height: 100vh; display: grid; place-items: center; padding: 16px">
    <div class="card" style="width: 100%; max-width: 380px">
      <h1 style="margin: 0 0 4px; font-size: 24px">🧬 BioSample Tracker</h1>
      <p style="margin: 0 0 24px; color: var(--muted)">Connectez-vous à votre espace</p>

      <form @submit.prevent="submit">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" />

        <label for="password">Mot de passe</label>
        <input id="password" v-model="password" type="password" />

        <button type="submit" class="btn-full">Se connecter</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>