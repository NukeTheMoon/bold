import { initializeApp } from 'firebase'
import conf from '../config/firebase'

const app = initializeApp(conf)

export const db = app.database()
export const productsRef = db.ref('products')
export const attributesRef = db.ref('attributes')
export const attributesIdValueRef = db.ref('attributesIdValue')
