import React, { useEffect, useState } from "react"

type BlockedProvider = {
  provider: string
  blockCount: number
}

const providerUrls: Record<string, string> = {
  "AccessiBe": "https://accessibe.com/",
  "AudioEye": "https://www.audioeye.com/",
  "EqualWeb": "https://www.equalweb.com/",
  "MaxAccess": "https://maxaccess.io/",
  "TruAbilities": "https://truabilities.com/",
  "User1st": "https://www.user1st.com/",
  "UserWay": "https://userway.org/",
}

export default function TopBlockedProviders() {
  const [providers, setProviders] = useState<BlockedProvider[] | null>(null)

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.accessibyebye.org/providers")
      if (!response.ok) {
        throw new Error(`unexpected response status ${response.status}`)
      }
      setProviders((await response.json()) as BlockedProvider[])
    })()
  }, [])

  return (
    <>
      {(providers === null) ? (
        <p className="centered">Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Overlay</th>
              <th>Number of times blocked</th>
            </tr>
          </thead>
          <tbody>
            {providers.map(provider => {
              return (
                <tr>
                  <th>
                    <a target="_blank" href={providerUrls[provider.provider]}>
                      {provider.provider}
                    </a>
                  </th>
                  <td>{provider.blockCount}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </>
  )
}
