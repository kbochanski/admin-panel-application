import { user } from './users/users'
import type { Application } from '../declarations'

// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
export const services = (app: Application) => {
  app.configure(user)
  // All services will be registered here
}
