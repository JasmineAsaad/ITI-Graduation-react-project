import projectsData from '../data/projects.js'

const DELAY = 500
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getProjects(category = 'All') {
  await delay(DELAY)
  if (category === 'All') return [...projectsData]
  return projectsData.filter((p) => p.category === category)
}

export async function getProjectById(id) {
  await delay(DELAY)
  const project = projectsData.find((p) => p.id === Number(id))
  if (!project) throw new Error('Project not found')
  return project
}

export async function getCategories() {
  await delay(150)
  return ['All', ...new Set(projectsData.map((p) => p.category))]
}

export async function sendContactMessage(payload) {
  await delay(700)
  if (!payload.name || !payload.email || !payload.message) {
    throw new Error('Please fill in all fields.')
  }
  console.log('[fakeApi] contact message:', payload)
  return { success: true, message: 'Your message has been sent successfully!' }
}
