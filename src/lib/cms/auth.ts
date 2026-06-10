// Credential verification (bcryptjs). Used only inside the login route handler
// (Node runtime), never in the proxy.
import bcrypt from 'bcryptjs'

export async function verifyCredentials(
  email: string,
  password: string
): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL
  const hash = process.env.ADMIN_PASSWORD_HASH
  if (!adminEmail || !hash) return false
  if (email.trim().toLowerCase() !== adminEmail.trim().toLowerCase()) return false
  try {
    return await bcrypt.compare(password, hash)
  } catch {
    return false
  }
}
