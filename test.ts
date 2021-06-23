const load = async () => {
  const app = (await import('./src/main/config/app')).app
  console.log(app)
}

load()
