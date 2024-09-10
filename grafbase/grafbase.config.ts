import { g,auth, config } from '@grafbase/sdk'

// Defining the User model
const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.string().url(),
  description: g.string().optional(),
  githubUrl: g.string().url().optional(),
  linkedinUrl: g.string().url().optional(),
  projects: g.relation(() => Project).list().optional(),
})

// Defining the Project model
const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.string().url(),
  liveSiteUrl: g.string().url(),
  githubUrl: g.string().url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})

export default config({
  schema: g
})
