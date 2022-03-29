import AV from 'leancloud-storage'
import { Record } from '../types'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Record[]>
) {
  try {
    if (!process.env.LEANCLOUD_APP_ID || !process.env.LEANCLOUD_APP_KEY || !process.env.LEANCLOUD_APP_MASTER_KEY) {
      res.status(500).json({ error: 'Missing Leancloud config' } as any)
      return
    }

    AV.init({
      appId: process.env.LEANCLOUD_APP_ID,
      appKey: process.env.LEANCLOUD_APP_KEY,
      serverURL: process.env.LEANCLOUD_SERVER_URL,
    })

    const query = new AV.Query('Record')
    const data = await query.find()
    const records: Record[] = data.map(x => {
      const json = x.toJSON()
      return {
        date: json.createdAt,
        title: json.title,
        score: json.score,
        comment: json.comment,
        year: json.year,
        img: json.img,
      }
    })
    res.status(200).json(records)
  } catch (e: any) {
    res.status(500).json(e)
  }
}
