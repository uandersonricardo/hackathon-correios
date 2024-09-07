import path from 'path'
import fs from 'fs'

export const readFileFromAssets = (relativeFilePath: string) => {
  const absoluteFilePath = path.join(__dirname, '..', 'assets', relativeFilePath)

  try {
    const fileContent = fs.readFileSync(absoluteFilePath, 'utf8')
    return fileContent
  } catch (error) {
    console.error(`Error reading file at ${absoluteFilePath}:`, error)
    throw error
  }
}
