class BaseRepository<T extends Record<string, any>> {
  private db: Map<string, T>

  public constructor(initial?: T[]) {
    const data = initial ? (initial.map((item) => [item.id, item]) as [string, any][]) : undefined
    this.db = new Map<string, T>(data)
  }

  public create(key: string, value: T) {
    this.db.set(key, value)
  }

  public find(key: string) {
    return this.db.get(key)
  }

  public update(key: string, newValue: Partial<T>) {
    const existingValue = this.db.get(key)
    if (existingValue) {
      const updatedValue = { ...existingValue, ...newValue }
      this.db.set(key, updatedValue)
    } else {
      throw new Error(`Record with key ${key} does not exist.`)
    }
  }

  public delete(key: string) {
    return this.db.delete(key)
  }

  public findAll() {
    return Array.from(this.db.values())
  }

  public findBy<K extends keyof T>(field: K, value: T[K]): T[] {
    return Array.from(this.db.values()).filter((item) => item[field] === value)
  }

  public has(key: string) {
    return this.db.has(key)
  }

  public clear() {
    this.db.clear()
  }
}

export default BaseRepository
