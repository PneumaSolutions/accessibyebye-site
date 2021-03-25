import React, { useEffect, useState } from "react"

type BlockedDomain = {
  hostname: string
  provider: string|null
  blockCount: number
}

export default function TopBlockedDomains() {
  const [domains, setDomains] = useState<BlockedDomain[] | null>(null)

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.accessibyebye.org/domains")
      if (!response.ok) {
        throw new Error(`unexpected response status ${response.status}`)
      }
      setDomains((await response.json()) as BlockedDomain[])
    })()
  }, [])

  return (
    <>
      {(domains === null) ? (
        <p className="centered">Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Domain</th>
              <th>Number of times blocked</th>
            </tr>
          </thead>
          <tbody>
            {domains.map(domain => {
              return (
                <tr>
                  <th>
                    <a target="_blank" href={`http://${domain.hostname}`}>
                      {domain.hostname}
                    </a>
                    {domain.provider && ` (${domain.provider})`}
                  </th>
                  <td>{domain.blockCount}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </>
  )
}
