<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const router = useRouter()

async function logout() {
  await auth.logout()
  router.push('/login')
}
</script>

<template>
  <header style="background: #fff; padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 1px 4px rgba(0,0,0,0.06)">
    <strong style="color: var(--primary)">🧬 BioSample Tracker</strong>
    <button @click="logout">Se déconnecter</button>
  </header>

  <main style="padding: 24px; max-width: 960px; margin: 0 auto">
    <h1>Dashboard</h1>
    <div class="card">Vous êtes connecté. Les échantillons arrivent bientôt.</div>
  </main>
</template>