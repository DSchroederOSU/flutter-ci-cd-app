#!/usr/bin/env node
console.log(process.env.FCI_ARTIFACT_LINKS)
console.log(process.env.FCI_ARTIFACT_LINKS[0])
console.log(process.env.FCI_ARTIFACT_LINKS[0].url)

console.log(JSON.parse(process.env.FCI_ARTIFACT_LINKS))
console.log(JSON.parse(process.env.FCI_ARTIFACT_LINKS)[0])
console.log(JSON.parse(process.env.FCI_ARTIFACT_LINKS)[0].url)