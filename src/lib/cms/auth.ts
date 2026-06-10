// Credential verification (bcryptjs). Used only inside the login route handler
// (Node runtime), never in the proxy.
import bcrypt from 'bcryptjs'
import { getPasswordHash } from './admin-secret'

export async function verifyCredentials(
  email: string,
  password: string
): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL
  if (!adminEmail) return false
  if (email.trim().toLowerCase() !== adminEmail.trim().toLowerCase()) return false
  const hash = await getPasswordHash()
  if (!hash) return false
  try {
    return await bcrypt.compare(password, hash)
  } catch {
    return false
  }
}
