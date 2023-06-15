import '../../../firebase.config'
import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore'
import 'firebase/firestore'

export default async function handler(req, res) {
    let db = getFirestore()

    let colRef = collection(db, 'jake')

    let snapshot = await getDocs(colRef)

    let fsdata = []

    snapshot.forEach(d => {
        fsdata.push(d.data())
    })
    
    res.status(200).json(fsdata)
}