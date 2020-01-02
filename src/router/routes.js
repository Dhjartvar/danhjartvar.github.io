const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Projects', component: () => import('pages/Index.vue') },
      { path: 'Skills', component: () => import('pages/Skills.vue') },
      { path: 'Experience', component: () => import('pages/Experience.vue') },
      { path: 'Education', component: () => import('pages/Education.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
