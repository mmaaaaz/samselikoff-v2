import { db } from '@/lib/firebase'
import { collection, getDocs, query } from 'firebase/firestore'
import type { NextPage } from 'next'
import Head from 'next/head'

const WorkJournal: NextPage = () => {
  return (
    <>
      <Head>
        <title>Work Journal</title>
        <meta property="og:title" content="Work Journal" />
      </Head>
    </>
  )
}

export default WorkJournal

export async function getStaticProps() {
  // let snapshot = await db.ref('/work-journal-entries').once('value')
  // let entriesObject = snapshot.val()

  const q = query(collection(db, 'work-journal-entries'))

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data())
  })

  return {
    props: {
      // entries: Object.keys(entriesObject).map((id) => ({
      //   id,
      //   ...entriesObject[id],
      // })),

      entries: [],
    },
    revalidate: 1,
  }
}
