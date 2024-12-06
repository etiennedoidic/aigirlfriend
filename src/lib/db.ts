// db.ts
import Dexie, { type EntityTable } from 'dexie';

interface Folder {
  id: number;
  title: string;
  purpose: string;
}

const db = new Dexie('gfDatabase') as Dexie & {
  folders: EntityTable<
    Folder,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  folders: '++id, title, purpose' // primary key "id" (for the runtime!)
});

export type { Folder };
export { db };