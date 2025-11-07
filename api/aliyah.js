import { getAliyah } from "@orthodox-union/shnayimmikrah";

export default async function handler(req, res) {
  try {
    const { parsha, aliyah } = req.query;
    if (!parsha || !aliyah)
      return res.status(400).json({ error: "Missing parsha or aliyah" });

    const data = await getAliyah(parsha, Number(aliyah));
    res.setHeader("Cache-Control", "s-maxage=86400");
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch aliyah" });
  }
}
