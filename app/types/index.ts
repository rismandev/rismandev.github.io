export interface Experience {
  company: string
  logo: string
  logoAlt: string
  logoWidth: number
  logoHeight: number
  role: string
  period: string
  description: string
}

export interface Portfolio {
  title: string
  description: string
  image: string
  imageAlt: string
  tech: string[]
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface ContactLink {
  icon: string
  label: string
  href: string
  external?: boolean
}
