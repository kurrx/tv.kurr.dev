import { HTTP } from '@/core'
import { RequestArgs } from '@/types'

import { API_URL, PROXY_IP } from './env'

const api = new HTTP({
  baseURL: API_URL,
  responseType: 'json',
  responseEncoding: 'utf-8',
}).construct()

export async function fetchIsVPNActive({ signal }: RequestArgs) {
  const { data } = await api.get<string>('/ip', { signal })
  return data.includes(PROXY_IP)
}