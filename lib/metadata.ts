export interface Metadata {
  version: string
  profile: {
    name: string
    avatar?: string
    contact?: {
      github?: string
      linkedin?: string
      email?: string
      twitter?: string
      website?: string
      other?: Array<{
        platform: string
        url: string
        label?: string
      }>
    }
  }
  fileList: {
    url: string
    format: string
    lastUpdated: string
  }
}

export function getMetadata(baseUrl: string = 'http://localhost:3000'): Metadata {
  return {
    version: "1.0.0",
    profile: {
      name: "Sebastian",
      avatar: "https://avatars.githubusercontent.com/SebastianGR-FC",
      contact: {
        github: "SebastianGR-FC",
        linkedin: "https://www.linkedin.com/in/sebastian-garcia-2831a8368",
        email: "sebastiang.abc@gmail.com",
        other: [
          {
            platform: "Dev.to",
            url: "https://dev.to/sebastian",
            label: "Dev Blog"
          }
        ]
      }
    },
    fileList: {
      url: `${baseUrl}/api/files.json`,
      format: "json",
      lastUpdated: new Date().toISOString()
    }
  }
}

